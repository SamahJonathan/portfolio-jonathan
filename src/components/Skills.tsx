import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Data Engineering',
    skills: ['Python (pandas)', 'SQL', 'BigQuery', 'ETL/ELT', 'Data Pipelines', 'Apache Airflow']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['GCP', 'Cloud Run', 'Cloud Build', 'Docker', 'Terraform', 'Secret Manager']
  },
  {
    title: 'Development',
    skills: ['PHP/Laravel', 'Vue 3', 'Angular', 'TypeScript', 'Next.js', 'REST APIs']
  },
  {
    title: 'Automation & Integration',
    skills: ['Web Scraping', 'Selenium/Playwright', 'Odoo API', 'Fintoc', 'RPA', 'PDF Parsing']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'BigQuery', 'MariaDB']
  },
  {
    title: 'Tools & Methods',
    skills: ['Git', 'Linux', 'CI/CD', 'Agile', 'Scrum', 'Jira']
  }
]

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Stack Técnico
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-slate-700/30 border border-slate-600 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold mb-4 text-blue-400">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
