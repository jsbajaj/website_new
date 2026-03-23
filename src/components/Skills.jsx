import { useEffect, useRef } from 'react'
import { FiCode, FiTool, FiWifi, FiMonitor } from 'react-icons/fi'

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

const skillCategories = [
  {
    icon:     <FiCode aria-hidden="true" />,
    iconClass: 'purple',
    title:    'Programming Languages',
    subtitle: 'Languages I code in',
    skills: [
      'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C',
      'SQL', 'HTML', 'CSS', 'React',
    ],
  },
  {
    icon:     <FiTool aria-hidden="true" />,
    iconClass: 'violet',
    title:    'Tools & Platforms',
    subtitle: 'Enterprise & dev tools',
    skills: [
      'Microsoft Office 365', 'Microsoft Intune', 'SCCM', 'Entra ID',
      'GitHub', 'Epic EMR', 'Citrix', 'Google Workspace',
    ],
  },
  {
    icon:     <FiWifi aria-hidden="true" />,
    iconClass: 'cyan',
    title:    'Networking & Infra',
    subtitle: 'Network & cloud systems',
    skills: [
      'LAN/WAN', 'DNS', 'DHCP', 'VPN', 'Active Directory',
      'LDAP', 'Cloud Systems', 'Endpoint Management', 'Wi-Fi',
    ],
  },
  {
    icon:     <FiMonitor aria-hidden="true" />,
    iconClass: 'emerald',
    title:    'Technical Support',
    subtitle: 'Support & OS expertise',
    skills: [
      'Windows 10/11', 'Windows Server', 'macOS', 'iOS / Android',
      'Help Desk Support', 'Remote Support', 'Troubleshooting',
    ],
  },
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section" id="skills" ref={sectionRef} aria-label="Skills section">
      <div className="container">

        {/* Header */}
        <div className="skills-header animate-on-scroll">
          <div className="section-tag">03. Skills</div>
          <h2 className="section-title">What I Work With</h2>
          <p style={{ color: 'var(--text-2)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            A full-stack of technical competencies spanning software, infrastructure, and support.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="skills-grid" role="list" aria-label="Skill categories">
          {skillCategories.map((cat, i) => (
            <div
              className="skill-category-card animate-on-scroll"
              key={cat.title}
              style={{ transitionDelay: `${0.1 * i}s` }}
              role="listitem"
            >
              <div className="skill-category-header">
                <div className={`skill-category-icon ${cat.iconClass}`} aria-hidden="true">
                  {cat.icon}
                </div>
                <div>
                  <div className="skill-category-title">{cat.title}</div>
                  <div className="skill-category-subtitle">{cat.subtitle}</div>
                </div>
              </div>

              <div className="skills-tags" role="list" aria-label={`${cat.title} skills`}>
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag" role="listitem">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
