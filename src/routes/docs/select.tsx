import { createFileRoute } from '@tanstack/react-router'
import { Select, Label } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/select')({
  component: SelectDocs,
})

function SelectDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Select</h1>
        <p className="text-lg text-muted-foreground">
          A dropdown select component for choosing from a list of options.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Select } from 'fuyukaki-ui'

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]

function App() {
  return <Select options={options} placeholder="Select option" />
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              id="country"
              placeholder="Select a country"
              options={[
                { value: 'us', label: 'United States' },
                { value: 'jp', label: 'Japan' },
                { value: 'uk', label: 'United Kingdom' },
              ]}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="disabled-select">Disabled</Label>
            <Select
              id="disabled-select"
              placeholder="Select option"
              disabled
              options={[
                { value: '1', label: 'Option 1' },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
