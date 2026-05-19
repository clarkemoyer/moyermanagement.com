export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  var params = new URLSearchParams(window.location.search);
  var pMap = new Map([['1','/hello-world/']]);
  var pageMap = new Map([['66','/']]);
  var target = pMap.get(params.get('p')) || pageMap.get(params.get('page_id'));
  if (target && window.location.pathname === '/') {
    window.location.replace(target);
  }
})();
          `,
        }}
      />
      <main className="wp-migration management">
        <header className="site-header">
          <a className="logo wordmark-link" href="#top" aria-label="Moyer Management — home">
            <span className="logo-mark" aria-hidden="true">MM</span>
            <span className="logo-text">
              <span className="logo-name">Moyer Management</span>
              <span className="logo-tag">Specialized Management Solutions</span>
            </span>
          </a>
          <nav>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="button button--primary nav-cta" href="#contact">
            Free Consultation
          </a>
          <button type="button" aria-label="Open menu" className="menu-toggle">
            ☰
          </button>
        </header>
        <section id="top" className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Specialized Management Solutions</span>
            <h1>
              Management built around <em>your</em> assets.
            </h1>
            <p>
              Property, coin collections, physical investments, and digital assets — handled with a
              proven Identify → Assess → Improve → Repeat process.
            </p>
            <div className="hero-actions">
              <a className="button button--primary button--lg" href="#contact">
                Schedule a Free Consultation
              </a>
              <a className="button button--ghost button--lg" href="#process">
                See Our Process
              </a>
            </div>
          </div>
        </section>
        <section id="services" className="section services-section">
          <div className="services-intro">
            <span className="section-eyebrow">What we do</span>
            <h2>Specialized management consultation</h2>
            <p className="lead">
              Tailored management solutions across four core asset categories — each engagement
              built around your specific goals, timelines, and risk tolerance.
            </p>
            <ul className="checklist">
              <li>Identify, Assess, Improve, Repeat — our proven four-stage process</li>
              <li>Cost reduction and revenue growth with clear, measurable objectives</li>
              <li>Always do the right thing — transparent decisions you can audit</li>
              <li>Help with land, trees, crops, and tangible commodities included</li>
            </ul>
          </div>
          <div className="accordion-list" role="list">
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true">🏠</span>
                <span className="accordion-title">Property Management</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Management support tailored to each owner and asset — leasing, maintenance, and reporting.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true">🪙</span>
                <span className="accordion-title">Coin Collection Management</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Cataloging, valuation tracking, and stewardship support for numismatic collections.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true">📦</span>
                <span className="accordion-title">Physical Investments</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Clear management practices for tangible assets and long-term value protection.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true">💾</span>
                <span className="accordion-title">Digital Assets</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Practical organization for digital records, accounts, and online holdings.</p>
            </details>
          </div>
        </section>
        <section id="process" className="section process-section">
          <div className="process-intro">
            <span className="section-eyebrow">How it works</span>
            <h2>A proven four-step process</h2>
            <p className="lead">
              The same loop runs every engagement — clarity at every step, no surprises.
            </p>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <div className="process-number">01</div>
              <h3>Identify</h3>
              <p>
                Discover the assets — and asset types — that matter to your goals, with a clear
                inventory you can act on.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number">02</div>
              <h3>Assess</h3>
              <p>
                Evaluate the current mix, surface gaps, and align assets with your goals so
                decisions are informed and resources optimized.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number">03</div>
              <h3>Improve</h3>
              <p>
                Rebalance, optimize, and align — sharpening allocation and management to support
                your specific objectives.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number">04</div>
              <h3>Repeat</h3>
              <p>
                Refine continuously. Learning compounds — and so does the value of a portfolio
                that's actively managed.
              </p>
            </article>
          </div>
        </section>
        <section className="blue-band">
          <div className="blue-band-inner">
            <div className="blue-band-copy">
              <span className="section-eyebrow eyebrow--light">Risk mitigation</span>
              <h2>
                Rest assured.<br />
                Your company is covered.
              </h2>
              <p>
                Reduce organizational risk with a partner you can audit. The same Identify →
                Assess → Improve → Repeat loop runs in the background — quietly, continuously —
                so your assets stay aligned with your goals.
              </p>
              <div className="hero-actions">
                <a className="button button--primary button--lg" href="#contact">
                  Schedule a Free Consultation
                </a>
                <a className="button button--ghost button--lg" href="#services">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="blue-band-stats">
              <div className="stat">
                <div className="stat-value">4</div>
                <div className="stat-label">Asset categories<br />we manage</div>
              </div>
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Transparent<br />engagement</div>
              </div>
              <div className="stat">
                <div className="stat-value">∞</div>
                <div className="stat-label">Continuous<br />improvement loop</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section mission">
          <article>
            <h3>Mission</h3>
            <p>Reduce Cost — Increase Revenue</p>
          </article>
          <article>
            <h3>Vision</h3>
            <p>A simple set of management objectives.</p>
          </article>
          <article>
            <h3>Values</h3>
            <p>Always be caught doing the right thing.</p>
          </article>
        </section>
        <section id="contact" className="contact">
          <h2>Get Started Today</h2>
          <h3>Book a Free 30min Consultation</h3>
          <a className="button" href="mailto:info@moyermanagement.com">
            Make An Appointment
          </a>
          <nav className="social-links" aria-label="Social links">
            <a href="#contact">Facebook</a>
          </nav>
        </section>
      </main>
    </>
  )
}
