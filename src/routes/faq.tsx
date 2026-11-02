import { createFileRoute } from "@tanstack/react-router";
import { FAQS } from "@/lib/content";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageHead("FAQ – Frequently Asked Questions | GrabLink", "Answers about GrabLink: supported sites, file locations, mobile use, privacy and more.", "/faq"),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }],
  }),
  component: Faq,
});

function Faq() {
  return (
    <main className="container-x max-w-3xl py-16">
      <h1 className="page-title">Frequently asked questions</h1>
      <div className="mt-10 space-y-3">
        {FAQS.map(([q, a]) => (
          <details key={q} className="faq-item">
            <summary>{q}</summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
