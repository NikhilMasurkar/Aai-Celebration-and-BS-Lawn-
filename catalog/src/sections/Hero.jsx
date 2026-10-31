import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, contact, heroImage, packages, ui } from '@/content'
import { useLang } from '@/lang'
import { formatINR, telUrl } from '@/lib/utils'

const lowestPrice = Math.min(...packages.map((p) => p.price))

export default function Hero() {
  const { t } = useLang()
  // "आई Celebration & BS Lawn" → the first word is the logo mark, set large
  const [mark, ...rest] = t(brand.name).split(' ')

  return (
    <section aria-labelledby="hero-title" className="bg-background">
      <div className="mx-auto grid max-w-6xl md:grid-cols-[1fr_1.15fr] md:items-center md:gap-12 md:px-4 md:py-14">
        {/* phones: edge-to-edge photo first; desktop: photo on the right */}
        <div className="md:order-2">
          <img
            src={heroImage.src}
            srcSet={heroImage.srcSet}
            sizes="(min-width: 768px) 55vw, 100vw"
            alt={t(heroImage.alt)}
            fetchPriority="high"
            className="photo-reveal h-[min(42svh,400px)] w-full rounded-b-[28px] bg-mist object-cover md:h-[min(72svh,620px)] md:rounded-[28px]"
          />
        </div>

        <div className="px-4 pt-6 pb-14 md:order-1 md:p-0">
          <h1 id="hero-title" className="rise">
            <span className="text-[clamp(3.5rem,16vw,5.5rem)] leading-none text-maroon">{mark}</span>{' '}
            <span className="block text-[clamp(1.85rem,7.5vw,3rem)] leading-tight text-ink">{rest.join(' ')}</span>
          </h1>
          <p className="rise mt-4 max-w-md text-lg leading-relaxed text-muted-ink" style={{ '--i': 1 }}>
            {t(brand.tagline)}
          </p>

          <div className="rise mt-7" style={{ '--i': 2 }}>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-lg bg-maroon px-6 text-base text-white hover:bg-maroon-deep">
                <a href="#packages">{t(ui.viewPackages)}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 rounded-lg border border-solid border-maroon/35 bg-transparent px-6 text-base text-maroon hover:bg-mist hover:text-maroon"
              >
                <a href={telUrl(contact.phones[0])}>
                  <Phone aria-hidden="true" /> {t(ui.call)}
                </a>
              </Button>
            </div>
            <p className="mt-4 text-base font-semibold text-gold-deep">
              {t(ui.fromPrice).replace('{price}', formatINR(lowestPrice))}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
