export default function Home() {
  return (
    <main className="wp-migration management">
      <header className="site-header">
        <a className="logo" href="#top">
          <img
            src="https://moyermanagement.com/wp-content/uploads/2023/12/Moyer-Management-MM-Logo-3D-Black--scaled.jpg"
            alt="Moyer Management"
          />
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <button aria-label="Open menu">☰</button>
      </header>
      <section id="top" className="hero">
        <div className="hero-copy">
          <h1>Moyer Management</h1>
          <p>Management Solutions For Your Specific Needs.</p>
          <a className="button" href="#contact">
            Schedule a Free Consultation
          </a>
        </div>
      </section>
      <section id="services" className="section two-col">
        <div>
          <h2>Specialized Management Consultation</h2>
          <p>
            Focused management support for properties, collections, physical investments, and
            digital assets.
          </p>
        </div>
        <div className="accordion-list">
          {' '}
          <details className="accordion">
            <summary>Property Management</summary>
            <p>
              Property Management support for Moyermanagement clients, migrated from the live
              WordPress content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Coin Collection Management</summary>
            <p>
              Coin Collection Management support for Moyermanagement clients, migrated from the live
              WordPress content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Physical Investments</summary>
            <p>
              Physical Investments support for Moyermanagement clients, migrated from the live
              WordPress content into a static Next.js experience.
            </p>
          </details>
          <details className="accordion">
            <summary>Digital Assests</summary>
            <p>
              Digital Assests support for Moyermanagement clients, migrated from the live WordPress
              content into a static Next.js experience.
            </p>
          </details>
        </div>
      </section>
      <section id="process" className="section">
        <h2>Our Process</h2>
        <div className="mini-grid">
          {' '}
          <article className="mini-card">
            <h3>Identify</h3>
            <p>
              Identify is preserved as a visible content area from the original WordPress homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Assess</h3>
            <p>
              Assess is preserved as a visible content area from the original WordPress homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Improve</h3>
            <p>
              Improve is preserved as a visible content area from the original WordPress homepage.
            </p>
          </article>
          <article className="mini-card">
            <h3>Repeat</h3>
            <p>
              Repeat is preserved as a visible content area from the original WordPress homepage.
            </p>
          </article>
        </div>
      </section>
      <section className="blue-band">
        <div>
          <h2>Rest Assured, You &amp; Your Company is Covered</h2>
          <p>
            Moyer Management brings a practical identify, assess, improve, and repeat cycle to every
            engagement.
          </p>
          <a className="button light" href="#contact">
            Get Started
          </a>
        </div>
      </section>
      <section className="section mission">
        <article>
          <h3>Mission</h3>
          <p>
            Provide specific, practical management solutions for clients who need organized support.
          </p>
        </article>
        <article>
          <h3>Vision</h3>
          <p>
            Help individuals and organizations make confident decisions about their assets and
            operations.
          </p>
        </article>
        <article>
          <h3>Values</h3>
          <p>Clarity, stewardship, trust, and repeatable improvement.</p>
        </article>
      </section>
      <section id="contact" className="contact">
        <h2>Get Started Today</h2>
        <h3>Book a Free 30min Consultation</h3>
        <a className="button" href="mailto:info@moyermanagement.com">
          Make An Appointment
        </a>
      </section>
    </main>
  )
}
