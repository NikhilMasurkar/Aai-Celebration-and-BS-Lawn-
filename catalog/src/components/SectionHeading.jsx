import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Thin gold rule with a small diamond motif, echoing the logo's divider. Used sparingly.
export function Ornament({ sx }) {
  return (
    <Box component="svg" viewBox="0 0 240 16" aria-hidden="true" sx={{ display: 'block', height: 16, width: 192, color: 'brand.goldSoft', ...sx }}>
      <line x1="0" y1="8" x2="100" y2="8" stroke="currentColor" strokeWidth="1" />
      <line x1="140" y1="8" x2="240" y2="8" stroke="currentColor" strokeWidth="1" />
      <path d="M120 1 L127 8 L120 15 L113 8 Z" fill="currentColor" />
      <circle cx="106" cy="8" r="2" fill="currentColor" />
      <circle cx="134" cy="8" r="2" fill="currentColor" />
    </Box>
  )
}

export default function SectionHeading({ id, children, sx }) {
  return (
    <Typography id={id} variant="h2" sx={{ mb: { xs: 4, sm: 5 }, ...sx }}>
      {children}
    </Typography>
  )
}
