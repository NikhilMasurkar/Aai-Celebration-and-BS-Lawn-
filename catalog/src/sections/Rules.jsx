import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { ruleHighlights, rules, ui } from '@/content'
import { useLang } from '@/lang'

export default function Rules() {
  const { t } = useLang()
  return (
    <Box component="section" id="rules" aria-labelledby="rules-title" sx={{ scrollMarginTop: 64, py: { xs: 10, sm: 14 } }}>
      <Container maxWidth="md">
        <SectionHeading id="rules-title">{t(ui.rulesTitle)}</SectionHeading>

        <Paper elevation={0} sx={{ bgcolor: 'brand.mist', px: 2.5 }}>
          <List disablePadding>
            {ruleHighlights.map((h, i) => (
              <ListItem key={h.en} disableGutters divider={i < ruleHighlights.length - 1} sx={{ alignItems: 'flex-start', py: 2, fontSize: '1.125rem' }}>
                <Box aria-hidden="true" sx={{ width: 8, height: 8, flexShrink: 0, mt: 1.25, mr: 1.5, transform: 'rotate(45deg)', bgcolor: 'secondary.main' }} />
                {t(h)}
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* MUI's Collapse measures the content on every change, so re-wrapped text is never cut off */}
        <Accordion
          disableGutters
          elevation={0}
          slotProps={{ transition: { unmountOnExit: true } }}
          sx={{ mt: 2, bgcolor: 'transparent', '&::before': { display: 'none' } }}
        >
          <AccordionSummary
            expandIcon={<ChevronDown size={18} aria-hidden="true" />}
            sx={{ px: 0, minHeight: 44, justifyContent: 'flex-start', '& .MuiAccordionSummary-content': { flexGrow: 0, mr: 1 } }}
          >
            <Typography sx={{ fontWeight: 600, color: 'primary.main' }}>{t(ui.rulesShowAll)}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 0 }}>
            <Box component="ol" sx={{ m: 0, pl: 3, '& li': { mb: 1.5, lineHeight: 1.6 }, '& li::marker': { fontWeight: 600, color: 'secondary.main' } }}>
              {rules.map((rule) => (
                <li key={rule.en}>{t(rule)}</li>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  )
}
