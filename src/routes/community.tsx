import { createFileRoute } from "@tanstack/react-router";
import communityAsset from "@/assets/pop-pickleball-club.jpg.asset.json";
import { PageIntro } from "@/components/site/layout";
import { Poll, SocialLinks, SuggestForm } from "@/components/site/interactive";
import { pageMeta } from "@/lib/seo";

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
  return (
    <>
      <PageIntro eyebrow="Court Community" title="Community">Prompts and polls para sa mga mahilig maglaro. Continue the kwentuhan on our socials.</PageIntro>
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
      <section className="container-page mt-12 grid gap-8 md:grid-cols-2 md:items-start">
        <img src={communityAsset.url} alt="Pop Pickleball Club logo with crossed pink paddles and a green pickleball" width={851} height={315} loading="lazy" className="rounded-3xl" />
        <SuggestForm />
      </section>
    </>
  );
}
