import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/layout";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => pageMeta({ title: "Privacy Policy", description: "What data The Pop. website collects (very little).", path: "/privacy" }),
  component: () => (
    <>
      <PageIntro eyebrow="Trust" title="Privacy Policy" />
      <div className="container-page prose-pop mt-8 max-w-2xl text-lg">
        <p>Last updated: October 25, 2026.</p>
        <h2>What we collect</h2>
        <ul>
          <li>No accounts, newsletter sign-ups or tracking cookies.</li>
          <li>No analytics service is currently active on this site.</li>
          <li>Poll answers and Gear Finder answers stay in your browser and are not sent to us.</li>
          <li>The suggestion form is a demo and does not send or store anything yet.</li>
        </ul>
        <h2>Third parties</h2>
        <p>Fonts load from Google Fonts. Links to Shopee and social platforms take you to their sites, which have their own privacy policies.</p>
        <p>If this changes (for example, analytics is added), we'll update this page first.</p>
      </div>
    </>
  ),
});
