import type { BudgetTier, GearCategory } from "./types";

export interface BudgetOption {
  id: BudgetTier;
  label: string;
  minPHP: number;
  maxPHP: number | null;
}

type FourBudgets = readonly [BudgetOption, BudgetOption, BudgetOption, BudgetOption];

/**
 * OWNER REVIEW PENDING: these are ONLY the four ranges already in this project.
 * Each category owns its own four options, deliberately not a universal scale.
 * Edit labels AND bounds here when researched category ranges are approved.
 * IDs are retained for existing saved directory links, not used as price bounds.
 * Ranges are lower-inclusive, upper-exclusive (the final option has no upper cap).
 */
export const gearFinderConfig: Record<GearCategory, { label: string; provisional: boolean; budgets: FourBudgets }> = {
  paddle: {
    label: "Paddles", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
  balls: {
    label: "Balls", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
  shoes: {
    label: "Shoes", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
  bags: {
    label: "Bags", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
  accessories: {
    label: "Accessories", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
  "starter-set": {
    label: "Starter Sets", provisional: true,
    budgets: [
      { id: "under-500", label: "Under ₱500", minPHP: 0, maxPHP: 500 },
      { id: "500-800", label: "₱500–₱800", minPHP: 500, maxPHP: 800 },
      { id: "800-1500", label: "₱800–₱1,500", minPHP: 800, maxPHP: 1500 },
      { id: "1500-plus", label: "₱1,500+", minPHP: 1500, maxPHP: null },
    ],
  },
};

export const finderCategories = Object.keys(gearFinderConfig) as GearCategory[];
export const getBudgetOption = (category: GearCategory, id: BudgetTier) =>
  gearFinderConfig[category].budgets.find((b) => b.id === id);