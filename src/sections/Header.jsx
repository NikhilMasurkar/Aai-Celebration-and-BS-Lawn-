import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'

const toggleItem =
  'h-11 min-w-11 border-gold-light/50 px-3 text-canvas hover:bg-canvas/10 hover:text-canvas data-[state=on]:bg-gold-light data-[state=on]:text-maroon-deep'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="sticky top-0 z-40 bg-maroon text-canvas">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="" width="44" height="44" className="size-11" />
          <span className="sr-only font-display text-xl sm:not-sr-only">{t(brand.name)}</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" className="h-11 text-canvas hover:bg-canvas/10 hover:text-canvas">
              <a href={telUrl(contact.phones[0])}>
                <Phone aria-hidden="true" /> {t(ui.call)}
              </a>
            </Button>
            <Button asChild className="h-11 bg-gold-light text-maroon-deep hover:bg-gold-soft">
              <a href={whatsappUrl(contact.whatsapp, t(ui.waGeneral))} target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" /> {t(ui.whatsapp)}
              </a>
            </Button>
          </div>

          <ToggleGroup
            type="single"
            value={lang}
            onValueChange={(v) => v && setLang(v)}
            aria-label={t(ui.language)}
            spacing={0}
            variant="outline"
          >
            {/* Language names are shown in their own script and never translated. */}
            <ToggleGroupItem value="mr" lang="mr" className={toggleItem}>
              मराठी
            </ToggleGroupItem>
            <ToggleGroupItem value="en" className={toggleItem}>
              EN
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </header>
  )
}
