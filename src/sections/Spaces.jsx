import SectionHeading from '@/components/SectionHeading'
import { ui, venues } from '@/content'
import { useLang } from '@/lang'

export default function Spaces() {
  const { t } = useLang()
  return (
    <section aria-labelledby="spaces-title" className="pt-16 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="spaces-title" className="px-4">
          {t(ui.spacesTitle)}
        </SectionHeading>
        {/* phones: swipe sideways through the three venues (the next one peeks in); md+: three columns */}
        <ul className="flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-2 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {venues.map((venue) => (
            <li key={venue.id} className="w-[74%] shrink-0 snap-start md:w-auto">
              <div className="aspect-[3/4] overflow-hidden rounded-t-full bg-mist">
                <img
                  src={venue.image.src}
                  srcSet={venue.image.srcSet}
                  sizes="(min-width: 768px) 33vw, 74vw"
                  alt={t(venue.image.alt)}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-[1.7rem] text-maroon">{t(venue.name)}</h3>
              <ul className="mt-2 space-y-1.5 text-muted-ink">
                {venue.facts.map((fact) => (
                  <li key={fact.en} className="flex items-baseline gap-2.5">
                    <span aria-hidden="true" className="size-1.5 shrink-0 -translate-y-0.5 rotate-45 bg-gold" />
                    {t(fact)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
