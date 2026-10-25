import type { NewsItem } from "./types";
import community from "@/assets/community-court.jpg";
import hero from "@/assets/hero-court.jpg";

/*
 * DEMO PLACEHOLDERS ONLY. These are not real news. Replace with sourced items:
 * real source name, original URL, the source's publish date, and the date you
 * checked it. Never invent events, dates, quotes or statistics.
 */
export const news: NewsItem[] = [
  {
    id: "n1",
    slug: "demo-placeholder-local-open-play-update",
    title: "[Demo placeholder] Example: a local club shares its open-play schedule",
    summary: "This slot shows how a sourced local-event story will look. No real event is described here.",
    sourceName: "Source not added (placeholder)",
    sourceUrl: "",
    sourcePublishedAt: "2026-10-20",
    checkedAt: "2026-10-22",
    editorialNote: "Example note: here we'd explain why this matters to Filipino players — e.g. where newcomers can try the sport.",
    category: "Local Events",
    coverImageUrl: community,
    coverImageAlt: "Placeholder: players beside a covered community court",
    status: "demo",
  },
  {
    id: "n2",
    slug: "demo-placeholder-rules-update",
    title: "[Demo placeholder] Example: a rules or format update explainer",
    summary: "This slot shows how a rules/format story will look once a real, sourced update is added.",
    sourceName: "Source not added (placeholder)",
    sourceUrl: "",
    sourcePublishedAt: "2026-10-08",
    checkedAt: "2026-10-10",
    editorialNote: "Example note: here we'd break down what changes for casual and regular players in simple terms.",
    category: "Rules & Formats",
    coverImageUrl: hero,
    coverImageAlt: "Placeholder: a paddle and ball near a court net",
    status: "demo",
  },
];

export const visibleNews = news
  .filter((n) => n.status !== "draft")
  .sort((a, b) => b.sourcePublishedAt.localeCompare(a.sourcePublishedAt));

export const getNewsBySlug = (slug: string) => visibleNews.find((n) => n.slug === slug);
