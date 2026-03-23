import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',      href: '#projects'      },
  { label: 'Certificates', href: '#certificates'  },
  { label: 'Contact',      href: '#contact'       },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-container">
          {/* Logo */}
          <a
            href="#hero"
            className="nav-logo"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            aria-label="Jasnoor Bajaj - Home"
          >
            JB
          </a>

          {/* Desktop links */}
          <div className="nav-links" role="menubar">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                role="menuitem"
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="mailto:jasnoorsinghbajaj@gmail.com"
            className="nav-cta"
            aria-label="Hire Jasnoor via email"
          >
            Hire Me
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="menu"
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="mobile-nav-link"
            role="menuitem"
            onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:jasnoorsinghbajaj@gmail.com"
          className="mobile-nav-cta"
          onClick={() => setMenuOpen(false)}
          aria-label="Send email to hire Jasnoor"
        >
          Hire Me
        </a>
      </div>
    </>
  )
}
