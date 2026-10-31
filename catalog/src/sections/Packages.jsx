import { Check, MessageCircle, Plus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { contact, packages, ui, venues } from '@/content'
import { useLang } from '@/lang'
import { cn, formatINR, whatsappUrl } from '@/lib/utils'

function PackageCard({ pkg }) {
  const { t } = useLang()
  const titleId = `pkg-${pkg.id}`
  const price = formatINR(pkg.price)
  const message = t(ui.waPackage).replace('{name}', t(pkg.name)).replace('{price}', price)
  const venue = venues.find((v) => v.id === pkg.venue)
  // the hall package sits on a soft tint so the three cards don't read as one repeated tile
  const tinted = venue.type === 'hall'

  return (
    <Card
      role="article"
      aria-labelledby={titleId}
      className={cn(
        'gap-0 rounded-2xl border p-6 shadow-none ring-0 sm:p-7',
        tinted ? 'border-maroon/20 bg-mist' : 'border-border bg-white',
      )}
    >
      <p className="text-base font-semibold text-gold-deep">{t(venue.name)}</p>
      <h3 id={titleId} className="mt-1 text-[1.65rem] text-maroon">
        {t(pkg.name)}
      </h3>
      <p className="mt-3 font-display text-5xl leading-none text-ink">{price}</p>

      <h4 className="mt-7 text-base font-semibold text-ink">{t(ui.included)}</h4>
      <ul className="mt-3 space-y-2">
        {pkg.included.map((item) => (
          <li key={item.en} className="flex gap-2.5">
            <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{t(item)}</span>
          </li>
        ))}
      </ul>

      <h4 className="mt-6 border-t border-maroon/15 pt-5 text-base font-semibold text-ink">{t(ui.extras)}</h4>
      <ul className="mt-3 space-y-1.5 text-muted-ink">
        {pkg.extras.map((item) => (
          <li key={item.en} className="flex gap-2.5">
            <Plus className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
            <span>{t(item)}</span>
          </li>
        ))}
      </ul>

      {/* mt-auto keeps the buttons aligned at the bottom when cards sit side by side */}
      <div className="mt-auto pt-8">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-lg bg-maroon text-base text-white hover:bg-maroon-deep"
        >
          <a href={whatsappUrl(contact.whatsapp, message)} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> {t(ui.enquire)}
          </a>
        </Button>
      </div>
    </Card>
  )
}

export default function Packages() {
  const { t } = useLang()
  return (
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-16 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="packages-title">{t(ui.packagesTitle)}</SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
