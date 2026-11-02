import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Search } from "lucide-react";
import { visibleGear, categoryLabels } from "@/content/gear";
import { gearFinderConfig, getBudgetOption } from "@/content/gear-config";
import type { BudgetTier, GearCategory } from "@/content/types";
import { PageIntro } from "@/components/site/layout";
import { Disclosure, EmptyState, GearCard } from "@/components/site/cards";
import { pageMeta } from "@/lib/seo";
import { fitsBudget, hasVerifiedPrice } from "@/lib/product-data";
import { Button } from "@/components/ui/button";

type Sort = "price-asc" | "price-desc" | "checked";
interface GearSearch {
  q?: string | undefined;
  category?: GearCategory | "apparel" | undefined;
  budget?: BudgetTier | undefined;
  sort?: Sort | undefined;
}

const pick = <T extends string>(v: unknown, allowed: readonly T[]) => (allowed.includes(v as T) ? (v as T) : undefined);

export const Route = createFileRoute("/gear/")({
  validateSearch: (s: Record<string, unknown>): GearSearch => {
    const category = pick(s["category"], Object.keys(categoryLabels) as (GearCategory | "apparel")[]);
    const budgetIds = category && category !== "apparel" ? gearFinderConfig[category].budgets.map((b) => b.id) : Object.values(gearFinderConfig).flatMap((c) => c.budgets.map((b) => b.id));
    return {
      q: typeof s["q"] === "string" && s["q"] ? s["q"] : undefined,
      category,
      budget: pick(s["budget"], budgetIds),
      sort: pick(s["sort"], ["price-asc", "price-desc", "checked"] as const),
    };
  },
  head: () =>
    pageMeta({
      title: "Budget pickleball gear",
      description: "Discover pickleball paddles, balls, shoes, bags, accessories and starter sets with verified estimates and last-checked dates when available.",
      path: "/gear",
    }),
  component: GearDirectory,
});

const selectCls = "w-full rounded-lg border border-input bg-background px-3 py-2.5 font-ui text-sm font-semibold";

function GearDirectory() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/gear/" });
  const set = (patch: Partial<GearSearch>) => navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true });

  const results = useMemo(() => {
    const q = (search.q ?? "").toLowerCase();
    const selectedBudget = search.budget;
    const list = visibleGear.filter(
      (g) =>
        (!search.category || g.category === search.category) &&
        (!selectedBudget || (g.category !== "apparel" && (() => { const b = getBudgetOption(g.category, selectedBudget); return b ? fitsBudget(g, b) : false; })())) &&
        (!q || `${g.name} ${g.description}`.toLowerCase().includes(q)),
    );
    const sort = search.sort ?? "price-asc";
    return [...list].sort((a, b) => {
      if (hasVerifiedPrice(a) !== hasVerifiedPrice(b)) return hasVerifiedPrice(a) ? -1 : 1;
      return sort === "price-asc" ? (a.pricePHP ?? 0) - (b.pricePHP ?? 0) : sort === "price-desc" ? (b.pricePHP ?? 0) - (a.pricePHP ?? 0) : (b.priceCheckedAt ?? "").localeCompare(a.priceCheckedAt ?? "");
    });
  }, [search]);

  return (
    <>
      <PageIntro eyebrow="Budget Finds" title="Gear">
        Paddles, balls, bags and the rest — with estimated prices, the date we last checked them, and honest notes on what to consider.
      </PageIntro>
      <div className="container-page mt-8">
        <div className="grid gap-3 rounded-2xl border bg-card p-4 md:grid-cols-4">
          <label className="relative md:col-span-1">
            <span className="sr-only">Search gear</span>
            <Search className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" aria-hidden />
            <input
              type="search"
              placeholder="Search gear"
              value={search.q ?? ""}
              onChange={(e) => set({ q: e.target.value || undefined })}
              className={`${selectCls} pl-9 font-normal`}
            />
          </label>
          <label>
            <span className="sr-only">Category</span>
            <select aria-label="Category" className={selectCls} value={search.category ?? ""} onChange={(e) => set({ category: (e.target.value || undefined) as GearSearch["category"], budget: undefined })}>
              <option value="">All categories</option>
              {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Budget</span>
            <select aria-label="Budget" className={selectCls} disabled={!search.category || search.category === "apparel"} value={search.budget ?? ""} onChange={(e) => set({ budget: (e.target.value || undefined) as BudgetTier | undefined })}>
              <option value="">{search.category && search.category !== "apparel" ? "Any budget (provisional)" : "Choose category for budgets"}</option>
              {search.category && search.category !== "apparel" && gearFinderConfig[search.category].budgets.map((b) => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Sort</span>
            <select aria-label="Sort" className={selectCls} value={search.sort ?? "price-asc"} onChange={(e) => set({ sort: e.target.value as Sort })}>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="checked">Recently checked</option>
            </select>
          </label>
        </div>
        <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">{results.length} item{results.length === 1 ? "" : "s"}</p>
        <div className="mt-4">
          {results.length ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((g) => <GearCard key={g.id} g={g} placement="gear_directory" />)}
            </div>
          ) : (
            <EmptyState title="Walang match">
              <p>Nothing approved here yet. Try a different budget or category, or check back soon.</p>
              <Button variant="site" size="site" className="btn-night rounded-full mt-4" onClick={() => navigate({ search: {}, replace: true })}>Clear filters</Button>
            </EmptyState>
          )}
        </div>
        <div className="mt-8"><Disclosure /></div>
      </div>
    </>
  );
}
