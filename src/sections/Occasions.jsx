import { Ornament } from '@/components/SectionHeading'
import { occasions, ui } from '@/content'
import { useLang } from '@/lang'

export default function Occasions() {
  const { t } = useLang()
  return (
    <section aria-labelledby="occasions-title" className="bg-maroon-deep px-4 py-16 text-center">
      <h2 id="occasions-title" className="text-sm font-medium tracking-[0.2em] text-gold-light uppercase">
        {t(ui.occasionsTitle)}
      </h2>
      <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-y-6 sm:grid-cols-4">
        {occasions.map((o) => (
          <li key={o.en} className="font-display text-2xl text-ivory sm:text-3xl">
            {t(o)}
          </li>
        ))}
      </ul>
      <Ornament className="mx-auto mt-10 text-gold-soft" />
    </section>
  )
}
