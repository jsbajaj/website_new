const footerLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Contact',    href: '#contact'     },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      {/* Gradient line */}
      <div className="footer-gradient-line" aria-hidden="true" />

      <div className="container">
        <div className="footer-inner">

          {/* Logo */}
          <a
            href="#hero"
            className="footer-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            aria-label="Back to top"
          >
            JB
          </a>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <div className="footer-links">
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer-link"
                  onClick={(e) => handleClick(e, href)}
                  aria-label={`Navigate to ${label} section`}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Copyright */}
          <p className="footer-copy">
            © 2025 <span>Jasnoor Bajaj</span>. Built with <span>React</span> + Vite.
            <br />
            Designed &amp; developed with care.
          </p>

        </div>
      </div>
    </footer>
  )
}
