import type { SiteSettings, SocialPlatform } from "./types";

// Edit here. Leave a URL as "" until the real profile link is confirmed —
// the site shows a "coming soon" state instead of inventing a link.
export const siteSettings: SiteSettings = {
  name: "The Pop.",
  tagline: "play more. spend less.",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61595394297764",
    instagram: "https://www.instagram.com/the_poppickleball/",
    "shopee-video": "",
    tiktok: "https://www.tiktok.com/@thepoppickleballclub",
  },
  contactMethod: "",
  disclosureText:
    "Some links on The Pop. are affiliate links. If you purchase through them, we may earn a commission at no additional cost to you. We aim to share budget-friendly finds honestly. Prices, product details and availability may change at the linked destination.",
  independenceNote:
    "The Pop. is an independent discovery and editorial site and is not officially affiliated with or endorsed by any marketplace or sports brand.",
  priceStaleAfterDays: 14,
};

export const platformLabels: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  "shopee-video": "Shopee Video",
  tiktok: "TikTok",
};
