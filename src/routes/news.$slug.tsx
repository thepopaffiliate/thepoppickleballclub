import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { getNewsBySlug } from "@/content/news";
import { Breadcrumbs } from "@/components/site/layout";
import { DemoBadge } from "@/components/site/cards";
import { formatDate } from "@/lib/format";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const n = getNewsBySlug(params.slug);
    if (!n) throw notFound();
    return { n };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta({ title: loaderData.n.title, description: loaderData.n.summary, path: `/news/${params.slug}`, type: "article", image: loaderData.n.coverImageUrl, noindex: loaderData.n.status !== "published" })
      : pageMeta({ title: "Update unavailable", description: "This update is currently unavailable on The Pop.", path: `/news/${params.slug}`, noindex: true }),
  component: NewsPage,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-5xl">News item not found</h1>
      <Link to="/news" className="btn btn-primary mt-6">What's Happening</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24 text-center">Something went wrong.</div>,
});

function NewsPage() {
  const { n } = Route.useLoaderData();
  useEffect(() => { track("news_open", { newsId: n.id }); }, [n.id]);
  return (
    <article className="container-page max-w-3xl py-8">
      <Breadcrumbs items={[{ label: "What's Happening", to: "/news" }, { label: n.title }]} />
      <div className="mt-6 flex gap-2"><span className="chip bg-night text-night-foreground">{n.category}</span><DemoBadge status={n.status} /></div>
      <h1 className="font-display mt-3 text-5xl md:text-6xl">{n.title}</h1>
      <div className="mt-5 rounded-2xl border-l-4 border-primary bg-muted p-4 text-sm">
        <p><strong>Source:</strong> {n.sourceName}</p>
        <p><strong>Published by source:</strong> {formatDate(n.sourcePublishedAt)} · <strong>Checked:</strong> {formatDate(n.checkedAt)}</p>
        {n.sourceUrl ? (
          <a href={n.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-night mt-3">Read the original <ExternalLink className="size-4" aria-hidden /></a>
        ) : <p className="mt-2 text-muted-foreground">Original source link not added yet.</p>}
      </div>
      <img src={n.coverImageUrl} alt={n.coverImageAlt} width={1200} height={700} className="mt-6 aspect-[16/9] w-full rounded-3xl object-cover" />
      <section className="mt-6">
        <h2 className="eyebrow text-muted-foreground">What the source reports</h2>
        <p className="mt-2 text-lg">{n.summary}</p>
      </section>
      <section className="mt-6 rounded-2xl bg-blush p-5">
        <h2 className="eyebrow text-primary-strong">The Pop.'s take — why it matters</h2>
        <p className="mt-2">{n.editorialNote}</p>
      </section>
    </article>
  );
}
