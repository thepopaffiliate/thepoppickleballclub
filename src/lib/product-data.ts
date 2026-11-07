import type { Gear } from "@/content/types";
import type { BudgetOption } from "@/content/gear-config";
import { safeExternalUrl } from "@/lib/url-safety";

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
  return safeExternalUrl(g.affiliateDestinations?.[channel] ?? g.shopeeAffiliateUrl);
}

/** Dedicated hands-on context is required in addition to the existing editorial gates. */
export function getHandsOnTestingContext(g: Gear): string | null {
  if (g.status !== "published" || g.reviewStatus !== "tested" || !g.reviewNote?.trim()) return null;
  const context = g.handsOnTesting?.context;
  return context?.trim() ? context : null;
}

export function getReviewLabel(g: Gear) {
  if (g.status !== "published" || !g.reviewNote?.trim()) return "Not yet reviewed";
  if (g.reviewStatus === "tested") return getHandsOnTestingContext(g) ? "Tested" : "Not yet reviewed";
  return g.reviewStatus === "researched" ? "Researched" : "Not yet reviewed";
}