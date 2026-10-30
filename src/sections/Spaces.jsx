import SectionHeading from '@/components/SectionHeading'
import { ui, venues } from '@/content'
import { useLang } from '@/lang'

export default function Spaces() {
  const { t } = useLang()
  return (
    <section aria-labelledby="spaces-title" className="fade-up px-4 pt-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="spaces-title">{t(ui.spacesTitle)}</SectionHeading>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {venues.map((venue) => (
            <article key={venue.id}>
              <div className="aspect-[3/2] overflow-hidden rounded-md bg-paper">
                <img
                  src={venue.image.src}
                  srcSet={venue.image.srcSet}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt={t(venue.image.alt)}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-maroon md:text-2xl lg:text-3xl">{t(venue.name)}</h3>
              <ul className="mt-3 space-y-2">
                {venue.facts.map((fact) => (
                  <li key={fact.en} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="size-1.5 shrink-0 translate-y-[-2px] rotate-45 bg-gold" />
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
