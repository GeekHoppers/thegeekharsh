import { SEO } from '../components/SEO'
import { Hero } from '../sections/Hero'
import { GeekHoppers } from '../sections/GeekHoppers'
import { About } from '../sections/About'
import { Engineering } from '../sections/Engineering'
import { Path } from '../sections/Path'
import { Research } from '../sections/Research'
import { Now } from '../sections/Now'
import { Answers } from '../sections/Answers'
import { Contact } from '../sections/Contact'

export function HomePage() {
  return (
    <>
      <SEO />
      <Hero />
      <GeekHoppers />
      <About />
      <Engineering />
      <Path />
      <Research />
      <Now />
      <Answers />
      <Contact />
    </>
  )
}
