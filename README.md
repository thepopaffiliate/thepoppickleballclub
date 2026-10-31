# Thepoppickleballclub

Build a polished, mobile-first website for “The Pop.”, a Filipino pickleball and budget-sports discovery brand. This is the brand’s home base for community content and helpful gear discovery, connected to its Facebook Page, Instagram account, Shopee Video, and TikTok later. The website is an editorial/community hub and affiliate discovery site, NOT an online store. Purchases happen on Shopee through the brand’s affiliate links.

BRAND IDENTITY — follow closely
- Brand name: The Pop. Keep the period in the name. Tagline: “play more. spend less.”
- Mission: Help Filipinos play more without spending more. Curate budget-friendly pickleball gear, share honest finds, explain trends, and build a welcoming community around playing.
- Positioning: For Filipinos who love pickleball but don’t want it to drain their wallet.
- Voice: Taglish-first, honest, practical, friendly, quick energy; simple rather than technical; no fake hype and no exaggerated product claims.
- Visual palette: Rally Pink #F2547D (hooks and CTAs), Court Green #5DBE75 (value and positive moments), Night Court #1A1A2E (dark backgrounds/text), Blush #FFF0F5, Court Fog #8898A8, Clean White #FFFFFF, Ice Court #F0F4F8.
- Fonts: Bebas Neue for display headlines, Montserrat Bold/SemiBold for overlays and strong UI text, DM Sans for body copy. Use sensible fallbacks if external font loading fails.
- Style: energetic editorial sports-culture feel, clean and modern, not a generic corporate SaaS template. Strong typography, generous whitespace, rounded but not childish cards, restrained use of pink/green, high contrast and accessible text. Mobile-first, fast, responsive.
- Avoid implying that The Pop. is officially affiliated with Shopee or any sports brand.

SITE PURPOSE AND CONTENT STRATEGY
The site should support four content pillars:
1. Budget Finds — affordable paddles, starter sets, balls, bags, grips, apparel and accessories.
2. Player Lifestyle — pickleball culture, beginner routines, court etiquette, community moments, lifestyle and gear inspiration.
3. Product Truth — honest comparisons, product explainers, value-for-money guides, pros/cons and limitations. Never claim we personally tested something unless an editor explicitly says so.
4. Court Community — Filipino pickleball news, events, trends, beginner questions, community stories and discussion prompts.

Social content (Reels, carousels, short videos) is published mainly on social platforms; the website should repurpose selected posts into a browsable content library with summaries, platform links and related articles/products. Include a place to feature social posts and link out to the official social accounts, but do not require APIs or automatic social syncing. Use clearly labelled sample/demo content until real links are entered. Include Facebook, Instagram, Shopee Video and TikTok social links as editable settings/placeholders; never invent profile URLs.

REQUIRED ROUTES / PAGES
1. Home (/)
2. Gear Finder (/gear-finder)
3. Gear directory (/gear)
4. Gear detail (/gear/:slug)
5. Stories & Guides (/stories)
6. Story/article detail (/stories/:slug)
7. News & Trends (/news)
8. News article detail (/news/:slug)
9. Community (/community)
10. About The Pop. (/about)
11. Affiliate Disclosure (/affiliate-disclosure)
12. Privacy Policy (/privacy)
Use a consistent header, mobile navigation, footer, breadcrumbs on detail pages, useful empty states and 404 page. Make all routes actually work.

HOME PAGE
- Hero headline option: “Good gear. Less gastos.” supporting line about affordable pickleball finds, useful guides and what’s happening in the Filipino pickleball scene. Primary CTA “Find your gear”; secondary CTA “Explore stories”.
- Budget shortcuts: Under ₱500, ₱500–₱800, ₱800–₱1,500.
- Featured gear finds with price and “View on Shopee” CTA.
- “Sulit Gear Finder” section.
- Latest stories/guides.
- Latest News & Trends section showing source and publication date.
- Social content strip for selected reels/carousels, with platform label and “Watch on Instagram/Facebook/Shopee Video” external links. Use placeholders only where links are not configured.
- Community prompt/poll section with a lightweight interactive question (e.g. “What are you looking for next: paddle, shoes, bag, or balls?”). No account creation required.
- Clear affiliate disclosure in footer and near affiliate links.

GEAR FINDER
Create a working multi-step quiz with questions:
- Budget: under ₱500 / ₱500–₱800 / ₱800–₱1,500 / ₱1,500+
- Experience: beginner / casual player / regular player
- Looking for: paddle / starter set / balls and accessories / bags and apparel
- Priority: value for money / comfort and control / durability / starter-friendly
Filter only against the actual gear dataset. Do not invent products, prices, ratings, discounts or specs. Results should explain briefly why each product matched based on entered data, show the date the price was last checked, and include a clear affiliate link. Include reset/back controls, progress indicator, loading/empty states, and a helpful no-match state with alternate budget/category suggestions.

GEAR DIRECTORY AND DETAIL
- Search, category filter, budget filter and sort by price low-to-high / high-to-low / recently checked.
- Product cards should show image, name, category, current listed price, last checked date, short evidence-based description and CTA.
- Detail page includes listed specifications, best-for tags, pros/cons only when editor-entered, source/listing link, last checked date, related guides, and affiliate disclosure.
- Never show fake star ratings, fake reviews, “best seller” labels or hands-on testing claims. If price is stale, visibly say “Price may have changed—check Shopee.” Never claim a price is current without a checked date.
- External Shopee links open safely in a new tab. Preserve affiliate URLs exactly as entered; do not modify tracking parameters.

STORIES & GUIDES
- Editorial cards with category, title, short summary, cover image, author/editor name only if configured, and published/updated date.
- Categories can include Beginner Tips, Gear Guides, Product Comparisons, Court Lifestyle and Filipino Pickleball.
- Article pages support headings, lists, images with alt text, related articles and related gear.
- Include sample evergreen articles such as “What to look for in your first pickleball paddle” and “Pickleball starter checklist on a budget”, clearly marked as demo content until reviewed and published.

NEWS & TRENDS
- Dedicated chronological editorial feed for pickleball news, local events, rules/format changes, gear trends and community updates.
- Each item must include title, short summary, source/publisher, original source URL, date published by source, date checked/updated, and an editorial note explaining why it matters to Filipino players.
- Do not generate fake breaking news, invented event dates, fabricated quotes, or unsupported trend statistics. Seed with clearly marked demo placeholders only, or leave an empty state until real sourced stories are added.
- Link readers to the original source and display attribution prominently. Separate factual reporting from The Pop.’s opinion.
- Add a “Suggest a story or event” form with topic, source URL, and optional message. For the MVP, submissions may show a success confirmation and be stored only if a backend is configured; otherwise clearly explain that the form is a demo and do not pretend a message was sent.

COMMUNITY
- Create a lightweight community landing page with discussion prompts, polls and story/event suggestion form. No public forum, accounts, DMs, comments, user profiles or moderation system in the MVP.
- Make it easy for people to continue the conversation on the social platforms via editable links.
- Never show fake member counts or claim there is an active community if that has not been configured.

CONTENT MANAGEMENT / DATA
Build clean reusable data models/types and centralize content so it can be maintained easily. Use local seed data first; do not require a paid plan or backend for the initial visual MVP. Keep product, story, news and social-post data separate and easy to edit. Include fields:
Gear: id, slug, name, category, pricePHP, priceCheckedAt, description, experienceLevel, budgetTier, useCases, listedSpecs, pros, cons, imageUrl, sourceUrl, shopeeAffiliateUrl, featured, status, createdAt, updatedAt.
Story: id, slug, title, summary, category, content, coverImageUrl, publishedAt, updatedAt, status, relatedGearIds.
News: id, slug, title, summary, sourceName, sourceUrl, sourcePublishedAt, checkedAt, editorialNote, category, coverImageUrl, status.
SocialPost: id, platform, title, format (reel/carousel/video), caption, thumbnailUrl, postUrl, publishedAt, pillar, relatedGearIds, status.
Site settings: tagline, social URLs, contact method, disclosure text.
Use an architecture that can later connect to a simple protected content admin and Supabase, but do not set up paid services or authentication now. Do not expose secret keys. Do not add a fake admin screen that implies edits persist. If no backend exists, content can be edited in seed data and explain this limitation in the project notes.

ANALYTICS AND CONVERSION
Add lightweight, privacy-conscious event tracking hooks that can be connected to analytics later:
- page_view
- gear_finder_start
- gear_finder_complete
- product_card_click
- shopee_outbound_click
- story_open
- news_open
- social_outbound_click
Capture page/placement/product identifiers where practical. Do not collect sensitive personal data. If analytics is not configured, events should safely no-op and the privacy page must not claim that analytics is active. Track clicks separately from Shopee-confirmed purchases; do not represent site clicks as sales.

AFFILIATE / TRUST / LEGAL
Use this disclosure near affiliate links and on the disclosure page:
“Some links on The Pop. are affiliate links. If you purchase through them, we may earn a commission at no additional cost to you. We aim to share budget-friendly finds honestly. Prices, product details and availability may change on Shopee.”
Include a note that The Pop. is an independent discovery and editorial site and is not officially affiliated with or endorsed by Shopee. Make social and website affiliate media approval a checklist item; do not state that the website has been approved. Include a privacy page that describes only data collection actually implemented. Do not add a newsletter collection or tracking cookies unless configured and disclosed. Avoid copyrighted third-party photos or creator videos unless rights/permission are confirmed; use original, licensed, or clearly marked placeholder imagery.

QUALITY REQUIREMENTS
- Build a cohesive, polished, functional site, not just a static landing-page mockup.
- Ensure all links, filters, quiz controls, navigation, forms, and mobile menu work.
- Use accessible semantic HTML, keyboard-friendly controls, visible focus states, useful alt text and good color contrast.
- Optimize for mobile speed, image sizing and SEO metadata. Add page titles, descriptions, Open Graph metadata, canonical placeholders and sitemap/robots configuration where supported.
- Use PHP currency formatting and Asia/Manila-friendly date display.
- Avoid unnecessary animations, expensive APIs, paid integrations, checkout/cart, user accounts, live social APIs, and automatic scraping.
- Before finishing, test the major user flows and fix broken routes or console/runtime errors.
- Build in stages: first the shared design system and page layouts, then the local content/data and Gear Finder logic, then story/news/community pages, then accessibility/SEO/functional testing. Prioritize a coherent working MVP and tell me which parts still need real content, real affiliate links, social URLs, and any backend/analytics setup.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://thepoppickleballclub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/630e1cbf-3d5e-4592-a7cb-6f4ad9f68257).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
