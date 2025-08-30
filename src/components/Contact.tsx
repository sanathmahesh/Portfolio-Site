import { SectionTitle } from './SectionTitle'
import { site } from '../data/site'
import { Mail, Phone, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionTitle id="contact">Contact</SectionTitle>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <a href={`mailto:${site.email}`} className="card hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-brand-600" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{site.email}</p>
            </div>
          </div>
        </a>
        <div className="card">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-brand-600" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{site.phone}</p>
            </div>
          </div>
        </div>
        <a href={site.links.linkedin} target="_blank" className="card hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-brand-600" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">linkedin.com/in/sanathmahesh</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
