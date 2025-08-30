import { SectionTitle } from './SectionTitle'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionTitle id="skills">Skills</SectionTitle>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="card">
          <p className="font-semibold">Programming & Web</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.programming.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
        <div className="card">
          <p className="font-semibold">Frameworks & Databases</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.frameworksDB.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
        <div className="card">
          <p className="font-semibold">Cloud</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.cloud.map((s) => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
