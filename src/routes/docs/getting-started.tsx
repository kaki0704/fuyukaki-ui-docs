import { createFileRoute } from '@tanstack/react-router'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/getting-started')({
  component: GettingStarted,
})

function GettingStarted() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          fuyukaki-ui is a modern, accessible React UI component library built with TypeScript and Tailwind CSS,
          inspired by the warm, organic tones of nature.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <p className="text-muted-foreground">
          Install with your preferred package manager.
        </p>
        <CodeBlock
          code={`pnpm add fuyukaki-ui
# or
npm install fuyukaki-ui
# or
yarn add fuyukaki-ui`}
          language="bash"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Setup (Tailwind CSS v4)</h2>
        <p className="text-muted-foreground">
          Install Tailwind CSS v4.
        </p>
        <CodeBlock code="pnpm add tailwindcss @tailwindcss/vite" language="bash" />

        <p className="text-muted-foreground">
          Add the Tailwind plugin to your Vite config.
        </p>
        <CodeBlock
          code={`// vite.config.ts
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}`}
        />

        <p className="text-muted-foreground">
          Import the theme CSS in your main stylesheet.
        </p>
        <CodeBlock
          code={`/* src/styles.css */
@import "tailwindcss";
@import "fuyukaki-ui/theme.css";`}
          language="css"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <p className="text-muted-foreground">
          Import and use components.
        </p>
        <CodeBlock
          code={`import { Button } from 'fuyukaki-ui'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Theme</h2>
        <p className="text-muted-foreground">
          The theme.css provides:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>CSS variables for theming (light/dark mode)</li>
          <li>Color palette integration with Tailwind CSS v4</li>
          <li>Automatic scanning of component classes via <code className="text-sm bg-muted px-1.5 py-0.5 rounded">@source</code></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
            <img src="/react.svg" alt="React" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-foreground">React 19</h3>
              <p className="text-sm text-muted-foreground">UI library</p>
            </div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
            <img src="/typescript.svg" alt="TypeScript" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-foreground">TypeScript</h3>
              <p className="text-sm text-muted-foreground">Type safety</p>
            </div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
            <img src="/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-foreground">Tailwind CSS v4</h3>
              <p className="text-sm text-muted-foreground">Styling</p>
            </div>
          </div>
          <div className="p-4 bg-card border border-border rounded-lg flex items-center gap-4">
            <img src="/vite.svg" alt="Vite" className="w-10 h-10" />
            <div>
              <h3 className="font-semibold text-foreground">Vite</h3>
              <p className="text-sm text-muted-foreground">Build tool</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
