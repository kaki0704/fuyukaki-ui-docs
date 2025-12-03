import { createFileRoute } from '@tanstack/react-router'
import { Avatar, AvatarFallback, AvatarStatus } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/avatar')({
  component: AvatarDocs,
})

function AvatarDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          A component for displaying user profile images with fallback support and status indicators.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Avatar, AvatarImage, AvatarFallback } from 'fuyukaki-ui'

function App() {
  return (
    <Avatar>
      <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar size="xs">
              <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="md">
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
              <AvatarFallback>XL</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Shapes</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar shape="circle">
              <AvatarFallback>CI</AvatarFallback>
            </Avatar>
            <Avatar shape="square">
              <AvatarFallback>SQ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Status</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarFallback>ON</AvatarFallback>
              <AvatarStatus status="online" />
            </Avatar>
            <Avatar>
              <AvatarFallback>OF</AvatarFallback>
              <AvatarStatus status="offline" />
            </Avatar>
            <Avatar>
              <AvatarFallback>BY</AvatarFallback>
              <AvatarStatus status="busy" />
            </Avatar>
            <Avatar>
              <AvatarFallback>AW</AvatarFallback>
              <AvatarStatus status="away" />
            </Avatar>
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
                  'xs' | 'sm' | 'md' | 'lg' | 'xl'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'md'</td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">shape</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'circle' | 'square'
                </td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'circle'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
