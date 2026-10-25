import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/layout";
import { siteSettings } from "@/content/settings";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => pageMeta({ title: "Affiliate Disclosure", description: "How affiliate links work on The Pop.", path: "/affiliate-disclosure" }),
  component: () => (
    <>
      <PageIntro eyebrow="Trust" title="Affiliate Disclosure" />
      <div className="container-page prose-pop mt-8 max-w-2xl text-lg">
        <p>{siteSettings.disclosureText}</p>
        <p>{siteSettings.independenceNote}</p>
        <h2>What this means</h2>
        <ul>
          <li>Clicking "View on Shopee" opens Shopee in a new tab. Purchases happen on Shopee, not here.</li>
          <li>Prices show the date we last checked them. Always confirm the current price on Shopee.</li>
          <li>A click on our site is not a sale; commissions are only confirmed by Shopee.</li>
          <li>We never show fake ratings, reviews or "best seller" labels.</li>
        </ul>
      </div>
    </>
  ),
});
