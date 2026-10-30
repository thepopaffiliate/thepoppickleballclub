import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/layout";
import { SocialLinks } from "@/components/site/interactive";
import { siteSettings } from "@/content/settings";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => pageMeta({ title: "About", description: "The Pop. helps Filipinos play more pickleball without spending more.", path: "/about" }),
  component: () => (
    <>
      <PageIntro eyebrow="About" title="About The Pop.">{siteSettings.tagline}</PageIntro>
      <div className="container-page prose-pop mt-8 max-w-2xl text-lg">
        <p>Help Filipinos play more without spending more. We curate budget-friendly pickleball gear, share honest finds, explain trends, and build a welcoming community around playing.</p>
        <h2>What we cover</h2>
        <ul>
          <li><strong>Budget Finds</strong> — paddles, balls, shoes, bags, accessories and starter sets.</li>
          <li><strong>Player Lifestyle</strong> — routines, etiquette and court culture.</li>
          <li><strong>Product Truth</strong> — honest explainers with pros, cons and limits.</li>
          <li><strong>Court Community</strong> — local news, events and questions.</li>
        </ul>
        <h2>How we work</h2>
        <p>We base notes on listing details unless an editor clearly says they tried a product. No fake ratings, no hype.</p>
        <p>{siteSettings.independenceNote}</p>
        <h2>Find us</h2>
      </div>
      <div className="container-page max-w-2xl"><SocialLinks /></div>
    </>
  ),
});
