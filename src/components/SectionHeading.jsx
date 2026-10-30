import { cn } from '@/lib/utils'

// Thin gold rule with a small diamond motif, echoing the logo's divider. Used sparingly.
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

export default function SectionHeading({ id, children, className }) {
  return (
    <h2 id={id} className={cn('mb-8 text-[clamp(2.1rem,7vw,3.25rem)] text-maroon sm:mb-10', className)}>
      {children}
    </h2>
  )
}
