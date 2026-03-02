import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border bg-primary text-primary-foreground p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to Manage Your Events?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Start building real-world applications with Next.js today.
          </p>

          <Button size="lg" variant="secondary" className="mt-8 rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
