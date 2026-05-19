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
        <section id="process" className="section">
          <h2>Our Process</h2>
          <div className="mini-grid">
            <article className="mini-card">
              <h3>Identify</h3>
              <p>
                Moyer Management – Your reliable ally in asset identification. Discover assets and
                asset types relevant to your goals with ease and efficiency.
              </p>
            </article>
            <article className="mini-card">
              <h3>Assess</h3>
              <p>
                Assess your current mix of assets and identify any gaps with Moyer Management.
                Discover the full potential of your assets with our expert guidance and strategic
                approach. Our team at Moyer Management is here to help you make informed decisions,
                optimize your resources, and maximize your overall performance. With our specialized
                expertise, we can ensure that your assets are aligned with your goals, enabling you
                to stay ahead in today’s dynamic market.
              </p>
            </article>
            <article className="mini-card">
              <h3>Improve</h3>
              <p>
                Based on the assessment, Moyer Management aims to enhance the overall asset holding
                and ensure a harmonious distribution in line with your goals. Our expertise lies in
                improving your financial portfolio, optimizing resource allocation, and aligning
                management percentages to support your specific objectives. Trust us to guide you
                towards a well-balanced and prosperous future.
              </p>
            </article>
            <article className="mini-card">
              <h3>Repeat</h3>
              <p>
                Never cease to enhance your positions and refine your management approach. At Moyer
                Management, we wholeheartedly believe in the power of continuous learning and
                constant improvements. We are committed to supporting your journey towards growth
                and success, prioritizing the development of your skills and leadership abilities.
              </p>
            </article>
          </div>
        </section>
        <section className="blue-band">
          <div>
            <h2>Rest Assured, You &amp; Your Company is Covered</h2>
            <p>
              Reduce Your Organization’s Risk with Moyer Management – Your Trusted Partner. Rest
              Assured, Your Company is Covered. At Moyer Management, we prioritize the importance of
              risk mitigation for organizations like yours. Our specialized management solutions are
              crafted to minimize potential risks and ensure seamless operations. With our proven
              process of Identify, Assess, Improve, and Repeat, entrusting your assets to our
              capable hands is a decision you can rely on. Our dedicated team of skilled
              professionals closely collaborates with you to identify and assess potential risks,
              empowering you to make informed decisions and proactively safeguard your organization.
              Choose Moyer Management for peace of mind, cost reduction, revenue growth, and clear
              management objectives. Your business deserves the best, so schedule a free
              consultation today and let us guide you through the intricate world of risk
              management. Help for all your management issues is only a click away.
            </p>
            <a className="button light" href="#contact">
              Get Started
            </a>
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
