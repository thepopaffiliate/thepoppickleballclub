import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { visibleStories, storyCategories } from "@/content/stories";
import { PageIntro } from "@/components/site/layout";
import { EmptyState, StoryCard } from "@/components/site/cards";
import { pageMeta } from "@/lib/seo";
import type { StoryCategory } from "@/content/types";

export const Route = createFileRoute("/stories/")({
  validateSearch: (s: Record<string, unknown>): { category?: StoryCategory | undefined } => ({
    category: storyCategories.includes(s["category"] as StoryCategory) ? s["category"] as StoryCategory : undefined,
  }),
  head: () => pageMeta({ title: "Latest Reads", description: "Buying guides, product comparisons, beginner tips and Filipino pickleball culture.", path: "/stories" }),
  component: LatestReads,
});

function LatestReads() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/stories/" });
  const reads = visibleStories.filter((s) => !category || s.category === category || (category === "Buying Guides" && s.category === "Gear Guides"));
  return (
    <>
      <PageIntro eyebrow="Guides, Comparisons & Court Stories" title="Latest Reads">Simple guides at kwentong court — para mas madali ang laro.</PageIntro>
      <div className="container-page mt-8">
        <label className="mb-6 block max-w-xs">
          <span className="font-ui text-sm font-semibold">Read category</span>
          <select className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5" value={category ?? ""} onChange={(e) => navigate({ search: { category: (e.target.value || undefined) as StoryCategory | undefined }, replace: true })}>
            <option value="">All reads</option>
            {storyCategories.filter((c) => c !== "Gear Guides").map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        {reads.length ? (
          <div className="grid gap-5 md:grid-cols-3">{reads.map((s) => <StoryCard key={s.id} s={s} />)}</div>
        ) : <EmptyState title="No stories yet" />}
      </div>
    </>
  );
}
