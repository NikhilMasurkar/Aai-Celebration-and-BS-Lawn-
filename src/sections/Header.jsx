import { MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="sticky top-0 z-40 border-b border-gold/30 bg-ivory/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt={t(brand.name)} width="44" height="44" className="size-11" />
          <span className="hidden font-display text-lg font-semibold text-maroon sm:inline">
            {t(brand.name)}
          </span>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" className="text-maroon hover:bg-paper">
              <a href={telUrl(contact.phones[0])}>
                <Phone /> {t(ui.call)}
              </a>
            </Button>
            <Button asChild className="bg-maroon hover:bg-maroon-deep">
              <a href={whatsappUrl(contact.whatsapp, t(ui.waGeneral))} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> {t(ui.whatsapp)}
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
            className="border-gold/50"
          >
            {/* Language names are shown in their own script and never translated. */}
            <ToggleGroupItem value="mr" className="h-9 px-3 data-[state=on]:bg-maroon data-[state=on]:text-ivory">
              मराठी
            </ToggleGroupItem>
            <ToggleGroupItem value="en" className="h-9 px-3 data-[state=on]:bg-maroon data-[state=on]:text-ivory">
              EN
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </header>
  )
}
