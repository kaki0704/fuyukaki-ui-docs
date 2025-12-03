import { createFileRoute } from '@tanstack/react-router'
import { Progress } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/progress')({
  component: ProgressDocs,
})

function ProgressDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Progress</h1>
        <p className="text-lg text-muted-foreground">
          A progress bar component to indicate the completion status of a task.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Progress } from 'fuyukaki-ui'

function App() {
  return <Progress value={60} />
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Example</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Small</p>
            <Progress value={60} size="sm" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Medium</p>
            <Progress value={60} size="md" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Large</p>
            <Progress value={60} size="lg" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Variants</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Primary</p>
            <Progress value={60} variant="primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Secondary</p>
            <Progress value={60} variant="secondary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Success</p>
            <Progress value={60} variant="success" />
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">value</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">0</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">max</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">100</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'primary' | 'secondary' | 'success'
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
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
