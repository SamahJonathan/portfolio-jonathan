import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'ETL Pipeline Portfolio',
    description: 'Pipelines ETL en producción. Extrae datos de Odoo, transforma con Python, carga en BigQuery. 17 módulos, orquestación con Airflow, despliegue en Cloud Run.',
    tech: ['Python', 'BigQuery', 'Apache Airflow', 'GCP', 'Docker', 'Cloud Build'],
    github: 'https://github.com/SamahJonathan/etl-pipeline-portfolio',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'GCP Infrastructure as Code',
    description: 'Proyecto de escalabilidad con Terraform. Módulos para GKE, Compute Engine, Cloud Storage, networking y IAM. Documentación completa de buenas prácticas.',
    tech: ['Terraform', 'GCP', 'Kubernetes', 'IaC', 'Cloud Build'],
    github: 'https://github.com/SamahJonathan/GCP_proyecto_muestra',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AC Propiedades — Full Stack',
    description: 'Sistema inmobiliario completo: sitio público, panel de administración, CRM propio, recordatorios de arriendo y pagos con Fintoc. Deployado en HostGator.',
    tech: ['PHP 8.2', 'Vue 3', 'MySQL', 'Tailwind', 'Fintoc API'],
    github: 'https://github.com/SamahJonathan/AC_propiedades2',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'CRM con IA — Next.js',
    description: 'Plataforma de leads y pipeline. Integración con Meta Ads y Google Leads. Calificación automática de leads con Claude API. Prisma + TypeScript.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'MariaDB', 'Claude API', 'Tailwind'],
    github: 'https://github.com/SamahJonathan/crm_meta_gc_ads_ia',
    color: 'from-orange-500 to-red-500'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-5xl font-bold mb-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Proyectos Destacados
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-20 transition blur-xl`} />

            <div className="relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-slate-400" />
              </div>

              <p className="text-slate-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 text-blue-400 text-sm font-semibold">
                <CodeBracketIcon className="w-4 h-4" />
                Ver en GitHub
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
