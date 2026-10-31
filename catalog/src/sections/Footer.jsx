import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl } from '@/lib/utils'
import { displayFont } from '@/theme'

const year = new Date().getFullYear()

export default function Footer() {
  const { t } = useLang()
  return (
    // extra bottom padding on phones so the fixed ContactBar never covers the footer
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', px: 2, pt: 7, pb: { xs: 14, md: 6 } }}>
      <Stack spacing={2.5} sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Box component="img" src="/logo.png" alt="" width={64} height={64} sx={{ display: 'block' }} />
        <Typography sx={{ fontFamily: displayFont, fontSize: '1.5rem', color: 'primary.main' }}>{t(brand.name)}</Typography>
        <Box>
          <Typography sx={{ fontWeight: 600, color: 'secondary.dark' }}>{t(ui.contactTitle)}</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 0.5, justifyContent: 'center' }}>
            {contact.phones.map((phone) => (
              <Link key={phone} href={telUrl(phone)} color="textPrimary" underline="hover" sx={{ display: 'inline-flex', alignItems: 'center', minHeight: 44, px: 0.5, fontSize: '1.125rem' }}>
                {phone}
              </Link>
            ))}
          </Stack>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          © {year} {t(brand.name)}
        </Typography>
      </Stack>
    </Box>
  )
}
