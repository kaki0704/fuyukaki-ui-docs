import { createFileRoute } from '@tanstack/react-router'
import { Label, Input } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/label')({
  component: LabelDocs,
})

function LabelDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Label</h1>
        <p className="text-lg text-muted-foreground">
          A label component for form controls with accessibility support.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Label, Input } from 'fuyukaki-ui'

function App() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
    </div>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-example">Email Address</Label>
            <Input id="email-example" type="email" placeholder="you@example.com" />
          </div>
        </div>
      </section>
    </div>
  )
}
