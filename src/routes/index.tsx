import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@persimmon/ui'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/persimmon.png"
            alt="Persimmon UI"
            className="w-24 h-24 mx-auto"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
          Natural warmth for your{' '}
          <span className="text-primary">interface</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A modern, accessible React UI component library built with TypeScript and Tailwind CSS,
          inspired by the warm, organic tones of nature.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Components
          </Button>
        </div>

        <div className="mt-12 p-4 bg-card rounded-lg border border-border">
          <code className="text-sm text-foreground">
            npm install @persimmon/ui
          </code>
        </div>
      </main>
    </div>
  )
}
