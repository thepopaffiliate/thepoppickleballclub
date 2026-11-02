import type { ExperienceLevel, Gear, UseCase } from "./types";
import { gearFinderConfig } from "./gear-config";
import flatlay from "@/assets/gear-flatlay.jpg";

/*
 * DEMO GEAR. Every entry below is a placeholder (status: "demo"). Names, prices
 * and specs are sample values for layout and Gear Finder testing only — they do
 * NOT describe real Shopee listings. Replace with editor-verified listings and
 * set status to "published". Paste affiliate URLs exactly as issued.
 */
const base = {
  imageUrl: flatlay,
  imageAlt: "Placeholder photo of unbranded pickleball paddles, balls, grip tape and a bag",
  sourceUrl: "",
  shopeeAffiliateUrl: "",
  status: "demo" as const,
  createdAt: "2026-10-01",
  updatedAt: "2026-10-20",
};

export const gear: Gear[] = [
  {
    ...base,
    id: "g1",
    slug: "demo-starter-paddle-pair",
    name: "Demo Starter Paddle Pair",
    category: "starter-set",
    pricePHP: 749,
    priceCheckedAt: "2026-10-22",
    description: "Sample entry: a two-paddle set with balls, as a listing might describe it. Placeholder data only.",
    experienceLevel: ["beginner", "casual"],
    budgetTier: "500-800",
    useCases: ["value", "starter-friendly"],
    listedSpecs: [
      { label: "Contents (as listed)", value: "2 paddles, 4 balls, carry bag" },
      { label: "Face material (as listed)", value: "Fiberglass" },
    ],
    pros: [],
    cons: [],
    featured: true,
  },
  {
    ...base,
    id: "g2",
    slug: "demo-fiberglass-paddle",
    name: "Demo Fiberglass Paddle",
    category: "paddle",
    pricePHP: 459,
    priceCheckedAt: "2026-10-20",
    description: "Sample entry: a single entry-level paddle. Placeholder data only.",
    experienceLevel: ["beginner"],
    budgetTier: "under-500",
    useCases: ["value", "starter-friendly"],
    listedSpecs: [
      { label: "Weight (as listed)", value: "About 230g" },
      { label: "Face material (as listed)", value: "Fiberglass" },
    ],
    pros: ["Example editor pro: listed weight is on the lighter side for new players."],
    cons: ["Example editor con: listing does not mention grip size."],
    featured: true,
  },
  {
    ...base,
    id: "g3",
    slug: "demo-carbon-control-paddle",
    name: "Demo Carbon Control Paddle",
    category: "paddle",
    pricePHP: 1290,
    priceCheckedAt: "2026-09-15",
    description: "Sample entry: a carbon-face paddle aimed at regular players. Placeholder data only.",
    experienceLevel: ["casual", "regular"],
    budgetTier: "800-1500",
    useCases: ["comfort-control", "durability"],
    listedSpecs: [
      { label: "Face material (as listed)", value: "Carbon fiber" },
      { label: "Core (as listed)", value: "Polymer honeycomb" },
    ],
    pros: [],
    cons: [],
    featured: true,
  },
  {
    ...base,
    id: "g4",
    slug: "demo-outdoor-balls-6-pack",
    name: "Demo Outdoor Balls (6-pack)",
    category: "balls",
    pricePHP: 299,
    priceCheckedAt: "2026-10-23",
    description: "Sample entry: a pack of outdoor balls. Placeholder data only.",
    experienceLevel: ["beginner", "casual", "regular"],
    budgetTier: "under-500",
    useCases: ["value", "durability"],
    listedSpecs: [{ label: "Quantity (as listed)", value: "6 balls" }],
    pros: [],
    cons: [],
    featured: true,
  },
  {
    ...base,
    id: "g5",
    slug: "demo-overgrip-3-pack",
    name: "Demo Overgrip (3-pack)",
    category: "accessories",
    pricePHP: 189,
    priceCheckedAt: "2026-10-18",
    description: "Sample entry: replacement overgrips. Placeholder data only.",
    experienceLevel: ["beginner", "casual", "regular"],
    budgetTier: "under-500",
    useCases: ["comfort-control", "value"],
    listedSpecs: [{ label: "Quantity (as listed)", value: "3 wraps" }],
    pros: [],
    cons: [],
    featured: false,
  },
  {
    ...base,
    id: "g6",
    slug: "demo-paddle-sling-bag",
    name: "Demo Paddle Sling Bag",
    category: "bags",
    pricePHP: 650,
    priceCheckedAt: "2026-10-10",
    description: "Sample entry: a sling bag that fits two paddles. Placeholder data only.",
    experienceLevel: ["casual", "regular"],
    budgetTier: "500-800",
    useCases: ["durability", "value"],
    listedSpecs: [{ label: "Capacity (as listed)", value: "Fits 2 paddles" }],
    pros: [],
    cons: [],
    featured: false,
  },
  {
    ...base,
    id: "g7",
    slug: "demo-dri-fit-court-shirt",
    name: "Demo Quick-Dry Court Shirt",
    category: "apparel",
    pricePHP: 399,
    priceCheckedAt: "2026-08-30",
    description: "Sample entry: a lightweight sports shirt. Placeholder data only.",
    experienceLevel: ["beginner", "casual", "regular"],
    budgetTier: "under-500",
    useCases: ["comfort-control", "value"],
    listedSpecs: [{ label: "Material (as listed)", value: "Polyester" }],
    pros: [],
    cons: [],
    featured: false,
  },
  {
    ...base,
    id: "g8",
    slug: "demo-composite-paddle-premium",
    name: "Demo Composite Paddle",
    category: "paddle",
    pricePHP: 1890,
    priceCheckedAt: "2026-10-21",
    description: "Sample entry: an upper-budget composite paddle. Placeholder data only.",
    experienceLevel: ["regular"],
    budgetTier: "1500-plus",
    useCases: ["comfort-control", "durability"],
    listedSpecs: [{ label: "Face material (as listed)", value: "Composite" }],
    pros: [],
    cons: [],
    featured: false,
  },
];

export const visibleGear = gear.filter((g) => g.status === "published");

export const categoryLabels: Record<Gear["category"], string> = {
  paddle: gearFinderConfig.paddle.label,
  balls: gearFinderConfig.balls.label,
  shoes: gearFinderConfig.shoes.label,
  bags: gearFinderConfig.bags.label,
  accessories: gearFinderConfig.accessories.label,
  "starter-set": gearFinderConfig["starter-set"].label,
  apparel: "Apparel (placeholder)",
};

export const experienceLabels: Record<ExperienceLevel, string> = {
  beginner: "Beginner",
  casual: "Casual player",
  regular: "Regular player",
};

export const useCaseLabels: Record<UseCase, string> = {
  value: "Value for money",
  "comfort-control": "Comfort & control",
  durability: "Durability",
  "starter-friendly": "Starter-friendly",
};

export const getGearBySlug = (slug: string) => visibleGear.find((g) => g.slug === slug);
export const getGearByIds = (ids: string[]) => visibleGear.filter((g) => g.status === "published" && ids.includes(g.id));
