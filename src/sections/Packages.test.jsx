import { render, screen, within } from '@testing-library/react'
import { packages, ui } from '@/content'
import { LangProvider } from '@/lang'
import ContactBar from './ContactBar'
import Packages from './Packages'

const renderIn = (node) => render(<LangProvider>{node}</LangProvider>)
const waText = (link) => decodeURIComponent(link.getAttribute('href').split('?text=')[1])

it('shows every package with its poster price', () => {
  renderIn(<Packages />)
  for (const price of ['₹25,000', '₹41,000', '₹51,000']) expect(screen.getByText(price)).toBeInTheDocument()
  for (const p of packages) expect(screen.getByRole('heading', { name: p.name.mr })).toBeInTheDocument()
})

it('lists included and extra items on each card', () => {
  renderIn(<Packages />)
  const hall = screen.getByRole('article', { name: packages[2].name.mr })
  expect(within(hall).getByText('स्पीकर')).toBeInTheDocument()
  expect(within(hall).getByText('20 कुशन सोफा')).toBeInTheDocument()
})

it('opens WhatsApp with the package and price already typed, in Marathi', () => {
  renderIn(<Packages />)
  const links = screen.getAllByRole('link', { name: ui.enquire.mr })
  expect(links).toHaveLength(3)
  links.forEach((link, i) => {
    expect(link.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/919284325413\?text=/)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link.getAttribute('rel')).toContain('noopener')
    expect(waText(link)).toContain(packages[i].name.mr)
  })
  expect(waText(links[1])).toContain('₹41,000')
})

it('writes the WhatsApp message in English when English is chosen', () => {
  localStorage.setItem('aai-lang', 'en')
  renderIn(<Packages />)
  const link = screen.getAllByRole('link', { name: ui.enquire.en })[1]
  expect(waText(link)).toBe("Hello, I'd like to know more about the Wedding Lawn Package (₹41,000).")
})

it('bottom bar calls the main number and opens a general WhatsApp chat', () => {
  renderIn(<ContactBar />)
  expect(screen.getByRole('link', { name: ui.call.mr })).toHaveAttribute('href', 'tel:+917507504947')
  expect(waText(screen.getByRole('link', { name: ui.whatsapp.mr }))).toBe(ui.waGeneral.mr)
})
