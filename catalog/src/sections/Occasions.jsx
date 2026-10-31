import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Ornament } from '@/components/SectionHeading'
import { occasions, ui } from '@/content'
import { useLang } from '@/lang'
import { displayFont } from '@/theme'

// A soft band between the gallery and the rules: what they host.
export default function Occasions() {
  const { t } = useLang()
  return (
    <Box component="section" aria-labelledby="occasions-title" sx={{ bgcolor: 'brand.mist', px: 2, py: { xs: 8, sm: 10 }, textAlign: 'center' }}>
      <Typography id="occasions-title" component="h2" sx={{ fontWeight: 600, color: 'secondary.dark' }}>
        {t(ui.occasionsTitle)}
      </Typography>
      <Stack
        component="ul"
        direction="row"
        useFlexGap
        sx={{ m: 0, mt: 2, p: 0, listStyle: 'none', flexWrap: 'wrap', justifyContent: 'center', columnGap: 1.5, rowGap: 1 }}
      >
        {occasions.map((o, i) => (
          <Box
            component="li"
            key={o.en}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, fontFamily: displayFont, fontSize: { xs: '1.7rem', sm: '2.25rem' }, color: 'primary.main' }}
          >
            {i > 0 && <Box aria-hidden="true" sx={{ width: 6, height: 6, transform: 'rotate(45deg)', bgcolor: 'brand.goldSoft' }} />}
            {t(o)}
          </Box>
        ))}
      </Stack>
      <Ornament sx={{ mx: 'auto', mt: 4 }} />
    </Box>
  )
}
