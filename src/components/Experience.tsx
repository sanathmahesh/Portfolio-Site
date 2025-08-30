import { SectionTitle } from './SectionTitle'
import { experience } from '../data/experience'
import { Briefcase } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionTitle id="experience">Experience</SectionTitle>

      <div className="mt-6 grid gap-4">
        {experience.map((item) => (
          <div key={item.company + item.period} className="card">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-brand-600/10 text-brand-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{item.role}</p>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  {item.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
