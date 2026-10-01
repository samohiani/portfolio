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
    stack: "Technical stack",
    experience: "Experience",
    about: "About",
    earlier: "Earlier builds",
  },
  presentation: {
    currentLabel: "Currently building",
    currentCompany: "Resilience 17",
    currentStatement: "Payment APIs across cards and digital wallets.",
    currentDetail: "Provider integrations, 3DS, refunds and reliable payment states.",
    workIntro: "What I shipped, across APIs and interfaces.",
    stackIntro: "The tools I use to build products end to end.",
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
      headline: "Making complex payment states legible.",
      summary:
        "At Resilience 17, I build payment flows for PayPal and Venmo, Checkout.com, Rapyd, Fiserv and emerchantpay; I also added Google Pay and chargeback paths for Worldpay.",
      decision:
        "My work spans seller onboarding, card and wallet payments, 3DS, captures, refunds and signed webhooks. I also separated provider-specific error parsing, added repeatable sandbox test scenarios, and exposed the latest required action on payment intents.",
      result:
        "More payment journeys run through a consistent API: clients can act on the latest payment step, interpret provider failures, and exercise flows in the sandbox.",
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
        "At Low Gravity, I built across Rivo and Rivo Business APIs: fiat and crypto wallets, deposits, swaps and transfers, business onboarding and KYB, payment links, team permissions and refunds.",
      decision:
        "I fixed payment-link settlement and currency edge cases, made webhook delivery states consistent, and improved transaction and balance handling across user and business flows.",
      result:
        "The team reported 40% fewer backend-related issues during my time there.",
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
      headline: "From raw CSV to explainable lead ranking.",
      summary:
        "I built a lead qualification workspace that cleans CSV imports, scores prospects against adjustable criteria and explains each ranking before export.",
      decision:
        "Imports are processed in memory instead of storing prospect files, and exported cells are escaped to prevent spreadsheet formulas from running when the CSV is opened.",
      result:
        "The live app takes users from a raw file to a reviewable, adjustable ranked list they can export.",
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
      headline: "A gallery the team can update without code.",
      summary:
        "I built the frontend for Iraid’s community programmes website and connected its gallery to Sanity so media and captions can be edited outside the codebase.",
      decision:
        "I separated the public presentation from gallery content editing, giving the team a direct path to publish new images and captions.",
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
  stack: [
    {
      label: "Interface",
      context: "Web experiences",
      tools: ["React", "Next.js", "TypeScript", "CSS"],
    },
    {
      label: "Backend",
      context: "APIs & integrations",
      tools: ["Node.js", "Express", "JavaScript", ".NET"],
    },
    {
      label: "Data",
      context: "Storage & caching",
      tools: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    },
  ],
  experience: [
    {
      company: "Resilience 17",
      role: "Software Engineer",
      period: "Dec 2025 — Present",
      detail:
        "Building payment flows across PayPal and Venmo, Checkout.com, Rapyd, Fiserv and emerchantpay, and extending Worldpay support for Google Pay and chargebacks. My work covers seller onboarding, payment initiation, 3DS, captures, refunds, signed webhooks and provider-specific errors. I also added sandbox test scenarios and made the latest required payment action available to API clients.",
      href: "https://www.resilience17.com/",
    },
    {
      company: "Rivo",
      role: "Software Engineer",
      period: "May 2025 — Aug 2026",
      detail:
        "Built Rivo and Rivo Business APIs for fiat and crypto wallets, deposits, swaps, transfers, payment links, refunds and KYB onboarding. I also shipped business team permissions and transaction controls, and resolved settlement, webhook and duplicate-notification edge cases. The team reported 40% fewer backend-related issues during my tenure.",
      href: "https://www.userivo.co/",
    },
    {
      company: "Precise Financial Systems",
      role: "Backend Developer Intern",
      period: "Mar 2024 — Aug 2024",
      detail:
        "Worked with .NET services in a financial software environment through guided code reviews and debugging. Applied review feedback to fixes in existing services and learned how established systems are maintained.",
      href: "https://www.thepfs.biz/newsite/",
    },
    {
      company: "Unified Payment Services Limited",
      role: "Backend Developer Intern",
      period: "Mar 2024 — Sep 2024",
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
