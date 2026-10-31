import { Ornament } from '@/components/SectionHeading'
import { occasions, ui } from '@/content'
import { useLang } from '@/lang'

// A soft band between the gallery and the rules: what they host.
export default function Occasions() {
  const { t } = useLang()
  return (
    <section aria-labelledby="occasions-title" className="bg-mist px-4 py-16 text-center sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 id="occasions-title" className="font-sans text-base font-semibold text-gold-deep">
          {t(ui.occasionsTitle)}
        </h2>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 font-display text-[1.7rem] text-maroon sm:text-4xl">
          {occasions.map((o, i) => (
            <li key={o.en} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold-soft" />}
              {t(o)}
            </li>
          ))}
        </ul>
        <Ornament className="mx-auto mt-8 text-gold-soft" />
      </div>
    </section>
  )
}
