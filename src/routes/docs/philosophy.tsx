import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/docs/philosophy')({
  component: Philosophy,
})

function Philosophy() {
  const colors = [
    {
      name: 'Persimmon (柿色)',
      hex: '#EB6101',
      description: 'Our vibrant primary color',
      className: 'bg-primary',
    },
    {
      name: 'Leaf Green (葉色)',
      hex: '#6A8347',
      description: 'Natural green for positive actions',
      className: 'bg-secondary',
    },
    {
      name: 'Shibu Brown (渋色)',
      hex: '#4E3D35',
      description: 'Warm brown replaces pure black for text',
      className: 'bg-foreground',
    },
    {
      name: 'Off White (生成り)',
      hex: '#FAF7F2',
      description: 'Paper-like background instead of stark white',
      className: 'bg-background border border-border',
    },
    {
      name: 'Pale Orange (淡柿)',
      hex: '#FCEDE6',
      description: 'Gentle surface color',
      className: 'bg-accent',
    },
  ]

  const useCases = [
    {
      emoji: '🍽️',
      title: 'Food & Culinary',
      description: 'Restaurants, cafes, recipe sites',
    },
    {
      emoji: '🌿',
      title: 'Lifestyle & Wellness',
      description: 'Organic products, yoga, meditation',
    },
    {
      emoji: '🏯',
      title: 'Japanese & Traditional',
      description: 'Cultural sites, crafts, hospitality',
    },
    {
      emoji: '🛍️',
      title: 'D2C & Artisan Brands',
      description: 'Handmade goods, natural products',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Philosophy</h1>
        <p className="text-lg text-muted-foreground">
          The design philosophy behind fuyukaki-ui and the ideas that drive it.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Warm & Organic</h2>
        <blockquote className="border-l-4 border-primary pl-4 py-2 bg-accent/50 rounded-r-lg">
          <p className="text-foreground italic">
            "Digital interfaces that feel like soil and wood, not cold metal and glass."
          </p>
        </blockquote>
        <p className="text-muted-foreground">
          fuyukaki-ui follows a unique <strong className="text-foreground">"No Black, No Gray"</strong> design philosophy.
          Instead of sterile grays and harsh blacks, we use warm earth tones inspired by nature.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Color Palette</h2>
        <div className="space-y-3">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg"
            >
              <div
                className={`w-12 h-12 rounded-lg shrink-0 ${color.className}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-foreground">{color.name}</h3>
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-muted-foreground">
                    {color.hex}
                  </code>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {color.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground">
          This creates interfaces that are easier on the eyes, feel more human,
          and stand out from the sea of monochrome UIs.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Who is this for?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{useCase.emoji}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Features</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
            <span className="text-xl">🎨</span>
            <div>
              <h3 className="font-semibold text-foreground">Warm Color Palette</h3>
              <p className="text-sm text-muted-foreground mt-1">
                No pure black or gray, only natural earth tones
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
            <span className="text-xl">🔒</span>
            <div>
              <h3 className="font-semibold text-foreground">TypeScript</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Full type safety and IntelliSense support
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
            <span className="text-xl">♿</span>
            <div>
              <h3 className="font-semibold text-foreground">Accessible</h3>
              <p className="text-sm text-muted-foreground mt-1">
                WAI-ARIA compliant components
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
            <span className="text-xl">📦</span>
            <div>
              <h3 className="font-semibold text-foreground">Tree-shakeable</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Import only what you need
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
