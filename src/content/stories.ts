import type { Story } from "./types";
import flatlay from "@/assets/gear-flatlay.jpg";
import community from "@/assets/community-court.jpg";
import hero from "@/assets/hero-court.jpg";

// DEMO stories: general evergreen guidance, pending editor review.
export const stories: Story[] = [
  {
    id: "s1",
    slug: "first-pickleball-paddle",
    title: "What to look for in your first pickleball paddle",
    summary: "Weight, grip, face material — ang simpleng checklist bago ka bumili ng unang paddle.",
    category: "Gear Guides",
    coverImageUrl: flatlay,
    coverImageAlt: "Two unbranded pickleball paddles on a pink background",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-20",
    status: "demo",
    relatedGearIds: ["g2", "g1", "g3"],
    content: [
      { type: "p", text: "Hindi mo kailangan ng pinakamahal na paddle para mag-enjoy. Ang kailangan mo: paddle na komportable sa kamay mo at pasok sa budget." },
      { type: "h2", text: "1. Check the listed weight" },
      { type: "p", text: "Listings usually show weight in grams. Lighter paddles tend to feel easier to swing; heavier ones can feel more solid. If the listing doesn't say, ask the seller before buying." },
      { type: "h2", text: "2. Grip size and comfort" },
      { type: "p", text: "A grip that's too thick or too thin can be tiring. Overgrips are an affordable way to adjust." },
      { type: "h2", text: "3. Face material, in simple terms" },
      { type: "ul", items: ["Fiberglass — common in budget paddles.", "Carbon fiber — often found at higher price points.", "Composite — a mix; check what the listing actually says."] },
      { type: "h2", text: "4. Read the listing carefully" },
      { type: "ol", items: ["Compare the photos with the description.", "Check seller ratings and recent buyer photos on Shopee.", "Note the return policy before checking out."] },
      { type: "p", text: "Tip: If you're still testing if you like the sport, a starter set can be more sulit than a single paddle." },
    ],
  },
  {
    id: "s2",
    slug: "starter-checklist-on-a-budget",
    title: "Pickleball starter checklist on a budget",
    summary: "Paddle, balls, shoes, tubig. Ito lang talaga ang kailangan mo para makapag-laro ngayong weekend.",
    category: "Beginner Tips",
    coverImageUrl: hero,
    coverImageAlt: "A paddle and a yellow ball resting on a green court by the net at sunset",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-05",
    status: "demo",
    relatedGearIds: ["g1", "g4", "g5"],
    content: [
      { type: "p", text: "Ready to try pickleball? Here's a no-gastos-overload checklist." },
      { type: "h2", text: "Must-haves" },
      { type: "ul", items: ["A paddle (or borrow one first)", "Balls — many open-play groups share", "Court or rubber shoes with good grip", "Water and a small towel"] },
      { type: "h2", text: "Nice-to-haves later" },
      { type: "ul", items: ["Overgrip", "Paddle bag", "Quick-dry shirt"] },
      { type: "img", src: community, alt: "Players chatting beside a covered community court in the evening", caption: "Open play is a great way to try before you buy. (Placeholder image)" },
      { type: "p", text: "Start simple. Upgrade only when you know what you actually need." },
    ],
  },
  {
    id: "s3",
    slug: "court-etiquette-for-first-timers",
    title: "Court etiquette para sa first-timers",
    summary: "Paano sumali sa open play nang hindi nahihiya — paddle stacking, calling the score, and saying thanks.",
    category: "Court Lifestyle",
    coverImageUrl: community,
    coverImageAlt: "Casual players waiting their turn beside a covered court",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    status: "demo",
    relatedGearIds: ["g4"],
    content: [
      { type: "p", text: "Every court has its own house rules, pero ito ang mga common na makikita mo." },
      { type: "h2", text: "Joining open play" },
      { type: "ul", items: ["Ask who's organizing and how the queue works.", "Wait for a game to finish before walking behind a court.", "Return stray balls between points, not mid-rally."] },
      { type: "h2", text: "During the game" },
      { type: "ul", items: ["The server calls the score before serving.", "Make line calls on your side honestly.", "Tap paddles after the game — salamat sa laro!"] },
    ],
  },
];

export const visibleStories = stories
  .filter((s) => s.status !== "draft")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getStoryBySlug = (slug: string) => visibleStories.find((s) => s.slug === slug);
export const storiesForGear = (gearId: string) => visibleStories.filter((s) => s.relatedGearIds.includes(gearId));
