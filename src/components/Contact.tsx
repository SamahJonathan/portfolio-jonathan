import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-6">Conectemos</h2>
        <p className="text-slate-300 mb-12 text-lg">
          Estoy disponible para proyectos de data engineering, consultoría e inquietudes técnicas.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <a
            href="mailto:jona.samah@gmail.com"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
          >
            <EnvelopeIcon className="w-5 h-5" />
            jona.samah@gmail.com
          </a>

          <a
            href="tel:+56977606174"
            className="flex items-center justify-center gap-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition"
          >
            <PhoneIcon className="w-5 h-5" />
            +56 9 7760 6174
          </a>
        </div>

        <div className="flex gap-6 justify-center text-slate-400">
          <a href="https://linkedin.com/in/jonathan-samah" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            LinkedIn
          </a>
          <a href="https://github.com/SamahJonathan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}
