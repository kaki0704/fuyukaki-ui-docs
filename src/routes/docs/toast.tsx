import { createFileRoute } from '@tanstack/react-router'
import { Button, ToastProvider, ToastViewport, useToast } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/toast')({
  component: ToastDocs,
})

function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="flex flex-wrap gap-4">
      <Button
        onClick={() =>
          toast({
            title: 'Default Toast',
            description: 'This is a default toast message.',
          })
        }
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Success!',
            description: 'Your changes have been saved.',
            variant: 'success',
          })
        }
      >
        Success
      </Button>
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            title: 'Error',
            description: 'Something went wrong.',
            variant: 'destructive',
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast({
            title: 'With Action',
            description: 'Click the action button.',
            action: {
              label: 'Undo',
              onClick: () => alert('Undo clicked!'),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  )
}

function ToastDocs() {
  return (
    <ToastProvider>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Toast</h1>
          <p className="text-lg text-muted-foreground">
            A toast notification component for displaying brief messages.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
          <CodeBlock code="npm install fuyukaki-ui" language="bash" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
          <CodeBlock
            code={`import { ToastProvider, ToastViewport, useToast } from 'fuyukaki-ui'

function App() {
  return (
    <ToastProvider>
      <MyComponent />
      <ToastViewport />
    </ToastProvider>
  )
}

function MyComponent() {
  const { toast } = useToast()

  return (
    <button onClick={() => toast({ title: 'Hello!' })}>
      Show Toast
    </button>
  )
}`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Examples</h2>
          <div className="bg-card border border-border rounded-lg p-6">
            <ToastDemo />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Toast Options</h2>
          <CodeBlock
            code={`// Basic toast
toast({ title: 'Hello World' })

// With description
toast({
  title: 'Success',
  description: 'Your changes have been saved.',
})

// With variant
toast({
  title: 'Error',
  description: 'Something went wrong.',
  variant: 'error',
})

// With action
toast({
  title: 'Deleted',
  description: 'The item has been deleted.',
  action: {
    label: 'Undo',
    onClick: () => handleUndo(),
  },
})

// Custom duration (ms)
toast({
  title: 'Quick toast',
  duration: 2000,
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
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">title</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">description</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    string
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    'default' | 'success' | 'error' | 'warning'
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'default'</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">duration</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    number
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">5000</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">closable</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    boolean
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">true</td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">action</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    {`{ label: string, onClick: () => void }`}
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">ToastViewport Props</h2>
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
                  <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">position</td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                    'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
                  </td>
                  <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm">'bottom-right'</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}
