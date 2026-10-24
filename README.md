# Bruno Barbosa Andrade — Portfólio

Site pessoal e currículo online: suporte de TI, infraestrutura e desenvolvimento full-stack.

**🔗 [portifolio-mu-ecru.vercel.app](https://portifolio-mu-ecru.vercel.app/)**

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/deploy-Vercel-000000?logo=vercel&logoColor=white)

---

## Sobre

Estudante de Ciência da Computação na PUCRS e estagiário de suporte de TI na Secretaria de Justiça, Cidadania e Direitos Humanos do RS (SJCDH). Este site reúne minha experiência, formação, habilidades e projetos, e serve de base para o meu currículo.

## Destaques

- **Bilíngue (português / inglês):** na primeira visita, um aviso pergunta o idioma; depois dá para trocar a qualquer momento pelo botão no topo. A escolha fica salva no navegador.
- **Animações:** entrada das seções ao rolar, linha do tempo que se desenha, texto digitado no topo, brilho que segue o mouse nos cartões e barra de progresso de leitura.
- **Mini-jogos jogáveis:** um terminal de suporte interativo, Flappy Tech e Astro Dodge, feitos do zero com Canvas, com recorde salvo e controle por toque no celular.
- **Responsivo e acessível:** funciona do celular ao desktop e respeita a preferência do sistema por menos movimento.
- **Formulário de contato** enviando e-mail via EmailJS, sem precisar de servidor.

## Tecnologias

| Área | Ferramentas |
| --- | --- |
| Interface | React 18, TypeScript, CSS puro com variáveis |
| Animações | Framer Motion |
| Ícones | React Icons |
| Contato | EmailJS |
| Build | Vite |
| Qualidade | ESLint, TypeScript estrito |
| Hospedagem | Vercel |

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou mais recente.

```bash
git clone https://github.com/brunobaa/Portifolio.git
cd Portifolio
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Checa os tipos e gera a versão final em `dist/` |
| `npm run preview` | Abre localmente a versão gerada pelo build |
| `npm run lint` | Verifica o código com ESLint |

## Editando o conteúdo

Todo o texto do site fica separado do código, em `src/data/`:

| Arquivo | Conteúdo |
| --- | --- |
| `pt.ts` | Todos os textos em português |
| `en.ts` | Todos os textos em inglês |
| `profile.ts` | Dados que não mudam com o idioma: nome, e-mail, links e foto |
| `types.ts` | Estrutura que os dois idiomas precisam seguir |

Para atualizar o currículo, edite `pt.ts` e `en.ts`. Se algo for adicionado em um idioma e esquecido no outro, o `npm run build` aponta o erro.

## Estrutura

```
src/
├── components/      # Seções do site (Hero, Experience, Skills, Projects...) e mini-jogos
├── data/            # Conteúdo do site em português e inglês
├── i18n/            # Troca e memória do idioma
├── App.tsx          # Monta a página
└── index.css        # Cores, fontes e estilos globais
public/
├── assets/          # Foto
└── favicon.svg
```

## Contato

- **E-mail:** [brunoandradeprof7@gmail.com](mailto:brunoandradeprof7@gmail.com)
- **LinkedIn:** [bruno-andrade](https://www.linkedin.com/in/bruno-andrade-4a1581313/)
- **GitHub:** [@brunobaa](https://github.com/brunobaa)
