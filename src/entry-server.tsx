import { renderToString } from 'react-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import { RouterProvider } from './router'
import './styles'
import App from './App'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { GmrCaseStudyPage } from './pages/GmrCaseStudyPage'
import { OliverWymanCaseStudyPage } from './pages/OliverWymanCaseStudyPage'
import { DataJamCaseStudyPage } from './pages/DataJamCaseStudyPage'
import { CareeriensCaseStudyPage } from './pages/CareeriensCaseStudyPage'
import { GarunDrishtiCaseStudyPage } from './pages/GarunDrishtiCaseStudyPage'
import { ExperiencePage } from './pages/ExperiencePage'
import { SkillsPage } from './pages/SkillsPage'
import { ResearchPage } from './pages/ResearchPage'
import { ResearchDetailPage } from './pages/ResearchDetailPage'
import { WritingPage } from './pages/WritingPage'
import { ArticleAemBlocksPage } from './pages/ArticleAemBlocksPage'
import { ArticleDamWorkflowsPage } from './pages/ArticleDamWorkflowsPage'
import { ArticleAssetLimitsPage } from './pages/ArticleAssetLimitsPage'
import { ArticleMcpPortalPage } from './pages/ArticleMcpPortalPage'
import { ArticleVisionPrototypePage } from './pages/ArticleVisionPrototypePage'
import { ResumePage } from './pages/ResumePage'
import { ContactPage } from './pages/ContactPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { NotFoundPage } from './pages/NotFoundPage'

export { buildLlmsTxt, buildLlmsFullTxt } from './content/llms'

function getSsrPage(path: string) {
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
    case '/geek-hoppers':
      return <HomePage />
    case '/engineering':
      return <SkillsPage />
    default:
      return <NotFoundPage />
  }
}

/** Renders the app for a given route to static HTML plus <head> tags. Used by scripts/prerender.mjs. */
export function render(url = '/'): { html: string; head: string; htmlAttributes: string } {
  const context = {} as { helmet: HelmetServerState | null }
  const cleanPath = url.replace(/\/+$/, '') || '/'
  const page = getSsrPage(cleanPath)
  const html = renderToString(
    <HelmetProvider context={context}>
      <RouterProvider initialPath={url}>
        <App content={page} />
      </RouterProvider>
    </HelmetProvider>,
  )
  const h = context.helmet
  const head = h ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join('\n    ') : ''
  return { html, head, htmlAttributes: h ? h.htmlAttributes.toString() : '' }
}

