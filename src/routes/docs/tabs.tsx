import { createFileRoute } from '@tanstack/react-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'fuyukaki-ui'
import { CodeBlock } from '../../components/CodeBlock'

export const Route = createFileRoute('/docs/tabs')({
  component: TabsDocs,
})

function TabsDocs() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Tabs</h1>
        <p className="text-lg text-muted-foreground">
          A tabs component for organizing content into separate views.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Installation</h2>
        <CodeBlock code="npm install fuyukaki-ui" language="bash" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Usage</h2>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from 'fuyukaki-ui'

function App() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  )
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Default Variant</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Account Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Password Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Change your password and security settings.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground">
                  Configure how you receive notifications.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Outline Variant</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <Tabs defaultValue="overview">
            <TabsList variant="outline">
              <TabsTrigger value="overview" variant="outline">
                Overview
              </TabsTrigger>
              <TabsTrigger value="analytics" variant="outline">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" variant="outline">
                Reports
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="p-4">
                <p className="text-muted-foreground">Overview content goes here.</p>
              </div>
            </TabsContent>
            <TabsContent value="analytics">
              <div className="p-4">
                <p className="text-muted-foreground">Analytics content goes here.</p>
              </div>
            </TabsContent>
            <TabsContent value="reports">
              <div className="p-4">
                <p className="text-muted-foreground">Reports content goes here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Pills Variant</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <Tabs defaultValue="all">
            <TabsList variant="pills">
              <TabsTrigger value="all" variant="pills">
                All
              </TabsTrigger>
              <TabsTrigger value="active" variant="pills">
                Active
              </TabsTrigger>
              <TabsTrigger value="archived" variant="pills">
                Archived
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="p-4">
                <p className="text-muted-foreground">All items displayed here.</p>
              </div>
            </TabsContent>
            <TabsContent value="active">
              <div className="p-4">
                <p className="text-muted-foreground">Active items displayed here.</p>
              </div>
            </TabsContent>
            <TabsContent value="archived">
              <div className="p-4">
                <p className="text-muted-foreground">Archived items displayed here.</p>
              </div>
            </TabsContent>
          </Tabs>
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
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">Tabs</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">defaultValue</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">Tabs</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">value</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">Tabs</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">onValueChange</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  (value: string) =&gt; void
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">TabsList</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'default' | 'outline' | 'pills'
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">TabsTrigger</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">value</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string (required)
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">TabsTrigger</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">variant</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  'default' | 'outline' | 'pills'
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">TabsContent</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">value</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  string (required)
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">TabsContent</td>
                <td className="px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">forceMount</td>
                <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-muted-foreground">
                  boolean
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
