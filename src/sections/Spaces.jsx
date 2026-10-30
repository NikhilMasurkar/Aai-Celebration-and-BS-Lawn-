import SectionHeading from '@/components/SectionHeading'
import { spaces, ui } from '@/content'
import { useLang } from '@/lang'

export default function Spaces() {
  const { t } = useLang()
  return (
    <section aria-labelledby="spaces-title" className="fade-up px-4 pt-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="spaces-title">{t(ui.spacesTitle)}</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          {spaces.map((space) => (
            <article key={space.venue}>
              <div className="aspect-[3/2] overflow-hidden rounded-md bg-paper">
                <img src={space.image.src} alt={t(space.image.alt)} loading="lazy" className="size-full object-cover" />
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-maroon">{t(space.title)}</h3>
              <ul className="mt-3 space-y-2">
                {space.facts.map((fact) => (
                  <li key={fact.en} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="size-1.5 shrink-0 rotate-45 bg-gold" />
                    {t(fact)}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
