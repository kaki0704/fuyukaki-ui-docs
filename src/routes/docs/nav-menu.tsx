import { createFileRoute } from '@tanstack/react-router'
import {
  NavMenu,
  NavMenuContent,
  NavMenuItem,
  NavMenuLink,
  NavMenuList,
  NavMenuSub,
  NavMenuTrigger,
} from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/nav-menu')({
  component: NavMenuDocs,
})

function NavMenuDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Nav Menu</h1>
        <p className="text-lg text-muted-foreground">
          A navigation menu component with dropdown support for building site navigation.
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
  NavMenu,
  NavMenuList,
  NavMenuItem,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuLink,
} from 'fuyukaki-ui'

function App() {
  return (
    <NavMenu>
      <NavMenuList>
        <NavMenuItem>
          <NavMenuTrigger>Products</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/products/a">Product A</NavMenuLink>
            <NavMenuLink href="/products/b">Product B</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuList>
    </NavMenu>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Basic Example</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <NavMenu>
            <NavMenuList>
              <NavMenuItem>
                <NavMenuTrigger>Getting Started</NavMenuTrigger>
                <NavMenuContent>
                  <NavMenuSub title="Overview">
                    <NavMenuLink href="#">Introduction</NavMenuLink>
                    <NavMenuLink href="#">Installation</NavMenuLink>
                    <NavMenuLink href="#">Quick Start</NavMenuLink>
                  </NavMenuSub>
                </NavMenuContent>
              </NavMenuItem>
              <NavMenuItem>
                <NavMenuTrigger>Components</NavMenuTrigger>
                <NavMenuContent>
                  <NavMenuSub title="Form">
                    <NavMenuLink href="#">Button</NavMenuLink>
                    <NavMenuLink href="#">Input</NavMenuLink>
                    <NavMenuLink href="#">Select</NavMenuLink>
                  </NavMenuSub>
                  <NavMenuSub title="Display">
                    <NavMenuLink href="#">Card</NavMenuLink>
                    <NavMenuLink href="#">Badge</NavMenuLink>
                    <NavMenuLink href="#">Avatar</NavMenuLink>
                  </NavMenuSub>
                </NavMenuContent>
              </NavMenuItem>
              <NavMenuItem>
                <NavMenuLink href="#">Documentation</NavMenuLink>
              </NavMenuItem>
            </NavMenuList>
          </NavMenu>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">NavMenu</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">orientation</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'horizontal' | 'vertical'
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">NavMenuItem</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">value</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">NavMenuLink</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">active</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">NavMenuSub</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">title</td>
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
