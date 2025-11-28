import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'fuyukaki-ui'
import { CodeBlock, InlineCode } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/button')({
  component: ButtonDocs,
})

function ButtonDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Button</h1>
        <p className="text-lg text-muted-foreground">
          A versatile button component with multiple variants and sizes.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Button } from 'fuyukaki-ui'

function App() {
  return <Button>Click me</Button>
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Variants</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">States</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'primary'</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">size</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'sm' | 'md' | 'lg'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'md'</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">disabled</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
