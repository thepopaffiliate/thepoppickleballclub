// Content models for The Pop. Keep these stable: a future admin/Lovable Cloud
// table can map 1:1 onto these shapes.

export type ContentStatus = "published" | "demo" | "draft";

export type GearCategory = "paddle" | "balls" | "shoes" | "bags" | "accessories" | "starter-set";
export type BudgetTier = "under-500" | "500-800" | "800-1500" | "1500-plus";
export type ExperienceLevel = "beginner" | "casual" | "regular";
export type UseCase = "value" | "comfort-control" | "durability" | "starter-friendly";

export interface Gear {
  id: string;
  slug: string;
  name: string;
  /** Apparel is retained only for the existing legacy placeholder. */
  category: GearCategory | "apparel";
  pricePHP?: number | null;
  /** ISO date the listed price was last checked by an editor. */
  priceCheckedAt?: string;
  description: string;
  experienceLevel: ExperienceLevel[];
  budgetTier: BudgetTier;
  useCases: UseCase[];
  listedSpecs: { label: string; value: string }[];
  /** Only populate after editorial verification; listedSpecs alone are not verified. */
  verifiedSpecs?: { label: string; value: string }[];
  intendedUser?: string;
  reviewStatus?: "not-reviewed" | "researched" | "tested";
  reviewNote?: string;
  /** Editor-entered only. Leave empty if not reviewed. */
  pros: string[];
  cons: string[];
  imageUrl: string;
  imageAlt: string;
  /** Original listing URL (non-affiliate). Empty string = not set. */
  sourceUrl: string;
  /** Affiliate URL exactly as issued. Never modified. Empty = not set. */
  shopeeAffiliateUrl: string;
  /** Exact issued URLs per placement/channel. Never transform these strings. */
  affiliateDestinations?: Partial<Record<string, string>>;
  featured: boolean;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
}

export type StoryCategory =
  | "Beginner Tips"
  | "Gear Guides"
  | "Buying Guides"
  | "Product Comparisons"
  | "Court Lifestyle"
  | "Filipino Pickleball";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "gear"; gearIds: string[] };

export interface Story {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: StoryCategory;
  content: ContentBlock[];
  coverImageUrl: string;
  coverImageAlt: string;
  /** Only shown when configured. */
  author?: string;
  publishedAt: string;
  updatedAt: string;
  status: ContentStatus;
  relatedGearIds: string[];
}

export type NewsCategory = "News" | "Local Events" | "Rules & Formats" | "Gear Trends" | "Community";

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  sourcePublishedAt: string;
  checkedAt: string;
  editorialNote: string;
  category: NewsCategory;
  coverImageUrl: string;
  coverImageAlt: string;
  status: ContentStatus;
}

export type SocialPlatform = "instagram" | "facebook" | "shopee-video" | "tiktok";

export interface SocialPost {
  id: string;
  platform: SocialPlatform;
  title: string;
  format: "reel" | "carousel" | "video";
  caption: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  postUrl: string;
  publishedAt: string;
  pillar: "Budget Finds" | "Player Lifestyle" | "Product Truth" | "Court Community";
  relatedGearIds: string[];
  status: ContentStatus;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  socials: Record<SocialPlatform, string>;
  contactMethod: string;
  disclosureText: string;
  independenceNote: string;
  /** Days after which a checked price is flagged as possibly outdated. */
  priceStaleAfterDays: number;
}
