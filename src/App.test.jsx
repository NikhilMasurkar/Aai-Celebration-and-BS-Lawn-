import { render } from '@testing-library/react'
import App from './App'

it('renders', () => {
  render(<App />)
  expect(document.querySelector('main')).toBeInTheDocument()
})
