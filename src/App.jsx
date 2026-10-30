import { LangProvider } from './lang'
import ContactBar from './sections/ContactBar'
import Header from './sections/Header'
import Packages from './sections/Packages'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main id="top">
        <Packages />
      </main>
      <ContactBar />
    </LangProvider>
  )
}
