import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { getStoryBySlug, visibleStories } from "@/content/stories";
import { getGearByIds } from "@/content/gear";
import { Breadcrumbs } from "@/components/site/layout";
import { DemoBadge, Disclosure, GearCard, StoryCard } from "@/components/site/cards";
import { formatDate } from "@/lib/format";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const s = getStoryBySlug(params.slug);
    if (!s) throw notFound();
    return { s };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta({ title: loaderData.s.title, description: loaderData.s.summary, path: `/stories/${params.slug}`, type: "article", image: loaderData.s.coverImageUrl, noindex: loaderData.s.status !== "published" })
      : pageMeta({ title: "Read unavailable", description: "This read is currently unavailable on The Pop.", path: `/stories/${params.slug}`, noindex: true }),
  component: StoryPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-5xl">Story not found</h1>
      <Link to="/stories" className="btn btn-primary mt-6">Latest Reads</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24 text-center">Something went wrong.</div>,
});

function StoryPage() {
  const { s } = Route.useLoaderData();
  useEffect(() => { track("story_open", { storyId: s.id }); }, [s.id]);
  const gear = getGearByIds(s.relatedGearIds);
  const related = visibleStories.filter((x) => x.id !== s.id).slice(0, 3);
  return (
    <article className="container-page py-8">
      <Breadcrumbs items={[{ label: "Latest Reads", to: "/stories" }, { label: s.title }]} />
      <header className="mt-6 max-w-3xl">
        <div className="flex gap-2"><span className="chip bg-ice">{s.category}</span><DemoBadge status={s.status} /></div>
        <h1 className="font-display mt-3 text-5xl md:text-7xl">{s.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{s.summary}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {s.author ? `${s.author} · ` : ""}Published {formatDate(s.publishedAt)}{s.updatedAt !== s.publishedAt && ` · Updated ${formatDate(s.updatedAt)}`}
        </p>
        {s.status === "demo" && <p className="mt-3 rounded-lg bg-warning p-3 text-sm text-warning-foreground">Demo article — pending editor review before publishing.</p>}
      </header>
      <img src={s.coverImageUrl} alt={s.coverImageAlt} width={1200} height={700} className="mt-8 aspect-[16/9] w-full max-w-4xl rounded-3xl object-cover" />
      <div className="prose-pop mt-8 max-w-2xl text-lg">
        {s.content.map((b, i) => {
          switch (b.type) {
            case "p": return <p key={i}>{b.text}</p>;
            case "h2": return <h2 key={i}>{b.text}</h2>;
            case "h3": return <h3 key={i}>{b.text}</h3>;
            case "ul": return <ul key={i}>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>;
            case "ol": return <ol key={i}>{b.items.map((t) => <li key={t}>{t}</li>)}</ol>;
            case "gear": {
              const products = getGearByIds(b.gearIds);
              return products.length ? <section key={i} className="my-6"><div className="grid gap-4 sm:grid-cols-2">{products.map((g) => <GearCard key={g.id} g={g} placement="story_inline" />)}</div><div className="mt-3"><Disclosure compact /></div></section> : null;
            }
            case "img": return (
              <figure key={i} className="my-6">
                <img src={b.src} alt={b.alt} width={1200} height={800} loading="lazy" className="rounded-2xl" />
                {b.caption && <figcaption className="mt-2 text-sm text-muted-foreground">{b.caption}</figcaption>}
              </figure>
            );
          }
        })}
      </div>
      {gear.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-4xl">Related gear</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{gear.map((g) => <GearCard key={g.id} g={g} placement="story_related" />)}</div>
          <div className="mt-4"><Disclosure compact /></div>
        </section>
      )}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-4xl">More reads</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">{related.map((x) => <StoryCard key={x.id} s={x} />)}</div>
        </section>
      )}
    </article>
  );
}
