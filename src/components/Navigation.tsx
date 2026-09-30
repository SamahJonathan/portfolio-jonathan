import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Jonathan Samah
        </a>

        <div className="hidden md:flex gap-8">
          <a href="#projects" className="text-slate-300 hover:text-blue-400 transition">
            Proyectos
          </a>
          <a href="#skills" className="text-slate-300 hover:text-blue-400 transition">
            Stack
          </a>
          <a href="https://linkedin.com/in/jonathan-samah" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition">
            LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
