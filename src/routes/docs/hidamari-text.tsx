import { createFileRoute } from '@tanstack/react-router'
import { HidamariText } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/hidamari-text')({
  component: HidamariTextDocs,
})

function HidamariTextDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hidamari Text
        </h1>
        <p className="text-lg text-muted-foreground">
          A text component with warm, animated gradient colors inspired by
          sunlight filtering through leaves.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { HidamariText } from 'fuyukaki-ui'

function App() {
  return <HidamariText>Hello, World!</HidamariText>
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Default</p>
            <p className="text-2xl font-bold">
              <HidamariText>Warm Sunlight Text</HidamariText>
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Colors</h2>
        <p className="text-muted-foreground">
          You can customize the gradient colors by passing an array of color
          values.
        </p>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Custom warm colors
            </p>
            <p className="text-2xl font-bold">
              <HidamariText colors={['#EB6101', '#F5A623', '#FFD93D']}>
                Persimmon Gradient
              </HidamariText>
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Leaf green theme</p>
            <p className="text-2xl font-bold">
              <HidamariText colors={['#6A8347', '#8FAE5A', '#B5D56A']}>
                Forest Colors
              </HidamariText>
            </p>
          </div>
        </div>
        <CodeBlock
          code={`<HidamariText colors={['#EB6101', '#F5A623', '#FFD93D']}>
  Persimmon Gradient
</HidamariText>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Animation Speed
        </h2>
        <p className="text-muted-foreground">
          Control the animation speed with the speed prop (in seconds).
        </p>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Slow (5s)</p>
            <p className="text-2xl font-bold">
              <HidamariText speed={5}>Slow Animation</HidamariText>
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Fast (1s)</p>
            <p className="text-2xl font-bold">
              <HidamariText speed={1}>Fast Animation</HidamariText>
            </p>
          </div>
        </div>
        <CodeBlock
          code={`<HidamariText speed={5}>Slow Animation</HidamariText>
<HidamariText speed={1}>Fast Animation</HidamariText>`}
        />
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">
                  children
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  React.ReactNode
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">
                  colors
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string[]
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">
                  warm gradient
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">
                  speed
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
