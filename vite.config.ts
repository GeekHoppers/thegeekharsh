import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) {
              return 'motion'
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-helmet-async')) {
              return 'vendor'
            }
          }
        },
      },
    },
  },
  ssr: { noExternal: ['react-helmet-async'] },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 5173,
    host: true,
  },
})

