import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MapPin } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { contact, ui } from '@/content'
import { useLang } from '@/lang'

export default function Location() {
  const { t } = useLang()
  return (
    <Box component="section" id="location" aria-labelledby="location-title" sx={{ scrollMarginTop: 64, bgcolor: 'brand.mist', py: { xs: 10, sm: 12 } }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
          <Box sx={{ maxWidth: 576 }}>
            <SectionHeading id="location-title" sx={{ mb: 2 }}>
              {t(ui.locationTitle)}
            </SectionHeading>
            <Typography component="address" sx={{ fontStyle: 'normal', fontSize: '1.125rem', lineHeight: 1.6 }}>
              {t(contact.address)}
            </Typography>
          </Box>
          <Button
            variant="contained"
            size="large"
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<MapPin size={18} aria-hidden="true" />}
          >
            {t(ui.openMaps)}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
