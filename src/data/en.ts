import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Bruno Andrade | IT Support & Development",
    description:
      "Bruno Barbosa Andrade — IT Support, Infrastructure and Full-Stack Development. Computer Science student at PUCRS, Brazil.",
  },

  nav: {
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    games: "Games",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "Português",
    switchShort: "PT",
    switchAria: "Mudar o site para português",
  },

  hero: {
    status: "Open to internships",
    greeting: "Hi, I'm",
    roles: ["IT Support", "Infrastructure & Networking", "Full-Stack Development"],
    summary:
      "Computer Science student at PUCRS and IT support intern at the Rio Grande do Sul State Department of Justice, Citizenship and Human Rights (SJCDH). I solve problems end to end, from hardware to network and from user support to code, always proactive and focused on keeping everything running.",
    location: "Porto Alegre, Brazil",
    highlights: [
      "Proactive: I go after the solution, whatever the problem",
      "Dedicated: I stay until it's fixed, even after hours",
      "Continuous learner: I learn whatever the job requires",
      "Clear corporate communication, including email, and teamwork",
    ],
    stats: [
      { value: "L1–L3", label: "support tiers", href: "#experience" },
      { value: "Win · Linux", label: "operating systems", href: "#skills" },
      { value: "7+", label: "projects on GitHub", href: "#projects" },
      { value: "EN · C1", label: "advanced English", href: "#education" },
    ],
    contactCta: "Get in touch",
    photoAlt: "Photo of Bruno Barbosa Andrade",
    terminalLines: ["Bruno Barbosa Andrade", "IT Intern @ SJCDH", "Computer Science @ PUCRS"],
  },

  experience: {
    label: "experience",
    title: "Where I solve real problems",
    subtitle: "From the help desk ticket to the switch configuration: end-to-end IT in the public sector.",
    items: [
      {
        role: "IT Support & Help Desk Intern",
        org: "SJCDH — RS State Department of Justice, Citizenship and Human Rights",
        period: "Oct 2025 – present",
        description:
          "Responsible for the day-to-day IT needs of government staff, from physical hardware issues to network infrastructure.",
        bullets: [
          "L1, L2 and L3 support, on-site and remote: troubleshooting and fixing hardware, software, connectivity and service issues.",
          "GLPI: setting up, maintaining and managing the team's ticketing system.",
          "Managing accounts, groups and permissions in Active Directory (AD) and systems administration (T1/T2).",
          "Supporting state government systems: MinhaProcergs, SOEWEB, GCE, SEI, PROA, SIS and FPE.",
          "Maintaining computers, printers and peripherals; installing and configuring VoIP phones.",
          "Inventory: keeping the equipment inventory and asset records up to date.",
          "Office 365: advanced user support for the Microsoft 365 suite.",
          "Containing viruses and malware, isolating compromised machines and restoring the environment.",
          "Windows: OS installs and reinstalls, workstation setup, drivers, updates and user profiles; Windows 11 upgrades and maintenance of built-in Windows tools and services.",
          "Networking: hands-on TCP/IP, DNS, DHCP and Wi-Fi; configuring routers and switches, creating subnets and building racks to bring internet to Youth Centers.",
          "Automation: building scripts and system automations to reduce the team's manual work.",
        ],
      },
      {
        role: "Computer Repair Technician",
        org: "Freelance",
        period: "Alongside work",
        description: "Private computer repair and custom PC building services.",
        bullets: [
          "Building computers from scratch, choosing and installing CPU, graphics card, memory and storage.",
          "Diagnosing faults, upgrades (SSD, RAM, GPU), OS reinstalls and virus removal.",
        ],
      },
    ],
  },

  education: {
    label: "education",
    title: "Academic background and continuous learning",
    items: [
      { course: "B.Sc. in Computer Science", institution: "PUCRS", period: "2022 – 2028 (in progress)" },
      { course: "Networking Courses — Cisco Networking Academy", institution: "Cisco", period: "In progress" },
      { course: "AGES study group: front-end and back-end web development, with team sprints", institution: "AGES · PUCRS", period: "2024" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced, C1 (B2 certificate, Yázigi, 2021)" },
    ],
  },

  skills: {
    label: "skills",
    title: "Tools I use every day",
    subtitle: "From the workbench to the codebase: support, infrastructure and development.",
    groups: [
      {
        title: "Support & Infrastructure",
        items: [
          "Windows",
          "Linux",
          "Active Directory",
          "L1/L2/L3 support",
          "Remote support",
          "GLPI",
          "Hardware & PC building",
          "TCP/IP, DNS & DHCP",
          "Networking, subnets & Wi-Fi",
          "Routers & switches",
          "Cabling & racks",
          "Printers",
          "VoIP",
          "Office 365",
          "IT inventory",
          "Virus/malware removal",
        ],
      },
      {
        title: "Development",
        items: [
          "TypeScript", "JavaScript", "React", "Node.js", "Java", "Spring Boot",
          "Python", "C / C++", "Go", "HTML / CSS", "SQL", "Git", "OpenGL",
        ],
      },
    ],
  },

  projects: {
    label: "projects",
    title: "Code I've written",
    subtitle: "University assignments and personal projects, from operating systems to networked games.",
    viewAll: "See all repositories",
    viewOnGithub: "View on GitHub",
    items: [
      {
        title: "Operating System Simulator",
        description:
          "Virtual machine with CPU, memory, interrupt handling and system calls, built for the Operating Systems course.",
        tech: ["Java"],
        link: "https://github.com/brunobaa/SistemasOperacionaist1",
      },
      {
        title: "Bullet Hell Multiplayer",
        description:
          "Competitive terminal game for up to 4 networked players, with real-time communication over TCP.",
        tech: ["Go", "TCP/IP"],
        link: "https://github.com/brunobaa/bulletHell",
      },
      {
        title: "Currency Conversion Microservice",
        description:
          "REST service that queries another exchange-rate microservice, built for the Software Engineering II course.",
        tech: ["Java", "Spring Boot", "Maven"],
        link: "https://github.com/brunobaa/microservico",
      },
      {
        title: "Computer Graphics",
        description: "Bézier curves, polygon rendering and image manipulation with OpenGL.",
        tech: ["C++", "OpenGL"],
        link: "https://github.com/brunobaa/t2-cg",
      },
      {
        title: "Message Collector Bot",
        description:
          "Discord bot that reads a channel, groups messages by user and exports them to JSON for participation analysis.",
        tech: ["Python", "Discord API"],
        link: "https://github.com/brunobaa/BotCopiaMensagem",
      },
      {
        title: "Currency Converter",
        description: "Web app built as a team at AGES, consuming public exchange-rate and flag APIs.",
        tech: ["JavaScript", "HTML", "CSS", "REST APIs"],
        link: "https://github.com/brunobaa/Currency-Converter",
      },
      {
        title: "Graph Maze Solver",
        description: "Solving mazes modeled as graphs, built in a pair.",
        tech: ["Java", "Graphs"],
        link: "https://github.com/brunobaa/LabirintoGrafo",
      },
    ],
  },

  games: {
    label: "playground",
    title: "Interactive playground",
    subtitle: "Mini-games I built from scratch with TypeScript and Canvas, running right here in your browser.",
    start: "Play",
    playAgain: "Play again",
    points: "pts",
    best: "best",
    terminal: {
      title: "Support terminal",
      description: "Type anything and watch a diagnostics script write itself.",
      hint: "Press any key or tap",
      hintDone: "Press a key to restart",
      placeholder: "Click here and start typing…",
      aria: "Interactive terminal: type to write the script",
      script: `#!/bin/bash
# diagnostics.sh — L2 support routine

echo "[*] Checking connectivity..."
ping -c 4 gateway.local
> 4 packets sent, 4 received, 0% loss

echo "[*] Looking up user in AD..."
Get-ADUser bruno.andrade -Properties *
> Enabled: True | LockedOut: False

echo "[*] Running malware scan..."
scan --deep --quarantine C:\\
> 1 threat quarantined

echo "[*] Checking TPM for Windows 11..."
tpm.msc --status
> TPM 2.0 ready ✔

echo "[✔] Ticket resolved. Next!"
`,
    },
    flappy: {
      title: "Flappy Tech",
      description: "Dodge the pipes without touching them. The farther, the better.",
      hint: "Click or space",
      over: "Game over",
      aria: "Flappy Tech game",
    },
    astro: {
      title: "Astro Dodge",
      description: "Fly the ship and dodge the asteroids as they keep speeding up.",
      hint: "Arrows, mouse or touch",
      over: "Ship destroyed",
      aria: "Astro Dodge game",
    },
  },

  contact: {
    label: "contact",
    titleStart: "Let's",
    titleHighlight: "talk",
    subtitle: "I'm open to internship and job opportunities, available for daytime or full-time schedules and for travel. I reply fast.",
    emailLabel: "Email",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    message: "Message",
    messagePlaceholder: "Tell me a bit about the opportunity…",
    send: "Send message",
    sending: "Sending…",
    sent: "Message sent! I'll get back to you soon.",
    error: "Couldn't send it. Please try the email on the side.",
  },

  footer: {
    madeWith: "Built with React, TypeScript and Framer Motion",
    backToTop: "Back to top",
  },
};
