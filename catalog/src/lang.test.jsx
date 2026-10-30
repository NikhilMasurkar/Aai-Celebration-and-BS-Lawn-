import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { brand } from './content'
import { LangProvider, useLang } from './lang'
import Header from './sections/Header'

let api
function Probe() {
  // oxlint-disable-next-line react/globals -- test probe exposes the hook's API
  api = useLang()
  return <p>{api.t(brand.name)}</p>
}
const renderProbe = () => render(<LangProvider><Probe /></LangProvider>)

afterEach(() => vi.restoreAllMocks())

it('defaults to Marathi and sets <html lang>', () => {
  renderProbe()
  expect(api.lang).toBe('mr')
  expect(screen.getByText(brand.name.mr)).toBeInTheDocument()
  expect(document.documentElement.lang).toBe('mr')
})

it('switches to English and remembers the choice', () => {
  renderProbe()
  act(() => api.setLang('en'))
  expect(screen.getByText(brand.name.en)).toBeInTheDocument()
  expect(localStorage.getItem('aai-lang')).toBe('en')
  expect(document.documentElement.lang).toBe('en')
})

it('starts in the language saved on a previous visit', () => {
  localStorage.setItem('aai-lang', 'en')
  renderProbe()
  expect(api.lang).toBe('en')
})

it('ignores an unknown saved language', () => {
  localStorage.setItem('aai-lang', 'fr')
  renderProbe()
  expect(api.lang).toBe('mr')
})

it('still works when the browser blocks storage', () => {
  vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked') })
  vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked') })
  renderProbe()
  expect(api.lang).toBe('mr')
  act(() => api.setLang('en'))
  expect(screen.getByText(brand.name.en)).toBeInTheDocument()
})

it('falls back to Marathi when an English string is missing', () => {
  localStorage.setItem('aai-lang', 'en')
  renderProbe()
  expect(api.t({ mr: 'फक्त मराठी' })).toBe('फक्त मराठी')
})

it('header toggle switches the page to English', async () => {
  render(<LangProvider><Header /><Probe /></LangProvider>)
  await userEvent.click(screen.getByRole('radio', { name: 'EN' }))
  expect(api.lang).toBe('en')
  await userEvent.click(screen.getByRole('radio', { name: 'मराठी' }))
  expect(api.lang).toBe('mr')
})
