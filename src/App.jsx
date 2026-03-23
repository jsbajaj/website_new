import Cursor         from './components/Cursor'
import CodeBackground from './components/CodeBackground'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Experience     from './components/Experience'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Certificates   from './components/Certificates'
import Contact        from './components/Contact'
import Footer         from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <CodeBackground />
      <Navbar />
      <main>
        <Hero />
        <div style={{ background: 'var(--bg-2)' }}>
          <About />
        </div>
        <Experience />
        <div style={{ background: 'var(--bg-2)' }}>
          <Skills />
        </div>
        <Projects />
        <div style={{ background: 'var(--bg-2)' }}>
          <Certificates />
        </div>
        <div style={{ background: 'var(--accent-light)' }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
