import { useEffect, useRef } from 'react'
import { FiMapPin } from 'react-icons/fi'

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

const experiences = [
  {
    role:     'IT Systems Administrator',
    company:  'The Bridge Group',
    location: 'Dayton, OH',
    date:     'Aug 2025 – Present',
    current:  true,
    bullets: [
      'Provide technical assistance for 500+ end users, resolving 200+ service tickets annually across hardware, software, and network domains.',
      'Administer Active Directory & LDAP — managing user accounts, security groups, permissions, and Group Policy Objects across the organization.',
      'Install, configure, and upgrade 100+ desktops, laptops, printers, and peripherals, ensuring minimal downtime during transitions.',
      'Diagnose and resolve LAN/WAN issues including Wi-Fi outages, DNS failures, DHCP conflicts, and VPN connectivity problems.',
      'Document 100% of time and ticket interactions in PSA system, maintaining 98%+ client satisfaction score.',
    ],
    tags: ['Active Directory', 'LDAP', 'LAN/WAN', 'DNS', 'DHCP', 'VPN', 'Windows Server', 'PSA'],
  },
  {
    role:     'IT Support Specialist – Level 2',
    company:  'University of Toledo',
    location: 'Toledo, OH',
    date:     'Sept 2023 – Present',
    current:  true,
    bullets: [
      'Manage 150+ endpoints across Windows Server 2012/2016/2019 and Microsoft 365, ensuring 99%+ uptime.',
      'Execute onboarding/offboarding for 20+ users per quarter, provisioning accounts in Active Directory, Intune, and Entra ID.',
      'Led TPM 2.0 security upgrade initiative across 80+ endpoints, ensuring compliance with institutional security policy and saving $20,000+ in avoided licensing penalties.',
      'Reduced repeat incidents by 25% through root-cause analysis and comprehensive documentation of recurring issues.',
    ],
    tags: ['Windows Server', 'Microsoft 365', 'Intune', 'Entra ID', 'SCCM', 'TPM 2.0', 'Help Desk'],
  },
  {
    role:     'Software Engineer Intern',
    company:  'HeadStarter',
    location: 'New York, NY',
    date:     'June 2024 – Sept 2024',
    current:  false,
    bullets: [
      'Developed software features using structured programming principles, contributing to production-ready codebases under agile methodology.',
      'Built and integrated REST APIs, managing backend logic, database interactions, and endpoint validation.',
      'Collaborated with cross-functional teams to deliver features on schedule, participating in code reviews and technical design sessions.',
    ],
    tags: ['React', 'REST APIs', 'JavaScript', 'Python', 'Databases', 'Agile', 'Git'],
  },
]

export default function Experience() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section" id="experience" ref={sectionRef} aria-label="Experience section">
      <div className="container">

        {/* Header */}
        <div className="experience-header animate-on-scroll">
          <div className="section-tag">02. Experience</div>
          <h2 className="section-title">Where I've Worked</h2>
          <p style={{ color: 'var(--text-2)', marginTop: '0.75rem', fontSize: '1rem' }}>
            A timeline of roles where I've sharpened my skills across IT and software engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline" role="list" aria-label="Work experience timeline">
          {experiences.map((exp, i) => (
            <div
              className="timeline-item animate-on-scroll"
              key={exp.role + exp.company}
              style={{ transitionDelay: `${0.15 * i}s` }}
              role="listitem"
            >
              {/* Left: dot + date */}
              <div className="timeline-left" aria-hidden="true">
                <div className="timeline-dot" />
                <div className="timeline-date">{exp.date.split(' – ')[0]}</div>
              </div>

              {/* Card */}
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  <div className="timeline-meta">
                    <span className="timeline-location">
                      <FiMapPin aria-hidden="true" size={12} />
                      {exp.location}
                    </span>
                    <span
                      className={`timeline-badge${exp.current ? '' : ' past'}`}
                      aria-label={exp.current ? 'Current position' : 'Past position'}
                    >
                      {exp.current ? '● Current' : exp.date.split(' – ')[1] || 'Past'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                      {exp.date}
                    </span>
                  </div>
                </div>

                <ul className="timeline-bullets" aria-label="Responsibilities">
                  {exp.bullets.map((b) => (
                    <li key={b} className="timeline-bullet">
                      <span className="timeline-bullet-dot" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="timeline-tags" aria-label="Technologies used">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
