import { createFileRoute } from '@tanstack/react-router'
import { Spinner } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/spinner')({
  component: SpinnerDocs,
})

function SpinnerDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Spinner</h1>
        <p className="text-lg text-muted-foreground">
          A loading spinner component to indicate loading states.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Spinner } from 'fuyukaki-ui'

function App() {
  return <Spinner />
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Spinner size="sm" />
              <p className="text-sm text-muted-foreground mt-2">Small</p>
            </div>
            <div className="text-center">
              <Spinner size="md" />
              <p className="text-sm text-muted-foreground mt-2">Medium</p>
            </div>
            <div className="text-center">
              <Spinner size="lg" />
              <p className="text-sm text-muted-foreground mt-2">Large</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Variants</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Spinner variant="primary" />
              <p className="text-sm text-muted-foreground mt-2">Primary</p>
            </div>
            <div className="text-center">
              <Spinner variant="secondary" />
              <p className="text-sm text-muted-foreground mt-2">Secondary</p>
            </div>
            <div className="text-center">
              <Spinner variant="muted" />
              <p className="text-sm text-muted-foreground mt-2">Muted</p>
            </div>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">size</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'sm' | 'md' | 'lg'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'md'</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'primary' | 'secondary' | 'muted'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'primary'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
