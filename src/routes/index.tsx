import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from 'fuyukaki-ui'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Palette,
  Accessibility,
  Zap,
  Package,
  Code2,
} from 'lucide-react'
import { GITHUB_URL } from '../constants'

export const Route = createFileRoute('/')({ component: Home })

const features = [
  {
    icon: Palette,
    title: 'Warm & Natural',
    description:
      'Inspired by the warm, organic tones of persimmons and nature. Beautiful by default.',
  },
  {
    icon: Accessibility,
    title: 'Accessible',
    description:
      'Built with accessibility in mind. All components follow WAI-ARIA guidelines.',
  },
  {
    icon: Code2,
    title: 'TypeScript First',
    description:
      'Written in TypeScript with full type definitions. Great IntelliSense support.',
  },
  {
    icon: Zap,
    title: 'Performant',
    description:
      'Optimized for performance with minimal bundle size and tree-shaking support.',
  },
  {
    icon: Package,
    title: 'Modular',
    description:
      'Import only what you need. Each component can be used independently.',
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="text-primary">Fuyukaki UI</span>
                  <br />
                  <span className="text-foreground">
                    Natural warmth for your interface
                  </span>
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  A modern, accessible React UI component library built with
                  TypeScript and Tailwind CSS, inspired by the warm, organic
                  tones of nature.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/docs/getting-started">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto cursor-pointer">
                      Get Started
                    </Button>
                  </Link>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                      View on GitHub
                    </Button>
                  </a>
                </div>

                <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 bg-muted/50 border border-border rounded-lg">
                  <code className="text-sm font-mono text-foreground">
                    npm install fuyukaki-ui
                  </code>
                  <button
                    className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => navigator.clipboard.writeText('npm install fuyukaki-ui')}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
                  <img
                    src="/persimmon.png"
                    alt="Fuyukaki UI"
                    className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Start building beautiful, accessible interfaces with Fuyukaki UI
              today.
            </p>
            <Link to="/docs/button">
              <Button variant="primary" size="lg" className="cursor-pointer">
                Explore Components
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
