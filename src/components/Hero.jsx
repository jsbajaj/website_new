import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiFolder } from 'react-icons/fi'

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero" aria-label="Hero section">

      {/* Background layers */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-dot-grid" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="container">
        <div className="hero-content">

          {/* ── Left Column ── */}
          <div className="hero-left">

            <div className="hero-available" role="status">
              <span className="hero-available-dot" aria-hidden="true" />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Jasnoor
              <span className="name-accent">Bajaj</span>
            </h1>

            <p className="hero-role">
              &lt;&nbsp;CS Student &amp; IT Professional&nbsp;/&gt;
            </p>

            <p className="hero-desc">
              Computer Science student at the University of Toledo with hands-on experience
              managing enterprise IT infrastructure, supporting 500+ users, and building
              modern software — bridging sysadmin depth with developer creativity.
            </p>

            <div className="hero-ctas">
              <a
                href="#projects"
                className="btn-primary"
                onClick={scrollTo('#projects')}
                aria-label="View my projects"
              >
                <FiFolder aria-hidden="true" />
                View Projects
              </a>
              <a
                href="/resume_jasnoor.pdf"
                download
                className="btn-secondary"
                aria-label="Download resume"
              >
                <FiDownload aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/jsbajaj"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub profile"
              >
                <FiGithub aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasnoor-bajaj/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin aria-hidden="true" />
              </a>
              <div className="hero-social-divider" aria-hidden="true" />
              <span className="hero-social-text">jasnoorsinghbajaj@gmail.com</span>
            </div>
          </div>

          {/* ── Right Column: Terminal card (stays dark for contrast) ── */}
          <div className="hero-right" aria-label="Terminal card with stats">
            <div
              className="terminal-card"
              role="img"
              aria-label="Terminal showing portfolio statistics"
            >
              <div className="terminal-header" aria-hidden="true">
                <span className="terminal-dot red"    />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green"  />
                <span className="terminal-title">jasnoor@portfolio ~ zsh</span>
              </div>

              <div className="terminal-body" aria-hidden="true">
                <div className="t-line">
                  <span className="t-prompt">❯</span>
                  <span className="t-cmd">cat</span>
                  <span className="t-str">&nbsp;./profile.json</span>
                </div>

                <div className="t-blank" />

                <div className="t-line"><span className="t-output t-key">&#123;</span></div>

                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"name"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-str">"Jasnoor Singh Bajaj"</span>
                    <span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"role"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-str">"CS Student &amp; IT Pro"</span>
                    <span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"gpa"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-num">3.55</span>
                    <span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"grad"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-str">"May 2026"</span>
                    <span className="t-comment">,</span>
                  </span>
                </div>

                <div className="t-blank" />

                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"stats"</span>
                    <span className="t-comment">:&nbsp;&#123;</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-key">"users_supported"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-num">1000</span><span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-key">"endpoints_managed"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-num">150</span><span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-key">"satisfaction_pct"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-num">98</span><span className="t-comment">,</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="t-key">"cost_savings_usd"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-num">20000</span>
                  </span>
                </div>
                <div className="t-line">
                  <span className="t-output">&nbsp;&nbsp;<span className="t-comment">&#125;,</span></span>
                </div>

                <div className="t-blank" />

                <div className="t-line">
                  <span className="t-output">
                    &nbsp;&nbsp;<span className="t-key">"status"</span>
                    <span className="t-comment">:&nbsp;</span>
                    <span className="t-val">"open_to_work"</span>
                  </span>
                </div>
                <div className="t-line"><span className="t-output t-key">&#125;</span></div>

                <div className="t-blank" />

                <div className="t-line">
                  <span className="t-prompt">❯</span>
                  <span className="t-cursor" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero-scroll"
        onClick={scrollTo('#about')}
        aria-label="Scroll to About section"
      >
        <div className="hero-scroll-arrow" aria-hidden="true">
          <FiArrowDown />
        </div>
        <span>scroll</span>
      </a>
    </section>
  )
}
