import { createFileRoute } from "@tanstack/react-router";
import { visibleStories } from "@/content/stories";
import { PageIntro } from "@/components/site/layout";
import { EmptyState, StoryCard } from "@/components/site/cards";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/stories/")({
  head: () => pageMeta({ title: "Stories & Guides", description: "Beginner tips, gear guides, comparisons and Filipino pickleball culture.", path: "/stories" }),
  component: () => (
    <>
      <PageIntro eyebrow="Stories & Guides" title="Stories">Simple guides at kwentong court — para mas madali ang laro.</PageIntro>
      <div className="container-page mt-8">
        {visibleStories.length ? (
          <div className="grid gap-5 md:grid-cols-3">{visibleStories.map((s) => <StoryCard key={s.id} s={s} />)}</div>
        ) : <EmptyState title="No stories yet" />}
      </div>
    </>
  ),
});
