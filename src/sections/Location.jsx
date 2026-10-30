import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import { contact, ui } from '@/content'
import { useLang } from '@/lang'

export default function Location() {
  const { t } = useLang()
  return (
    <section id="location" aria-labelledby="location-title" className="scroll-mt-16 bg-mist px-4 py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <SectionHeading id="location-title" className="mb-4 sm:mb-4">
            {t(ui.locationTitle)}
          </SectionHeading>
          <address className="text-lg leading-relaxed not-italic">{t(contact.address)}</address>
        </div>
        <Button asChild size="lg" className="h-12 self-start rounded-md bg-maroon px-6 text-base hover:bg-maroon-deep md:self-auto">
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" /> {t(ui.openMaps)}
          </a>
        </Button>
      </div>
    </section>
  )
}
