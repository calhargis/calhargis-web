export const siteData = {
  metadata: {
    title: "Cal Hargis | Full-Stack Software Developer",
    description:
      "Developer portfolio for Cal Hargis featuring experience, education, projects, research publications, and a downloadable resume.",
  },
  hero: {
    name: "Cal Hargis",
    title: "Full-Stack Software Developer",
    typePhrases: [
      "Full-Stack Software Developer",
      "Laravel, Vue.js, and Flutter Developer",
      "REST API and MySQL Engineer",
      "AWS, Spark, and Data Pipeline Builder",
    ],
    intro:
      "Currently building resident-facing applications and internal management tools at Kingsley Management Corporation.",
    summary:
      "My recent work centers on Laravel, Vue.js, MySQL, and Flutter, with earlier experience spanning AWS data pipelines, large-scale Java services, technical support across web and mobile platforms, and machine-learning research.",
    facts: [
      {
        label: "Current role",
        value: "Fullstack Software Developer at Kingsley",
      },
      {
        label: "Core stack",
        value: "Laravel, Vue.js, MySQL, Flutter",
      },
      {
        label: "Education",
        value: "B.S. in Computer Science, BYU",
      },
    ],
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
    {
      label: "Email",
      href: "mailto:calhargis1@gmail.com",
    },
  ],
  experience: {
    featured: {
      role: "Fullstack Software Developer",
      company: "Kingsley Management Corporation",
      location: "Provo, UT",
      dates: "Apr 2025 - Present",
      summary:
        "Designed and implemented full-stack features for internal management tools and resident-facing applications, owning frontend UX, backend APIs, and database architecture across the work.",
      achievements: [
        "Built production features using Laravel (PHP), Vue.js, MySQL, and Flutter.",
        "Developed and maintained RESTful backend services with Laravel Controllers, Models, and Service layers to keep the codebase clean and maintainable.",
        "Delivered functionality across internal property management systems and resident-facing web portals.",
        "Implemented and managed relational database schemas and queries in MySQL to preserve integrity across financial, resident, and property records.",
      ],
      spotlight: {
        title: "Security deposit and refund system",
        impact:
          "Led development of an online security deposit and refund workflow that replaced a legacy paper-check process with a fully digital solution.",
        details: [
          "Improved processing speed and reliability for a business-critical financial workflow.",
          "Supported more than $100,000 in monthly processing volume.",
          "Combined frontend, backend, and database work into a single end-to-end feature.",
        ],
      },
    },
    supporting: [
      {
        role: "Application Support Analyst",
        company: "JobNimbus",
        location: "Lehi, UT",
        dates: "Jul 2024 - Apr 2025",
        bullets: [
          "Diagnosed and resolved complex technical issues across web and mobile platforms, often involving database records, application logic, and API behavior.",
          "Worked with engineering and product teams to reproduce bugs, validate fixes, and improve reliability based on real customer usage.",
        ],
      },
      {
        role: "Software Engineer Intern",
        company: "FamilySearch",
        location: "Lehi, UT",
        dates: "May 2023 - Dec 2023",
        bullets: [
          "Built production code with Java, Apache Spark, and Spring Boot to extract hint files from a large-scale AWS database.",
          "Developed Java scripts that extracted more than 2M+ hint files from AWS servers using AWS CloudFormation.",
          "Produced bash scripts that optimized CloudFormation processes and reduced run times by 83%.",
        ],
      },
      {
        role: "Research Assistant",
        company: "Brigham Young University",
        location: "Provo, UT",
        dates: "Apr 2020 - Dec 2022",
        bullets: [
          "Built data pipelines with NumPy, Pandas, and Scikit-learn while running statistical analysis and machine-learning models.",
          "Improved predictive accuracy by 25% and reduced data processing time by 40%.",
          "Contributed to two research papers and conference presentations through random forest analysis and visualization work.",
        ],
      },
    ],
  },
  education: {
    degree: "B.S. in Computer Science",
    school: "Brigham Young University",
    location: "Provo, UT",
    graduation: "Apr 2024",
    coursework: [
      "Software Engineering",
      "Android Development",
      "UX Design",
      "Software Design and Testing",
      "Algorithms",
      "Machine Learning",
    ],
  },
  projects: [
    {
      name: "TurboGrid",
      href: "https://github.com/calhargis/TurboGrid",
      stack: "ASP.NET Core, PostgreSQL, Redis, MinIO, Docker, SignalR",
      description:
        "A backend-first platform for a car-community game or app with layered architecture, operational tooling, and a broad automated testing strategy.",
      highlights: [
        "Implemented player-facing APIs, admin tooling, realtime messaging, and platform wiring.",
        "Added authentication support for local JWT flows plus Google, GitHub, and Discord OAuth.",
        "Built coverage across unit, integration, API, fuzz, and load testing.",
      ],
    },
    {
      name: "raspberrypi_shock_minecraft",
      href: "https://github.com/calhargis/raspberrypi_shock_minecraft",
      stack: "Java, Raspberry Pi, Minecraft plugin development",
      description:
        "A Minecraft plugin that reacts to gameplay events and routes them into hardware-triggered actions through a Raspberry Pi executable interface.",
      highlights: [
        "Connected game events to external executable workflows in a memorable hardware-software integration project.",
        "Added configurable command behavior for player targeting and deployment paths.",
        "Demonstrates practical Java development with an unconventional product idea.",
      ],
    },
  ],
  publications: [
    {
      title:
        "Machine learning classification of disrotatory IRC and conrotatory non-IRC trajectory motion for cyclopropyl radical ring opening",
      venue: "Physical Chemistry Chemical Physics, 2021",
      href: "https://pubs.rsc.org/en/content/articlelanding/2021/cp/d1cp00612f",
      description:
        "Co-authored publication focused on machine-learning classification of trajectory motion in cyclopropyl radical ring opening.",
    },
    {
      title:
        "Machine learning analysis of dynamic-dependent bond formation in trajectories with consecutive transition states",
      venue: "Journal of Physical Organic Chemistry, 2022",
      href: "https://onlinelibrary.wiley.com/doi/10.1002/poc.4405?af=R",
      description:
        "Research publication on using machine learning to analyze dynamic-dependent bond formation in reactions with consecutive transition states.",
    },
  ],
  presentation: {
    title: "2022 BYU Student Research Conference",
    description:
      "Presented research on using machine learning to uncover the origin of dynamic selectivity in sigmatropic rearrangement reactions through quasiclassical direct dynamics simulations.",
  },
  skills: [
    {
      title: "Frontend And Mobile",
      items: [
        { label: "JavaScript", icon: "javascript" },
        { label: "Vue.js", icon: "vue" },
        { label: "HTML5", icon: "html5" },
        { label: "CSS3", icon: "css3" },
        { label: "Flutter", icon: "flutter" },
        { label: "Dart", icon: "dart" },
      ],
    },
    {
      title: "Backend Languages And Frameworks",
      items: [
        { label: "PHP", icon: "php" },
        { label: "Laravel", icon: "laravel" },
        { label: "Python", icon: "python" },
        { label: "Java", icon: "java" },
        { label: "Spring Boot", icon: "springboot" },
        { label: "C++", icon: "cplusplus" },
      ],
    },
    {
      title: "Backend Architecture",
      items: [
        { label: "REST APIs", icon: "api" },
        { label: "MVC Architecture", icon: "layers" },
        { label: "Service Layer Design", icon: "service" },
        { label: "Authentication", icon: "shield" },
        { label: "Data Modeling", icon: "model" },
      ],
    },
    {
      title: "Databases And Cloud",
      items: [
        { label: "MySQL", icon: "mysql" },
        { label: "SQL", icon: "database" },
        { label: "AWS", icon: "aws" },
      ],
    },
    {
      title: "Data And Automation",
      items: [
        { label: "Apache Spark", icon: "apachespark" },
        { label: "Pandas", icon: "pandas" },
        { label: "Scikit-learn", icon: "scikitlearn" },
        { label: "Selenium", icon: "selenium" },
      ],
    },
    {
      title: "Tools And Practices",
      items: [
        { label: "Git", icon: "git" },
        { label: "Agile / Scrum", icon: "agile" },
        { label: "Linux", icon: "linux" },
        { label: "Codex", icon: "openai" },
        { label: "Claude Code", icon: "anthropic" },
        { label: "OpenClaw", icon: "terminal" },
      ],
    },
  ],
  resume: {
    title: "Resume",
    copy:
      "The latest resume is bundled with the site for quick review and download during hiring conversations.",
  },
} as const;
