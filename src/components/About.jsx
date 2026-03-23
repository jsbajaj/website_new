import { useEffect, useRef } from 'react'

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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = el.querySelectorAll('.animate-on-scroll')
    elements.forEach((elem) => observer.observe(elem))

    return () => observer.disconnect()
  }, [])

  return ref
}

const stats = [
  { number: '3+',      label: 'Years Experience'  },
  { number: '1000+',    label: 'Users Supported'   },
  { number: '3.55',    label: 'GPA'               },
  { number: 'May \'26', label: 'Graduation'        },
]

const beyondItems = [
  { icon: '🏏', text: 'Cricket — Ambassador, Rockets Cricket Club' },
  { icon: '🎤', text: 'Community Leader — VP, Punjabi Student Association' },
  { icon: '☁️', text: 'Cloud & DevOps enthusiast' },
  { icon: '🔐', text: 'Cybersecurity & network hardening' },
]

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section" id="about" ref={sectionRef} aria-label="About section">
      <div className="container">

        {/* Header */}
        <div className="about-header animate-on-scroll">
          <div className="section-tag">01. About</div>
          <h2 className="section-title">A Bit About Me</h2>
        </div>

        {/* Main grid */}
        <div className="about-grid">

          {/* Left: Bio */}
          <div className="about-bio animate-on-scroll slide-left">
            <p>
              Hey! I'm <strong>Jasnoor Singh Bajaj</strong>, a Computer Science &amp; Engineering
              student at the University of Toledo, graduating May 2026 with a <span className="about-highlight">3.55 GPA</span>.
              I'm passionate about bridging the worlds of IT infrastructure and software development.
            </p>
            <p>
              Currently, I work as an <strong>IT Systems Administrator</strong> at The Bridge Group in
              Dayton, OH, where I support 500+ end users and manage enterprise-grade systems including
              <span className="about-highlight">Active Directory</span>,{' '}
              <span className="about-highlight">LDAP</span>, and{' '}
              <span className="about-highlight">LAN/WAN</span> infrastructure.
            </p>
            <p>
              I also serve as a <strong>Level 2 IT Support Specialist</strong> at the University of
              Toledo, where I've led initiatives that saved over <span className="about-highlight">$20,000</span>{' '}
              by upgrading 80+ endpoints to TPM 2.0 security standards — reducing repeat incidents by 25%.
            </p>
            <p>
              On the software side, I interned as a <strong>Software Engineer at HeadStarter</strong>,
              building REST APIs and integrating backend systems. I enjoy crafting clean, performant
              web experiences and exploring AI/ML-powered projects in my free time.
            </p>
          </div>

          {/* Right: Cards */}
          <div className="about-right">

            {/* Education card */}
            <div className="edu-card animate-on-scroll slide-right" style={{ transitionDelay: '0.1s' }}>
              <div className="edu-card-header">
                <div className="edu-icon" aria-hidden="true">🎓</div>
                <div className="edu-info">
                  <h3>University of Toledo</h3>
                  <p>B.S. Computer Science &amp; Engineering</p>
                </div>
              </div>
              <div className="edu-details">
                <span className="edu-badge">May 2026</span>
                <span className="edu-badge gpa">GPA: 3.55</span>
                <span className="edu-badge">Toledo, OH</span>
                <span className="edu-badge">Full-time</span>
              </div>
            </div>

            {/* Beyond Code card */}
            <div className="beyond-card animate-on-scroll slide-right" style={{ transitionDelay: '0.2s' }}>
              <h3>
                <span aria-hidden="true">✨</span>
                Beyond Code
              </h3>
              <div className="beyond-items">
                {beyondItems.map(({ icon, text }) => (
                  <div className="beyond-item" key={text}>
                    <div className="beyond-item-icon" aria-hidden="true">{icon}</div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Stats row */}
        <div className="about-stats" role="list" aria-label="Career statistics">
          {stats.map(({ number, label }, i) => (
            <div
              className="stat-card animate-on-scroll"
              key={label}
              style={{ transitionDelay: `${0.1 * i}s` }}
              role="listitem"
            >
              <div className="stat-number" aria-label={`${number} ${label}`}>{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
