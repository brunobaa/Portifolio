// Formato dos textos do site. pt.ts e en.ts precisam seguir exatamente esta estrutura,
// então o TypeScript avisa se faltar alguma tradução.

export type Lang = "pt" | "en";

export type Experience = {
  role: string;
  org: string;
  period: string;
  description: string;
  bullets: string[];
};

export type SkillGroup = { title: string; items: string[] };

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

type GameText = {
  title: string;
  description: string;
  hint: string;
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    experience: string;
    education: string;
    skills: string;
    projects: string;
    games: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    // O botão de idioma fica escrito no OUTRO idioma
    switchLabel: string;
    switchShort: string;
    switchAria: string;
  };
  hero: {
    status: string;
    greeting: string;
    roles: string[];
    summary: string;
    location: string;
    highlights: string[];
    stats: { value: string; label: string; href: string }[];
    contactCta: string;
    photoAlt: string;
    terminalRole: string;
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    items: Experience[];
  };
  education: {
    label: string;
    title: string;
    items: { course: string; institution: string; period: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    groups: SkillGroup[];
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    items: Project[];
    viewAll: string;
    viewOnGithub: string;
  };
  games: {
    label: string;
    title: string;
    subtitle: string;
    start: string;
    playAgain: string;
    points: string;
    best: string;
    terminal: GameText & { hintDone: string; placeholder: string; aria: string; script: string };
    flappy: GameText & { over: string; aria: string };
    astro: GameText & { over: string; aria: string };
  };
  contact: {
    label: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    emailLabel: string;
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
    error: string;
  };
  footer: { madeWith: string; backToTop: string };
};
