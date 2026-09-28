import WorkShowcase from "./components/WorkShowcase";
import ThemeToggle from "./components/ThemeToggle";
import MotionController from "./components/MotionController";
import { content } from "./content";

function IntroLoader() {
  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-loader__panel intro-loader__panel--left" />
      <div className="intro-loader__panel intro-loader__panel--right" />
      <span className="intro-loader__haze" />
      <span className="intro-loader__horizon" />
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
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Samuel Ohiani, back to top">{content.name}<span> / {content.role}</span></a>
        <div className="header-actions">
          <nav aria-label="Primary navigation">
            {content.navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
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

      <WorkShowcase />

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
          <span>{content.presentation.aboutFocus}</span>
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
        <a className="contact-mail" href={`mailto:${content.contact.email}`} aria-label="Start a conversation by email">{content.contact.action}</a>
        <div className="contact-links">{content.contact.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}</div>
      </section>

      <footer className="site-footer"><span>© 2026 {content.name}</span><a href="#top">{content.presentation.backToTop} ↑</a></footer>
    </main>
  );
}
