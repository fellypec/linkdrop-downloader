import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead("Blog – Download Tutorials & Guides | GrabLink", "Tutorials and tips on downloading videos, audio and images safely from any link.", "/blog"),
  component: Blog,
});

function Blog() {
  return (
    <main className="container-x max-w-3xl py-16">
      <h1 className="page-title">Blog & tutorials</h1>
      <div className="mt-10 space-y-5">
        {POSTS.map((p) => (
          <article key={p.slug} className="card-step">
            <time className="text-sm text-primary" dateTime={p.date}>{p.date}</time>
            <h2 className="mt-1 text-xl font-semibold">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-primary">{p.title}</Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
