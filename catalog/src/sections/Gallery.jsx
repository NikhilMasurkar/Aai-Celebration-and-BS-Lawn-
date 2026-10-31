import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { X } from 'lucide-react'
import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import { ui, venues } from '@/content'
import { useLang } from '@/lang'

const srOnly = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', p: 0 }

export default function Gallery() {
  const { t } = useLang()
  const [tab, setTab] = useState(venues[0].id)
  const [open, setOpen] = useState(null)
  const venue = venues.find((v) => v.id === tab)

  return (
    <Box component="section" id="gallery" aria-labelledby="gallery-title" sx={{ scrollMarginTop: 64, pb: { xs: 10, sm: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading id="gallery-title">{t(ui.galleryTitle)}</SectionHeading>

        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          aria-label={t(ui.galleryTitle)}
          variant="scrollable"
          scrollButtons={false}
          sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
        >
          {venues.map((v) => (
            <Tab key={v.id} value={v.id} label={t(v.tab)} id={`gallery-tab-${v.id}`} aria-controls="gallery-panel" />
          ))}
        </Tabs>

        {/* phones: swipe sideways; md+: a three-column grid */}
        <Box
          role="tabpanel"
          id="gallery-panel"
          aria-labelledby={`gallery-tab-${tab}`}
          component="ul"
          sx={{
            m: 0,
            p: 0,
            listStyle: 'none',
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
            gap: 2,
            overflowX: { xs: 'auto', md: 'visible' },
            scrollSnapType: 'x mandatory',
          }}
        >
          {venue.photos.map((img) => (
            <Box component="li" key={img.src} sx={{ width: { xs: '85%', sm: '48%', md: 'auto' }, flexShrink: 0, scrollSnapAlign: 'start' }}>
              <ButtonBase
                focusRipple
                onClick={() => setOpen(img)}
                sx={{ display: 'block', width: 1, aspectRatio: '4 / 3', overflow: 'hidden', borderRadius: 2, bgcolor: 'brand.mist' }}
              >
                <Box
                  component="img"
                  src={img.src}
                  srcSet={img.srcSet}
                  sizes="(min-width: 900px) 33vw, (min-width: 600px) 48vw, 85vw"
                  alt={t(img.alt)}
                  loading="lazy"
                  sx={{
                    display: 'block',
                    width: 1,
                    height: 1,
                    objectFit: 'cover',
                    transition: 'transform 500ms',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
              </ButtonBase>
            </Box>
          ))}
        </Box>
      </Container>

      <Dialog
        open={open !== null}
        onClose={() => setOpen(null)}
        maxWidth={false}
        aria-labelledby="photo-title"
        slotProps={{
          paper: { sx: { m: 1.5, bgcolor: 'transparent', boxShadow: 'none', overflow: 'visible', maxWidth: 'min(96vw, 1200px)' } },
          backdrop: { sx: { bgcolor: 'rgba(0, 0, 0, 0.85)' } },
        }}
      >
        {open && (
          <>
            <DialogTitle id="photo-title" sx={srOnly}>
              {t(open.alt)}
            </DialogTitle>
            <IconButton
              aria-label={t(ui.closePhoto)}
              onClick={() => setOpen(null)}
              sx={{ position: 'absolute', top: -56, right: 0, width: 44, height: 44, bgcolor: '#fff', color: 'primary.main', '&:hover': { bgcolor: 'brand.mist' } }}
            >
              <X size={20} aria-hidden="true" />
            </IconButton>
            <Box
              component="img"
              src={open.src}
              srcSet={open.srcSet}
              sizes="96vw"
              alt={t(open.alt)}
              sx={{ display: 'block', width: 1, maxHeight: '90vh', objectFit: 'contain', borderRadius: 2 }}
            />
          </>
        )}
      </Dialog>
    </Box>
  )
}
