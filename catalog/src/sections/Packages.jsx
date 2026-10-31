import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { Check, MessageCircle, Plus } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { contact, packages, ui, venues } from '@/content'
import { useLang } from '@/lang'
import { displayFont } from '@/theme'
import { formatINR, whatsappUrl } from '@/lib/utils'

function ItemList({ items, icon, muted }) {
  const { t } = useLang()
  return (
    <List dense disablePadding sx={{ mt: 1.5, color: muted ? 'text.secondary' : 'text.primary' }}>
      {items.map((item) => (
        <ListItem key={item.en} disableGutters sx={{ alignItems: 'flex-start', py: 0.4 }}>
          <ListItemIcon sx={{ color: muted ? 'inherit' : 'secondary.main' }}>{icon}</ListItemIcon>
          <ListItemText primary={t(item)} sx={{ m: 0 }} slotProps={{ primary: { variant: 'body1' } }} />
        </ListItem>
      ))}
    </List>
  )
}

function PackageCard({ pkg }) {
  const { t } = useLang()
  const titleId = `pkg-${pkg.id}`
  const price = formatINR(pkg.price)
  const message = t(ui.waPackage).replace('{name}', t(pkg.name)).replace('{price}', price)
  const venue = venues.find((v) => v.id === pkg.venue)
  // the hall package sits on a soft tint so the three cards don't read as one repeated tile
  const tinted = venue.type === 'hall'

  return (
    <Card
      variant="outlined"
      role="article"
      aria-labelledby={titleId}
      sx={{
        height: 1,
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 3, sm: 3.5 },
        borderRadius: 4,
        bgcolor: tinted ? 'brand.mist' : 'background.paper',
        borderColor: tinted ? 'rgba(122, 8, 17, 0.2)' : 'divider',
      }}
    >
      <Typography sx={{ fontWeight: 600, color: 'secondary.dark' }}>{t(venue.name)}</Typography>
      <Typography id={titleId} variant="h3" sx={{ mt: 0.5, fontSize: '1.65rem' }}>
        {t(pkg.name)}
      </Typography>
      <Typography sx={{ mt: 1.5, fontFamily: displayFont, fontSize: '3rem', lineHeight: 1 }}>{price}</Typography>

      <Typography sx={{ mt: 3.5, fontWeight: 600 }}>{t(ui.included)}</Typography>
      <ItemList items={pkg.included} icon={<Check size={16} aria-hidden="true" />} />

      <Divider sx={{ mt: 3, mb: 2.5 }} />
      <Typography sx={{ fontWeight: 600 }}>{t(ui.extras)}</Typography>
      <ItemList items={pkg.extras} icon={<Plus size={14} aria-hidden="true" />} muted />

      {/* mt: auto keeps the buttons aligned at the bottom when cards sit side by side */}
      <Box sx={{ mt: 'auto', pt: 4 }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          href={whatsappUrl(contact.whatsapp, message)}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<MessageCircle size={18} aria-hidden="true" />}
        >
          {t(ui.enquire)}
        </Button>
      </Box>
    </Card>
  )
}

export default function Packages() {
  const { t } = useLang()
  return (
    <Box component="section" id="packages" aria-labelledby="packages-title" sx={{ scrollMarginTop: 64, py: { xs: 10, sm: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="packages-title">{t(ui.packagesTitle)}</SectionHeading>
        <Grid container spacing={{ xs: 2.5, lg: 3 }}>
          {packages.map((pkg) => (
            <Grid key={pkg.id} size={{ xs: 12, lg: 4 }}>
              <PackageCard pkg={pkg} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
