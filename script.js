const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const bookingDialog = document.querySelector('#booking-dialog');
const specialtyDialog = document.querySelector('#specialty-dialog');
const bookingForm = document.querySelector('#booking-form');
const bookingResult = document.querySelector('#booking-result');
const specialtySelect = document.querySelector('#specialty');
const specialtyContent = {
  esporte: { title: 'Medicina do esporte', description: 'Um olhar médico sobre a relação entre saúde, atividade física e qualidade de vida. Para quem está começando, retomando ou buscando evoluir no esporte.', points: ['Avaliação da saúde e do histórico de atividade física.', 'Orientação para prática de exercícios com segurança.', 'Acompanhamento dos objetivos de saúde e performance.'] },
  canabinoide: { title: 'Medicina canabinoide', description: 'Avaliação médica das possibilidades de uso terapêutico de canabinoides, considerando evidências, segurança e as necessidades de cada pessoa.', points: ['Análise do histórico clínico e dos tratamentos em uso.', 'Discussão sobre benefícios, riscos e possíveis interações.', 'Acompanhamento médico quando houver indicação.'] },
  nutricao: { title: 'Nutrição individualizada', description: 'O cuidado nutricional considera muito mais do que o prato: sua rotina, preferências, história e relação com a alimentação também importam.', points: ['Avaliação dos hábitos e das necessidades nutricionais.', 'Estratégias alimentares compatíveis com sua rotina.', 'Acompanhamento e ajustes ao longo da sua evolução.'] },
  mapeamento: { title: 'Mapeamento corporal', description: 'Conhecer a composição corporal ajuda a ampliar o olhar sobre a saúde. A avaliação oferece informações para apoiar o planejamento e o acompanhamento do cuidado.', points: ['Avaliação de indicadores da composição corporal.', 'Interpretação dos resultados por um profissional.', 'Acompanhamento de mudanças ao longo do tempo.'] },
};

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

function openDialog(dialog) {
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('dialog-open');
  });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});

function openBooking(specialty = '') {
  closeMenu();
  bookingForm.reset();
  specialtySelect.value = specialty;
  bookingForm.hidden = false;
  bookingResult.hidden = true;
  bookingResult.replaceChildren();
  openDialog(bookingDialog);
}

document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => openBooking()));
document.querySelectorAll('[data-specialty]').forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.specialty;
  const content = specialtyContent[key];
  document.querySelector('#detail-title').textContent = content.title;
  document.querySelector('#detail-description').textContent = content.description;
  document.querySelector('#detail-points').replaceChildren(...content.points.map(point => {
    const item = document.createElement('li');
    item.textContent = point;
    return item;
  }));
  specialtyDialog.dataset.specialty = key;
  openDialog(specialtyDialog);
}));
document.querySelector('#detail-book').addEventListener('click', () => {
  specialtyDialog.close();
  openBooking(specialtyDialog.dataset.specialty);
});

bookingForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  const title = document.createElement('strong');
  title.textContent = 'Prévia da solicitação';
  const choice = document.createElement('p');
  choice.textContent = `${specialtySelect.selectedOptions[0].textContent} · ${document.querySelector('#period').value}`;
  const notice = document.createElement('p');
  notice.textContent = 'Simulação concluída. Nenhuma solicitação foi enviada e nenhum horário foi reservado. Na versão final, você continuará pelo canal oficial de atendimento.';
  const restart = document.createElement('button');
  restart.type = 'button';
  restart.className = 'button';
  restart.textContent = 'Simular outra escolha';
  restart.addEventListener('click', () => {
    bookingForm.hidden = false;
    bookingResult.hidden = true;
    specialtySelect.focus();
  });
  bookingResult.replaceChildren(title, choice, notice, restart);
  bookingForm.hidden = true;
  bookingResult.hidden = false;
  bookingResult.focus();
});

document.querySelector('#privacy-button').addEventListener('click', () => openDialog(document.querySelector('#privacy-dialog')));
document.querySelector('#year').textContent = new Date().getFullYear();
