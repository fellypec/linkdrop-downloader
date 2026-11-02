import { createFileRoute } from "@tanstack/react-router";
import { HOT } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/hot")({
  head: () => pageHead("Hot Downloads – Trending Videos & Audio | GrabLink", "See the most downloaded videos, music and images on GrabLink this week.", "/hot"),
  component: Hot,
});

function Hot() {
  return (
    <main className="container-x py-16">
      <h1 className="page-title">Hot right now</h1>
      <p className="mt-3 text-muted-foreground">The most downloaded links by our community this week.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {HOT.map((h, i) => (
          <article key={h.title} className="card-step">
            <span className="chip">{h.tag}</span>
            <h2 className="mt-4 text-lg font-semibold"><span className="text-primary">#{i + 1}</span> {h.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{h.source}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
