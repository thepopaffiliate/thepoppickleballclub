import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteSettings } from "@/content/settings";
import { SocialLinks } from "./interactive";

const nav = [
  { to: "/gear-finder", label: "Gear Finder" },
  { to: "/gear", label: "Gear" },
  { to: "/stories", label: "Stories" },
  { to: "/news", label: "News" },
  { to: "/community", label: "Community" },
  { to: "/about", label: "About" },
] as const;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-3xl leading-none ${className}`}>
      The Pop<span className="text-primary">.</span>
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 btn btn-night">
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" aria-label="The Pop. home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1 font-ui text-sm font-semibold">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="rounded-full px-3 py-2 hover:bg-muted"
                  activeProps={{ className: "rounded-full px-3 py-2 bg-accent text-primary-strong" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="btn md:hidden -mr-2 px-3"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background md:hidden">
          <ul className="container-page py-3 font-ui font-semibold">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-2 py-3 hover:bg-muted"
                  activeProps={{ className: "flex items-center justify-between rounded-lg px-2 py-3 text-primary-strong" }}
                >
                  {n.label} <ChevronRight className="size-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-night text-night-foreground mt-20">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo className="text-4xl" />
          <p className="mt-1 font-ui font-semibold text-value">{siteSettings.tagline}</p>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            Budget-friendly pickleball finds, honest guides and what's happening sa Filipino pickleball scene.
          </p>
          <div className="mt-5">
            <SocialLinks tone="dark" />
          </div>
        </div>
        <nav aria-label="Footer">
          <h2 className="eyebrow text-fog">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:underline">{n.label}</Link></li>
            ))}
            <li><Link to="/affiliate-disclosure" className="hover:underline">Affiliate Disclosure</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow text-fog">Affiliate disclosure</h2>
          <p className="mt-3 text-sm opacity-80">{siteSettings.disclosureText}</p>
          <p className="mt-3 text-sm opacity-80">{siteSettings.independenceNote}</p>
        </div>
      </div>
      <div className="border-t border-night-foreground/15">
        <p className="container-page py-5 text-xs opacity-70">
          © {new Date().getFullYear()} The Pop. Independent pickleball discovery & editorial.
        </p>
      </div>
    </footer>
  );
}

export interface Crumb {
  label: string;
  to?: "/gear" | "/stories" | "/news";
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-ui text-xs font-semibold text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-foreground">Home</Link></li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="size-3" aria-hidden />
            {c.to ? (
              <Link to={c.to} className="hover:text-foreground">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-foreground line-clamp-1">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="bg-blush">
      <div className="container-page py-12 md:py-16">
        <p className="eyebrow text-primary-strong">{eyebrow}</p>
        <h1 className="font-display mt-2 text-5xl md:text-7xl">{title}</h1>
        {children && <div className="mt-3 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}
