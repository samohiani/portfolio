export const content = {
  name: "Samuel Ohiani",
  role: "Software engineer",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: ["I build software", "for complex ideas."],
    description:
      "I’m Samuel Ohiani, a software engineer in Lagos. I build full-stack products, backend systems, and practical automations—from the interfaces people use to the systems they depend on.",
    workLink: "View selected work",
    contactLink: "Email me",
  },
  sections: {
    work: "Selected work",
    experience: "Experience",
    about: "About",
    earlier: "Earlier builds",
  },
  presentation: {
    currentLabel: "Currently building",
    currentCompany: "Resilience 17",
    currentStatement: "Acquiring APIs for card payments.",
    currentDetail: "Payment methods, 3DS, refunds and the cases in between.",
    workIntro: "What I shipped, across APIs and interfaces.",
    chooseProject: "Choose a project",
    previewLabel: "Public product preview",
    contributionLabel: "My contribution",
    resultLabel: "What changed",
    experienceRange: "2024 — now",
    aboutFocus: "Backend engineering / Full-stack products / Payments",
    backToTop: "Back to top",
  },
  projects: [
    {
      id: "nuvion",
      name: "Nuvion",
      category: "Payment infrastructure at Resilience 17",
      headline: "A clearer contract for complex payment flows.",
      summary:
        "At Resilience 17, I work on Nuvion’s acquiring API across card and alternative payment methods, 3DS, refunds and sandbox testing.",
      decision:
        "I standardised provider failure parsing into shared API errors and helped align validation across acquiring and core services.",
      result:
        "Payment intents now expose their next action more clearly, while test tokens and scenarios make payment paths easier to exercise.",
      image: "/images/work/nuvion-product-preview.png",
      imageWidth: 1552,
      imageHeight: 792,
      imageAlt: "Public Nuvion product preview showing accounts and transactions",
      link: { label: "Visit Nuvion", href: "https://www.nuvion.co/" },
    },
    {
      id: "rivo",
      name: "Rivo",
      category: "Multi-currency finance at Low Gravity",
      headline: "Reliability behind business payments.",
      summary:
        "I worked across Rivo and Rivo Business APIs for business onboarding and KYB, wallets, payment links, transfers, webhooks and refunds.",
      decision:
        "I handled duplicate deposit notifications, payment-link completion and webhook delivery states to make transaction updates more dependable.",
      result:
        "Reported backend-related issues fell by 40% during my time on the team.",
      image: "/images/work/rivo-product-preview.png",
      imageWidth: 1920,
      imageHeight: 1440,
      imageAlt: "Public Rivo Business product preview showing a transaction list",
      context:
        "Estimated all-time platform activity: about $106k in crypto deposits and $53k swapped. These are product totals, not a measure of my individual contribution.",
      link: { label: "Visit Rivo", href: "https://www.userivo.co/" },
    },
    {
      id: "qualiflow",
      name: "Qualiflow",
      category: "Independent full-stack project",
      headline: "Turning a messy lead export into a useful next step.",
      summary:
        "Qualiflow cleans CSVs, ranks prospects against adjustable criteria and shows why each lead received its score.",
      decision:
        "Uploaded files are processed in memory, and exported cells are escaped to prevent spreadsheet formulas from running.",
      result:
        "The live app lets users inspect, adjust and export ranked leads with an explanation for each score.",
      image: "/images/work/qualiflow-desktop.webp",
      imageWidth: 1440,
      imageHeight: 1000,
      imageAlt: "Qualiflow lead qualification workspace",
      link: {
        label: "Open Qualiflow",
        href: "https://leads-qualification-app.vercel.app/",
      },
      secondaryLink: {
        label: "View source",
        href: "https://github.com/samohiani/leads-qualification-app",
      },
    },
    {
      id: "iraid",
      name: "Iraid",
      category: "Frontend and content workflow",
      headline: "A site the team can update themselves.",
      summary:
        "I built the frontend and Sanity-backed gallery for an organisation website focused on community programmes.",
      decision:
        "Separating the site presentation from content editing lets the team add gallery media and captions without a developer.",
      result:
        "The public site and editable gallery are live.",
      image: "/images/work/iraid-desktop.webp",
      imageWidth: 1269,
      imageHeight: 714,
      imageAlt: "Iraid organisation website",
      link: { label: "Visit Iraid", href: "https://iraid.org/" },
      secondaryLink: {
        label: "Explore gallery",
        href: "https://iraid.org/gallery",
      },
    },
  ],
  experience: [
    {
      company: "Resilience 17",
      role: "Software Engineer",
      period: "Dec 2025 — Present",
      detail:
        "Building Nuvion’s card and alternative payment flows, including 3DS, refunds, provider integrations and test scenarios. Led shared error-contract work across acquiring and core services, improving validation and gateway failure handling.",
      href: "https://www.resilience17.com/",
    },
    {
      company: "Rivo",
      role: "Software Engineer",
      period: "May 2025 — Aug 2026",
      detail:
        "Built Rivo and Rivo Business APIs for onboarding, KYB, wallets, transfers, payment links, webhooks and refunds. Resolved duplicate transaction and settlement edge cases; reported backend-related issues fell by 40% during the role.",
      href: "https://www.userivo.co/",
    },
    {
      company: "Precise Financial Systems",
      role: "Backend Developer Intern",
      period: "Mar 2024 — Aug 2024",
      detail:
        "Learned .NET development in a financial software environment through guided system reviews and debugging. Used review feedback to improve changes to existing services.",
      href: "https://www.thepfs.biz/newsite/",
    },
    {
      company: "Unified Payment Services Limited",
      role: "Backend Developer Intern",
      period: "Mar 2024 — Sep 2024",
      detail:
        "Reviewed existing JavaScript and Node.js backend services with a lead engineer, resolved issues and learned how production APIs were maintained.",
      href: "https://up-ng.com/",
    },
  ],
  earlierProjects: [
    {
      name: "HebronBites",
      type: "Campus food ordering",
      detail:
        "A platform for browsing vendors, placing orders and tracking deliveries, built with Node.js, Express, Sequelize, PostgreSQL and Paystack.",
    },
    {
      name: "Buga Travels",
      type: "Student ride sharing",
      detail:
        "A school-focused ride booking platform connecting students and drivers around travel periods, built with Node.js, Express, Sequelize and PostgreSQL.",
    },
  ],
  about:
    "I’m Samuel, a software engineer in Lagos. I work across the parts of a product people see and the systems that make it dependable. Payments taught me to care about clear states, edge cases and what happens when things fail.",
  contact: {
    prompt: "Have a role or product in mind?",
    headline: "Let’s talk about what you’re building.",
    action: "Start a conversation",
    email: "ohianisammy2005@gmail.com",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-ohiani/" },
      { label: "GitHub", href: "https://github.com/samohiani" },
    ],
  },
} as const;
