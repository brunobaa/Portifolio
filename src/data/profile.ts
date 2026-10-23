// Todo o conteúdo do site fica aqui: para atualizar o currículo, edite só este arquivo.

export const profile = {
  name: "Bruno Barbosa Andrade",
  headline: "Suporte de TI · Infraestrutura · Desenvolvimento Full-Stack",
  summary:
    "Estudante de Ciência da Computação na PUCRS e estagiário de suporte de TI na Secretaria de Justiça, Cidadania e Direitos Humanos do RS (SJCDH). Resolvo problemas de ponta a ponta — do hardware à rede, do atendimento ao usuário ao código — sempre com proatividade e foco em deixar tudo funcionando.",
  location: "Porto Alegre, RS",
  status: "Disponível para estágio",
  email: "brunoandradeprof7@gmail.com",
  github: "https://github.com/brunobaa",
  linkedin: "https://www.linkedin.com/in/bruno-andrade-4a1581313/",
  photo: "/assets/minha-foto.jpg",
};

// Frases que se alternam no topo, com efeito de digitação
export const roles = [
  "Suporte de TI",
  "Infraestrutura e Redes",
  "Desenvolvimento Full-Stack",
];

export const stats = [
  { value: "N1–N3", label: "níveis de atendimento" },
  { value: "5", label: "sistemas do Estado no dia a dia" },
  { value: "7+", label: "projetos no GitHub" },
  { value: "PT · EN", label: "idiomas fluentes" },
];

export const highlights = [
  "Proatividade: vou atrás da solução, seja qual for o problema",
  "Dedicação: fico até resolver, mesmo depois do horário",
  "Aprendizado contínuo: aprendo o que a demanda exigir",
  "Bom relacionamento com usuários e equipe",
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  bullets: string[];
};

export const experiences: Experience[] = [
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
];

export const education = [
  {
    course: "Bacharelado em Ciência da Computação",
    institution: "PUCRS",
    period: "Em andamento",
  },
  {
    course: "Cursos de Redes — Cisco Networking Academy",
    institution: "Cisco",
    period: "Em andamento",
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Fluente — conversação" },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
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
      "TypeScript",
      "JavaScript",
      "React",
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "C / C++",
      "Go",
      "HTML / CSS",
      "SQL",
      "Git",
      "OpenGL",
    ],
  },
  {
    title: "Sistemas do Governo do RS",
    items: ["MinhaProcergs", "SOE", "GCE", "SEI", "PROA"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export const projects: Project[] = [
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
];
