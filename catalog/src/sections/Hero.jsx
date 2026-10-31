import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Phone } from 'lucide-react'
import { brand, contact, heroImage, packages, ui } from '@/content'
import { useLang } from '@/lang'
import { formatINR, telUrl } from '@/lib/utils'

const lowestPrice = Math.min(...packages.map((p) => p.price))

export default function Hero() {
  const { t } = useLang()
  // "आई Celebration & BS Lawn" → the first word is the logo mark, set large
  const [mark, ...rest] = t(brand.name).split(' ')

  return (
    <Box component="section" aria-labelledby="hero-title">
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1.15fr' },
          alignItems: { md: 'center' },
          columnGap: { md: 6 },
          px: { md: 2 },
          py: { md: 7 },
        }}
      >
        {/* phones: edge-to-edge photo first; desktop: photo on the right */}
        <Box sx={{ order: { md: 2 } }}>
          <Box
            component="img"
            src={heroImage.src}
            srcSet={heroImage.srcSet}
            sizes="(min-width: 900px) 55vw, 100vw"
            alt={t(heroImage.alt)}
            fetchPriority="high"
            className="photo-reveal"
            sx={{
              display: 'block',
              width: 1,
              height: { xs: 'min(42svh, 400px)', md: 'min(72svh, 620px)' },
              objectFit: 'cover',
              bgcolor: 'brand.mist',
              borderRadius: { xs: '0 0 28px 28px', md: '28px' },
            }}
          />
        </Box>

        <Box sx={{ order: { md: 1 }, px: { xs: 2, md: 0 }, pt: { xs: 3, md: 0 }, pb: { xs: 7, md: 0 } }}>
          <Typography id="hero-title" variant="h1" className="rise">
            <Box component="span" sx={{ fontSize: 'clamp(3.5rem, 16vw, 5.5rem)', lineHeight: 1, color: 'primary.main' }}>
              {mark}
            </Box>{' '}
            <Box component="span" sx={{ display: 'block', fontSize: 'clamp(1.85rem, 7.5vw, 3rem)', lineHeight: 1.2 }}>
              {rest.join(' ')}
            </Box>
          </Typography>

          <Typography className="rise" style={{ '--i': 1 }} sx={{ mt: 2, maxWidth: 448, fontSize: '1.125rem', lineHeight: 1.6, color: 'text.secondary' }}>
            {t(brand.tagline)}
          </Typography>

          <Box className="rise" style={{ '--i': 2 }} sx={{ mt: 3.5 }}>
            <Stack direction="row" useFlexGap sx={{ flexWrap: 'wrap', gap: 1.5 }}>
              <Button variant="contained" size="large" href="#packages">
                {t(ui.viewPackages)}
              </Button>
              <Button variant="outlined" size="large" href={telUrl(contact.phones[0])} startIcon={<Phone size={18} aria-hidden="true" />}>
                {t(ui.call)}
              </Button>
            </Stack>
            <Typography sx={{ mt: 2, fontWeight: 600, color: 'secondary.dark' }}>
              {t(ui.fromPrice).replace('{price}', formatINR(lowestPrice))}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
