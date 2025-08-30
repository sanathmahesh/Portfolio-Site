import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="py-10">
      <div className="container text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
