import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  type MouseEvent,
} from 'react'

interface RouterContextValue {
  path: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
})

export function useRouter() {
  return useContext(RouterContext)
}

interface RouterProviderProps {
  initialPath?: string
  children: ReactNode
}

/**
 * Lightweight, typed client + SSR router.
 * Uses the native HTML5 History API (pushState, popstate) without hash (#) fragments.
 * Handles instant scroll-to-top on route changes and supports SSR pre-rendering.
 */
export function RouterProvider({ initialPath = '/', children }: RouterProviderProps) {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.replace(/\/+$/, '')
      return p === '' ? '/' : p
    }
    const clean = initialPath.replace(/\/+$/, '')
    return clean === '' ? '/' : clean
  })

  useEffect(() => {
    const onPopState = () => {
      const p = window.location.pathname.replace(/\/+$/, '')
      setPath(p === '' ? '/' : p)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
    }
  }, [path])

  const navigate = (to: string) => {
    if (typeof window === 'undefined') return
    const target = to.replace(/\/+$/, '') || '/'
    if (target === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState(null, '', target)
    setPath(target)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
  className?: string
  replace?: boolean
}

/**
 * Clean URL link component.
 * Intercepts internal route navigation without `#` fragments.
 * Falls back to standard anchor behavior for external links, modified clicks (Cmd/Ctrl), or new tabs.
 */
export function Link({ to, children, className, onClick, replace, ...props }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !props.target &&
      to.startsWith('/')
    ) {
      e.preventDefault()
      if (replace && typeof window !== 'undefined') {
        const target = to.replace(/\/+$/, '') || '/'
        window.history.replaceState(null, '', target)
        navigate(target)
      } else {
        navigate(to)
      }
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}
