# Ju Lackner — Numerologia e Terapias Integrativas

Site institucional da Ju Lackner, terapeuta integrativa e especialista em numerologia. O site apresenta seus serviços de mapas de ciclos, mentorias e terapias voltados para autoconhecimento e expansão de consciência.

🔗 Desenvolvido por **Aline Lombardi Fernandes**.

## Funcionalidades

- **Início** — hero de apresentação com chamada para contato via WhatsApp e Instagram.
- **Sobre a Ju** — apresentação profissional e pessoal da terapeuta.
- **Mentoria do Mês** — página de oferta da mentoria mensal.
- **Mapa do Ano** — página de oferta do serviço de mapa de ciclos anuais.
- **Mapa da Prosperidade** — página de oferta do mapa de prosperidade financeira.
- **Depoimentos** — galeria com depoimentos de clientes.
- Botões de contato direto via WhatsApp (com mensagens pré-preenchidas por seção) e Instagram.
- Layout responsivo, com paleta e tipografia personalizadas (Playfair Display + Montserrat).

## Stack

- **React 19** + **React Router 7** (rotas client-side)
- **Vite 8** (build e dev server)
- **react-icons** (ícones de WhatsApp, Instagram e outros)
- **ESLint 9** (flat config, com plugins de React Hooks e React Refresh)

## Pré-requisitos

- Node.js 18+ e npm

## Instalação

```bash
npm install
```

## Scripts disponíveis

| Comando           | Descrição                                      |
|--------------------|-------------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento (Vite)     |
| `npm run build`    | Gera a build de produção em `dist/`             |
| `npm run preview`  | Serve localmente a build de produção            |
| `npm run lint`     | Roda o ESLint em todo o projeto                 |

## Estrutura do projeto

```
site-numerologia/
├── public/                 # Arquivos estáticos (favicon, ícones)
├── src/
│   ├── assets/              # Imagens (banners, fotos, depoimentos)
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Sobre.jsx
│   │   ├── MapaDoAno.jsx
│   │   ├── MentoriaDoMes.jsx
│   │   ├── MapaDaProsperidade.jsx
│   │   └── Depoimentos.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx              # Layout raiz + definição das rotas
│   ├── App.css
│   ├── index.css
│   └── main.jsx              # Ponto de entrada
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Deploy

Após rodar `npm run build`, o conteúdo estático gerado em `dist/` pode ser publicado em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

## Licença

Projeto privado — todos os direitos reservados a Ju Lackner.

Desenvolvido por Aline Lombardi. 
