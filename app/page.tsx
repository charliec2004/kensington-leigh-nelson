import Image from "next/image";
import Link from "next/link";
import { ContactCopy } from "./contact-copy";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const profileHighlights = [
  {
    label: "Education",
    value: "Chapman University",
    detail: "Business major",
  },
  {
    label: "Academic focus",
    value: "Economics and finance",
    detail: "Macro, micro, and markets",
  },
  {
    label: "Current experience",
    value: "IEQ Capital",
    detail: "Client-facing wealth management intern",
    logo: `${basePath}/ieq-logo-blue.webp`,
  },
];

const focusAreas = [
  "Macro and microeconomic context",
  "Stock research and business fundamentals",
  "Client-facing wealth management",
  "Advisory culture and service standards",
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Kensington Leigh Nelson home">
          KLN
        </Link>
        <nav className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#education">Education</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section-reveal" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Finance and wealth management</p>
          <h1 className="hero-title" id="hero-title">
            Kensington Leigh Nelson
          </h1>
          <p className="hero-lede">
            Chapman University business graduate with a finance-focused
            economics minor, currently working as a wealth management intern at
            IEQ Capital in San Francisco.
          </p>
          <div className="hero-actions" aria-label="Portfolio sections">
            <a className="button button-primary" href="#contact">
              Contact
            </a>
            <a className="button button-secondary" href="#focus">
              Career focus
            </a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Kensington Leigh Nelson">
          <div className="portrait-panel portrait-panel-back" />
          <div className="portrait-panel portrait-panel-mid" />
          <div className="portrait-frame">
            <Image
              className="portrait-image"
              src={`${basePath}/kensington-portrait-clean.webp`}
              alt="Kensington Leigh Nelson"
              width={900}
              height={1132}
              priority
              sizes="(max-width: 900px) 86vw, 36vw"
            />
          </div>
        </div>
      </section>

      <section className="signal-strip section-reveal" aria-label="Profile highlights">
        {profileHighlights.map((item) => (
          <article className="signal" key={item.label}>
            <p>{item.label}</p>
            <h2 className={item.logo ? "signal-title signal-title-with-logo" : "signal-title"}>
              {item.logo ? (
                <Image
                  className="signal-logo"
                  src={item.logo}
                  alt=""
                  width={348}
                  height={328}
                />
              ) : null}
              <span>{item.value}</span>
            </h2>
            <span>{item.detail}</span>
          </article>
        ))}
      </section>

      <section className="profile-grid section-reveal" id="profile">
        <div className="section-heading">
          <p className="eyebrow">Profile</p>
          <h2>Building a complete view of finance.</h2>
        </div>
        <div className="section-body">
          <p>
            Kensington is a Chapman University business graduate with an
            economics minor and an interest in both the technical and
            client-facing sides of finance. She uses macro and microeconomic
            context to understand the larger forces around markets and the
            company-level details that shape individual investment decisions.
          </p>
          <p>
            She especially enjoys understanding the essence of a stock: the
            business behind it, the industry it sits in, the market environment
            around it, and the fundamentals that explain why it may matter in a
            portfolio.
          </p>
          <p>
            Through her internship at IEQ Capital in San Francisco, she is also
            gaining client-facing experience inside private wealth. That work
            has deepened her interest in the advisory culture of finance: clear
            communication, careful preparation, and the service standards that
            support long-term client relationships.
          </p>
        </div>
      </section>

      <section className="timeline section-reveal" id="education">
        <div className="section-heading">
          <p className="eyebrow">Education and experience</p>
          <h2>A concise foundation for wealth management.</h2>
        </div>

        <div className="timeline-list">
          <article className="timeline-item">
            <p className="timeline-label">Chapman University</p>
            <div className="timeline-content">
              <h3>Business major</h3>
              <p>
                Undergraduate business training supported by an economics minor
                that connects macroeconomic forces, microeconomic behavior, and
                finance.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <p className="timeline-label">IEQ Capital, San Francisco</p>
            <div className="timeline-content">
              <h3>Wealth Management Intern</h3>
              <p>
                Current client-facing experience inside a private wealth firm,
                supporting Kensington&apos;s interest in technical finance,
                advisory culture, and client service.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="focus section-reveal" id="focus">
        <div className="section-heading">
          <p className="eyebrow">Career focus</p>
          <h2>Interested in the full picture behind good advice.</h2>
        </div>
        <div className="focus-panel">
          <p>
            Kensington is focused on the work behind good advice: understanding
            the company behind a stock, reading the economic context around it,
            and communicating clearly with clients.
          </p>
          <ul aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="contact section-reveal" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Open to finance and wealth management opportunities.</h2>
        </div>
        <ContactCopy />
      </section>

      <footer className="site-footer">
        <p>Kensington Leigh Nelson</p>
        <div className="footer-tags" aria-label="Portfolio summary">
          <span>Chapman University graduate</span>
          <span>Business</span>
          <span>Economics and finance</span>
        </div>
      </footer>
    </main>
  );
}
