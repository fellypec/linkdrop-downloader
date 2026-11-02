import { useState } from "react";
import { T, type Lang } from "@/lib/i18n";

export function HomePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "ready">("idle");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^https?:\/\/\S+\.\S+/.test(url.trim())) return setStatus("error");
    setStatus("loading");
    setTimeout(() => setStatus("ready"), 1200);
  };

  const paste = async () => {
    try { setUrl(await navigator.clipboard.readText()); } catch { /* clipboard blocked */ }
  };

  return (
    <main>
      <section className="hero">
        <div className="container-x py-20 text-center sm:py-28">
          <h1 className="hero-title">{t.h1}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{t.lead}</p>
          <form onSubmit={submit} className="dl-box mx-auto mt-10 max-w-2xl">
            <label htmlFor="url" className="visually-hidden">URL</label>
            <input id="url" type="url" inputMode="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder={t.placeholder} className="dl-input" />
            <button type="button" onClick={paste} className="btn-ghost">{t.paste}</button>
            <button type="submit" className="btn-primary">
              <svg className="icon" aria-hidden="true"><use href="#i-download" /></svg>{t.download}
            </button>
          </form>
          <div aria-live="polite" className="mt-5 min-h-6 text-sm">
            {status === "loading" && <p className="text-primary">{t.processing}</p>}
            {status === "error" && <p className="text-destructive">{t.invalid}</p>}
            {status === "ready" && (
              <div className="result-card mx-auto max-w-2xl">
                <p>{t.ready}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {["MP4 1080p", "MP4 720p", "MP3 320kbps", "JPG"].map((f) => (
                    <button key={f} type="button" className="chip">{f}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="how" className="container-x py-20">
        <h2 className="section-title">{t.howTitle}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {t.steps.map(([title, text], i) => (
            <li key={title} className="card-step">
              <span className="step-num">{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-x pb-24">
        <h2 className="section-title">{t.featuresTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map(([title, text]) => (
            <div key={title} className="card-step">
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
