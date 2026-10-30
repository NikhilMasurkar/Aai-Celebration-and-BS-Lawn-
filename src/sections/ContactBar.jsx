import { MessageCircle, Phone } from 'lucide-react'
import { contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'

// Always-visible Call / WhatsApp on phones; the header carries these on desktop.
export default function ContactBar() {
  const { t } = useLang()
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-gold/30 bg-canvas/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm md:hidden">
      <a
        href={telUrl(contact.phones[0])}
        className="flex h-12 items-center justify-center gap-2 rounded-md border border-maroon font-medium text-maroon"
      >
        <Phone className="size-4" aria-hidden="true" /> {t(ui.call)}
      </a>
      <a
        href={whatsappUrl(contact.whatsapp, t(ui.waGeneral))}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 items-center justify-center gap-2 rounded-md bg-maroon font-medium text-canvas"
      >
        <MessageCircle className="size-4" aria-hidden="true" /> {t(ui.whatsapp)}
      </a>
    </nav>
  )
}
