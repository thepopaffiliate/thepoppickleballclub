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
  {
    id: "n3",
    slug: "ppl-masters-2026-pampanga",
    title: "Philippine Pickleball League Masters 2026 Set for November in Pampanga",
    summary: "PPL Masters 2026 is scheduled for November 25–30, 2026, at Pampanga Pickleball Center in San Fernando, Pampanga. The six-day competition is listed for open and intermediate divisions and is upcoming as of November 3, 2026.",
    sourceName: "Philippine Pickleball League",
    sourceUrl: "https://www.phpickleballleague.com/",
    checkedAt: "2026-11-03",
    editorialNote: "A national-level competition gives players outside Metro Manila another event to follow. Dates and divisions come from the PPL website and event listings, so check the organizer's page for final details. Also listed by Hammer Nutrition.",
    category: "Local Events",
    coverImageUrl: "",
    coverImageAlt: "",
    status: "published",
  },
  {
    id: "n4",
    slug: "canlaon-city-mayors-cup-pickleball-tournament",
    title: "Canlaon City Mayor's Cup Pickleball Tournament Set for November 28–29",
    summary: "The Canlaon City Mayor's Cup Pickleball Tournament is listed for November 28–29, 2026, in Canlaon City, Negros Oriental. The city government event is upcoming as of November 3, 2026; further tournament details were not included in the official listing reviewed.",
    sourceName: "Canlaon City Government",
    sourceUrl: "https://canlaoncity.gov.ph/events/canlaon-city-mayors-cup-pickleball-tournament",
    checkedAt: "2026-11-03",
    editorialNote: "A city-government tournament listing is a good sign of pickleball activity beyond the big cities. The listing shows the event name and dates. Divisions, fees and registration details weren't shown as of November 3.",
    category: "Local Events",
    coverImageUrl: "",
    coverImageAlt: "",
    status: "published",
  },
  {
    id: "n5",
    slug: "payag-pickleyard-first-pickleball-tournament",
    title: "Cebu's Payag Pickleyard to Host Its First Pickleball Tournament This November",
    summary: "The first Payag Pickleyard Pickleball Tournament is listed for November 7–8, 2026, in Tinubdan, Daanbantayan, Cebu. It is upcoming as of November 3, 2026, but the announced October 24 registration deadline has passed, so players should contact the organizer to confirm whether late entries are possible.",
    sourceName: "StayHappening (event listing)",
    sourceUrl: "https://stayhappening.com/e/1st-payag-pickleyard-pickleball-tournament-E2ISYYQD9D3",
    checkedAt: "2026-11-03",
    editorialNote: "A grassroots tournament for Cebu players, with novice and low-intermediate divisions listed separately. Details come from third-party event listings (StayHappening, also Hammer Nutrition). The October 24 registration deadline has passed, so contact the organizer to ask about late entries.",
    category: "Local Events",
    coverImageUrl: "",
    coverImageAlt: "",
    status: "published",
  },
  {
    id: "n6",
    slug: "2026-opendoor-pickleball-world-championships",
    title: "World's Top Pickleball Players Gather for 2026 Opendoor Pickleball World Championships",
    summary: "The 2026 Opendoor Pickleball World Championships are scheduled for October 30–November 8, 2026, at Brookhaven Country Club in Farmers Branch, Texas. The event is ongoing as of November 3, with PPA Tour competition and the MLP Nations Cup included in the event schedule.",
    sourceName: "Opendoor Pickleball World Championships",
    sourceUrl: "https://worlds.unitedpickleball.com/",
    checkedAt: "2026-11-03",
    editorialNote: "Filipino players can follow elite-level competition for ideas on positioning, shot selection and doubles strategy. Dates and schedule come from the official event website, so check it for live results. Also covered by Carvana PPA Tour.",
    category: "News",
    coverImageUrl: "",
    coverImageAlt: "",
    status: "published",
  },
  {
    id: "n7",
    slug: "usa-pickleball-2026-rules-update",
    title: "2026 Pickleball Rules Update: Rally Scoring and Other Changes Players Should Know",
    summary: "USA Pickleball's 2026 rulebook includes a provisional rally-scoring format and other rule changes for the 2026 rules year. The updated rules are in effect as of November 3, 2026, under the USA Pickleball ruleset.",
    sourceName: "USA Pickleball",
    sourceUrl: "https://usapickleball.org/rules/",
    sourcePublishedAt: "2025-12-17",
    checkedAt: "2026-11-03",
    editorialNote: "Understanding scoring and rule changes can help Filipino players prepare for events that use the USA Pickleball ruleset. Other changes include paddle-spin clarifications at the serve, prompt out calls, a fifth round-robin tiebreaker based on total points scored, restrictions on spectator input for calls, and a wheelchair pickleball section. The rule-change document was edited January 30, 2026. These are USA Pickleball rules and do not automatically apply to Philippine tournaments; organizers and governing bodies decide which rules their events use.",
    category: "Rules & Formats",
    coverImageUrl: "",
    coverImageAlt: "",
    status: "published",
  },
];

export function isSourcedNews(n: NewsItem) {
  return n.status === "published" && Boolean(n.sourceName.trim()) && /^https?:\/\/\S+$/i.test(n.sourceUrl) &&
    (n.sourcePublishedAt === undefined || n.sourcePublishedAt === "" || Number.isFinite(Date.parse(n.sourcePublishedAt))) && Number.isFinite(Date.parse(n.checkedAt));
}

export const visibleNews = news
  .filter(isSourcedNews)
  .sort((a, b) => (b.sourcePublishedAt || b.checkedAt).localeCompare(a.sourcePublishedAt || a.checkedAt));

// Only sourced, published items have public detail pages.
export const getNewsBySlug = (slug: string) => visibleNews.find((n) => n.slug === slug);
