import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'

const toggleItem =
  'h-11 min-w-11 border-maroon/25 px-3 text-maroon hover:bg-mist hover:text-maroon data-[state=on]:bg-maroon data-[state=on]:text-white'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 text-maroon backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="" width="44" height="44" className="size-11" />
          <span className="sr-only font-display text-xl sm:not-sr-only">{t(brand.name)}</span>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" className="h-11 text-maroon hover:bg-mist hover:text-maroon">
              <a href={telUrl(contact.phones[0])}>
                <Phone aria-hidden="true" /> {t(ui.call)}
              </a>
            </Button>
            <Button asChild className="h-11 bg-maroon text-white hover:bg-maroon-deep">
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
