import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { Search } from "lucide-react";
import { visibleGear, budgetLabels, categoryLabels } from "@/content/gear";
import type { BudgetTier, GearCategory } from "@/content/types";
import { PageIntro } from "@/components/site/layout";
import { Disclosure, EmptyState, GearCard } from "@/components/site/cards";
import { pageMeta } from "@/lib/seo";

type Sort = "price-asc" | "price-desc" | "checked";
interface GearSearch {
  q?: string;
  category?: GearCategory;
  budget?: BudgetTier;
  sort?: Sort;
}

const pick = <T extends string>(v: unknown, allowed: readonly T[]) => (allowed.includes(v as T) ? (v as T) : undefined);

export const Route = createFileRoute("/gear/")({
  validateSearch: (s: Record<string, unknown>): GearSearch => ({
    q: typeof s.q === "string" && s.q ? s.q : undefined,
    category: pick(s.category, Object.keys(categoryLabels) as GearCategory[]),
    budget: pick(s.budget, Object.keys(budgetLabels) as BudgetTier[]),
    sort: pick(s.sort, ["price-asc", "price-desc", "checked"] as const),
  }),
  head: () =>
    pageMeta({
      title: "Budget pickleball gear",
      description: "Browse affordable pickleball paddles, starter sets, balls, bags and apparel with listed prices and last-checked dates.",
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
    const list = visibleGear.filter(
      (g) =>
        (!search.category || g.category === search.category) &&
        (!search.budget || g.budgetTier === search.budget) &&
        (!q || `${g.name} ${g.description}`.toLowerCase().includes(q)),
    );
    const sort = search.sort ?? "price-asc";
    return [...list].sort((a, b) =>
      sort === "price-asc" ? a.pricePHP - b.pricePHP : sort === "price-desc" ? b.pricePHP - a.pricePHP : b.priceCheckedAt.localeCompare(a.priceCheckedAt),
    );
  }, [search]);

  return (
    <>
      <PageIntro eyebrow="Budget Finds" title="Gear">
        Listed prices, last-checked dates, and simple notes. Bili ka lang sa Shopee kapag sigurado ka na.
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
            <select className={selectCls} value={search.category ?? ""} onChange={(e) => set({ category: (e.target.value || undefined) as GearCategory | undefined })}>
              <option value="">All categories</option>
              {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Budget</span>
            <select className={selectCls} value={search.budget ?? ""} onChange={(e) => set({ budget: (e.target.value || undefined) as BudgetTier | undefined })}>
              <option value="">Any budget</option>
              {Object.entries(budgetLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Sort</span>
            <select className={selectCls} value={search.sort ?? "price-asc"} onChange={(e) => set({ sort: e.target.value as Sort })}>
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
              <p>Try a different budget or category.</p>
              <button className="btn btn-night mt-4" onClick={() => navigate({ search: {}, replace: true })}>Clear filters</button>
            </EmptyState>
          )}
        </div>
        <div className="mt-8"><Disclosure /></div>
      </div>
    </>
  );
}
