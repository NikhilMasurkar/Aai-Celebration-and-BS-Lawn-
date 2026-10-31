import { createTheme } from '@mui/material/styles'

// Brand palette — maroon and gold sampled from content/logo_02.png. Use these everywhere.
// Light, photo-first look: white page, maroon and gold as accents only.
const maroon = '#7a0811'
const maroonDeep = '#540305'
const gold = '#b87a28'
const goldSoft = '#cb9544'
const goldLight = '#d1a773'
const goldDeep = '#8a5a17' // small gold text on white (≥ 5:1)
const mist = '#f4eeec' // quiet surfaces
const ink = '#2b1a17'
const mutedInk = '#5f4b47'

// Both families cover Devanagari and Latin, so Marathi never falls back to a different font.
export const displayFont = '"Rozha One", serif'
const textFont = '"Anek Devanagari", system-ui, sans-serif'

const heading = { fontFamily: displayFont, fontWeight: 400, lineHeight: 1.12, color: ink }

export const theme = createTheme({
  palette: {
    primary: { main: maroon, dark: maroonDeep, contrastText: '#fff' },
    secondary: { main: gold, light: goldLight, dark: goldDeep, contrastText: '#fff' },
    text: { primary: ink, secondary: mutedInk },
    background: { default: '#fff', paper: '#fff' },
    divider: 'rgba(122, 8, 17, 0.14)',
    brand: { mist, goldSoft },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: textFont,
    // Anek's x-height runs small, so body text sits at 17px
    body1: { fontSize: '1.0625rem', lineHeight: 1.55 },
    body2: { fontSize: '1rem', lineHeight: 1.55 },
    h1: heading,
    h2: { ...heading, fontSize: 'clamp(2.1rem, 7vw, 3.25rem)', color: maroon },
    h3: { ...heading, fontSize: '1.7rem', color: maroon },
    button: { fontFamily: textFont, textTransform: 'none', fontWeight: 600, fontSize: '1rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // Rozha One has one weight: never fake bold; balance heading lines
        'h1, h2, h3': { fontSynthesis: 'none', textWrap: 'balance' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minHeight: 44, borderRadius: 10 },
        sizeLarge: { minHeight: 48, paddingInline: 24, fontSize: '1rem' },
        outlined: { borderColor: 'rgba(122, 8, 17, 0.35)' },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          minWidth: 44,
          paddingInline: 12,
          textTransform: 'none',
          fontSize: '0.9rem',
          color: maroon,
          borderColor: 'rgba(122, 8, 17, 0.25)',
          '&.Mui-selected, &.Mui-selected:hover': { backgroundColor: maroon, color: '#fff' },
        },
      },
    },
    MuiTab: {
      styleOverrides: { root: { minHeight: 44, textTransform: 'none', fontSize: '1rem', fontWeight: 600 } },
    },
    MuiListItemIcon: { styleOverrides: { root: { minWidth: 28, marginTop: 6, alignSelf: 'flex-start' } } },
  },
})
