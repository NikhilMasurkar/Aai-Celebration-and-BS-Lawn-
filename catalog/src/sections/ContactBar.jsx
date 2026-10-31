import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { MessageCircle, Phone } from 'lucide-react'
import { contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'

// Always-visible Call / WhatsApp on phones; the header carries these on desktop.
export default function ContactBar() {
  const { t } = useLang()
  return (
    <Box
      component="nav"
      sx={{
        position: 'fixed',
        insetInline: 0,
        bottom: 0,
        zIndex: 'appBar',
        display: { xs: 'grid', md: 'none' },
        gridTemplateColumns: '1fr 1fr',
        gap: 1,
        px: 1.5,
        pt: 1,
        pb: 'max(8px, env(safe-area-inset-bottom))',
        bgcolor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(6px)',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Button variant="outlined" size="large" href={telUrl(contact.phones[0])} startIcon={<Phone size={18} aria-hidden="true" />}>
        {t(ui.call)}
      </Button>
      <Button
        variant="contained"
        size="large"
        href={whatsappUrl(contact.whatsapp, t(ui.waGeneral))}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<MessageCircle size={18} aria-hidden="true" />}
      >
        {t(ui.whatsapp)}
      </Button>
    </Box>
  )
}
