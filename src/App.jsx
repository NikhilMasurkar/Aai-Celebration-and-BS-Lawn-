import { LangProvider } from './lang'
import Header from './sections/Header'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main id="top" />
    </LangProvider>
  )
}
