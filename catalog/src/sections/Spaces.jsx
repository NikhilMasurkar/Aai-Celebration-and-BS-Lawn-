import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import SectionHeading from '@/components/SectionHeading'
import { ui, venues } from '@/content'
import { useLang } from '@/lang'

const diamond = { width: 6, height: 6, flexShrink: 0, mt: 1.25, mr: 1.25, transform: 'rotate(45deg)', bgcolor: 'secondary.main' }

export default function Spaces() {
  const { t } = useLang()
  return (
    <Box component="section" aria-labelledby="spaces-title" sx={{ pt: { xs: 8, sm: 12 } }}>
      <Container maxWidth="lg" disableGutters>
        <SectionHeading id="spaces-title" sx={{ px: 2 }}>
          {t(ui.spacesTitle)}
        </SectionHeading>

        {/* phones: swipe sideways through the three venues (the next one peeks in); md+: three columns */}
        <Box
          component="ul"
          sx={{
            m: 0,
            px: 2,
            pb: 1,
            listStyle: 'none',
            display: { xs: 'flex', md: 'grid' },
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
            gap: { xs: 2.5, md: 4 },
            overflowX: { xs: 'auto', md: 'visible' },
            scrollSnapType: 'x mandatory',
            scrollPaddingInline: 16,
          }}
        >
          {venues.map((venue) => (
            <Box component="li" key={venue.id} sx={{ width: { xs: '74%', md: 'auto' }, flexShrink: 0, scrollSnapAlign: 'start' }}>
              <Box sx={{ aspectRatio: '3 / 4', overflow: 'hidden', borderRadius: '999px 999px 0 0', bgcolor: 'brand.mist' }}>
                <Box
                  component="img"
                  src={venue.image.src}
                  srcSet={venue.image.srcSet}
                  sizes="(min-width: 900px) 33vw, 74vw"
                  alt={t(venue.image.alt)}
                  loading="lazy"
                  sx={{ display: 'block', width: 1, height: 1, objectFit: 'cover' }}
                />
              </Box>
              <Typography variant="h3" sx={{ mt: 2.5 }}>
                {t(venue.name)}
              </Typography>
              <List disablePadding sx={{ mt: 1, color: 'text.secondary' }}>
                {venue.facts.map((fact) => (
                  <ListItem key={fact.en} disableGutters disablePadding sx={{ alignItems: 'flex-start', py: 0.4 }}>
                    <Box aria-hidden="true" sx={diamond} />
                    {t(fact)}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
