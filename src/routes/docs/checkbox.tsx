import { createFileRoute } from '@tanstack/react-router'
import { Checkbox, Label } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/checkbox')({
  component: CheckboxDocs,
})

function CheckboxDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A checkbox component for toggling boolean values.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Checkbox, Label } from 'fuyukaki-ui'

function App() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Checkbox id="check1" />
            <Label htmlFor="check1">Default checkbox</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="check2" defaultChecked />
            <Label htmlFor="check2">Checked by default</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="check3" disabled />
            <Label htmlFor="check3">Disabled</Label>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="check4" disabled defaultChecked />
            <Label htmlFor="check4">Disabled and checked</Label>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Props</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-accent">
              <tr>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Prop
                </th>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Type
                </th>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Default
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">checked</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">defaultChecked</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">false</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">disabled</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">false</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">onCheckedChange</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  (checked: boolean) =&gt; void
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
