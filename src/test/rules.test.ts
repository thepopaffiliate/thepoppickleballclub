import { describe, expect, it } from "vitest";
import { matchGear, suggestAlternatives } from "@/lib/gear-finder";
import { isPriceStale, formatPHP } from "@/lib/format";
import { gear } from "@/content/gear";

describe("Gear Finder", () => {
  it("only returns items in the chosen budget and category", () => {
    const res = matchGear(gear, { budget: "under-500", category: "paddle", experience: "beginner", priority: "value" });
    expect(res.map((r) => r.gear.id)).toEqual(["g2"]);
  });

  it("returns nothing when no dataset item matches, and suggests real alternatives", () => {
    const a = { budget: "1500-plus", category: "starter-set", experience: "beginner", priority: "value" } as const;
    expect(matchGear(gear, a)).toHaveLength(0);
    expect(suggestAlternatives(gear, a).budgets).toEqual([{ budget: "500-800", count: 1 }]);
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
