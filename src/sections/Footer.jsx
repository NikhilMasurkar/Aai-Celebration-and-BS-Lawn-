import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl } from '@/lib/utils'

export default function Footer() {
  const { t } = useLang()
  return (
    // extra bottom padding on phones so the fixed ContactBar never covers the footer
    <footer className="bg-maroon-deep px-4 pt-14 pb-28 text-ivory/80 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center">
        <img src="/logo.png" alt="" width="64" height="64" className="size-16" />
        <p className="font-display text-2xl text-ivory">{t(brand.name)}</p>
        <div>
          <p className="text-sm tracking-wide text-gold-light">{t(ui.contactTitle)}</p>
          <p className="mt-1 flex flex-wrap justify-center gap-x-4 text-lg">
            {contact.phones.map((phone) => (
              <a key={phone} href={telUrl(phone)} className="underline-offset-4 hover:underline">
                {phone}
              </a>
            ))}
          </p>
        </div>
        <p className="text-sm text-ivory/60">
          © {new Date().getFullYear()} {t(brand.name)}
        </p>
      </div>
    </footer>
  )
}
