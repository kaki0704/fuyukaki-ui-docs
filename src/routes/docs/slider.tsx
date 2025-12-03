import { createFileRoute } from '@tanstack/react-router'
import { Slider } from 'fuyukaki-ui'
import { useState } from 'react'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/slider')({
  component: SliderDocs,
})

function SliderDocs() {
  const [value, setValue] = useState(50)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Slider</h1>
        <p className="text-lg text-muted-foreground">
          A slider component for selecting a value within a range.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Slider } from 'fuyukaki-ui'

function App() {
  const [value, setValue] = useState(50)

  return (
    <Slider
      value={value}
      onChange={setValue}
    />
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Example</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <Slider value={value} onChange={setValue} />
          <p className="text-sm text-muted-foreground">Value: {value}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Value Display</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <Slider defaultValue={30} showValue />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Small</p>
            <Slider defaultValue={40} size="sm" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Medium</p>
            <Slider defaultValue={50} size="md" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Large</p>
            <Slider defaultValue={60} size="lg" />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Range</h2>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <Slider defaultValue={5} min={0} max={10} step={1} showValue />
          <p className="text-sm text-muted-foreground">Range: 0-10, Step: 1</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Disabled</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <Slider defaultValue={50} disabled />
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
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">defaultValue</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">0</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">min</td>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">step</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  number
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">1</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">size</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'sm' | 'md' | 'lg'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'md'</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">showValue</td>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">onChange</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  (value: number) =&gt; void
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">onChangeEnd</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  (value: number) =&gt; void
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
