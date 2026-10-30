import { Link } from "@tanstack/react-router";
import { ExternalLink, Info, AlertTriangle, Play, Images } from "lucide-react";
import type { Gear, NewsItem, SocialPost, Story } from "@/content/types";
import { categoryLabels } from "@/content/gear";
import { platformLabels, siteSettings } from "@/content/settings";
import { formatDate, formatPHP, isPriceStale } from "@/lib/format";
import { track } from "@/lib/analytics";
import { getAffiliateDestination, getReviewLabel, hasVerifiedPrice } from "@/lib/product-data";
import { Button } from "@/components/ui/button";

export function DemoBadge({ status }: { status: string }) {
  if (status !== "demo") return null;
  return <span className="chip bg-warning text-warning-foreground">Demo content</span>;
}

export function Disclosure({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`flex gap-2 rounded-xl bg-muted text-muted-foreground ${compact ? "p-3 text-xs" : "p-4 text-sm"}`}>
      <Info className="size-4 shrink-0 mt-0.5" aria-hidden />
      <p>
        {siteSettings.disclosureText}{" "}
        <Link to="/affiliate-disclosure" className="font-semibold underline">Learn more</Link>
      </p>
    </aside>
  );
}

export function PriceInfo({ g, large = false }: { g: Gear; large?: boolean }) {
  if (!hasVerifiedPrice(g)) {
    return <p className="text-sm text-muted-foreground">Price not yet verified</p>;
  }
  const stale = isPriceStale(g.priceCheckedAt, siteSettings.priceStaleAfterDays);
  return (
    <div>
      <p className="text-xs text-muted-foreground">Estimated price</p>
      <p className={`font-ui font-bold ${large ? "text-3xl" : "text-xl"}`}>
        {formatPHP(g.pricePHP)}
      </p>
      <p className="text-xs text-muted-foreground">Last checked {formatDate(g.priceCheckedAt)}</p>
      {stale && (
        <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-warning-foreground">
          <AlertTriangle className="size-3 shrink-0" aria-hidden /> Price may have changed—check product.
        </p>
      )}
    </div>
  );
}

export function ProductButton({ g, placement, full = false }: { g: Gear; placement: string; full?: boolean }) {
  const destination = getAffiliateDestination(g, placement);
  if (!destination) {
    return (
      <div className={full ? "w-full" : ""}>
        <Button variant="site" size="site" disabled className={`bg-muted text-muted-foreground rounded-full ${full ? "w-full" : ""}`}>Check product</Button>
        <p className="mt-1 text-xs text-muted-foreground">Product link not yet available</p>
      </div>
    );
  }
  return (
    <Button asChild variant="site" size="site" className={`btn-primary rounded-full ${full ? "w-full" : ""}`}>
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => track("shopee_outbound_click", { productId: g.id, placement })}
    >
      Check product <ExternalLink className="size-4" aria-hidden />
      <span className="sr-only">(affiliate link, opens in new tab)</span>
    </a>
    </Button>
  );
}

export function GearCard({ g, placement }: { g: Gear; placement: string }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card">
      <Link
        to="/gear/$slug"
        params={{ slug: g.slug }}
        onClick={() => track("product_card_click", { productId: g.id, placement })}
        className="block"
      >
        {g.imageUrl ? <img src={g.imageUrl} alt={g.imageAlt} width={600} height={600} loading="lazy" className="aspect-[4/3] w-full object-cover" /> : <div className="aspect-[4/3] bg-muted flex items-center justify-center text-muted-foreground text-sm">Image not yet available</div>}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          <span className="chip bg-accent text-accent-foreground">{categoryLabels[g.category]}</span>
          <DemoBadge status={g.status} />
        </div>
        <h3 className="font-ui text-lg font-bold leading-snug">
          <Link
            to="/gear/$slug"
            params={{ slug: g.slug }}
            onClick={() => track("product_card_click", { productId: g.id, placement })}
            className="hover:text-primary-strong"
          >
            {g.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{g.description}</p>
        <ProductEvidence g={g} />
        <div className="mt-auto space-y-3 pt-2">
          <PriceInfo g={g} />
          <ProductButton g={g} placement={placement} full />
        </div>
      </div>
    </article>
  );
}

export function ProductEvidence({ g }: { g: Gear }) {
  return (
    <div className="space-y-1 text-xs text-muted-foreground">
      <p className="font-semibold">{getReviewLabel(g)}</p>
      {g.intendedUser && <p>Intended user: {g.intendedUser}</p>}
      {g.verifiedSpecs?.length ? <dl>{g.verifiedSpecs.map((s) => <div key={s.label}><dt className="inline font-semibold">{s.label}: </dt><dd className="inline">{s.value}</dd></div>)}</dl> : null}
      {g.pros.length > 0 && <p>Strengths{g.status === "demo" ? " (placeholder)" : ""}: {g.pros.join("; ")}</p>}
      {g.cons.length > 0 && <p>Limitations{g.status === "demo" ? " (placeholder)" : ""}: {g.cons.join("; ")}</p>}
    </div>
  );
}

export function StoryCard({ s }: { s: Story }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card">
      <img src={s.coverImageUrl} alt={s.coverImageAlt} width={800} height={500} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="chip bg-ice text-foreground">{s.category}</span>
          <DemoBadge status={s.status} />
        </div>
        <h3 className="font-ui text-lg font-bold leading-snug">
          <Link to="/stories/$slug" params={{ slug: s.slug }} className="hover:text-primary-strong">
            {s.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{s.summary}</p>
        <p className="mt-auto pt-2 text-xs text-muted-foreground">
          {s.author ? `${s.author} · ` : ""}Published {formatDate(s.publishedAt)}
          {s.updatedAt !== s.publishedAt && ` · Updated ${formatDate(s.updatedAt)}`}
        </p>
      </div>
    </article>
  );
}

export function NewsCard({ n }: { n: NewsItem }) {
  return (
    <article className="rounded-2xl border bg-card p-5 shadow-card">
      <div className="flex flex-wrap gap-2">
        <span className="chip bg-night text-night-foreground">{n.category}</span>
        <DemoBadge status={n.status} />
      </div>
      <h3 className="mt-3 font-ui text-lg font-bold leading-snug">
        <Link to="/news/$slug" params={{ slug: n.slug }} className="hover:text-primary-strong">{n.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{n.summary}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Source:</span> {n.sourceName} · Published by source {formatDate(n.sourcePublishedAt)} · Checked {formatDate(n.checkedAt)}
      </p>
    </article>
  );
}

export function SocialCard({ p }: { p: SocialPost }) {
  const label = platformLabels[p.platform];
  const Icon = p.format === "carousel" ? Images : Play;
  return (
    <article className="w-64 shrink-0 snap-start overflow-hidden rounded-2xl border bg-card shadow-card md:w-auto">
      <div className="relative">
        <img src={p.thumbnailUrl} alt={p.thumbnailAlt} width={400} height={500} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <span className="chip absolute left-3 top-3 bg-night text-night-foreground">
          <Icon className="size-3" aria-hidden /> {label} · {p.format}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <p className="eyebrow text-value-strong">{p.pillar}</p>
        <h3 className="font-ui font-bold leading-snug">{p.title}</h3>
        <DemoBadge status={p.status} />
        {p.postUrl ? (
          <a
            href={p.postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-full text-foreground"
            onClick={() => track("social_outbound_click", { platform: p.platform, postId: p.id })}
          >
            Watch on {label} <ExternalLink className="size-4" aria-hidden />
          </a>
        ) : (
          <span className="btn w-full bg-muted text-muted-foreground" aria-disabled="true">Post link coming soon</span>
        )}
      </div>
    </article>
  );
}

export function EmptyState({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed p-10 text-center">
      <p className="font-display text-3xl">{title}</p>
      {children && <div className="mt-2 text-muted-foreground">{children}</div>}
    </div>
  );
}
