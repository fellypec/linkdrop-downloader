import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { LANG_OPTIONS, LANG_PATHS, T, langFromPath } from "@/lib/i18n";

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="i-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </symbol>
      <symbol id="i-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
      </symbol>
    </svg>
  );
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const router = useRouter();
  const lang = langFromPath(pathname);
  const n = T[lang].nav;
  const items = [
    { href: "/", label: n.home },
    { href: "/hot", label: n.hot },
    { href: "/new", label: n.new },
    { href: "/blog", label: n.blog },
    { href: "/faq", label: n.faq },
  ] as const;
  const isHome = Object.values(LANG_PATHS).includes(pathname);

  return (
    <header className="site-header">
      <div className="container-x flex items-center justify-between gap-4 py-4">
        <Link to="/" className="logo">
          <span className="logo-mark"><svg className="icon"><use href="#i-download" /></svg></span>
          Grab<span className="text-primary">Link</span>
        </Link>
        <nav className="site-nav" aria-label="Main">
          {items.map((i) => {
            const current = i.href === "/" ? isHome : pathname.startsWith(i.href);
            return (
              <a key={i.href} href={i.href} aria-current={current ? "page" : undefined}>
                {i.label}
              </a>
            );
          })}
        </nav>
        <label className="lang-switch">
          <svg className="icon" aria-hidden="true" focusable="false"><use href="#i-globe" /></svg>
          <span className="visually-hidden">Language</span>
          <select
            id="lang"
            value={LANG_PATHS[lang]}
            onChange={(e) => router.history.push(e.target.value)}
          >
            {LANG_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-x flex flex-col items-center justify-between gap-3 py-8 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} GrabLink. Download only content you own or have permission to use.</p>
        <div className="flex gap-4">
          <a href="/blog">Blog</a><a href="/faq">FAQ</a><a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
