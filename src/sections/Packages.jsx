import { Check, MessageCircle, Plus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { contact, packages, ui } from '@/content'
import { useLang } from '@/lang'
import { cn, formatINR, whatsappUrl } from '@/lib/utils'

function PackageCard({ pkg }) {
  const { t } = useLang()
  const titleId = `pkg-${pkg.id}`
  const price = formatINR(pkg.price)
  const message = t(ui.waPackage).replace('{name}', t(pkg.name)).replace('{price}', price)

  return (
    <Card
      role="article"
      aria-labelledby={titleId}
      className="gap-0 overflow-hidden rounded-md border border-gold/30 bg-card py-0 shadow-none ring-0"
    >
      <div className="aspect-[4/3] bg-paper">
        <img src={pkg.image.src} alt={t(pkg.image.alt)} loading="lazy" className="size-full object-cover" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge
          className={cn(
            'mb-3 rounded-sm px-2.5 py-0.5 text-xs tracking-wide',
            pkg.venue === 'hall' ? 'bg-maroon text-ivory' : 'border border-gold bg-transparent text-gold',
          )}
        >
          {t(pkg.venue === 'hall' ? ui.venueHall : ui.venueLawn)}
        </Badge>
        <h3 id={titleId} className="text-2xl font-semibold text-maroon">
          {t(pkg.name)}
        </h3>
        <p className="mt-1 text-4xl font-bold tracking-tight text-ink">{price}</p>

        <h4 className="mt-6 text-sm font-medium tracking-wide text-muted-ink">{t(ui.included)}</h4>
        <ul className="mt-3 space-y-2">
          {pkg.included.map((item) => (
            <li key={item.en} className="flex gap-2.5">
              <Check className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-6 border-t border-gold/25 pt-5 text-sm font-medium tracking-wide text-muted-ink">
          {t(ui.extras)}
        </h4>
        <ul className="mt-3 space-y-1.5 text-muted-ink">
          {pkg.extras.map((item) => (
            <li key={item.en} className="flex gap-2.5">
              <Plus className="mt-1 size-3.5 shrink-0" aria-hidden="true" />
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="mt-auto h-12 w-full rounded-md bg-maroon text-base hover:bg-maroon-deep">
          <a href={whatsappUrl(contact.whatsapp, message)} target="_blank" rel="noopener noreferrer" className="mt-8">
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
    <section id="packages" aria-labelledby="packages-title" className="scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="packages-title">{t(ui.packagesTitle)}</SectionHeading>
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
