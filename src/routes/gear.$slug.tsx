import { safeExternalUrl, safeImageSrc } from "@/lib/url-safety";
import { createFileRoute, notFound, Link, type ErrorComponentProps } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { getGearBySlug, categoryLabels, experienceLabels, useCaseLabels } from "@/content/gear";
import { storiesForGear } from "@/content/stories";
import { siteSettings } from "@/content/settings";
import { Breadcrumbs } from "@/components/site/layout";
import { DemoBadge, Disclosure, PriceInfo, ProductButton, StoryCard } from "@/components/site/cards";
import { getReviewLabel } from "@/lib/product-data";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/gear/$slug")({
  loader: ({ params }) => {
    const g = getGearBySlug(params.slug);
    if (!g) throw notFound();
    return { g };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta({ title: loaderData.g.name, description: loaderData.g.description, path: `/gear/${params.slug}`, type: "product", image: loaderData.g.imageUrl, noindex: loaderData.g.status !== "published" })
      : pageMeta({ title: "Product unavailable", description: "This product is currently unavailable on The Pop.", path: `/gear/${params.slug}`, noindex: true }),
  component: GearDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-5xl">Gear not found</h1>
      <Link to="/gear" className="btn btn-primary mt-6">Browse all gear</Link>
    </div>
  ),
  errorComponent: ({ error }: ErrorComponentProps) => (
    <div className="container-page py-24 text-center">{error instanceof Error ? error.message : "Something went wrong."}</div>
  ),
});

function GearDetail() {
  const { g } = Route.useLoaderData();
  const related = storiesForGear(g.id);
  return (
    <article className="container-page py-8">
      <Breadcrumbs items={[{ label: "Gear", to: "/gear" }, { label: g.name }]} />
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {safeImageSrc(g.imageUrl) ? <img src={safeImageSrc(g.imageUrl)!} alt={g.imageAlt} width={800} height={800} className="aspect-square w-full rounded-3xl object-cover" /> : <div className="aspect-square flex items-center justify-center rounded-3xl bg-muted text-muted-foreground">Image not yet available</div>}
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="chip bg-accent">{categoryLabels[g.category]}</span>
            <span className="chip bg-ice">{getReviewLabel(g)}</span>
            <DemoBadge status={g.status} />
          </div>
          <h1 className="font-display mt-3 text-5xl md:text-6xl">{g.name}</h1>
          <p className="mt-3 text-muted-foreground">{g.description}</p>
          <div className="mt-6"><PriceInfo g={g} large /></div>
          <div className="mt-5 flex flex-wrap gap-3">
            <ProductButton g={g} placement="gear_detail" />
            {safeExternalUrl(g.sourceUrl) && (
              <a href={safeExternalUrl(g.sourceUrl)!} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Check product <ExternalLink className="size-4" aria-hidden /><span className="sr-only"> (original source, opens in new tab)</span>
              </a>
            )}
          </div>
          <div className="mt-5"><Disclosure compact /></div>

          <h2 className="font-ui mt-8 font-bold">Intended user</h2>
          {g.intendedUser ? <p className="mt-2 text-sm">{g.intendedUser}</p> : <p className="mt-2 text-sm text-muted-foreground">Not yet verified</p>}
          <ul className="mt-2 flex flex-wrap gap-2">
            {g.experienceLevel.map((e) => <li key={e} className="chip bg-value/20 text-value-strong">{experienceLabels[e]}</li>)}
            {g.useCases.map((u) => <li key={u} className="chip bg-ice">{useCaseLabels[u]}</li>)}
          </ul>

          {g.reviewNote && g.status === "published" && <p className="mt-4 text-sm text-muted-foreground">{g.reviewNote}</p>}
          <h2 className="font-ui mt-8 font-bold">Verified specifications</h2>
          {!g.verifiedSpecs?.length && <p className="mt-2 text-sm text-muted-foreground">Specifications not yet verified.</p>}
          {g.verifiedSpecs?.length ? <dl className="mt-3 divide-y rounded-xl border">
            {g.verifiedSpecs.map((s) => (
              <div key={s.label} className="grid grid-cols-2 gap-2 p-3 text-sm">
                <dt className="text-muted-foreground">{s.label}</dt>
                <dd className="font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl> : null}
          {g.listedSpecs.length > 0 && <>
            <h2 className="font-ui mt-6 font-bold">Listed specifications</h2>
            <p className="text-xs text-muted-foreground">Not independently verified{g.status === "demo" ? " — placeholder data only" : ""}.</p>
            <dl className="mt-3 divide-y rounded-xl border">{g.listedSpecs.map((s) => <div key={s.label} className="grid grid-cols-2 gap-2 p-3 text-sm"><dt className="text-muted-foreground">{s.label}</dt><dd className="font-semibold">{s.value}</dd></div>)}</dl>
          </>}

          {(g.pros.length > 0 || g.cons.length > 0) && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {g.pros.length > 0 && (
                <div className="rounded-xl bg-value/15 p-4">
                  <h2 className="font-ui font-bold text-value-strong">Strengths{g.status === "demo" ? " (placeholder)" : ""}</h2>
                  <ul className="mt-2 list-disc pl-5 text-sm">{g.pros.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              )}
              {g.cons.length > 0 && (
                <div className="rounded-xl bg-accent p-4">
                  <h2 className="font-ui font-bold text-primary-strong">Limitations{g.status === "demo" ? " (placeholder)" : ""}</h2>
                  <ul className="mt-2 list-disc pl-5 text-sm">{g.cons.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              )}
            </div>
          )}
          <p className="mt-6 text-xs text-muted-foreground">
            Notes are based on listing details unless an editor says otherwise. {siteSettings.independenceNote}
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-4xl">Related guides</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">{related.map((s) => <StoryCard key={s.id} s={s} />)}</div>
        </section>
      )}
    </article>
  );
}
