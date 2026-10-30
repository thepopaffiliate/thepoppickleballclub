import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, RotateCcw, Loader2 } from "lucide-react";
import { visibleGear, experienceLabels, useCaseLabels } from "@/content/gear";
import { gearFinderConfig, finderCategories, getBudgetOption } from "@/content/gear-config";
import { applyFinderChoice, getPriorityOptions, matchGear, suggestAlternatives, type FinderAnswers } from "@/lib/gear-finder";
import { PageIntro } from "@/components/site/layout";
import { DemoBadge, Disclosure, PriceInfo, ProductButton } from "@/components/site/cards";
import { Button } from "@/components/ui/button";
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
function getSteps(answers: Partial<FinderAnswers>): { key: Key; q: string; options: Record<string, string> }[] {
  const category = answers.category;
  return [
    { key: "category", q: "What are you looking for?", options: Object.fromEntries(finderCategories.map((c) => [c, gearFinderConfig[c].label])) },
    { key: "budget", q: "Magkano ang budget mo?", options: category ? Object.fromEntries(gearFinderConfig[category].budgets.map((b) => [b.id, b.label])) : {} },
    { key: "experience", q: "Gaano ka na katagal naglalaro?", options: experienceLabels },
    { key: "priority", q: "Ano ang pinaka-importante sa'yo?", options: getPriorityOptions(visibleGear, category) },
  ];
}

function GearFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<FinderAnswers>>({});
  const [loading, setLoading] = useState(false);
  const steps = getSteps(answers);
  const done = step >= steps.length;
  const current = steps[step];

  useEffect(() => {
    if (!done) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [done]);

  const choose = (key: Key, value: string) => {
    if (step === 0 && !answers.category) track("gear_finder_start");
    const next = applyFinderChoice(answers, key, value);
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
        4 questions. Approved products only, matched to what you need.
      </PageIntro>
      <div className="container-page mt-8 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted" role="progressbar" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={Math.min(step, steps.length)} aria-label="Quiz progress">
            <div className="h-full bg-primary transition-all" style={{ width: `${(Math.min(step, steps.length) / steps.length) * 100}%` }} />
          </div>
          <span className="font-ui text-sm font-bold">{done ? "Done" : `Step ${step + 1} of ${steps.length}`}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button variant="site" size="site" className="btn-outline rounded-full min-h-10 py-1.5 text-sm" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            <ArrowLeft className="size-4" aria-hidden /> Back
          </Button>
          <Button variant="site" size="site" className="btn-outline rounded-full min-h-10 py-1.5 text-sm" onClick={reset} disabled={step === 0}>
            <RotateCcw className="size-4" aria-hidden /> Start over
          </Button>
        </div>
        {answers.category && step > 0 && <p className="mt-4 font-ui text-sm font-semibold">{gearFinderConfig[answers.category].label}{answers.budget ? ` · ${getBudgetOption(answers.category, answers.budget)?.label ?? ""}` : ""}</p>}

        {!done && current ? (
          <fieldset className="mt-8" key={step}>
            <legend className="font-display text-4xl md:text-5xl">{current.q}</legend>
            {current.key === "budget" && answers.category && gearFinderConfig[answers.category].provisional && <p className="mt-3 text-sm text-muted-foreground">Provisional ranges — final budgets for {gearFinderConfig[answers.category].label.toLowerCase()} are awaiting review.</p>}
            {current.key === "priority" && current.options["not-configured"] && <p className="mt-3 text-sm text-muted-foreground">Preferences for {answers.category ? gearFinderConfig[answers.category].label.toLowerCase() : "this category"} are not yet configured.</p>}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.entries(current.options).map(([v, label]) => (
                <Button variant="site" size="site"
                  key={v}
                  type="button"
                  onClick={() => choose(current.key, v)}
                  aria-pressed={answers[current.key] === v}
                  className={`min-h-16 justify-start rounded-2xl border-2 px-5 text-left text-base ${answers[current.key] === v ? "border-primary bg-accent" : "border-border hover:border-primary"}`}
                >
                  {label}
                </Button>
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
        {matches.length ? `${matches.length} match${matches.length > 1 ? "es" : ""} for you` : "No approved matches yet"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {gearFinderConfig[answers.category].label} · {getBudgetOption(answers.category, answers.budget)?.label} · {experienceLabels[answers.experience]} · {answers.priority === "not-configured" ? "No preference" : useCaseLabels[answers.priority]}
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
                   <ProductButton g={g} placement="gear_finder_result" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-2xl border-2 border-dashed p-6">
          <p>No approved {gearFinderConfig[answers.category].label.toLowerCase()} with verified price estimates match this budget yet. We won't substitute other products.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {alt.budgets.map((b) => (
              <Button variant="site" size="site" key={b.budget} className="btn-night rounded-full min-h-10 py-1.5 text-sm" onClick={() => onJump({ budget: b.budget })}>
                {getBudgetOption(answers.category, b.budget)?.label} ({b.count})
              </Button>
            ))}
            {alt.budgets.length === 0 && <Link to="/gear" search={{ category: answers.category }} className="btn btn-night">Browse {gearFinderConfig[answers.category].label.toLowerCase()}</Link>}
          </div>
        </div>
      )}
      <div className="mt-6"><Disclosure compact /></div>
    </section>
  );
}
