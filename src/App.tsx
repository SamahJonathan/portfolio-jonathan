import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-700 py-8 px-4 text-center text-slate-400 text-sm">
        <p>© 2026 Jonathan Samah. Built with React, Framer Motion & Tailwind CSS.</p>
      </footer>
    </div>
  )
}
