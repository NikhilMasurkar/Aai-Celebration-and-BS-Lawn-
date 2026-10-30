import { LangProvider } from './lang'
import ContactBar from './sections/ContactBar'
import Footer from './sections/Footer'
import Gallery from './sections/Gallery'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Location from './sections/Location'
import Occasions from './sections/Occasions'
import Packages from './sections/Packages'
import Rules from './sections/Rules'
import Spaces from './sections/Spaces'

export default function App() {
  return (
    <LangProvider>
      <Header />
      <main id="top">
        <Hero />
        <Spaces />
        <Packages />
        <Gallery />
        <Occasions />
        <Rules />
        <Location />
      </main>
      <Footer />
      <ContactBar />
    </LangProvider>
  )
}
