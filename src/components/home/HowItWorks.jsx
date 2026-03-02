const steps = [
  "Sign up or login securely",
  "Create and manage your events",
  "Track and update events from dashboard",
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">How It Works</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl border bg-background p-6">
              <span className="text-primary font-semibold text-lg">
                0{i + 1}
              </span>
              <p className="mt-3 text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
