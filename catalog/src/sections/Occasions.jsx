import { Ornament } from '@/components/SectionHeading'
import { brand, occasions, ui } from '@/content'
import { useLang } from '@/lang'

// The one dark band mid-page: the brand's own promise, then what they host.
export default function Occasions() {
  const { t } = useLang()
  return (
    <section aria-labelledby="occasions-title" className="bg-maroon-deep px-4 py-20 text-center text-canvas sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Ornament className="mx-auto text-gold-soft" />
        <p className="mt-6 font-display text-[clamp(1.6rem,5.5vw,2.5rem)] leading-snug text-balance">{t(brand.tagline)}</p>
        <h2 id="occasions-title" className="mt-12 font-sans text-base font-medium text-gold-light">
          {t(ui.occasionsTitle)}
        </h2>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 font-display text-2xl sm:text-3xl">
          {occasions.map((o, i) => (
            <li key={o.en} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold-soft" />}
              {t(o)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
