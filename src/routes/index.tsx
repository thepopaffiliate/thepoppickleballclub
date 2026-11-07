import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroPhoto from "@/assets/pickleball-court-hero.png.asset.json";
import { visibleGear } from "@/content/gear";
import { gearFinderConfig, finderCategories } from "@/content/gear-config";
import { visibleStories } from "@/content/stories";
import { visibleNews } from "@/content/news";
import { visibleSocial } from "@/content/social";
import { siteSettings } from "@/content/settings";
import { Disclosure, GearCard, NewsCard, SocialCard, StoryCard, EmptyState } from "@/components/site/cards";
import { Poll } from "@/components/site/interactive";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Good gear. Less gastos.",
      description: "Affordable pickleball finds, useful guides, and what's happening in the Filipino pickleball scene. play more. spend less.",
      path: "/",
    }),
  component: Home,
});


function SectionHead({ eyebrow, title, to, cta }: { eyebrow: string; title: string; to: "/gear" | "/stories" | "/news"; cta: string }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow text-primary-strong">{eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
      </div>
      <Link to={to} className="font-ui shrink-0 text-sm font-bold underline-offset-4 hover:underline">
        {cta} <ArrowRight className="inline size-4" aria-hidden />
      </Link>
    </div>
  );
}

function HeroParallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const paddlesRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const paddles = paddlesRef.current;
    const content = contentRef.current;
    if (!section || !background || !paddles || !content) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (window.innerHeight / 2 - (rect.top + rect.height / 2)) / (rect.height / 2)));
      background.style.transform = `translate3d(0, ${progress * 12}px, 0) scale(1.04)`;
      paddles.style.transform = `translate3d(0, ${progress * -34}px, 0)`;
      content.style.transform = `translate3d(0, ${progress * -8}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[680px] overflow-hidden bg-night text-night-foreground md:min-h-[760px]" aria-labelledby="hero-heading">
      <img
        ref={backgroundRef}
        src={heroPhoto.url}
        alt=""
        width={1672}
        height={941}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[50%_62%] will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/65 via-night/20 to-night/45" aria-hidden />

      <div ref={contentRef} className="container-page relative z-20 flex min-h-[680px] flex-col items-center justify-center py-20 text-center md:min-h-[760px] will-change-transform">
        <div className="max-w-5xl rounded-[2rem] bg-night/25 px-5 py-8 backdrop-blur-[2px] sm:px-8 md:px-12 md:py-10">
          <p
            className="text-sm font-bold uppercase tracking-[0.22em] text-primary md:text-base"
            style={{ fontFamily: '"TAN Harmoni", "Recoleta", Georgia, serif', textShadow: "0 2px 12px rgba(0,0,0,.55)" }}
          >
            {siteSettings.tagline}
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-6xl leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ fontFamily: '"Recoleta", "TAN Harmoni", Georgia, serif', textShadow: "0 4px 20px rgba(0,0,0,.7)" }}
          >
            Good gear.<br />Less <span className="text-primary">gastos.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-white md:text-xl" style={{ textShadow: "0 2px 10px rgba(0,0,0,.75)" }}>
            Affordable pickleball finds, useful guides, at kung ano ang nangyayari sa Filipino pickleball scene.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/gear-finder" className="btn btn-primary">Find your gear <ArrowRight className="size-4" aria-hidden /></Link>
            <Link to="/stories" className="btn btn-outline text-night-foreground">Explore Latest Reads</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const featured = visibleGear.filter((g) => g.featured).slice(0, 4);
  return (
    <>
      <HeroParallax />

      <section className="container-page mt-0 relative md:-mt-6" aria-labelledby="budget-h">
        <div className="rounded-2xl bg-card p-5 shadow-card md:p-6">
          <h2 id="budget-h" className="font-ui font-bold">Browse by category</h2>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {finderCategories.map((category) => (
              <Link key={category} to="/gear" search={{ category }} className="btn rounded-xl bg-ice px-2 text-center hover:bg-accent">
                {gearFinderConfig[category].label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page mt-16">
        <SectionHead eyebrow="Budget Finds" title="Featured sulit finds" to="/gear" cta="All gear" />
        {featured.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((g) => <GearCard key={g.id} g={g} placement="home_featured" />)}
          </div>
        ) : (
          <EmptyState title="No featured finds yet" />
        )}
        <div className="mt-5"><Disclosure compact /></div>
      </section>

      <section className="container-page mt-20">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-night-gradient p-8 text-night-foreground md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow text-value"><Sparkles className="inline size-4" aria-hidden /> Sulit Gear Finder</p>
            <h2 className="font-display mt-2 text-5xl md:text-6xl">4 questions. Gear that fits your budget.</h2>
            <p className="mt-3 opacity-85">What you need, your budget, experience, and priority. Approved products only — walang hula.</p>
            <Link to="/gear-finder" className="btn btn-primary mt-6">Start the finder</Link>
          </div>
          <ol className="grid grid-cols-2 gap-3 font-ui text-sm font-semibold">
            {["Looking for", "Budget", "Experience", "Priority"].map((s, i) => (
              <li key={s} className="rounded-2xl bg-night-foreground/10 p-4">
                <span className="font-display block text-4xl text-primary">0{i + 1}</span>{s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHead eyebrow="Buying Guides & Comparisons" title="Latest Reads" to="/stories" cta="All reads" />
        {visibleStories.length ? (
          <div className="grid gap-5 md:grid-cols-3">
            {visibleStories.slice(0, 3).map((s) => <StoryCard key={s.id} s={s} />)}
          </div>
        ) : (
          <EmptyState title="First reads are on the way" />
        )}
      </section>

      <section className="container-page mt-20">
        <SectionHead eyebrow="News, Events & Community" title="What's Happening" to="/news" cta="All updates" />
        {visibleNews.length ? (
          <div className="grid gap-5 md:grid-cols-2">
            {visibleNews.slice(0, 2).map((n) => <NewsCard key={n.id} n={n} />)}
          </div>
        ) : (
          <EmptyState title="No sourced stories yet" />
        )}
      </section>

      <section className="mt-20 bg-blush py-14" aria-labelledby="social-h">
        <div className="container-page">
          <p className="eyebrow text-primary-strong">From our socials</p>
          <h2 id="social-h" className="font-display text-4xl md:text-5xl">Reels, carousels & videos</h2>
          <div className="-mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:px-0">
            {visibleSocial.map((p) => <SocialCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="container-page mt-20 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-value-strong">Court Community</p>
          <h2 className="font-display text-5xl">Ano ang next mo?</h2>
          <p className="mt-2 text-muted-foreground">Quick poll lang. Help us decide which budget guide to write next.</p>
          <Link to="/community" className="btn btn-night mt-5">More community prompts</Link>
        </div>
        <Poll question="What are you looking for next?" options={["Paddle", "Shoes", "Bag", "Balls"]} />
      </section>
    </>
  );
}
