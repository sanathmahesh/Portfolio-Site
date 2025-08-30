import { motion } from 'framer-motion'
import { site } from '../data/site'

export function Hero() {
  return (
    <section id="home" className="pt-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-xs uppercase tracking-widest text-brand-600">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {site.name}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">{site.role}</p>
          <p className="text-sm md:text-base max-w-xl">{site.blurb}</p>

          <div className="flex gap-3 pt-2">
            <a
              href={site.links.resume}
              className="px-4 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition"
            >
              Download Resume
            </a>
            <a
              href="mailto:sanathmaheshkumar@gmail.com"
              className="px-4 py-2 rounded-full glass"
            >
              Contact Me
            </a>
            <a
              href={site.links.linkedin}
              className="px-4 py-2 rounded-full glass"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div
            className="aspect-square rounded-3xl overflow-hidden glass grid place-items-center"
            aria-label="Avatar placeholder"
          >
            <svg width="180" height="180" viewBox="0 0 200 200" role="img" aria-label="avatar">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#8b5cf6"/>
                  <stop offset="1" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#g)" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="72" fill="white">S</text>
            </svg>
          </div>
          <div className="absolute -z-10 inset-0 blur-3xl opacity-50" aria-hidden="true"
               style={{ background: 'radial-gradient(600px circle at 20% 20%, rgba(139,92,246,.35), transparent 40%), radial-gradient(600px circle at 80% 30%, rgba(6,182,212,.35), transparent 40%)'}} />
        </motion.div>
      </div>
    </section>
  )
}
