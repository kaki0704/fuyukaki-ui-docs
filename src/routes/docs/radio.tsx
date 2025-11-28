import { createFileRoute } from '@tanstack/react-router'
import { Radio, RadioGroup, Label } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/radio')({
  component: RadioDocs,
})

function RadioDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Radio</h1>
        <p className="text-lg text-muted-foreground">
          Radio button components for selecting a single option from a group.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Radio, RadioGroup, Label } from 'fuyukaki-ui'

function App() {
  return (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center gap-2">
        <Radio id="option1" value="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="option2" value="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
    </RadioGroup>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <RadioGroup defaultValue="comfortable">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Radio id="compact" value="compact" />
                <Label htmlFor="compact">Compact</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="comfortable" value="comfortable" />
                <Label htmlFor="comfortable">Comfortable</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="spacious" value="spacious" />
                <Label htmlFor="spacious">Spacious</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </section>
    </div>
  )
}
