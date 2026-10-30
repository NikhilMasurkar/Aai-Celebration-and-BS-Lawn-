import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { brand, contact, heroImage, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl } from '@/lib/utils'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-maroon-deep">
      <img
        src={heroImage.src}
        srcSet={heroImage.srcSet}
        sizes="100vw"
        alt={t(heroImage.alt)}
        fetchPriority="high"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      {/* the only gradient on the page: keeps text readable over any photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-maroon-deep via-maroon-deep/60 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 pt-32 pb-14 sm:pb-20">
        <p className="eyebrow">{t(brand.place)}</p>
        <h1 className="mt-3 max-w-3xl text-5xl leading-[1.05] font-semibold text-ivory sm:text-7xl">
          {t(brand.name)}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/85">{t(brand.tagline)}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="h-12 rounded-md bg-ivory px-6 text-base text-maroon hover:bg-paper">
            <a href="#packages">{t(ui.viewPackages)}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-md border-ivory/60 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10 hover:text-ivory"
          >
            <a href={telUrl(contact.phones[0])}>
              <Phone aria-hidden="true" /> {t(ui.call)}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
