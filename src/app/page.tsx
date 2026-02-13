import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Modern Landing Page",
  description: "A clean and simple landing page built with Next.js",
};

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-6">
          <div className="text-xl font-bold text-primary">Brand</div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button className="rounded-full">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl text-pretty">
                Build something amazing
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Create beautiful, modern web experiences with our platform. Simple, powerful, and designed for developers.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="rounded-lg bg-muted h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-muted-foreground mb-2">✨</div>
                <p className="text-muted-foreground">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-b border-border py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed, built with simplicity and performance in mind.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
                <div className="mb-4 h-12 w-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {item}
                </div>
                <h3 className="mb-3 text-lg font-semibold">Feature {item}</h3>
                <p className="text-muted-foreground">
                  Discover amazing capabilities that help you build faster and better.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-b border-border py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl mb-4">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { name: "Starter", price: "$29", features: ["Feature A", "Feature B", "Feature C"] },
              { name: "Pro", price: "$79", features: ["All Starter features", "Feature D", "Feature E"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["All Pro features", "Priority Support", "Custom integrations"] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg border p-8 ${
                  plan.highlight
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                    : "border-border bg-card"
                }`}
              >
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="mb-6 text-3xl font-bold text-primary">{plan.price}</p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full rounded-lg"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-b border-border py-20 md:py-32 bg-muted/50">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing things.
          </p>
          <Button size="lg" className="rounded-full">
            Start Building Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Docs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground">© 2026 Brand. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
