import { useEffect, useRef } from 'react'
import { FiAward, FiExternalLink } from 'react-icons/fi'

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
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )

    const elements = el.querySelectorAll('.animate-on-scroll')
    elements.forEach((elem) => observer.observe(elem))

    return () => observer.disconnect()
  }, [])

  return ref
}

const CERTIFICATES = [
  {
    id: 1,
    title: 'Automate Tasks with Python',
    file: 'Automate tasks with python certificate.pdf',
    tags: ['Python', 'Automation', 'Scripting', 'OS Module'],
  },
  {
    id: 2,
    title: 'IT Support Professional',
    file: 'IT certificate.pdf',
    tags: ['Windows', 'Networking', 'Help Desk', 'Active Directory', 'Troubleshooting'],
  },
  {
    id: 3,
    title: 'VHDL Programming',
    file: 'VHDL certificate.pdf',
    tags: ['VHDL', 'FPGA', 'Digital Design', 'ModelSim'],
  },
  {
    id: 4,
    title: 'Cybersecurity',
    file: 'cyberecurity certificate.pdf',
    tags: ['Network Security', 'Encryption', 'Firewalls', 'Risk Assessment'],
  },
  {
    id: 5,
    title: 'Python for Data Science',
    file: 'python for data certificate.pdf',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis'],
  },
  {
    id: 6,
    title: 'Software Engineering',
    file: 'software engineering certificate.pdf',
    tags: ['OOP', 'Agile', 'Git', 'System Design', 'Testing'],
  },
]

export default function Certificates() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section" id="certificates" ref={sectionRef} aria-label="Certificates section">
      <div className="container">

        {/* Header */}
        <div className="certs-header animate-on-scroll">
          <div className="section-tag">05. Certificates</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-sub">
            Professional certificates and courses I have completed.
          </p>
        </div>

        {/* Grid */}
        <div className="certs-grid" role="list" aria-label="Certificates">
          {CERTIFICATES.map((cert, i) => (
            <a
              key={cert.id}
              href={`/certificates/${encodeURIComponent(cert.file)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card animate-on-scroll"
              style={{ animationDelay: `${0.12 * i}s`, transitionDelay: `${0.07 * i}s` }}
              role="listitem"
              aria-label={`View ${cert.title} certificate`}
            >
              <div className="cert-card-shimmer" aria-hidden="true" />
              <div className="cert-card-inner">
                <div className="cert-icon" aria-hidden="true">
                  <FiAward />
                </div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-tags" role="list" aria-label="Topics covered">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="cert-tag" role="listitem">{tag}</span>
                  ))}
                </div>
                <span className="cert-link">
                  View Certificate <FiExternalLink aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
