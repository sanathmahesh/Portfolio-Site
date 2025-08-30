import { SectionTitle } from './SectionTitle'
import { education } from '../data/education'
import { GraduationCap } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="scroll-mt-24">
      <SectionTitle id="education">Education</SectionTitle>

      <div className="mt-6 grid gap-4">
        {education.map((e) => (
          <div key={e.school + e.period} className="card">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-brand-600/10 text-brand-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="w-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold">{e.school}</p>
                  <span className="text-xs text-slate-500">{e.period}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">{e.degree}</p>
                {e.details && (
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                    {e.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
