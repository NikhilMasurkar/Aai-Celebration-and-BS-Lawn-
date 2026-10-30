import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { Button } from '@/components/ui/button'
import { contact, ui } from '@/content'
import { useLang } from '@/lang'

export default function Location() {
  const { t } = useLang()
  return (
    <section id="location" aria-labelledby="location-title" className="fade-up scroll-mt-16 px-4 py-20 text-center">
      <div className="mx-auto max-w-xl">
        <SectionHeading id="location-title">{t(ui.locationTitle)}</SectionHeading>
        <address className="text-lg leading-relaxed not-italic">{t(contact.address)}</address>
        <Button asChild size="lg" className="mt-6 h-12 rounded-md bg-maroon px-6 text-base hover:bg-maroon-deep">
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin aria-hidden="true" /> {t(ui.openMaps)}
          </a>
        </Button>
      </div>
    </section>
  )
}
