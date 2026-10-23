import type { Content } from "./types";

export const pt: Content = {
  meta: {
    title: "Bruno Andrade | Suporte de TI e Desenvolvimento",
    description:
      "Bruno Barbosa Andrade — Suporte de TI, Infraestrutura e Desenvolvimento Full-Stack. Estudante de Ciência da Computação na PUCRS.",
  },

  nav: {
    experience: "Experiência",
    education: "Formação",
    skills: "Habilidades",
    projects: "Projetos",
    games: "Jogos",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchLabel: "English",
    switchShort: "EN",
    switchAria: "Switch site to English",
  },

  hero: {
    status: "Disponível para estágio",
    greeting: "Olá, eu sou",
    // Frases que se alternam no topo, com efeito de digitação
    roles: ["Suporte de TI", "Infraestrutura e Redes", "Desenvolvimento Full-Stack"],
    summary:
      "Estudante de Ciência da Computação na PUCRS e estagiário de suporte de TI na Secretaria de Justiça, Cidadania e Direitos Humanos do RS (SJCDH). Resolvo problemas de ponta a ponta, do hardware à rede e do atendimento ao usuário ao código, sempre com proatividade e foco em deixar tudo funcionando.",
    location: "Porto Alegre, RS",
    highlights: [
      "Proatividade: vou atrás da solução, seja qual for o problema",
      "Dedicação: fico até resolver, mesmo depois do horário",
      "Aprendizado contínuo: aprendo o que a demanda exigir",
      "Bom relacionamento com usuários e equipe",
    ],
    // Cards de destaque do topo; cada um leva à seção relacionada
    stats: [
      { value: "N1–N3", label: "níveis de atendimento", href: "#experience" },
      { value: "Win · Linux", label: "sistemas operacionais", href: "#skills" },
      { value: "7+", label: "projetos no GitHub", href: "#projects" },
      { value: "PT · EN", label: "idiomas fluentes", href: "#education" },
    ],
    contactCta: "Fale comigo",
    photoAlt: "Foto de Bruno Barbosa Andrade",
    terminalRole: "estagiário @ SJCDH",
  },

  experience: {
    label: "experiência",
    title: "Onde resolvo problemas de verdade",
    subtitle: "Do chamado no balcão à configuração do switch: TI de ponta a ponta no setor público.",
    items: [
      {
        role: "Estagiário de Suporte Técnico e Atendimento ao Usuário",
        org: "SJCDH — Secretaria de Justiça, Cidadania e Direitos Humanos do RS",
        period: "Out/2025 – atual",
        description:
          "Responsável por resolver as demandas de TI do dia a dia dos servidores, do problema físico na máquina à infraestrutura de rede.",
        bullets: [
          "Atendimento N1, N2 e N3: diagnóstico e solução de problemas de hardware, software, conectividade e serviços.",
          "Gestão de contas, grupos e permissões no Active Directory (AD) e administração de sistemas (T1/T2).",
          "Suporte aos sistemas do Estado: MinhaProcergs, SOE, GCE, SEI e PROA.",
          "Manutenção de computadores, impressoras e periféricos; instalação e configuração de telefonia VoIP.",
          "Contenção de vírus e malware, isolando máquinas comprometidas e recuperando o ambiente.",
          "Migração para Windows 11, com ajustes de compatibilidade (TPM 2.0) via Registro do Windows.",
          "Redes: configuração de roteadores e switches, criação de sub-redes e montagem de racks para levar internet aos Centros da Juventude.",
          "Automação de rotinas e sistemas para reduzir trabalho manual da equipe.",
        ],
      },
      {
        role: "Técnico de Manutenção de Computadores",
        org: "Autônomo",
        period: "Paralelo ao trabalho",
        description: "Atendimento particular de manutenção e montagem de computadores.",
        bullets: [
          "Montagem de computadores do zero, escolhendo e instalando processador, placa de vídeo, memória e armazenamento.",
          "Diagnóstico de defeitos, upgrades (SSD, RAM, GPU), formatação e remoção de vírus.",
        ],
      },
    ],
  },

  education: {
    label: "formação",
    title: "Base acadêmica e aprendizado contínuo",
    items: [
      { course: "Bacharelado em Ciência da Computação", institution: "PUCRS", period: "Em andamento" },
      { course: "Cursos de Redes — Cisco Networking Academy", institution: "Cisco", period: "Em andamento" },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Fluente — conversação" },
    ],
  },

  skills: {
    label: "habilidades",
    title: "Ferramentas que uso no dia a dia",
    subtitle: "Da bancada ao código: suporte, infraestrutura e desenvolvimento.",
    groups: [
      {
        title: "Suporte e Infraestrutura",
        items: [
          "Windows",
          "Linux",
          "Active Directory",
          "Atendimento N1/N2/N3",
          "Hardware e montagem de PCs",
          "Redes e sub-redes",
          "Roteadores e switches",
          "Cabeamento e racks",
          "Impressoras",
          "VoIP",
          "Remoção de vírus/malware",
        ],
      },
      {
        title: "Desenvolvimento",
        items: [
          "TypeScript", "JavaScript", "React", "Node.js", "Java", "Spring Boot",
          "Python", "C / C++", "Go", "HTML / CSS", "SQL", "Git", "OpenGL",
        ],
      },
      {
        title: "Sistemas do Governo do RS",
        items: ["MinhaProcergs", "SOE", "GCE", "SEI", "PROA"],
      },
    ],
  },

  projects: {
    label: "projetos",
    title: "Código que já escrevi",
    subtitle: "Trabalhos da faculdade e projetos pessoais, de sistemas operacionais a jogos em rede.",
    viewAll: "Ver todos os repositórios",
    viewOnGithub: "Ver no GitHub",
    items: [
      {
        title: "Simulador de Sistema Operacional",
        description:
          "Máquina virtual com CPU, memória, tratamento de interrupções e chamadas de sistema, desenvolvida na disciplina de Sistemas Operacionais.",
        tech: ["Java"],
        link: "https://github.com/brunobaa/SistemasOperacionaist1",
      },
      {
        title: "Bullet Hell Multiplayer",
        description:
          "Jogo competitivo no terminal para até 4 jogadores conectados em rede, com comunicação em tempo real via TCP.",
        tech: ["Go", "TCP/IP"],
        link: "https://github.com/brunobaa/bulletHell",
      },
      {
        title: "Microsserviço de Conversão de Moedas",
        description:
          "Serviço REST que consulta outro microsserviço de câmbio, criado na disciplina de Engenharia de Software II.",
        tech: ["Java", "Spring Boot", "Maven"],
        link: "https://github.com/brunobaa/microservico",
      },
      {
        title: "Computação Gráfica",
        description: "Curvas de Bézier, desenho de polígonos e manipulação de imagens com OpenGL.",
        tech: ["C++", "OpenGL"],
        link: "https://github.com/brunobaa/t2-cg",
      },
      {
        title: "Bot de Coleta de Mensagens",
        description:
          "Bot do Discord que lê um canal, agrupa as mensagens por usuário e exporta em JSON para análise de participação.",
        tech: ["Python", "Discord API"],
        link: "https://github.com/brunobaa/BotCopiaMensagem",
      },
      {
        title: "Conversor de Moedas",
        description: "Aplicação web feita em grupo no AGES, consumindo APIs públicas de câmbio e bandeiras.",
        tech: ["JavaScript", "HTML", "CSS", "APIs REST"],
        link: "https://github.com/brunobaa/Currency-Converter",
      },
      {
        title: "Labirinto com Grafos",
        description: "Resolução de labirintos modelados como grafos, feita em dupla.",
        tech: ["Java", "Grafos"],
        link: "https://github.com/brunobaa/LabirintoGrafo",
      },
    ],
  },

  games: {
    label: "playground",
    title: "Brincadeiras interativas",
    subtitle: "Mini-jogos que programei do zero em TypeScript e Canvas, rodando aqui mesmo no navegador.",
    start: "Jogar",
    playAgain: "Jogar de novo",
    points: "pts",
    best: "recorde",
    terminal: {
      title: "Terminal de suporte",
      description: "Digite qualquer coisa e veja um script de diagnóstico se escrever.",
      hint: "Digite qualquer tecla ou toque",
      hintDone: "Tecle para reiniciar",
      placeholder: "Clique aqui e comece a digitar…",
      aria: "Terminal interativo: digite para escrever o script",
      script: `#!/bin/bash
# diagnostico.sh — rotina de suporte N2

echo "[*] Verificando conectividade..."
ping -c 4 gateway.local
> 4 pacotes enviados, 4 recebidos, 0% perda

echo "[*] Consultando usuário no AD..."
Get-ADUser bruno.andrade -Properties *
> Enabled: True | LockedOut: False

echo "[*] Varredura de malware..."
scan --deep --quarantine C:\\
> 1 ameaça isolada em quarentena

echo "[*] Checando TPM para Windows 11..."
tpm.msc --status
> TPM 2.0 pronto ✔

echo "[✔] Chamado resolvido. Próximo!"
`,
    },
    flappy: {
      title: "Flappy Tech",
      description: "Desvie dos canos sem encostar. Quanto mais longe, melhor.",
      hint: "Clique ou espaço",
      over: "Game over",
      aria: "Jogo Flappy Tech",
    },
    astro: {
      title: "Astro Dodge",
      description: "Pilote a nave e desvie dos asteroides, que ficam cada vez mais rápidos.",
      hint: "Setas, mouse ou dedo",
      over: "Nave atingida",
      aria: "Jogo Astro Dodge",
    },
  },

  contact: {
    label: "contato",
    titleStart: "Vamos",
    titleHighlight: "conversar?",
    subtitle: "Estou aberto a oportunidades de estágio e trabalho. Respondo rápido.",
    emailLabel: "E-mail",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "voce@empresa.com",
    message: "Mensagem",
    messagePlaceholder: "Conte um pouco sobre a oportunidade…",
    send: "Enviar mensagem",
    sending: "Enviando…",
    sent: "Mensagem enviada! Retorno em breve.",
    error: "Não foi possível enviar. Tente pelo e-mail ao lado.",
  },

  footer: {
    madeWith: "Feito com React, TypeScript e Framer Motion",
    backToTop: "Voltar ao topo",
  },
};
