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
      <section className="relative overflow-hidden bg-blush" aria-label="Pop Pickleball Club">
        {heroSrc && (
          <img
            src={heroSrc}
            alt="Pop Pickleball Club logo with crossed pink paddles and a green pickleball"
            width={851}
            height={315}
            fetchPriority="high"
            className="block h-auto w-full object-contain object-center"
          />
        )}
      </section>

      <section className="container-page py-10 text-center md:py-14" aria-labelledby="community-h">
        <p className="eyebrow text-primary-strong">Court Community</p>
        <h1 id="community-h" className="font-display mt-2 text-5xl md:text-7xl">
          Community
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          Prompts and polls para sa mga mahilig maglaro. Continue the kwentuhan on our socials.
        </p>
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
