import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, RotateCcw, Loader2 } from "lucide-react";
import { visibleGear, budgetLabels, categoryLabels, experienceLabels, useCaseLabels } from "@/content/gear";
import { matchGear, suggestAlternatives, type FinderAnswers } from "@/lib/gear-finder";
import { PageIntro } from "@/components/site/layout";
import { DemoBadge, Disclosure, PriceInfo, ShopeeButton } from "@/components/site/cards";
import { track } from "@/lib/analytics";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/gear-finder")({
  head: () =>
    pageMeta({
      title: "Sulit Gear Finder",
      description: "Answer 4 quick questions and get pickleball gear matched to your budget, level and priorities.",
      path: "/gear-finder",
    }),
  component: GearFinder,
});

type Key = keyof FinderAnswers;
const steps: { key: Key; q: string; options: Record<string, string> }[] = [
  { key: "budget", q: "Magkano ang budget mo?", options: budgetLabels },
  { key: "experience", q: "Gaano ka na katagal naglalaro?", options: experienceLabels },
  { key: "category", q: "Ano ang hinahanap mo?", options: categoryLabels },
  { key: "priority", q: "Ano ang pinaka-importante sa'yo?", options: useCaseLabels },
];

function GearFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<FinderAnswers>>({});
  const [loading, setLoading] = useState(false);
  const done = step >= steps.length;

  useEffect(() => {
    if (!done) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [done]);

  const choose = (key: Key, value: string) => {
    if (step === 0 && !answers.budget) track("gear_finder_start");
    const next = { ...answers, [key]: value } as Partial<FinderAnswers>;
    setAnswers(next);
    if (step === steps.length - 1) {
      const res = matchGear(visibleGear, next as FinderAnswers);
      track("gear_finder_complete", { ...(next as FinderAnswers), resultCount: res.length });
    }
    setStep(step + 1);
  };
  const reset = () => { setAnswers({}); setStep(0); };
  const jump = (patch: Partial<FinderAnswers>) => setAnswers((a) => ({ ...a, ...patch }));

  return (
    <>
      <PageIntro eyebrow="Sulit Gear Finder" title="Find your gear">
        4 questions. We'll only match against gear we've actually listed.
      </PageIntro>
      <div className="container-page mt-8 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={Math.min(step, steps.length)} aria-label="Quiz progress">
            <div className="h-full bg-primary transition-all" style={{ width: `${(Math.min(step, steps.length) / steps.length) * 100}%` }} />
          </div>
          <span className="font-ui text-sm font-bold">{done ? "Done" : `Step ${step + 1} of ${steps.length}`}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="btn btn-outline min-h-10 py-1.5 text-sm" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            <ArrowLeft className="size-4" aria-hidden /> Back
          </button>
          <button className="btn btn-outline min-h-10 py-1.5 text-sm" onClick={reset} disabled={step === 0}>
            <RotateCcw className="size-4" aria-hidden /> Start over
          </button>
        </div>

        {!done ? (
          <fieldset className="mt-8" key={step}>
            <legend className="font-display text-4xl md:text-5xl">{steps[step].q}</legend>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.entries(steps[step].options).map(([v, label]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => choose(steps[step].key, v)}
                  aria-pressed={answers[steps[step].key] === v}
                  className={`btn min-h-16 justify-start rounded-2xl border-2 px-5 text-left text-base ${answers[steps[step].key] === v ? "border-primary bg-accent" : "border-border hover:border-primary"}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : loading ? (
          <p className="mt-12 flex items-center justify-center gap-2 font-ui font-semibold" role="status">
            <Loader2 className="size-5 animate-spin" aria-hidden /> Hinahanap ang sulit…
          </p>
        ) : (
          <Results answers={answers as FinderAnswers} onJump={jump} />
        )}
      </div>
    </>
  );
}

function Results({ answers, onJump }: { answers: FinderAnswers; onJump: (p: Partial<FinderAnswers>) => void }) {
  const matches = matchGear(visibleGear, answers);
  const alt = suggestAlternatives(visibleGear, answers);
  return (
    <section className="mt-8" aria-live="polite">
      <h2 className="font-display text-4xl">
        {matches.length ? `${matches.length} match${matches.length > 1 ? "es" : ""} for you` : "Walang exact match (yet)"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {budgetLabels[answers.budget]} · {experienceLabels[answers.experience]} · {categoryLabels[answers.category]} · {useCaseLabels[answers.priority]}
      </p>
      {matches.length > 0 ? (
        <ul className="mt-6 space-y-4">
          {matches.map(({ gear: g, reasons }) => (
            <li key={g.id} className="grid gap-4 rounded-2xl border bg-card p-4 shadow-card sm:grid-cols-[140px_1fr]">
              <img src={g.imageUrl} alt={g.imageAlt} width={280} height={280} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
              <div>
                <DemoBadge status={g.status} />
                <h3 className="mt-1 font-ui text-lg font-bold">
                  <Link to="/gear/$slug" params={{ slug: g.slug }} className="hover:text-primary-strong">{g.name}</Link>
                </h3>
                <p className="eyebrow mt-2 text-value-strong">Why it matched</p>
                <ul className="mt-1 list-disc pl-5 text-sm">{reasons.map((r) => <li key={r}>{r}</li>)}</ul>
                <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                  <PriceInfo g={g} />
                  <ShopeeButton g={g} placement="gear_finder_result" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-2xl border-2 border-dashed p-6">
          <p>We haven't listed any {categoryLabels[answers.category].toLowerCase()} in the {budgetLabels[answers.budget]} range. Try one of these:</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {alt.budgets.map((b) => (
              <button key={b.budget} className="btn btn-night min-h-10 py-1.5 text-sm" onClick={() => onJump({ budget: b.budget })}>
                {budgetLabels[b.budget]} ({b.count})
              </button>
            ))}
            {alt.categories.map((c) => (
              <button key={c.category} className="btn btn-outline min-h-10 py-1.5 text-sm" onClick={() => onJump({ category: c.category })}>
                {categoryLabels[c.category]} ({c.count})
              </button>
            ))}
            {alt.budgets.length + alt.categories.length === 0 && <Link to="/gear" className="btn btn-night">Browse all gear</Link>}
          </div>
        </div>
      )}
      <div className="mt-6"><Disclosure compact /></div>
    </section>
  );
}
