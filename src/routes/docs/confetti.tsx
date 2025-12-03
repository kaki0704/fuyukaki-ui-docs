import { createFileRoute } from '@tanstack/react-router'
import { Button, useConfetti } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/confetti')({
  component: ConfettiDocs,
})

function ConfettiDocs() {
  const { fire } = useConfetti()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Confetti</h1>
        <p className="text-lg text-muted-foreground">
          A fun confetti animation component with multiple presets for celebrations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { useConfetti } from 'fuyukaki-ui'

function App() {
  const { fire } = useConfetti()

  return (
    <button onClick={() => fire()}>
      Celebrate!
    </button>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Presets</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => fire({ preset: 'basic' })}>Basic</Button>
            <Button onClick={() => fire({ preset: 'fireworks' })}>Fireworks</Button>
            <Button onClick={() => fire({ preset: 'snow' })}>Snow</Button>
            <Button onClick={() => fire({ preset: 'burst' })}>Burst</Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Options</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() =>
                fire({
                  particleCount: 100,
                  spread: 180,
                  colors: ['#ff0000', '#00ff00', '#0000ff'],
                })
              }
            >
              Custom Colors
            </Button>
            <Button
              onClick={() =>
                fire({
                  particleCount: 200,
                  spread: 360,
                  origin: { x: 0.5, y: 0.5 },
                })
              }
            >
              Center Burst
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`// Custom confetti options
fire({
  particleCount: 100,
  spread: 180,
  colors: ['#ff0000', '#00ff00', '#0000ff'],
})`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Props</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-accent">
              <tr>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Option
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">preset</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'basic' | 'fireworks' | 'snow' | 'burst'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">particleCount</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">50</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">spread</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">70</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">colors</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string[]
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">fuyukaki colors</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">origin</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  {`{ x: number, y: number }`}
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">{`{ x: 0.5, y: 0.6 }`}</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">onComplete</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  () =&gt; void
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
