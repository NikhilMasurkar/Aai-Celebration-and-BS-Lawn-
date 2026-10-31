import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { MessageCircle, Phone } from 'lucide-react'
import { brand, contact, ui } from '@/content'
import { useLang } from '@/lang'
import { telUrl, whatsappUrl } from '@/lib/utils'
import { displayFont } from '@/theme'

// visible from sm up; on phones the name is read by screen readers only (the logo carries it visually)
const nameOnPhonesHidden = (theme) => ({
  fontFamily: displayFont,
  fontSize: '1.25rem',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: 1,
    height: 1,
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    whiteSpace: 'nowrap',
  },
})

export default function Header() {
  const { lang, setLang, t } = useLang()

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ bgcolor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(6px)', borderBottom: 1, borderColor: 'divider', color: 'primary.main' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64 }, justifyContent: 'space-between', gap: 2 }}>
          <Box component="a" href="#top" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'inherit', textDecoration: 'none' }}>
            <Box component="img" src="/logo.png" alt="" width={44} height={44} sx={{ display: 'block' }} />
            <Typography component="span" sx={nameOnPhonesHidden}>
              {t(brand.name)}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button href={telUrl(contact.phones[0])} startIcon={<Phone size={18} aria-hidden="true" />}>
                {t(ui.call)}
              </Button>
              <Button
                variant="contained"
                href={whatsappUrl(contact.whatsapp, t(ui.waGeneral))}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<MessageCircle size={18} aria-hidden="true" />}
              >
                {t(ui.whatsapp)}
              </Button>
            </Stack>

            <ToggleButtonGroup exclusive size="small" value={lang} onChange={(_, v) => v && setLang(v)} aria-label={t(ui.language)}>
              {/* Language names are shown in their own script and never translated. */}
              <ToggleButton value="mr" lang="mr">
                मराठी
              </ToggleButton>
              <ToggleButton value="en">EN</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
