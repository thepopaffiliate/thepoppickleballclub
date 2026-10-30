import type { BudgetTier, ExperienceLevel, Gear, GearCategory, UseCase } from "@/content/types";
import { categoryLabels, experienceLabels, useCaseLabels } from "@/content/gear";
import { gearFinderConfig, getBudgetOption } from "@/content/gear-config";
import { fitsBudget } from "@/lib/product-data";

export interface FinderAnswers {
  budget: BudgetTier;
  experience: ExperienceLevel;
  category: GearCategory;
  priority: UseCase | "not-configured";
}

export interface FinderMatch {
  gear: Gear;
  score: number;
  reasons: string[];
}

/**
 * Budget and category are hard filters; experience and priority rank results.
 * Reasons only restate fields entered in the dataset.
 */
export function matchGear(items: Gear[], a: FinderAnswers): FinderMatch[] {
  const budget = getBudgetOption(a.category, a.budget);
  if (!budget) return [];
  return items
    .filter((g) => g.status === "published" && g.category === a.category && fitsBudget(g, budget))
    .map((g) => {
      const reasons = [
        `Estimated price in your ${budget.label} range`,
        `Category: ${categoryLabels[g.category]}`,
      ];
      let score = 0;
      if (g.experienceLevel.includes(a.experience)) {
        score += 2;
        reasons.push(`Tagged for ${experienceLabels[a.experience].toLowerCase()}s`);
      }
      if (a.priority !== "not-configured" && g.useCases.includes(a.priority)) {
        score += 1;
        reasons.push(`Tagged for ${useCaseLabels[a.priority].toLowerCase()}`);
      }
      return { gear: g, score, reasons };
    })
    .sort((x, y) => y.score - x.score || (x.gear.pricePHP ?? 0) - (y.gear.pricePHP ?? 0));
}

/** Alternatives for a no-match state, counted only from real dataset entries. */
export function suggestAlternatives(items: Gear[], a: FinderAnswers) {
  const budgets = gearFinderConfig[a.category].budgets
    .filter((b) => b.id !== a.budget)
    .map((b) => ({ budget: b.id, count: items.filter((g) => g.category === a.category && fitsBudget(g, b)).length }))
    .filter((x) => x.count > 0);
  return { budgets };
}

/** Preference choices only restate attributes on approved products in this category. */
export function getPriorityOptions(items: Gear[], category?: GearCategory): Record<string, string> {
  const values = new Set(items.filter((g) => g.status === "published" && g.category === category).flatMap((g) => g.useCases));
  return values.size ? Object.fromEntries([...values].map((v) => [v, useCaseLabels[v]])) : { "not-configured": "No preference" };
}

export function applyFinderChoice(answers: Partial<FinderAnswers>, key: keyof FinderAnswers, value: string): Partial<FinderAnswers> {
  // A changed category starts a new category-specific path, dropping stale choices.
  if (key === "category" && value !== answers.category) return { category: value as GearCategory };
  return { ...answers, [key]: value };
}
