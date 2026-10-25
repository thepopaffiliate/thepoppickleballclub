import type { BudgetTier, ExperienceLevel, Gear, GearCategory, UseCase } from "@/content/types";
import { budgetLabels, categoryLabels, experienceLabels, useCaseLabels } from "@/content/gear";

export interface FinderAnswers {
  budget: BudgetTier;
  experience: ExperienceLevel;
  category: GearCategory;
  priority: UseCase;
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
  return items
    .filter((g) => g.budgetTier === a.budget && g.category === a.category)
    .map((g) => {
      const reasons = [
        `Listed at a price in your ${budgetLabels[a.budget]} range`,
        `Category: ${categoryLabels[g.category]}`,
      ];
      let score = 0;
      if (g.experienceLevel.includes(a.experience)) {
        score += 2;
        reasons.push(`Tagged for ${experienceLabels[a.experience].toLowerCase()}s`);
      }
      if (g.useCases.includes(a.priority)) {
        score += 1;
        reasons.push(`Tagged for ${useCaseLabels[a.priority].toLowerCase()}`);
      }
      return { gear: g, score, reasons };
    })
    .sort((x, y) => y.score - x.score || x.gear.pricePHP - y.gear.pricePHP);
}

/** Alternatives for a no-match state, counted only from real dataset entries. */
export function suggestAlternatives(items: Gear[], a: FinderAnswers) {
  const budgets = (Object.keys(budgetLabels) as BudgetTier[])
    .filter((b) => b !== a.budget)
    .map((b) => ({ budget: b, count: items.filter((g) => g.budgetTier === b && g.category === a.category).length }))
    .filter((x) => x.count > 0);
  const categories = (Object.keys(categoryLabels) as GearCategory[])
    .filter((c) => c !== a.category)
    .map((c) => ({ category: c, count: items.filter((g) => g.category === c && g.budgetTier === a.budget).length }))
    .filter((x) => x.count > 0);
  return { budgets, categories };
}
