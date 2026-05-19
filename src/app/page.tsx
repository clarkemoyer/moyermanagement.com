import {
  Home as HomeIcon,
  Coins,
  Package,
  HardDrive,
  Target,
  Compass,
  Scale,
  ArrowRight,
  PhoneCall,
  Mail,
  Search,
  ClipboardCheck,
  TrendingUp,
  Repeat,
} from 'lucide-react'
import { MobileNav } from './mobile-nav'

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
          <MobileNav />
        </header>
        <section id="top" className="hero">
          <div className="hero-inner">
            <div className="hero-copy">
              <span className="eyebrow">Specialized Management Solutions</span>
              <h1>
                Management built around <em>your</em> assets.
              </h1>
              <p>
                Property, coin collections, physical investments, and digital assets — handled with
                a proven Identify → Assess → Improve → Repeat process.
              </p>
              <div className="hero-actions">
                <a className="button button--primary button--lg" href="#contact">
                  Schedule a Free Consultation
                  <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
                </a>
                <a className="button button--ghost button--lg" href="#process">
                  See Our Process
                </a>
              </div>
              <ul className="hero-trust" aria-label="What's included">
                <li><span aria-hidden="true">✓</span> Free 30-min consultation</li>
                <li><span aria-hidden="true">✓</span> Transparent, auditable decisions</li>
                <li><span aria-hidden="true">✓</span> No long-term commitments</li>
              </ul>
            </div>
            <aside className="hero-visual" aria-hidden="true">
              <div className="hero-card hero-card--main">
                <div className="hero-card-row">
                  <div className="hero-card-pill">Identify</div>
                  <div className="hero-card-pill">Assess</div>
                </div>
                <div className="hero-card-row">
                  <div className="hero-card-pill">Improve</div>
                  <div className="hero-card-pill">Repeat</div>
                </div>
                <div className="hero-card-meter">
                  <span className="hero-card-meter-fill" />
                </div>
                <div className="hero-card-stats">
                  <div>
                    <div className="hero-card-stat-value">+24%</div>
                    <div className="hero-card-stat-label">Efficiency</div>
                  </div>
                  <div>
                    <div className="hero-card-stat-value">−18%</div>
                    <div className="hero-card-stat-label">Overhead</div>
                  </div>
                </div>
              </div>
              <div className="hero-card hero-card--float">
                <Target size={18} strokeWidth={2.5} />
                <div>
                  <div className="hero-card-float-label">On-target</div>
                  <div className="hero-card-float-value">Quarterly review</div>
                </div>
              </div>
            </aside>
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
                <span className="accordion-icon" aria-hidden="true"><HomeIcon size={20} strokeWidth={2} /></span>
                <span className="accordion-title">Property Management</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Management support tailored to each owner and asset — leasing, maintenance, and reporting.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true"><Coins size={20} strokeWidth={2} /></span>
                <span className="accordion-title">Coin Collection Management</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Cataloging, valuation tracking, and stewardship support for numismatic collections.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true"><Package size={20} strokeWidth={2} /></span>
                <span className="accordion-title">Physical Investments</span>
                <span className="accordion-chev" aria-hidden="true">+</span>
              </summary>
              <p>Clear management practices for tangible assets and long-term value protection.</p>
            </details>
            <details className="accordion" role="listitem">
              <summary>
                <span className="accordion-icon" aria-hidden="true"><HardDrive size={20} strokeWidth={2} /></span>
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
              <div className="process-number" aria-hidden="true">
                <Search size={22} strokeWidth={2} />
                <span className="process-step">01</span>
              </div>
              <h3>Identify</h3>
              <p>
                Discover the assets — and asset types — that matter to your goals, with a clear
                inventory you can act on.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number" aria-hidden="true">
                <ClipboardCheck size={22} strokeWidth={2} />
                <span className="process-step">02</span>
              </div>
              <h3>Assess</h3>
              <p>
                Evaluate the current mix, surface gaps, and align assets with your goals so
                decisions are informed and resources optimized.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number" aria-hidden="true">
                <TrendingUp size={22} strokeWidth={2} />
                <span className="process-step">03</span>
              </div>
              <h3>Improve</h3>
              <p>
                Rebalance, optimize, and align — sharpening allocation and management to support
                your specific objectives.
              </p>
            </article>
            <article className="process-card">
              <div className="process-number" aria-hidden="true">
                <Repeat size={22} strokeWidth={2} />
                <span className="process-step">04</span>
              </div>
              <h3>Repeat</h3>
              <p>
                Refine continuously. Learning compounds — and so does the value of a portfolio
                that&apos;s actively managed.
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
        <section className="section mission-section">
          <div className="mission-intro">
            <span className="section-eyebrow">What we stand for</span>
            <h2>Mission, Vision &amp; Values</h2>
          </div>
          <div className="mission">
            <article className="mvv-card">
              <div className="mvv-icon" aria-hidden="true"><Target size={26} strokeWidth={2} /></div>
              <h3>Mission</h3>
              <p className="mvv-headline">Reduce cost. Increase revenue.</p>
              <p className="mvv-body">
                A clear management commitment — every engagement starts with the financial outcome
                you want to see.
              </p>
            </article>
            <article className="mvv-card">
              <div className="mvv-icon" aria-hidden="true"><Compass size={26} strokeWidth={2} /></div>
              <h3>Vision</h3>
              <p className="mvv-headline">A simple set of management objectives.</p>
              <p className="mvv-body">
                Strip away complexity. Surface the few decisions that matter most for your assets
                and your timeline.
              </p>
            </article>
            <article className="mvv-card">
              <div className="mvv-icon" aria-hidden="true"><Scale size={26} strokeWidth={2} /></div>
              <h3>Values</h3>
              <p className="mvv-headline">Always be caught doing the right thing.</p>
              <p className="mvv-body">
                Transparency by default. If we can&apos;t explain a decision in writing, we won&apos;t
                make it.
              </p>
            </article>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="contact-inner">
            <span className="section-eyebrow eyebrow--light">Let&apos;s talk</span>
            <h2>Get started today</h2>
            <p className="contact-lead">
              Book a free 30-minute consultation — no pressure, no obligation, just a clear next
              step for your assets.
            </p>
            <div className="contact-actions">
              <a className="button button--primary button--lg" href="mailto:info@moyermanagement.com">
                <Mail size={18} strokeWidth={2.5} aria-hidden="true" />
                Make an Appointment
              </a>
              <a className="button button--ghost button--lg" href="tel:+15551234567">
                <PhoneCall size={18} strokeWidth={2.5} aria-hidden="true" />
                Or call us
              </a>
            </div>
            <nav className="social-links" aria-label="Social links">
              <a
                href="https://www.facebook.com/profile.php?id=61551953495712"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12a10 10 0 1 0-11.6 9.88V14.9H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.77-3.9 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 2.9h-2.33v6.98A10 10 0 0 0 22 12z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a href="mailto:info@moyermanagement.com" aria-label="Email">
                <Mail size={18} strokeWidth={2} aria-hidden="true" />
                <span>info@moyermanagement.com</span>
              </a>
            </nav>
          </div>
        </section>
        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="wordmark-link" aria-hidden="true">
                <span className="logo-mark">MM</span>
                <span className="logo-text">
                  <span className="logo-name">Moyer Management</span>
                  <span className="logo-tag">Specialized Management Solutions</span>
                </span>
              </div>
              <p className="footer-tag">
                Management built around your assets — property, coin collections, physical
                investments, and digital holdings.
              </p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/terms-of-service/">Terms of Service</a></li>
                <li><a href="/cookie-policy/">Cookie Policy</a></li>
                <li><a href="/donation-policy/">Donation Policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Security</h4>
              <ul>
                <li><a href="/security-acknowledgements/">Acknowledgements</a></li>
                <li><a href="/vulnerability-disclosure-policy/">Vulnerability Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Moyer Management. All rights reserved.</p>
            <p>Built with care · Hosted on GitHub Pages</p>
          </div>
        </footer>
      </main>
    </>
  )
}
