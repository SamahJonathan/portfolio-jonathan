import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Sobre mí
        </motion.h2>

        <motion.div
          className="space-y-8 text-xl text-slate-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Soy <strong>Data Engineer</strong> especializado en diseño e implementación de pipelines ETL confiables. En el último año desarrollé <strong>70+ proyectos de datos en producción</strong>, extrayendo información desde ERPs, APIs y portales web, transformándola con Python/SQL y cargándola en BigQuery con garantías de integridad.
          </p>

          <p>
            Mi trabajo abarca todo el ciclo: <strong>levantamiento de requerimientos con clientes</strong>, diseño de arquitecturas de datos, automatización de procesos repetitivos, orquestación con Apache Airflow, despliegue en Google Cloud y <strong>monitoreo en producción</strong>.
          </p>

          <p>
            Además de data engineering, he desarrollado <strong>aplicaciones web full-stack</strong> (PHP/Laravel + Vue/Angular) y plataformas modernas (Next.js + Prisma), demostrando capacidad para cubrir <strong>end-to-end el ciclo de un proyecto</strong>: backend, frontend, bases de datos y DevOps.
          </p>

          <p>
            <strong>Actualmente busco:</strong> un rol donde profundizar técnicamente en ingeniería de datos, escalar procesos, aprender nuevas tecnologías (Snowflake, Databricks) y aportar desde el primer día con soluciones que mejoren la confiabilidad e inteligencia de los datos de una organización.
          </p>

          <div className="pt-8 grid grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">70+</div>
              <div className="text-sm text-slate-400">Proyectos ETL</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">1 año</div>
              <div className="text-sm text-slate-400">Data Engineer</div>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-400">4</div>
              <div className="text-sm text-slate-400">Proyectos destacados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
