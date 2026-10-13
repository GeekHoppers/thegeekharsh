import { LazyMotion, domAnimation } from 'framer-motion'
import { useRouter } from './router'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { GeekHoppersPage } from './pages/GeekHoppersPage'
import { AboutPage } from './pages/AboutPage'
import { EngineeringPage } from './pages/EngineeringPage'
import { ResearchPage } from './pages/ResearchPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  const { path } = useRouter()

  const renderContent = () => {
    switch (path) {
      case '/geek-hoppers':
        return <GeekHoppersPage />
      case '/about':
        return <AboutPage />
      case '/engineering':
        return <EngineeringPage />
      case '/research':
        return <ResearchPage />
      case '/contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        {renderContent()}
      </main>
      <Footer />
    </LazyMotion>
  )
}
