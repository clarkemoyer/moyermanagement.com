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
          <details className="accordion">
            <summary>Property Management</summary>
            <p>
              Organized property oversight, documentation, and practical management support tailored
              to each owner and asset.
            </p>
          </details>
          <details className="accordion">
            <summary>Coin Collection Management</summary>
            <p>
              Cataloging, tracking, and stewardship support for coin collections and other
              specialized holdings.
            </p>
          </details>
          <details className="accordion">
            <summary>Physical Investments</summary>
            <p>
              Clear management practices for tangible assets, risk reduction, and long-term value
              protection.
            </p>
          </details>
          <details className="accordion">
            <summary>Digital Assets</summary>
            <p>
              Practical digital asset organization so records, accounts, and online holdings stay
              understandable and protected.
            </p>
          </details>
        </div>
      </section>
      <section id="process" className="section">
        <h2>Our Process</h2>
        <div className="mini-grid">
          <article className="mini-card">
            <h3>Identify</h3>
            <p>
              Clarify the assets, responsibilities, risks, and goals that need management attention.
            </p>
          </article>
          <article className="mini-card">
            <h3>Assess</h3>
            <p>
              Review the current state, identify gaps, and prioritize the most important
              improvements.
            </p>
          </article>
          <article className="mini-card">
            <h3>Improve</h3>
            <p>
              Implement practical management steps, documentation, and repeatable operating habits.
            </p>
          </article>
          <article className="mini-card">
            <h3>Repeat</h3>
            <p>
              Revisit the plan regularly so the management approach stays current as needs change.
            </p>
          </article>
        </div>
      </section>
      <section className="blue-band">
        <div>
          <h2>Rest Assured, You &amp; Your Company Are Covered</h2>
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
