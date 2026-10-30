import { describe, expect, it } from "vitest";
import { applyFinderChoice, getPriorityOptions, matchGear, suggestAlternatives } from "@/lib/gear-finder";
import { isPriceStale, formatPHP } from "@/lib/format";
import { gear, getGearByIds } from "@/content/gear";
import { finderCategories, gearFinderConfig } from "@/content/gear-config";
import { getAffiliateDestination, getReviewLabel, hasVerifiedPrice } from "@/lib/product-data";
import { isSourcedNews, news, visibleNews } from "@/content/news";
import type { Gear } from "@/content/types";

// Test fixtures reuse existing placeholder records; they are never published content.
const approvedFixtures: Gear[] = gear.map((g) => ({ ...g, status: "published" }));
const fixture = approvedFixtures[1];
if (!fixture) throw new Error("Missing test fixture");

describe("Gear Finder", () => {
  it("only returns items in the chosen budget and category", () => {
    const res = matchGear(approvedFixtures, { budget: "under-500", category: "paddle", experience: "beginner", priority: "value" });
    expect(res.map((r) => r.gear.id)).toEqual(["g2"]);
  });

  it("returns nothing when no dataset item matches, and suggests real alternatives", () => {
    const a = { budget: "1500-plus", category: "starter-set", experience: "beginner", priority: "value" } as const;
    expect(matchGear(approvedFixtures, a)).toHaveLength(0);
    expect(suggestAlternatives(approvedFixtures, a).budgets).toEqual([{ budget: "500-800", count: 1 }]);
  });

  it("supports exactly the six owner-confirmed categories", () => {
    expect(finderCategories.map((c) => gearFinderConfig[c].label)).toEqual(["Paddles", "Balls", "Shoes", "Bags", "Accessories", "Starter Sets"]);
  });

  it.each(finderCategories)("provides exactly four provisional budget options for %s", (category) => {
    const config = gearFinderConfig[category];
    expect(config.budgets).toHaveLength(4);
    expect(new Set(config.budgets.map((b) => b.id)).size).toBe(4);
    expect(config.provisional).toBe(true);
    expect(config.budgets.map((b) => [b.minPHP, b.maxPHP])).toEqual([[0, 500], [500, 800], [800, 1500], [1500, null]]);
  });

  it("uses each category's independent bounds, not the legacy universal tier", () => {
    const original = gearFinderConfig.paddle;
    gearFinderConfig.paddle = { ...original, budgets: [{ ...original.budgets[0], maxPHP: 400 }, ...original.budgets.slice(1)] as typeof original.budgets };
    try {
      const a = { category: "paddle", budget: "under-500", experience: "beginner", priority: "value" } as const;
      expect(matchGear(approvedFixtures, a)).toHaveLength(0);
      expect(gearFinderConfig.balls.budgets[0].maxPHP).toBe(500);
    } finally {
      gearFinderConfig.paddle = original;
    }
  });

  it("excludes every demo and draft product from recommendations", () => {
    const a = { budget: "under-500", category: "paddle", experience: "beginner", priority: "value" } as const;
    expect(matchGear([...gear, { ...fixture, status: "draft" }], a)).toEqual([]);
    expect(suggestAlternatives(gear, a).budgets).toEqual([]);
  });

  it.each(finderCategories)("never fills empty %s results with other categories", (category) => {
    const a = { budget: "under-500", category, experience: "beginner", priority: "not-configured" } as const;
    expect(matchGear(approvedFixtures.filter((g) => g.category !== category), a)).toEqual([]);
  });

  it("drops stale budgets and preferences when changing categories", () => {
    expect(applyFinderChoice({ category: "paddle", budget: "under-500", experience: "beginner", priority: "value" }, "category", "shoes")).toEqual({ category: "shoes" });
  });

  it("carries the selected category through later choices", () => {
    let answers = applyFinderChoice({}, "category", "bags");
    for (const [key, value] of [["budget", "500-800"], ["experience", "casual"], ["priority", "not-configured"]] as const) answers = applyFinderChoice(answers, key, value);
    expect(answers).toEqual({ category: "bags", budget: "500-800", experience: "casual", priority: "not-configured" });
  });

  it("does not invent technical preferences for missing category research", () => {
    expect(getPriorityOptions(gear, "shoes")).toEqual({ "not-configured": "No preference" });
    expect(getPriorityOptions(approvedFixtures, "balls")).toEqual({ value: "Value for money", durability: "Durability" });
  });

  it("embeds only approved products in article recommendations", () => {
    expect(getGearByIds(["g1", "g2", "g3"])).toEqual([]);
  });
});

describe("Product evidence and affiliate destinations", () => {
  it("requires a published product, estimate amount and valid checked date", () => {
    expect(hasVerifiedPrice(fixture)).toBe(true);
    expect(hasVerifiedPrice({ ...fixture, pricePHP: null })).toBe(false);
    expect(hasVerifiedPrice({ ...fixture, priceCheckedAt: "" })).toBe(false);
    expect(hasVerifiedPrice({ ...fixture, priceCheckedAt: "invalid-date" })).toBe(false);
    expect(hasVerifiedPrice({ ...fixture, status: "demo" })).toBe(false);
    const a = { budget: "under-500", category: "paddle", experience: "beginner", priority: "value" } as const;
    expect(matchGear([{ ...fixture, priceCheckedAt: "" }], a)).toEqual([]);
  });

  it("preserves the exact affiliate URL without changing tracking parameters", () => {
    const issued = "https://example.com/product?Sub_ID=News%2FStory&b=2&a=1#details";
    expect(getAffiliateDestination({ ...fixture, shopeeAffiliateUrl: issued }, "gear_detail")).toBe(issued);
  });

  it("selects exact channel-specific destinations with the existing URL as fallback", () => {
    const issued = "https://example.com/product?channel=article&Sub_ID=a%20b";
    const g = { ...fixture, shopeeAffiliateUrl: "https://example.com/fallback", affiliateDestinations: { story_inline: issued, gear_detail: "" } };
    expect(getAffiliateDestination(g, "story_inline")).toBe(issued);
    expect(getAffiliateDestination(g, "home_featured")).toBe(g.shopeeAffiliateUrl);
    expect(getAffiliateDestination(g, "gear_detail")).toBe("");
  });

  it("does not imply research or testing without editorial evidence", () => {
    expect(getReviewLabel({ ...fixture, reviewStatus: "tested" })).toBe("Not yet reviewed");
    expect(getReviewLabel({ ...fixture, reviewStatus: "tested", reviewNote: "Test fixture evidence" })).toBe("Tested");
    expect(getReviewLabel({ ...fixture, reviewStatus: "researched", reviewNote: "Test fixture evidence" })).toBe("Researched");
  });
});

describe("Sourced news only", () => {
  it("excludes demo placeholders from What's Happening", () => {
    expect(visibleNews).toEqual([]);
    expect(news.every((n) => !isSourcedNews(n))).toBe(true);
  });

  it("requires published status, source name, destination and dates", () => {
    const n = news[0];
    if (!n) throw new Error("Missing news test fixture");
    const sourced = { ...n, status: "published" as const, sourceName: "Test fixture source", sourceUrl: "https://example.com/source" };
    expect(isSourcedNews(sourced)).toBe(true);
    expect(isSourcedNews({ ...sourced, sourceUrl: "" })).toBe(false);
    expect(isSourcedNews({ ...sourced, sourceName: "" })).toBe(false);
    expect(isSourcedNews({ ...sourced, checkedAt: "" })).toBe(false);
  });
});

describe("Price freshness", () => {
  const now = new Date("2026-10-25T12:00:00+08:00");
  it("flags a price checked more than 14 days ago as stale", () => {
    expect(isPriceStale("2026-10-01", 14, now)).toBe(true);
  });
  it("treats a price checked 3 days ago as fresh", () => {
    expect(isPriceStale("2026-10-22", 14, now)).toBe(false);
  });
  it("formats PHP", () => {
    expect(formatPHP(1290)).toBe("₱1,290");
  });
});
