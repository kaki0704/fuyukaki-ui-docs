import { createFileRoute } from '@tanstack/react-router'
import { Switch, Label } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/switch')({
  component: SwitchDocs,
})

function SwitchDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Switch</h1>
        <p className="text-lg text-muted-foreground">
          A toggle switch component for on/off states.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Switch, Label } from 'fuyukaki-ui'

function App() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Switch id="switch1" />
            <Label htmlFor="switch1">Enable notifications</Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="switch2" defaultChecked />
            <Label htmlFor="switch2">Auto-save</Label>
          </div>

          <div className="flex items-center gap-2">
            <Switch id="switch3" disabled />
            <Label htmlFor="switch3">Disabled</Label>
          </div>
        </div>
      </section>
    </div>
  )
}
