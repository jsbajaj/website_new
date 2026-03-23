import { useEffect, useRef } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'

function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = el.querySelectorAll('.animate-on-scroll')
    elements.forEach((elem) => observer.observe(elem))

    return () => observer.disconnect()
  }, [])

  return ref
}

const contactCards = [
  {
    icon:    <FiMail aria-hidden="true" />,
    label:   'Email',
    value:   'jasnoorsinghbajaj@gmail.com',
    href:    'mailto:jasnoorsinghbajaj@gmail.com',
    ariaLabel: 'Send email to jasnoorsinghbajaj@gmail.com',
  },
  {
    icon:    <FiGithub aria-hidden="true" />,
    label:   'GitHub',
    value:   'github.com/jsbajaj',
    href:    'https://github.com/jsbajaj',
    ariaLabel: 'Visit GitHub profile at github.com/jsbajaj',
  },
  {
    icon:    <FiLinkedin aria-hidden="true" />,
    label:   'LinkedIn',
    value:   'linkedin.com/in/jasnoor-bajaj',
    href:    'https://www.linkedin.com/in/jasnoor-bajaj/',
    ariaLabel: 'Visit LinkedIn profile at linkedin.com/in/jasnoor-bajaj',
  },
]

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section" id="contact" ref={sectionRef} aria-label="Contact section">
      <div className="container">
        <div className="contact-wrapper">

          {/* Header */}
          <div className="contact-header animate-on-scroll">
            <div className="section-tag">06. Contact</div>
            <h2 className="section-title">Let's Work Together</h2>
          </div>

          {/* Description */}
          <p className="contact-desc animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
            I'm currently open to full-time roles, internships, and freelance opportunities.
            Whether you have a project in mind or just want to connect — my inbox is always open.
          </p>

          {/* Contact cards */}
          <div
            className="contact-cards animate-on-scroll"
            style={{ transitionDelay: '0.2s' }}
            role="list"
            aria-label="Contact methods"
          >
            {contactCards.map(({ icon, label, value, href, ariaLabel }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="contact-card"
                role="listitem"
                aria-label={ariaLabel}
              >
                <div className="contact-card-icon">{icon}</div>
                <div className="contact-card-label">{label}</div>
                <div className="contact-card-value">{value}</div>
                <div className="contact-card-arrow">
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>

          {/* Big CTA */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <a
              href="mailto:jasnoorsinghbajaj@gmail.com"
              className="contact-cta"
              aria-label="Send an email to Jasnoor"
            >
              <FiMail aria-hidden="true" />
              Send Email
            </a>
          </div>

          {/* Phone note */}
          <p
            className="animate-on-scroll"
            style={{
              transitionDelay: '0.4s',
              marginTop: '1.5rem',
              color: 'var(--text-3)',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            or call / text: <span style={{ color: 'var(--text-2)' }}>419-322-6599</span>
          </p>

        </div>
      </div>
    </section>
  )
}
