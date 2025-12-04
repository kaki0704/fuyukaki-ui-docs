import { Link } from '@tanstack/react-router'
import { Search, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { GITHUB_URL } from '../constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <img src="/persimmon.png" alt="Fuyukaki UI" className="h-8 w-8" />
          <span className="font-bold text-lg text-foreground">Fuyukaki UI</span>
        </Link>

        <div className="hidden md:flex items-center flex-1 max-w-md">
          <button className="cursor-pointer flex items-center gap-2 w-full px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg hover:bg-muted/80 transition-colors">
            <Search className="h-4 w-4" />
            <span className="flex-1 text-left">Search...</span>
            <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-mono bg-background border border-border rounded">
              <span className="text-xs">&#8984;</span>K
            </kbd>
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <Link
            to="/docs/button"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <img src="/github-mark.svg" alt="GitHub" className="h-5 w-5 opacity-70" />
          </a>
        </nav>

        <button
          className="cursor-pointer md:hidden ml-auto p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button className="cursor-pointer flex items-center gap-2 w-full px-3 py-2 text-sm text-muted-foreground bg-muted/50 border border-border rounded-lg">
              <Search className="h-4 w-4" />
              <span>Search...</span>
            </button>
            <Link
              to="/docs/button"
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Components
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <img src="/github-mark.svg" alt="GitHub" className="h-4 w-4 opacity-70" />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
