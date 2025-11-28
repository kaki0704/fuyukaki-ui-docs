import { createFileRoute } from '@tanstack/react-router'
import { Textarea, Label } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/textarea')({
  component: TextareaDocs,
})

function TextareaDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Textarea</h1>
        <p className="text-lg text-muted-foreground">
          A multi-line text input component for longer content.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Textarea } from 'fuyukaki-ui'

function App() {
  return <Textarea placeholder="Enter your message..." />
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Textarea
              id="disabled"
              placeholder="This textarea is disabled"
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  )
}
