import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from 'fuyukaki-ui'

export const Route = createFileRoute('/docs')({
  component: DocsLayout,
})

const components = [
  { name: 'Button', path: '/docs/button' },
  { name: 'Badge', path: '/docs/badge' },
  { name: 'Card', path: '/docs/card' },
  { name: 'Input', path: '/docs/input' },
  { name: 'Alert', path: '/docs/alert' },
  { name: 'Checkbox', path: '/docs/checkbox' },
  { name: 'Label', path: '/docs/label' },
  { name: 'Textarea', path: '/docs/textarea' },
  { name: 'Switch', path: '/docs/switch' },
  { name: 'Radio', path: '/docs/radio' },
  { name: 'Select', path: '/docs/select' },
  { name: 'Tooltip', path: '/docs/tooltip' },
  { name: 'Dialog', path: '/docs/dialog' },
]

function DocsLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/persimmon.png"
                alt="fuyukaki-ui"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-xl sm:text-2xl font-bold text-primary">
                fuyukaki-ui
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden sm:flex gap-6">
                <Link
                  to="/docs/button"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Components
                </Link>
                <a
                  href="https://github.com/kaki0704/fuyukaki-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </nav>
              <Button
                variant="ghost"
                size="sm"
                className="sm:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-[73px] bg-background z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            <h3 className="font-semibold text-foreground mb-3 px-3">
              Components
            </h3>
            {components.map((component) => (
              <Link
                key={component.path}
                to={component.path}
                className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                activeProps={{
                  className: 'bg-accent text-foreground font-medium',
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {component.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border space-y-2">
              <a
                href="https://github.com/kaki0704/fuyukaki-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}

      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-1">
              <h3 className="font-semibold text-foreground mb-3 px-3">
                Components
              </h3>
              {components.map((component) => (
                <Link
                  key={component.path}
                  to={component.path}
                  className="block px-3 py-2 rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  activeProps={{
                    className: 'bg-accent text-foreground font-medium',
                  }}
                >
                  {component.name}
                </Link>
              ))}
            </nav>
          </aside>

          <main className="flex-1 max-w-4xl min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
