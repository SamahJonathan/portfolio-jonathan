import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Data Engineer
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-slate-300 mb-16 leading-relaxed font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Diseño y despliego pipelines ETL en producción.
          <br />
          <span className="text-slate-400">BigQuery · GCP · Python · SQL</span>
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold transition text-lg"
          >
            Ver proyectos
            <ArrowRightIcon className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/jonathan-samah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-500 hover:border-blue-400 hover:text-blue-400 px-10 py-4 rounded-lg font-semibold transition text-lg"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SamahJonathan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-500 hover:border-blue-400 hover:text-blue-400 px-10 py-4 rounded-lg font-semibold transition text-lg"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-12 text-sm text-slate-400 pt-12 border-t border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div>📧 jona.samah@gmail.com</div>
          <div>🇨🇱 Santiago, Chile</div>
          <div>⚡ Disponibilidad inmediata</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
