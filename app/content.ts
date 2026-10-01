export const content = {
  name: "Samuel Ohiani",
  role: "Software engineer",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    headline: ["I make the complicated", "parts work."],
    description:
      "I’m Samuel Ohiani, a software engineer. I build web products, backend APIs and practical automations. I like turning messy flows into something people can understand and use.",
    workLink: "Explore my work",
    contactLink: "Email me",
  },
  sections: {
    work: "Selected work",
    stack: "Technical stack",
    experience: "Experience",
    about: "About",
    earlier: "Earlier builds",
  },
  presentation: {
    currentLabel: "Right now",
    currentCompany: "Resilience 17",
    currentStatement: "Building Nuvion’s acquiring API.",
    currentDetail: "The details that decide whether a payment completes, needs action or fails.",
    workIntro: "A closer look at four different builds.",
    stackIntro: "The tools behind the work.",
    chooseProject: "Choose a project",
    contributionLabel: "My contribution",
    resultLabel: "What changed",
    experienceRange: "Since 2024",
    backToTop: "Back to top",
  },
  projects: [
    {
      id: "nuvion",
      name: "Nuvion",
      category: "Payment infrastructure at Resilience 17",
      headline: "One payment flow, several providers.",
      summary:
        "For Nuvion, I integrated PayPal and Venmo, Checkout.com, Rapyd, Fiserv and emerchantpay, then extended Worldpay with Google Pay and chargeback flows.",
      decision:
        "I worked on onboarding, card and wallet payments, 3DS, captures, refunds and signed webhooks. I made provider errors consistent, added sandbox scenarios and exposed the next required action on payment intents.",
      result:
        "API clients can see what a payment needs next and handle failures consistently across providers.",
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
      headline: "Keeping business transactions in sync.",
      summary:
        "I built API features for fiat and crypto wallets across Rivo and Rivo Business, including deposits, swaps, transfers, KYB onboarding and payment links.",
      decision:
        "I added team permissions and refunds, and fixed settlement, currency, webhook and balance handling issues.",
      result:
        "The team reported 40% fewer backend-related issues during my time there.",
      image: "/images/work/rivo-product-preview.png",
      imageWidth: 1920,
      imageHeight: 1440,
      imageAlt: "Public Rivo Business product preview showing a transaction list",
      context:
        "Estimated all-time activity across the platform: about $106k in crypto deposits and $53k swapped. These totals describe the product as a whole.",
      link: { label: "Visit Rivo", href: "https://www.userivo.co/" },
    },
    {
      id: "qualiflow",
      name: "Qualiflow",
      category: "Independent full-stack project",
      headline: "From raw CSV to explainable lead ranking.",
      summary:
        "I built a CSV lead scoring tool with adjustable criteria and an explanation for each ranking.",
      decision:
        "Imports stay in memory; exported cells are escaped so spreadsheet formulas cannot run when the file is opened.",
      result:
        "The live app lets users review and adjust the ranked list before exporting it.",
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
      headline: "A site the team can keep current.",
      summary:
        "I built the frontend for Iraid’s community programmes site and connected its gallery to Sanity.",
      decision:
        "Images and captions are managed as content instead of being hardcoded into the page.",
      result:
        "The public site is live, and gallery updates no longer require a code release.",
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
  stack: [
    {
      label: "Interface",
      context: "Web & content",
      tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Sanity", "CSS"],
    },
    {
      label: "Backend",
      context: "APIs & integrations",
      tools: ["Node.js", "Express", "NestJS", "JavaScript", "Python", ".NET", "Claude", "OpenAI", "Resend"],
    },
    {
      label: "Data",
      context: "Storage & access",
      tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Mongoose", "Knex", "Supabase"],
    },
    {
      label: "Delivery",
      context: "Testing & shipping",
      tools: ["Git", "Postman", "Swagger", "AWS", "Docker", "Vercel"],
    },
  ],
  experience: [
    {
      company: "Resilience 17",
      role: "Software Engineer",
      period: "Dec 2025 to present",
      detail:
        "I build backend capabilities for Nuvion’s acquiring platform. My work covers seller onboarding and the payment lifecycle, from initiation and 3DS through captures, refunds and signed webhooks. I’ve also made provider failures easier for API clients to handle and added repeatable sandbox scenarios for testing.",
      href: "https://www.resilience17.com/",
    },
    {
      company: "Rivo",
      role: "Software Engineer",
      period: "May 2025 to Sep 2026",
      detail:
        "At Low Gravity, I worked across the personal and business sides of Rivo. I built wallet and transaction flows, KYB onboarding, payment links and team permissions. I also traced settlement issues, webhook errors and duplicate deposit notifications through to fixes.",
      href: "https://www.userivo.co/",
    },
    {
      company: "Precise Financial Systems",
      role: "Backend Developer Intern",
      period: "Mar 2024 to Aug 2024",
      detail:
        "Worked with .NET services in a financial software environment through guided code reviews and debugging. Applied review feedback to fixes in existing services and learned how established systems are maintained.",
      href: "https://www.thepfs.biz/newsite/",
    },
    {
      company: "Unified Payment Services Limited",
      role: "Backend Developer Intern",
      period: "Mar 2024 to Sep 2024",
      detail:
        "Reviewed JavaScript and Node.js backend services with a lead engineer, investigated issues in existing endpoints and helped apply fixes. The role introduced me to the review and maintenance practices behind production payment APIs.",
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
        "A ride booking platform connecting students and drivers during school travel periods, built with Node.js, Express, Sequelize and PostgreSQL.",
    },
  ],
  about:
    "I like problems that cross boundaries. A bug may start in a button and end in a service; a feature may look finished until someone needs to recover from an error. I follow those threads and try to leave the next engineer with code they can understand.",
  contact: {
    prompt: "Hiring or building something?",
    headline: "Let’s start with the problem.",
    action: "Email me",
    email: "ohianisammy2005@gmail.com",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-ohiani/" },
      { label: "GitHub", href: "https://github.com/samohiani" },
    ],
  },
} as const;
