import { LazyMotion, domAnimation } from 'framer-motion'
import { SEO } from './components/SEO'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { GeekHoppers } from './sections/GeekHoppers'
import { About } from './sections/About'
import { Engineering } from './sections/Engineering'
import { Path } from './sections/Path'
import { Research } from './sections/Research'
import { Now } from './sections/Now'
import { Answers } from './sections/Answers'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <SEO />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <GeekHoppers />
        <About />
        <Engineering />
        <Path />
        <Research />
        <Now />
        <Answers />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  )
}
