import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

function getThemeSnapshot(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    if (document.documentElement.classList.contains('dark')) return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function getServerSnapshot(): Theme {
  return 'light'
}

let listeners: Array<() => void> = []

function subscribe(listener: () => void) {
  listeners.push(listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

function notify() {
  for (const listener of listeners) {
    listener()
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerSnapshot)

  // Listen to OS theme changes if user has not explicitly chosen a preference
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      try {
        const stored = localStorage.getItem('theme')
        if (!stored) {
          notify()
        }
      } catch {
        notify()
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const setTheme = (next: Theme) => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      if (next === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      try {
        localStorage.setItem('theme', next)
      } catch {
        // LocalStorage access may be restricted
      }
    }
    notify()
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
