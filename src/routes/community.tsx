import { createFileRoute } from "@tanstack/react-router";
import communityAsset from "@/assets/pop-pickleball-club.jpg.asset.json";
import { Poll, SocialLinks, SuggestForm } from "@/components/site/interactive";
import { pageMeta } from "@/lib/seo";
import { safeImageSrc } from "@/lib/url-safety";

export const Route = createFileRoute("/community")({
  head: () => pageMeta({ title: "Court Community", description: "Discussion prompts, quick polls and a place to suggest stories and events for Filipino pickleball players.", path: "/community" }),
  component: Community,
});

const prompts = [
  "Saan ang paborito mong court for open play?",
  "Ano ang first paddle mo, at worth it ba?",
  "Best tip na natutunan mo as a beginner?",
];

function Community() {
  const heroSrc = safeImageSrc(communityAsset.url);

  return (
    <>
      <section className="relative overflow-hidden bg-blush" aria-labelledby="community-h">
        {heroSrc && (
          <img
            src={heroSrc}
            alt="Pop Pickleball Club logo with crossed pink paddles and a green pickleball"
            width={851}
            height={315}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
        )}

        <div className="container-page relative z-10 py-12 text-center md:py-20">
          <p className="eyebrow inline-block rounded-full bg-blush/90 px-3 py-1 text-primary-strong">Court Community</p>
          <h1
            id="community-h"
            className="font-display mt-3 text-5xl md:text-7xl [text-shadow:0_0_22px_rgba(255,240,245,.95),0_0_6px_rgba(255,240,245,.9)]"
          >
            Community
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-muted-foreground">
            <span className="rounded bg-blush/90 px-2 py-0.5 [box-decoration-break:clone]">
              Prompts and polls para sa mga mahilig maglaro. Continue the kwentuhan on our socials.
            </span>
          </p>
        </div>
      </section>

      <div className="container-page mt-8 grid gap-8 md:grid-cols-2">
        <Poll question="What are you looking for next?" options={["Paddle", "Shoes", "Bag", "Balls"]} />
        <Poll question="Gaano ka kadalas maglaro?" options={["Weekly", "Monthly", "Kapag may aya", "Starting pa lang"]} />
      </div>

      <section className="container-page mt-12">
        <h2 className="font-display text-4xl">Discussion prompts</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {prompts.map((p) => <li key={p} className="rounded-2xl bg-ice p-5 font-ui font-semibold">{p}</li>)}
        </ul>
        <div className="mt-6"><SocialLinks /></div>
      </section>

      <section className="container-page mt-12">
        <div className="mx-auto w-full max-w-xl">
          <SuggestForm />
        </div>
      </section>
    </>
  );
}
