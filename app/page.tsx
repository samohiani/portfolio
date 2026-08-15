import Image from "next/image";
import MotionController from "./components/MotionController";
import ThemeToggle from "./components/ThemeToggle";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuel-ohiani/" },
  { label: "GitHub", href: "https://github.com/samohiani" },
  { label: "Email", href: "mailto:ohianisammy2005@gmail.com" },
  { label: "Résumé", href: "/resume/Samuel-Ohiani-CV.pdf" },
];

const experience = [
  {
    company: "Resilience 17",
    detail: "Payment infrastructure",
    role: "Software Engineer",
    engagement: "Contract",
    period: "Dec 2025 — Present",
    href: "https://www.resilience17.com/",
    logo: "/images/work/resilience.jpeg",
    logoAlt: "Resilience 17 logo",
    summary:
      "Building and hardening the services behind card acquiring, payment sessions, gateway authorization, 3DS, digital wallets, callbacks, and refunds.",
    contribution:
      "I work across provider integrations and shared platform contracts, making transaction flows more consistent when external systems fail, retry, or respond differently.",
    stack: ["Node.js", "Express", "MongoDB", "MySQL", "Bull", "AWS"],
  },
  {
    company: "Rivo",
    detail: "Multi-currency finance",
    role: "Software Engineer",
    engagement: "Full-time",
    period: "May 2025 — Present",
    href: "https://www.userivo.co/",
    logo: "/images/work/rivo.jpeg",
    logoAlt: "Rivo logo",
    summary:
      "Developing multi-currency financial products spanning accounts, swaps, transfers, KYB, partner integrations, webhooks, and internal operations.",
    contribution:
      "I joined at junior level and grew into broader product and systems ownership, contributing across backend services, integration reliability, and product delivery.",
    stack: ["Node.js", "TypeScript", "Express", "MongoDB", "Redis", "AWS"],
  },
  {
    company: "Precise Financial Systems",
    detail: ".NET foundations",
    role: "Backend Intern",
    engagement: "Internship",
    period: "Mar 2024 — Aug 2024",
    href: "https://www.thepfs.biz/newsite/",
    logo: "/images/work/PFS.jpeg",
    logoAlt: "Precise Financial Systems logo",
    summary:
      "Worked closely with a lead engineer while learning the foundations of .NET development in a financial-software environment.",
    contribution:
      "Built an early foundation in backend engineering through guided system reviews, debugging, and feedback on existing software, with a growing appreciation for the care financial systems require.",
    stack: [".NET", "C#", "JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    company: "Unified Payment Services Limited",
    detail: "Payment processing",
    role: "Backend Developer",
    engagement: "Internship",
    period: "Mar 2024 — Sep 2024",
    href: "https://up-ng.com/",
    logo: "/images/work/unified-payments.png",
    logoAlt: "Unified Payments logo",
    summary:
      "Resolved backend bugs in JavaScript and Node.js services, improving system stability and performance throughout the internship.",
    contribution:
      "Reviewed existing systems with my lead, shared technical feedback, and implemented fixes that helped reduce reported backend issues.",
    stack: ["JavaScript", "Node.js", "REST APIs", "Debugging"],
  },
];

const projects: Array<{
  name: string;
  description: string;
  stack: string;
  category: string;
  href?: string;
  image?: string;
  imageAlt?: string;
}> = [
  {
    name: "HebronBites",
    description:
      "A campus food ordering platform that brings vendors, menus, payments, and delivery tracking into one flow. Built to make it easier for students to discover meals, place orders, and follow them from checkout to delivery.",
    stack: "Node.js · Express · Sequelize · PostgreSQL · Paystack",
    category: "Platform project",
    image: "/images/work/hebronbites.png",
    imageAlt: "HebronBites logo",
  },
  {
    name: "Buga Travels",
    description:
      "A school-focused ride-sharing platform that helps students book individual or shared rides when schools resume or close for breaks. It brings riders and drivers together around those peak travel periods, making the journey home or back to school easier to coordinate.",
    stack: "Node.js · Express · Sequelize · PostgreSQL",
    category: "Platform project",
    image: "/images/work/buga.jpeg",
    imageAlt: "Buga Travels logo",
  },
];

const stackGroups = [
  {
    label: "Product interfaces",
    tools: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    label: "Services & APIs",
    tools: ["Node.js", "NestJS", "Express", "REST", "Webhooks", "OpenAPI"],
  },
  {
    label: "Data & delivery",
    tools: ["PostgreSQL", "MongoDB", "Redis", "Queues", "Docker", "AWS", "Heroku"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main className="site-shell">
      <MotionController />
      <header className="hero">
        <div className="hero-topline">
          <div className="identity-cluster">
            <a className="identity-mark" href="#top" aria-label="Back to top">
              <span className="identity-photo">
                <Image
                  src="/images/samuel.JPG"
                  alt=""
                  fill
                  priority
                  sizes="50px"
                />
              </span>
              <i />
            </a>
            <div className="identity-copy">
              <h1>Samuel Ohiani</h1>
              <span>Full-stack Engineer</span>
              <p className="identity-roleline">Backend-leaning</p>
            </div>
          </div>
          <div className="hero-controls">
            <span className="availability"><i /> Open to thoughtful work</span>
            <ThemeToggle />
          </div>
        </div>

        <div className="hero-layout" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Software systems · Lagos, Nigeria</p>
            <p className="hero-lede">
              I build financial products from the interface down to the systems
              that make them reliable APIs, payment flows, data models,
              integrations, queues, and the product surfaces around them.
            </p>
            <div className="hero-links">
              {socialLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>

          <aside className="engineering-note">
            <span className="note-index">01 / PROFILE</span>
            <p>
              My best work sits between <strong>product clarity</strong> and
              <strong> engineering depth</strong>.
            </p>
            <dl>
              <div><dt>Current focus</dt><dd>Fintech systems</dd></div>
              <div><dt>Strongest in</dt><dd>Backend architecture</dd></div>
              <div><dt>Also building</dt><dd>Full-stack products</dd></div>
            </dl>
          </aside>
        </div>
      </header>

      <section className="principles" aria-label="Engineering principles" data-reveal>
        <article>
          <span>01</span>
          <h2>Make failure predictable.</h2>
          <p>Retries, timeouts, idempotency, and clear errors are product features.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Keep complexity behind the API.</h2>
          <p>Good contracts let teams move quickly without memorising every edge case.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Build the whole useful thing.</h2>
          <p>I can move from database and service logic to a clear Next.js interface.</p>
        </article>
      </section>

      <section className="section-block" id="experience" data-reveal>
        <div className="section-heading">
          <div>
            <span className="section-index">02 / EXPERIENCE</span>
            <h2>Work that moved money—and me—forward.</h2>
          </div>
          <p>Two current roles, plus two formative backend internships.</p>
        </div>

        <div className="experience-ledger">
          {experience.map((item, index) => (
            <article className="experience-entry" key={item.company}>
              <div className="experience-number">0{index + 1}</div>
              <div className="experience-company">
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="company-logo">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      fill
                      sizes="44px"
                    />
                  </span>
                  <span className="company-link-copy">
                    <b>{item.company}</b>
                    {item.detail ? <small>{item.detail}</small> : null}
                  </span>
                  <Arrow />
                </a>
              </div>
              <div className="experience-story">
                <div className="experience-role">
                  <h3>{item.role}</h3>
                  <span>{item.engagement}</span>
                  <time>{item.period}</time>
                </div>
                <p>{item.summary}</p>
                <p className="experience-contribution">{item.contribution}</p>
                <ul className="tech-list" aria-label={`${item.company} technologies`}>
                  {item.stack.map((tool) => <li key={tool}>{tool}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="projects" data-reveal>
        <div className="section-heading">
          <div>
            <span className="section-index">03 / BUILDS</span>
            <h2>Products, not just repositories.</h2>
          </div>
          <p>Selected independent and collaborative work.</p>
        </div>

        <article className="qualiflow-feature">
          <div className="qualiflow-copy">
            <div className="project-title-row">
              <div>
                <span>Live product · 2026</span>
                <h3>Qualiflow</h3>
              </div>
              <strong>01</strong>
            </div>
            <p>
              A privacy-first lead qualification tool that turns inconsistent
              CSV exports into an explainable, ranked sales pipeline. Every
              recommendation shows its reasoning, and uploaded files are
              processed in memory rather than stored.
            </p>
            <div className="project-actions">
              <a href="https://leads-qualification-app.vercel.app/" target="_blank" rel="noreferrer">
                Open product <Arrow />
              </a>
              <a href="https://github.com/samohiani/leads-qualification-app" target="_blank" rel="noreferrer">
                Read the code <Arrow />
              </a>
            </div>
          </div>

          <div className="qualification-flow" aria-label="Qualiflow processing flow">
            <div className="flow-step"><span>01</span><b>Ingest</b><small>UTF-8 CSV</small></div>
            <i aria-hidden="true" />
            <div className="flow-step"><span>02</span><b>Clean</b><small>Normalise + dedupe</small></div>
            <i aria-hidden="true" />
            <div className="flow-step"><span>03</span><b>Score</b><small>Five dimensions</small></div>
            <i aria-hidden="true" />
            <div className="flow-step"><span>04</span><b>Explain</b><small>Reason + flags</small></div>
            <i aria-hidden="true" />
            <div className="flow-step"><span>05</span><b>Export</b><small>Ranked + audit CSV</small></div>
          </div>

          <div className="qualiflow-facts">
            <span>No database</span>
            <span>Up to 10,000 leads</span>
            <span>100-point scoring model</span>
            <span>Next.js · TypeScript · Node.js</span>
          </div>
        </article>

        <div className="project-ledger">
          {projects.map((project, index) => (
            <article key={project.name}>
              <span>0{index + 2}</span>
              <div>
                <div className="project-name-line">
                  <span className={`project-logo${project.image ? "" : " project-logo--empty"}`}>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? ""}
                        fill
                        sizes="38px"
                      />
                    ) : null}
                  </span>
                  <h3>{project.name}</h3>
                </div>
                <span className="project-category">{project.category}</span>
                <p>{project.description}</p>
              </div>
              <small>{project.stack}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block toolkit-section" data-reveal>
        <div className="section-heading">
          <div>
            <span className="section-index">04 / TOOLKIT</span>
            <h2>Comfortable across the stack.</h2>
          </div>
          <p>Verified across my résumé and current local work.</p>
        </div>

        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="portfolio-footer" id="contact" data-reveal>
        <div className="footer-invite">
          <span>Have a product problem worth untangling?</span>
          <a href="mailto:ohianisammy2005@gmail.com">
            Let&apos;s talk <Arrow />
          </a>
        </div>
        <div className="footer-meta">
          <span>© 2026 Samuel Ohiani</span>
          <span>Designed and built in Lagos · WAT</span>
        </div>
        <div className="sammy-wordmark" aria-hidden="true">
          <span>Sammy</span>
        </div>
      </footer>
    </main>
  );
}
