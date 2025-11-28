import { createFileRoute } from '@tanstack/react-router'
import { Tooltip, Button } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/tooltip')({
  component: TooltipDocs,
})

function TooltipDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          Display helpful information when hovering over an element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Tooltip, Button } from 'fuyukaki-ui'

function App() {
  return (
    <Tooltip content="Helpful information">
      <Button>Hover me</Button>
    </Tooltip>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is a tooltip">
              <Button variant="primary">Hover me</Button>
            </Tooltip>

            <Tooltip content="Save your changes">
              <Button variant="secondary">Save</Button>
            </Tooltip>

            <Tooltip content="Delete this item">
              <Button variant="danger">Delete</Button>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  )
}
