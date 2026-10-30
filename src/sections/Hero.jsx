import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, contact, heroImage, packages, ui, venues } from '@/content'
import { useLang } from '@/lang'
import { formatINR, telUrl } from '@/lib/utils'

const lowestPrice = Math.min(...packages.map((p) => p.price))

export default function Hero() {
  const { t } = useLang()
  // "आई Celebration & BS Lawn" → the first word is the logo mark, set large in gold
  const [mark, ...rest] = t(brand.name).split(' ')

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-maroon text-canvas">
      <div className="mx-auto grid max-w-6xl gap-x-12 px-4 pt-6 pb-14 text-center md:grid-cols-[1.15fr_1fr] md:items-center md:pt-14 md:pb-24 md:text-left">
        <div className="md:col-start-1 md:row-start-1 md:self-end">
          <p className="rise text-base text-gold-light">{t(brand.place)}</p>
          <h1 id="hero-title" className="rise mt-1 text-canvas" style={{ '--i': 1 }}>
            <span className="block text-[clamp(4.75rem,24vw,6rem)] leading-[0.95] text-gold-light">{mark}</span>{' '}
            <span className="block text-[clamp(1.85rem,7.5vw,3rem)] leading-tight">{rest.join(' ')}</span>
          </h1>
          <p
            className="rise mt-4 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-base text-canvas/85 md:justify-start"
            style={{ '--i': 2 }}
          >
            {venues.map((v, i) => (
              <span key={v.id} className="flex items-center gap-2.5">
                {i > 0 && <span aria-hidden="true" className="size-1 rotate-45 bg-gold-light" />}
                {t(v.name)}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-7 md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0">
          <div className="mx-auto aspect-square w-[min(74vw,300px)] rounded-t-full border border-gold-soft/70 p-2 md:aspect-[4/5] md:w-full md:max-w-[420px]">
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes="(min-width: 768px) 420px, 74vw"
              alt={t(heroImage.alt)}
              fetchPriority="high"
              className="arch-reveal size-full rounded-t-full bg-maroon-deep object-cover"
            />
          </div>
        </div>

        <div className="rise mt-7 md:col-start-1 md:row-start-2 md:mt-8 md:self-start" style={{ '--i': 3 }}>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button asChild size="lg" className="h-12 rounded-md bg-gold-light px-6 text-base text-maroon-deep hover:bg-gold-soft">
              <a href="#packages">{t(ui.viewPackages)}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-12 rounded-md border border-solid border-canvas/55 bg-transparent px-6 text-base text-canvas hover:bg-canvas/10 hover:text-canvas"
            >
              <a href={telUrl(contact.phones[0])}>
                <Phone aria-hidden="true" /> {t(ui.call)}
              </a>
            </Button>
          </div>
          <p className="mt-4 text-base text-gold-light">{t(ui.fromPrice).replace('{price}', formatINR(lowestPrice))}</p>
        </div>
      </div>
    </section>
  )
}
