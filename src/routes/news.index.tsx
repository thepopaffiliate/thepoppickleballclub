import { createFileRoute } from "@tanstack/react-router";
import { visibleNews } from "@/content/news";
import { PageIntro } from "@/components/site/layout";
import { EmptyState, NewsCard } from "@/components/site/cards";
import { SuggestForm } from "@/components/site/interactive";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/news/")({
  head: () => pageMeta({ title: "News & Trends", description: "Sourced pickleball news, local events, rules updates and gear trends — with why it matters to Filipino players.", path: "/news" }),
  component: () => (
    <>
      <PageIntro eyebrow="News & Trends" title="News">Every item links to its original source. Our take is labelled separately.</PageIntro>
      <div className="container-page mt-8 grid gap-10 lg:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          {visibleNews.length ? visibleNews.map((n) => <NewsCard key={n.id} n={n} />) : <EmptyState title="No sourced stories yet" />}
        </div>
        <SuggestForm />
      </div>
    </>
  ),
});
