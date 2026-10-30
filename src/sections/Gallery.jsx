import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { gallery, ui } from '@/content'
import { useLang } from '@/lang'

const venues = [
  { value: 'hall', label: ui.venueHall },
  { value: 'lawn', label: ui.venueLawn },
]

export default function Gallery() {
  const { t } = useLang()
  const [open, setOpen] = useState(null)

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="fade-up scroll-mt-20 px-4 pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="gallery-title">{t(ui.galleryTitle)}</SectionHeading>

        <Tabs defaultValue="hall" className="items-center">
          <TabsList className="mb-8 h-11 rounded-md bg-paper p-1">
            {venues.map((v) => (
              <TabsTrigger
                key={v.value}
                value={v.value}
                className="h-9 rounded-sm px-6 text-base data-[state=active]:bg-maroon data-[state=active]:text-ivory"
              >
                {t(v.label)}
              </TabsTrigger>
            ))}
          </TabsList>

          {venues.map((v) => (
            <TabsContent key={v.value} value={v.value} className="w-full">
              <Carousel opts={{ align: 'start' }} className="w-full">
                <CarouselContent>
                  {gallery[v.value].map((img) => (
                    <CarouselItem key={img.src} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                      <button
                        type="button"
                        onClick={() => setOpen(img)}
                        className="block aspect-[4/3] w-full overflow-hidden rounded-md bg-paper focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
                      >
                        <img
                          src={img.src}
                          srcSet={img.srcSet}
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                          alt={t(img.alt)}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden border-gold/50 text-maroon md:flex" />
                <CarouselNext className="hidden border-gold/50 text-maroon md:flex" />
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={open !== null} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
        <DialogContent className="max-w-[min(96vw,1200px)] border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[min(96vw,1200px)]">
          {open && (
            <>
              <DialogTitle className="sr-only">{t(open.alt)}</DialogTitle>
              <img
                src={open.src}
                srcSet={open.srcSet}
                sizes="96vw"
                alt={t(open.alt)}
                className="max-h-[90vh] w-full rounded-md object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
