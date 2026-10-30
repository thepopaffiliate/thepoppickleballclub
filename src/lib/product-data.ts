import type { Gear } from "@/content/types";
import type { BudgetOption } from "@/content/gear-config";

/** Demo prices and undated amounts are not verified price estimates. */
export function hasVerifiedPrice(g: Gear): g is Gear & { pricePHP: number; priceCheckedAt: string } {
  return g.status === "published" && typeof g.pricePHP === "number" && Number.isFinite(g.pricePHP) &&
    g.pricePHP >= 0 && Boolean(g.priceCheckedAt) && Number.isFinite(Date.parse(g.priceCheckedAt ?? ""));
}

export function fitsBudget(g: Gear, budget: BudgetOption) {
  return hasVerifiedPrice(g) && g.pricePHP >= budget.minPHP && (budget.maxPHP === null || g.pricePHP < budget.maxPHP);
}

/** Do not trim, parse, append query parameters, or otherwise normalize issued URLs. */
export function getAffiliateDestination(g: Gear, channel: string) {
  return g.affiliateDestinations?.[channel] ?? g.shopeeAffiliateUrl;
}

export function getReviewLabel(g: Gear) {
  if (g.status !== "published" || !g.reviewNote?.trim()) return "Not yet reviewed";
  return g.reviewStatus === "tested" ? "Tested" : g.reviewStatus === "researched" ? "Researched" : "Not yet reviewed";
}