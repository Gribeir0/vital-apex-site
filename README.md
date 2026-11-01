# Vital Apex — portfólio de site institucional

Landing page responsiva para uma clínica de saúde integrativa e performance. Projeto de portfólio com identidade visual própria, quatro especialidades, detalhes em diálogos, perguntas frequentes e simulação de agendamento.

[Ver demonstração](https://gribeir0.github.io/vital-apex-site/)

![Página inicial da Vital Apex](preview-inicio.jpg)

Desenvolvido com HTML, CSS e JavaScript nativos. Contatos são ilustrativos; o formulário não envia dados nem reserva consultas.

Site estático em português, sem instalação ou compilação. Abra `index.html` diretamente ou use um servidor HTTP nesta pasta:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Acesse http://127.0.0.1:4173. Para executar a verificação funcional, abra http://127.0.0.1:4173/check.html.

## Conteúdo e identidade

- Paleta, logotipos, composição e textos orientados pelo manual de identidade visual fornecido para o projeto.
- Amoera: subconjunto incorporado ao PDF fornecido, reaproveitado nos títulos compatíveis. Para novos títulos com outros caracteres, substituir por arquivo completo licenciado; fallback: Georgia.
- Poppins: Google Fonts, arquivos locais. Licença SIL Open Font License: https://fonts.google.com/specimen/Poppins/license.
- Fotografias ilustrativas do Pexels: [avaliação de performance com análise de VO₂](https://www.pexels.com/photo/athletes-wearing-an-athletic-performance-analyzer-masks-and-training-20523368/), [teste de esforço na esteira](https://www.pexels.com/photo/a-cardiologist-examining-a-patient-undergoing-cardiac-stress-test-8460228/), [cannabis medicinal](https://www.pexels.com/photo/serum-bottle-and-a-leaf-of-marijuana-on-a-white-surface-8326880/), [nutrição clínica](https://www.pexels.com/photo/a-doctor-sitting-and-writing-19675470/) e [composição corporal com adipômetro](https://www.pexels.com/photo/doctor-using-a-body-fat-caliper-on-a-patient-12599543/). Não representam equipe, instalações, pacientes ou equipamentos confirmados da clínica.
- Todos os recursos visuais são locais; sem dependências de CDN em execução.

## Antes de colocar no ar

Substituir dados ilustrativos da seção de contato em `index.html`. Trocar fluxo demonstrativo em `script.js` pelo link oficial de atendimento/agendamento. Confirmar conteúdo clínico, identificação dos responsáveis profissionais, política de privacidade e autorização de uso das fontes com a clínica. A versão atual não coleta dados nem agenda consultas.
