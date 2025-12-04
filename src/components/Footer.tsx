import { GithubIcon } from 'lucide-react'
import { GITHUB_URL } from '../constants'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="/persimmon.png" alt="Fuyukaki UI" className="h-6 w-6 opacity-60" />
            <p className="text-sm text-muted-foreground">
              Released under the MIT License.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} Fuyukaki UI
          </p>
        </div>
      </div>
    </footer>
  )
}
