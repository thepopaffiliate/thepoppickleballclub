import type { SocialPost } from "./types";
import flatlay from "@/assets/gear-flatlay.jpg";
import community from "@/assets/community-court.jpg";
import hero from "@/assets/hero-court.jpg";

// DEMO social posts. Add the real post URL to postUrl when published.
export const socialPosts: SocialPost[] = [
  {
    id: "p1",
    platform: "instagram",
    title: "3 sulit finds under ₱500",
    format: "reel",
    caption: "Demo reel slot — budget finds roundup.",
    thumbnailUrl: flatlay,
    thumbnailAlt: "Placeholder thumbnail: pickleball gear flat-lay",
    postUrl: "",
    publishedAt: "2026-10-18",
    pillar: "Budget Finds",
    relatedGearIds: ["g2", "g4"],
    status: "demo",
  },
  {
    id: "p2",
    platform: "facebook",
    title: "Open play etiquette, explained",
    format: "carousel",
    caption: "Demo carousel slot — court etiquette tips.",
    thumbnailUrl: community,
    thumbnailAlt: "Placeholder thumbnail: players at a community court",
    postUrl: "",
    publishedAt: "2026-10-12",
    pillar: "Court Community",
    relatedGearIds: [],
    status: "demo",
  },
  {
    id: "p3",
    platform: "shopee-video",
    title: "Starter set: what's in the box (per listing)",
    format: "video",
    caption: "Demo video slot — listing walkthrough.",
    thumbnailUrl: hero,
    thumbnailAlt: "Placeholder thumbnail: paddle and ball on court",
    postUrl: "",
    publishedAt: "2026-10-08",
    pillar: "Product Truth",
    relatedGearIds: ["g1"],
    status: "demo",
  },
];

export const visibleSocial = socialPosts.filter((p) => p.status !== "draft");
