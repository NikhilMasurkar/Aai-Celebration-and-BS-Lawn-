import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ui, venues } from '@/content'
import { LangProvider } from '@/lang'
import Gallery from './Gallery'

const [palace, aaiLawn, bsLawn] = venues
const renderGallery = () => render(<LangProvider><Gallery /></LangProvider>)

it('has a gallery heading and starts on the palace photos', () => {
  renderGallery()
  expect(screen.getByRole('heading', { level: 2, name: ui.galleryTitle.mr })).toBeInTheDocument()
  expect(screen.getAllByAltText(palace.photos[0].alt.mr).length).toBeGreaterThan(0)
})

it('has a tab for each lawn showing its own photos', async () => {
  renderGallery()
  await userEvent.click(screen.getByRole('tab', { name: aaiLawn.tab.mr }))
  expect(screen.getAllByAltText(aaiLawn.photos[0].alt.mr).length).toBeGreaterThan(0)
  await userEvent.click(screen.getByRole('tab', { name: bsLawn.tab.mr }))
  expect(screen.getAllByAltText(bsLawn.photos[0].alt.mr).length).toBeGreaterThan(0)
})

it('opens a photo full-screen and closes it with Escape', async () => {
  renderGallery()
  await userEvent.click(screen.getByRole('button', { name: palace.photos[1].alt.mr }))
  const dialog = screen.getByRole('dialog')
  expect(within(dialog).getByAltText(palace.photos[1].alt.mr)).toBeInTheDocument()
  await userEvent.keyboard('{Escape}')
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})

it('closes the photo with a visible close button labelled in the chosen language', async () => {
  renderGallery()
  await userEvent.click(screen.getByRole('button', { name: palace.photos[0].alt.mr }))
  await userEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: ui.closePhoto.mr }))
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
