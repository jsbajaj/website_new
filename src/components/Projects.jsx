import { useState, useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

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

const ALL_PROJECTS = [
  {
    id:       1,
    title:    'Sargo Tools Website',
    category: 'Web',
    badge:    'web',
    desc:     'Production website for Sargo Tools Pvt Ltd — a fully responsive, performance-optimised marketing site built with vanilla web technologies, featuring product showcases and contact flows.',
    tags:     ['HTML', 'CSS', 'JavaScript'],
    github:   'https://github.com/jsbajaj',
  },
  {
    id:       2,
    title:    'Website Traffic Analysis',
    category: 'Data',
    badge:    'data',
    desc:     'Python-based analytics project that ingests raw web server logs, applies statistical analysis, and surfaces insights on traffic patterns, peak usage, and anomalous behaviour.',
    tags:     ['Python', 'Pandas', 'Matplotlib', 'Data Analysis'],
    github:   'https://github.com/jsbajaj',
  },
  {
    id:       3,
    title:    'AI Chatbot',
    category: 'AI/ML',
    badge:    'aiml',
    desc:     'Conversational AI assistant built with React and integrated with large language model APIs. Features context-aware dialogue management, streaming responses, and a polished chat UI.',
    tags:     ['React', 'TypeScript', 'LLM APIs', 'Node.js'],
    github:   'https://github.com/jsbajaj',
  },
  {
    id:       4,
    title:    'Intrusion Detection System',
    category: 'Security',
    badge:    'security',
    desc:     'Network security tool written in Python that monitors traffic in real-time, detects suspicious activity using rule-based and heuristic analysis, and triggers configurable alerts.',
    tags:     ['Python', 'Networking', 'Security', 'Scapy'],
    github:   'https://github.com/jsbajaj',
  },
  {
    id:       5,
    title:    'Moodify',
    category: 'AI/ML',
    badge:    'aiml',
    desc:     'Mood-based recognition system that uses machine learning to detect emotional states from input data, delivering personalised content or recommendations that match the user\'s mood.',
    tags:     ['React', 'Python', 'ML', 'TensorFlow'],
    github:   'https://github.com/jsbajaj',
  },
  {
    id:       6,
    title:    'Tool Tally',
    category: 'AI/ML',
    badge:    'aiml',
    desc:     'Edge-AI project deployed on a Raspberry Pi that uses computer vision and image analysis to identify and count industrial tools on a workbench, enabling automated inventory tracking.',
    tags:     ['Python', 'Raspberry Pi', 'OpenCV', 'TensorFlow Lite'],
    github:   'https://github.com/jsbajaj',
  },
]

const FILTERS = ['All', 'Web', 'AI/ML', 'Security', 'Data']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useScrollAnimation()

  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeFilter)

  return (
    <section className="section" id="projects" ref={sectionRef} aria-label="Projects section">
      <div className="container">

        {/* Header */}
        <div className="projects-header animate-on-scroll">
          <div className="section-tag">04. Projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <p style={{ color: 'var(--text-2)', marginTop: '0.75rem', fontSize: '1rem', maxWidth: '520px', margin: '0.75rem auto 0' }}>
            A selection of personal and professional projects spanning web dev, AI/ML, security, and edge computing.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className="projects-filters animate-on-scroll"
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              aria-label={`Filter by ${f}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          className="projects-grid"
          role="list"
          aria-label={`${activeFilter === 'All' ? 'All' : activeFilter} projects`}
        >
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="project-card animate-on-scroll"
              style={{ transitionDelay: `${0.07 * i}s` }}
              role="listitem"
              aria-label={project.title}
            >
              {/* Top row: badge + github */}
              <div className="project-card-top">
                <span
                  className={`project-badge ${project.badge}`}
                  aria-label={`Category: ${project.category}`}
                >
                  {project.category}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub aria-hidden="true" />
                </a>
              </div>

              {/* Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Description */}
              <p className="project-desc">{project.desc}</p>

              {/* Tech tags */}
              <div className="project-tags" role="list" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag" role="listitem">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 0',
              color: 'var(--text-3)',
              fontFamily: 'var(--font-mono)',
            }}
            role="status"
            aria-live="polite"
          >
            No projects in this category yet — check back soon!
          </div>
        )}

      </div>
    </section>
  )
}
