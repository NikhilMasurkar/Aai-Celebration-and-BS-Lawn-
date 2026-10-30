import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { gallery, ui } from '@/content'
import { LangProvider } from '@/lang'
import Gallery from './Gallery'

const renderGallery = () => render(<LangProvider><Gallery /></LangProvider>)

it('has a gallery heading and starts on hall photos', () => {
  renderGallery()
  expect(screen.getByRole('heading', { level: 2, name: ui.galleryTitle.mr })).toBeInTheDocument()
  expect(screen.getAllByAltText(gallery.hall[0].alt.mr).length).toBeGreaterThan(0)
})

it('switches to lawn photos', async () => {
  renderGallery()
  await userEvent.click(screen.getByRole('tab', { name: ui.venueLawn.mr }))
  expect(screen.getAllByAltText(gallery.lawn[0].alt.mr).length).toBeGreaterThan(0)
})

it('opens a photo full-screen and closes it with Escape', async () => {
  renderGallery()
  await userEvent.click(screen.getByRole('button', { name: gallery.hall[1].alt.mr }))
  const dialog = screen.getByRole('dialog')
  expect(within(dialog).getByAltText(gallery.hall[1].alt.mr)).toBeInTheDocument()
  await userEvent.keyboard('{Escape}')
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
