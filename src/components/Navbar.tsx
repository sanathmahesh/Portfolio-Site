import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { ThemeToggle } from './ThemeToggle'
import { Menu } from 'lucide-react'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto container mt-4">
        <nav className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {site.name.split(' ')[0]}
          </a>

          <div className="hidden md:flex gap-6 items-center">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm hover:text-brand-400 transition">
                {l.label}
              </a>
            ))}
            <a
              href={site.links.resume}
              className="text-sm px-3 py-1 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            <Menu className="w-5 h-5" />
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass rounded-2xl px-4 py-3 mt-2 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={site.links.resume} className="py-2" onClick={() => setOpen(false)}>
              Resume
            </a>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  )
}
