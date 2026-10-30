import { cn } from '@/lib/utils'

// Thin gold rule with a small diamond motif, echoing the logo's divider.
export function Ornament({ className }) {
  return (
    <svg viewBox="0 0 240 16" aria-hidden="true" className={cn('h-4 w-48 text-gold', className)}>
      <line x1="0" y1="8" x2="100" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="8" x2="240" y2="8" stroke="currentColor" strokeWidth="1" />
      <path d="M120 1 L127 8 L120 15 L113 8 Z" fill="currentColor" />
      <circle cx="106" cy="8" r="2" fill="currentColor" />
      <circle cx="134" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}

export default function SectionHeading({ id, children }) {
  return (
    <div className="mb-10 flex flex-col items-center gap-3 text-center">
      <h2 id={id} className="text-3xl font-semibold text-maroon sm:text-4xl">
        {children}
      </h2>
      <Ornament />
    </div>
  )
}
