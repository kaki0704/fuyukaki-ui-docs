import { createFileRoute } from '@tanstack/react-router'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'
import { ChevronRight, Slash } from 'lucide-react'

export const Route = createFileRoute('/docs/breadcrumb')({
  component: BreadcrumbDocs,
})

function BreadcrumbDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Breadcrumb</h1>
        <p className="text-lg text-muted-foreground">
          A breadcrumb navigation component that helps users understand their location within a website hierarchy.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'fuyukaki-ui'

function App() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Example</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Custom Separator</h2>
        <p className="text-muted-foreground">
          You can customize the separator by passing a custom element to the separator prop or BreadcrumbSeparator children.
        </p>
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">With ChevronRight:</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">With Slash:</p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Category</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">With Ellipsis</h2>
        <p className="text-muted-foreground">
          Use BreadcrumbEllipsis to show collapsed items when the path is too long.
        </p>
        <div className="bg-card border border-border rounded-lg p-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Props</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-accent">
              <tr>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Component
                </th>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Prop
                </th>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Type
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">Breadcrumb</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">separator</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  ReactNode
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">BreadcrumbLink</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">asChild</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">BreadcrumbLink</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">href</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
