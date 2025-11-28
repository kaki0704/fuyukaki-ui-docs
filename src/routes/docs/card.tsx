import { createFileRoute } from '@tanstack/react-router'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/card')({
  component: CardDocs,
})

function CardDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Card</h1>
        <p className="text-lg text-muted-foreground">
          A flexible container component for displaying content in a card layout.
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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from 'fuyukaki-ui'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>
                A basic card with header and content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This is the card content area where you can place any content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
              <CardDescription>Includes action buttons</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cards can include footer sections for actions.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="primary" size="sm">
                Confirm
              </Button>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Components</h2>
        <div className="bg-card border border-border rounded-lg overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead className="bg-accent">
              <tr>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Component
                </th>
                <th className="text-left px-3 sm:px-4 py-3 text-foreground font-semibold text-sm">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">Card</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Main container component
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">CardHeader</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Header section of the card
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">CardTitle</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Title text in the header
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">CardDescription</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Description text in the header
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">CardContent</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Main content area
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">CardFooter</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  Footer section for actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
