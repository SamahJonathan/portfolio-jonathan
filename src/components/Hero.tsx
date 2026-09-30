import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Data Engineer
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Diseño y despliego pipelines ETL en producción. BigQuery, GCP, Python, SQL.
          <br />
          +70 proyectos de datos automatizados · Full Stack como bonus.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
          >
            Ver proyectos
            <ArrowRightIcon className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/in/jonathan-samah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SamahJonathan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-8 text-sm text-slate-400"
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
