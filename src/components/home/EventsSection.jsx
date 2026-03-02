import { Button } from "@/components/ui/button";

const events = Array.from({ length: 6 });

export default function EventsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Upcoming Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover events created by our community
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {events.map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-background overflow-hidden hover:shadow-md transition"
            >
              <div className="h-40 bg-muted" />
              <div className="p-5">
                <h3 className="font-semibold truncate">
                  Modern Web Conference
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  Learn Next.js, authentication, and dashboard architecture.
                </p>
                <Button variant="link" className="px-0 mt-3">
                  View Details →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
