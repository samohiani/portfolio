import WorkShowcase from "./components/WorkShowcase";
import ContactDialog from "./components/ContactDialog";
import ThemeToggle from "./components/ThemeToggle";
import MotionController from "./components/MotionController";
import { content } from "./content";
import { stackIconPaths } from "./stack-icons";

function StackTool({ tool }: { tool: string }) {
  const path = stackIconPaths[tool];

  return (
    <li className="stack-tool">
      {path && (
        <svg viewBox="0 0 24 24" fill="currentColor" focusable="false" aria-hidden="true">
          <path d={path} />
        </svg>
      )}
      <span>{tool}</span>
    </li>
  );
}

function IntroLoader() {
  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-loader__panel intro-loader__panel--left" />
      <div className="intro-loader__panel intro-loader__panel--right" />
      <span className="intro-loader__haze" />
      <span className="intro-loader__interference" />
      <span className="intro-loader__horizon" />
      <span className="intro-loader__rift" />
      <div className="intro-loader__identity">
        <span className="intro-loader__rule" />
        <span className="intro-loader__title" data-text="SAMUEL">SAMUEL</span>
        <span className="intro-loader__title intro-loader__title--second" data-text="OHIANI">OHIANI</span>
        <span className="intro-loader__rule intro-loader__rule--bottom" />
        <span className="intro-loader__role">{content.role}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="page-shell">
      <MotionController />
      <IntroLoader />
      <ContactDialog email={content.contact.email} resumeHref={content.contact.resumeHref} links={content.contact.links} />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Samuel Ohiani, back to top">{content.name}<span> / {content.role}</span></a>
        <nav aria-label="Primary navigation">
          {content.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        </nav>
        <ThemeToggle />
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-portal" aria-hidden="true">
          <span className="hero-portal__halo" />
          <span className="hero-portal__rift" />
          <svg className="hero-portal__cracks" viewBox="0 0 230 700" preserveAspectRatio="none" focusable="false" aria-hidden="true">
            <path d="M112 8 99 105 119 174 107 263 128 356 105 447 121 547 108 692" />
            <path d="M100 105 54 142 25 202 M119 174 164 206 199 274 M107 263 69 302 45 370 M128 356 169 391 193 453 M105 447 56 484 26 557 M121 547 160 590 177 661" />
          </svg>
          <span className="hero-portal__embers" />
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <h1 id="hero-title"><span>{content.hero.headline[0]}</span>{" "}<span>{content.hero.headline[1]}</span></h1>
            <div className="hero-intro">
              <p>{content.hero.description}</p>
              <div className="hero-actions">
                <a href="#work" className="main-link">{content.hero.workLink}<span aria-hidden="true">↓</span></a>
                <a href={`mailto:${content.contact.email}`} className="quiet-link">{content.hero.contactLink}</a>
              </div>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Current work">
            <span className="hero-aside__line" aria-hidden="true" />
            <p className="hero-aside__label">{content.presentation.currentLabel}</p>
            <p className="hero-aside__company">{content.presentation.currentCompany}</p>
            <p className="hero-aside__statement">{content.presentation.currentStatement}</p>
            <p className="hero-aside__detail">{content.presentation.currentDetail}</p>
          </aside>
        </div>
      </section>

      <div className="signal-divider" aria-hidden="true"><span /></div>

      <WorkShowcase />

      <section className="stack" id="stack" aria-labelledby="stack-title">
        <div className="section-head stack-head">
          <div>
            <h2 id="stack-title">{content.sections.stack}</h2>
            <p>{content.presentation.stackIntro}</p>
          </div>
          <label className="stack-motion-control">
            <input type="checkbox" aria-label="Pause or resume stack animation" />
            <span className="stack-motion-control__pause" aria-hidden="true">Ⅱ Pause</span>
            <span className="stack-motion-control__resume" aria-hidden="true">▶ Play</span>
          </label>
        </div>
        <div className="stack-system" aria-label="Tools I use, grouped by area">
          <div className="stack-system__top" aria-hidden="true"><span>In rotation</span><span className="stack-system__pulse" /></div>
          {content.stack.map((layer) => (
            <div className="stack-layer" key={layer.label}>
              <div className="stack-layer__identity">
                <h3>{layer.label}</h3>
                <p>{layer.context}</p>
              </div>
              <div className="stack-layer__viewport">
                <div className="stack-layer__track">
                  <ul className="stack-layer__tools">
                    {layer.tools.map((tool) => <StackTool key={tool} tool={tool} />)}
                  </ul>
                  <ul className="stack-layer__tools stack-layer__tools--duplicate" aria-hidden="true">
                    {layer.tools.map((tool) => <StackTool key={tool} tool={tool} />)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="section-head experience-head">
          <h2 id="experience-title">{content.sections.experience}</h2>
          <span>{content.presentation.experienceRange}</span>
        </div>
        <div className="experience-list">
          {content.experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <span className="experience-date">{item.period}</span>
              <div className="experience-role"><h3>{item.company}</h3><p>{item.role}</p></div>
              <p className="experience-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="personal-grid">
        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-head"><h2 id="about-title">{content.sections.about}</h2></div>
          <p>{content.about}</p>
        </section>
        <section className="earlier" aria-labelledby="earlier-title">
          <div className="section-head"><h2 id="earlier-title">{content.sections.earlier}</h2></div>
          {content.earlierProjects.map((project) => (
            <article key={project.name}>
              <div><h3>{project.name}</h3><span>{project.type}</span></div>
              <p>{project.detail}</p>
            </article>
          ))}
        </section>
      </div>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p>{content.contact.prompt}</p>
        <h2 id="contact-title">{content.contact.headline}</h2>
        <a className="contact-mail" href={`mailto:${content.contact.email}`}>{content.contact.action}</a>
        <div className="contact-links">
          <a className="resume-link" href={content.contact.resumeHref} download>Download résumé</a>
          {content.contact.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-signature" href="#top" aria-label="Sammy, back to top">Sammy<span aria-hidden="true">.</span></a>
        <span className="footer-credit">Samuel Ohiani<br />© 2026</span>
        <a className="footer-top" href="#top">{content.presentation.backToTop}<span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}
