import { createFileRoute } from "@tanstack/react-router";
import { NEWS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/new")({
  head: () => pageHead("What's New – Latest Features | GrabLink", "Latest GrabLink updates: new formats, languages and faster downloads.", "/new"),
  component: New,
});

function New() {
  return (
    <main className="container-x max-w-3xl py-16">
      <h1 className="page-title">What's new</h1>
      <ul className="mt-10 space-y-5">
        {NEWS.map((n) => (
          <li key={n.title} className="card-step">
            <time className="text-sm text-primary" dateTime={n.date}>{n.date}</time>
            <h2 className="mt-1 text-xl font-semibold">{n.title}</h2>
            <p className="mt-2 text-muted-foreground">{n.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
