import { ReactNode } from 'react'

export function SectionTitle({ id, children }: { id: string, children: ReactNode }) {
  return (
    <div id={id} className="flex items-center gap-3">
      <div className="h-6 w-1 rounded bg-brand-600" />
      <h2 className="section-title">{children}</h2>
    </div>
  )
}
