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
      headline: "Making complex payment states legible.",
      summary:
        "At Resilience 17, I build parts of Nuvion’s acquiring API for card and alternative payment methods, including 3DS authentication, refunds and sandbox payment paths.",
      decision:
        "I separated provider-specific failure parsing from the shared API error contract, aligned validation with core services, and built test tokens and scenarios for repeatable sandbox flows.",
      result:
        "Payment-intent responses now include the latest required action. API callers get clearer failure reasons, and payment paths can be exercised in the sandbox.",
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
        "At Low Gravity, I worked across Rivo and Rivo Business APIs for business onboarding and KYB, wallets, transfers, payment links, team permissions and refunds.",
      decision:
        "I fixed payment-link settlement edge cases, centralized business webhook delivery status, and handled duplicate deposit notifications to keep transaction state consistent.",
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
  experience: [
    {
      company: "Resilience 17",
      role: "Software Engineer",
      period: "Dec 2025 — Present",
      detail:
        "Building Nuvion’s acquiring APIs for card and alternative payment methods, from initiation and 3DS through provider responses, refunds and final status updates. I built sandbox test tokens and scenarios, exposed the latest action on payment intents, and helped standardize errors and validation across acquiring and core services.",
      href: "https://www.resilience17.com/",
    },
    {
      company: "Rivo",
      role: "Software Engineer",
      period: "May 2025 — Aug 2026",
      detail:
        "Built Rivo and Rivo Business APIs for onboarding, KYB, wallets, transfers, payment links and refunds. I also worked on business permissions, recent recipients, payment-link settlement and webhook delivery states. Reported backend-related issues fell by 40% during my tenure.",
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
