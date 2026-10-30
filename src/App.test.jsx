import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { contact, ruleHighlights, ui } from './content'

it('shows every section heading in Marathi by default', () => {
  render(<App />)
  for (const key of ['spacesTitle', 'packagesTitle', 'occasionsTitle','rulesTitle', 'locationTitle']) {
    expect(screen.getByRole('heading', { level: 2, name: ui[key].mr })).toBeInTheDocument()
  }
})

it('hero button jumps to the packages section', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: ui.viewPackages.mr })).toHaveAttribute('href', '#packages')
})

it('shows key rules up front and all 13 after expanding', async () => {
  render(<App />)
  const rules = screen.getByRole('region', { name: ui.rulesTitle.mr })
  for (const h of ruleHighlights) expect(within(rules).getByText(h.mr)).toBeInTheDocument()
  await userEvent.click(within(rules).getByRole('button', { name: ui.rulesShowAll.mr }))
  expect(within(rules).getAllByRole('listitem').length).toBe(ruleHighlights.length + 13)
})

it('links the address to Google Maps in a new tab', () => {
  render(<App />)
  const link = screen.getByRole('link', { name: ui.openMaps.mr })
  expect(link).toHaveAttribute('href', contact.mapsUrl)
  expect(link).toHaveAttribute('target', '_blank')
})

it('lists both phone numbers in the footer', () => {
  render(<App />)
  const footer = screen.getByRole('contentinfo')
  for (const phone of contact.phones) expect(within(footer).getByText(phone)).toBeInTheDocument()
})
