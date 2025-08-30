import { SectionTitle } from './SectionTitle'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionTitle id="projects">Projects</SectionTitle>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{p.name}</h3>
            </div>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="badge">{s}</span>
              ))}
            </ul>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
