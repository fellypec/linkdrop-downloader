import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          ...pageHead(`${loaderData.title} | GrabLink`, loaderData.excerpt, `/blog/${loaderData.slug}`, "article"),
          scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: loaderData.title, datePublished: loaderData.date, description: loaderData.excerpt }) }],
        }
      : { meta: [{ title: "Article not found | GrabLink" }, { name: "robots", content: "noindex" }] },
  component: Post,
});

function Post() {
  const p = Route.useLoaderData();
  return (
    <main className="container-x max-w-3xl py-16">
      <Link to="/blog" className="text-sm text-primary">← Blog</Link>
      <time className="mt-6 block text-sm text-muted-foreground" dateTime={p.date}>{p.date}</time>
      <h1 className="page-title mt-2">{p.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{p.excerpt}</p>
      <ol className="mt-10 space-y-4">
        {p.body.map((b, i) => (
          <li key={i} className="flex gap-4"><span className="step-num shrink-0">{i + 1}</span><p className="pt-1">{b}</p></li>
        ))}
      </ol>
      <a href="/" className="btn-primary mt-12 inline-flex">Try GrabLink now</a>
    </main>
  );
}
