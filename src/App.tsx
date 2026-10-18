import { lazy, Suspense, type ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { useRouter } from './router'
import { ThemeProvider } from './theme/ThemeContext'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'

const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })))
const GmrCaseStudyPage = lazy(() => import('./pages/GmrCaseStudyPage').then((m) => ({ default: m.GmrCaseStudyPage })))
const OliverWymanCaseStudyPage = lazy(() => import('./pages/OliverWymanCaseStudyPage').then((m) => ({ default: m.OliverWymanCaseStudyPage })))
const DataJamCaseStudyPage = lazy(() => import('./pages/DataJamCaseStudyPage').then((m) => ({ default: m.DataJamCaseStudyPage })))
const CareeriensCaseStudyPage = lazy(() => import('./pages/CareeriensCaseStudyPage').then((m) => ({ default: m.CareeriensCaseStudyPage })))
const GarunDrishtiCaseStudyPage = lazy(() => import('./pages/GarunDrishtiCaseStudyPage').then((m) => ({ default: m.GarunDrishtiCaseStudyPage })))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage').then((m) => ({ default: m.ExperiencePage })))
const SkillsPage = lazy(() => import('./pages/SkillsPage').then((m) => ({ default: m.SkillsPage })))
const ResearchPage = lazy(() => import('./pages/ResearchPage').then((m) => ({ default: m.ResearchPage })))
const ResearchDetailPage = lazy(() => import('./pages/ResearchDetailPage').then((m) => ({ default: m.ResearchDetailPage })))
const WritingPage = lazy(() => import('./pages/WritingPage').then((m) => ({ default: m.WritingPage })))
const ArticleAemBlocksPage = lazy(() => import('./pages/ArticleAemBlocksPage').then((m) => ({ default: m.ArticleAemBlocksPage })))
const ArticleDamWorkflowsPage = lazy(() => import('./pages/ArticleDamWorkflowsPage').then((m) => ({ default: m.ArticleDamWorkflowsPage })))
const ArticleAssetLimitsPage = lazy(() => import('./pages/ArticleAssetLimitsPage').then((m) => ({ default: m.ArticleAssetLimitsPage })))
const ArticleMcpPortalPage = lazy(() => import('./pages/ArticleMcpPortalPage').then((m) => ({ default: m.ArticleMcpPortalPage })))
const ArticleVisionPrototypePage = lazy(() => import('./pages/ArticleVisionPrototypePage').then((m) => ({ default: m.ArticleVisionPrototypePage })))
const ResumePage = lazy(() => import('./pages/ResumePage').then((m) => ({ default: m.ResumePage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))

interface AppProps {
  content?: ReactNode
}

export default function App({ content }: AppProps) {
  const { path } = useRouter()

  const renderContent = () => {
    switch (path) {
      case '/':
        return <HomePage />
      case '/about':
        return <AboutPage />
      case '/projects':
        return <ProjectsPage />
      case '/projects/gmr-web-platform':
        return <GmrCaseStudyPage />
      case '/projects/oliver-wyman':
        return <OliverWymanCaseStudyPage />
      case '/projects/datajam-portal':
        return <DataJamCaseStudyPage />
      case '/projects/careeriens':
        return <CareeriensCaseStudyPage />
      case '/projects/garun-drishti':
        return <GarunDrishtiCaseStudyPage />
      case '/experience':
        return <ExperiencePage />
      case '/skills':
        return <SkillsPage />
      case '/research':
        return <ResearchPage />
      case '/research/real-time-threat-detection':
        return <ResearchDetailPage />
      case '/writing':
        return <WritingPage />
      case '/writing/designing-maintainable-blocks-in-aem-edge-delivery-services':
        return <ArticleAemBlocksPage />
      case '/writing/debugging-event-driven-dam-workflows-in-aem':
        return <ArticleDamWorkflowsPage />
      case '/writing/reasoning-about-asset-upload-limits':
        return <ArticleAssetLimitsPage />
      case '/writing/lessons-from-building-a-conversational-data-portal':
        return <ArticleMcpPortalPage />
      case '/writing/what-a-computer-vision-prototype-can-and-cannot-prove':
        return <ArticleVisionPrototypePage />
      case '/resume':
        return <ResumePage />
      case '/contact':
        return <ContactPage />
      case '/privacy':
        return <PrivacyPage />
      // Backwards-compatible aliases
      case '/geek-hoppers':
        return <HomePage />
      case '/engineering':
        return <SkillsPage />
      default:
        return <NotFoundPage />
    }
  }

  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation} strict>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:text-on-primary focus:px-4 focus:py-3 rounded-lg shadow-lg font-body-sm"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Suspense fallback={<div className="min-h-[50vh]" />}>
            {content ?? renderContent()}
          </Suspense>
        </main>
        <Footer />
      </LazyMotion>
    </ThemeProvider>
  )
}

