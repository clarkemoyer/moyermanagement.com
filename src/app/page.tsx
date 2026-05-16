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
          <a className="logo" href="#top">
            <img
              src="/wp-content/uploads/2023/12/Moyer-Management-MM-Logo-3D-Black--scaled.jpg"
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
              Welcome to Moyer Management, where we offer specialized management solutions tailored
              to your specific needs. Whether you need assistance with property management, coin
              collection management, physical investments, or digital assets we’ve got you covered.
              Our dedicated team provides expert advice and guidance to ensure the efficient
              management and maximization of your assets. With our proven process of Identify,
              Assess, Improve, and Repeat, you can trust that you or your company are in capable
              hands. Choose Moyer Management for cost reduction, revenue increase, and clear
              management objectives. Our values center around always doing the right thing, so you
              can rely on us to make the best decisions for your business. Don’t hesitate, start now
              with a free consultation. Help for all your management issues is just a click away.
            </p>
            <p>
              At Moyer Management, we specialize in managing a wide range of physical assets,
              including land, trees, crops, and tangible commodities. With our expertise and
              dedication, we offer tailored management solutions that are designed to meet your
              specific needs. Our team of professionals is committed to providing expert advice and
              guidance, ensuring that your assets are well-managed and maximized for success. Don’t
              hesitate, get started today by scheduling a free consultation. Help with all your
              management issues is just a click away.
            </p>
          </div>
          <div className="accordion-list">
            <details className="accordion">
              <summary>Property Management</summary>
              <p>Management support tailored to each owner and asset.</p>
            </details>
            <details className="accordion">
              <summary>Coin Collection Management</summary>
              <p>Cataloging, tracking, and stewardship support for coin collections.</p>
            </details>
            <details className="accordion">
              <summary>Physical Investments</summary>
              <p>Clear management practices for tangible assets and long-term value protection.</p>
            </details>
            <details className="accordion">
              <summary>Digital Assets</summary>
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
