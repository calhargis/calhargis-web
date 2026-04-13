export const siteData = {
  metadata: {
    title: "Cal Hargis | Developer Portfolio",
    description:
      "Synthwave-styled developer portfolio for Cal Hargis, featuring selected projects, accomplishments, and a downloadable resume.",
  },
  hero: {
    name: "Cal Hargis",
    role: "Developer",
    headline: "Backend systems, curious experiments, and polished execution.",
    summary:
      "I build software that feels solid under pressure and memorable on purpose. My work spans server-authoritative platforms, automated testing, developer tooling, and projects that connect code to the physical world.",
    status:
      "Open to engineering roles where strong fundamentals and creative product taste both matter.",
  },
  links: [
    {
      label: "GitHub",
      href: "https://github.com/calhargis",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/calhargis",
    },
  ],
  proofPoints: [
    {
      title: "Backend-first systems",
      detail: "APIs, auth, realtime messaging, data modeling, and platform wiring.",
    },
    {
      title: "Testing discipline",
      detail:
        "Unit, integration, API, fuzz, and load-minded thinking baked into delivery.",
    },
    {
      title: "Interesting technical ideas",
      detail:
        "From game-adjacent platforms to hardware-connected projects that stand out.",
    },
  ],
  focusAreas: [
    {
      title: "Platform thinking",
      copy:
        "I like systems that hold together cleanly, from authentication and storage to operational workflows and maintainable architecture.",
    },
    {
      title: "Tasteful weirdness",
      copy:
        "The best projects are technically rigorous and still have a point of view. I try to make software feel intentional, not generic.",
    },
    {
      title: "Delivery that ships",
      copy:
        "I care about getting from idea to working software with the supporting tests, tooling, and deployment story to keep it reliable.",
    },
  ],
  skillGroups: [
    {
      title: "Backend And Platform",
      items: [
        ".NET / ASP.NET Core",
        "REST API design",
        "JWT and OAuth flows",
        "SignalR realtime messaging",
        "Java plugin development",
      ],
    },
    {
      title: "Data And Infrastructure",
      items: [
        "PostgreSQL",
        "Redis",
        "MinIO object storage",
        "Docker Compose",
        "GitHub Actions",
      ],
    },
    {
      title: "Product Surface",
      items: [
        "TypeScript and JavaScript",
        "Static frontend architecture",
        "Admin tooling",
        "Developer experience",
        "UX with personality",
      ],
    },
  ],
  projects: [
    {
      name: "TurboGrid",
      href: "https://github.com/calhargis/TurboGrid",
      stack: "ASP.NET Core, PostgreSQL, Redis, MinIO, Docker, SignalR",
      description:
        "A backend-first platform for a car-community game or app, built around server-authoritative rules, layered architecture, and operational tooling.",
      highlights: [
        "Local JWT auth plus Google, GitHub, and Discord OAuth support.",
        "Player APIs for garage, profile, grid bootstrap, club systems, and territory control.",
        "Automated coverage spanning unit, integration, API, fuzz, and load testing.",
      ],
    },
    {
      name: "raspberrypi_shock_minecraft",
      href: "https://github.com/calhargis/raspberrypi_shock_minecraft",
      stack: "Java, Raspberry Pi, Minecraft plugin workflows",
      description:
        "A Raspberry Pi Minecraft plugin that translates in-game events into hardware-triggered actions through a configurable executable interface.",
      highlights: [
        "Listens for player damage events and routes them into controlled shell executables.",
        "Bridges game logic with Raspberry Pi hardware integration concepts.",
        "A good example of mixing software engineering with strange, memorable ideas.",
      ],
    },
  ],
  accomplishments: [
    "Built a server-authoritative ASP.NET Core backend with clean application, domain, and infrastructure boundaries.",
    "Implemented authentication flows that combine local JWT auth with multiple OAuth providers.",
    "Added an automated testing stack that covers unit, integration, API, fuzz, and load scenarios.",
    "Containerized local infrastructure around PostgreSQL, Redis, and MinIO for repeatable development and testing.",
    "Delivered realtime club chat and admin tooling workflows inside the TurboGrid platform.",
    "Built a hardware-aware game plugin that connects Minecraft events to Raspberry Pi driven actions.",
  ],
  resume: {
    title: "Current Resume",
    copy:
      "The latest resume is bundled directly with the site so companies can open it immediately or download it for later review.",
  },
} as const;
