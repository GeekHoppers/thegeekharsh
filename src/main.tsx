import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from './router'
import './styles'
import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root not found')

const app = (
  <StrictMode>
    <HelmetProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </HelmetProvider>
  </StrictMode>
)

if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
