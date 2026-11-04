import type { Story, StoryCategory } from "./types";
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
      { type: "ol", items: ["Compare the photos with the description.", "Check seller ratings and recent buyer photos at the linked destination.", "Note the return policy before checking out."] },
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
  {
    id: "s4",
    slug: "indoor-vs-outdoor-pickleballs",
    title: "Indoor vs. Outdoor Pickleballs: What's Actually Different?",
    summary: "Not all pickleballs play the same. Learn how indoor and outdoor balls differ in design, bounce, and durability, plus what to consider before buying one. We'll also look at budget-friendly options for Filipino players.",
    seoTitle: "Indoor vs. Outdoor Pickleballs: What's the Difference?",
    metaDescription: "Indoor vs. outdoor pickleballs explained. Learn about hole patterns, bounce, durability, and how to choose the right ball without overspending.",
    category: "Gear Guides",
    author: "The Pop.",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    status: "published",
    coverImageUrl: "",
    coverImageAlt: "",
    relatedGearIds: [],
    content: [
      { type: "p", text: "You've probably seen pickleballs with 26 holes, others with 40, and some that look almost identical except for the brand printed on them." },
      { type: "p", text: "Then comes the familiar question: Do you really need separate indoor and outdoor pickleballs?" },
      { type: "p", text: "The short answer is that they are designed with different playing conditions in mind, and those differences can affect how the ball moves, bounces, and holds up over time." },
      { type: "p", text: "But here's something worth knowing before spending your money: you don't necessarily need the most expensive ball to enjoy a good game." },
      { type: "p", text: "Let's break down what actually makes indoor and outdoor pickleballs different, what to look for when buying one, and where budget-friendly options fit in." },

      { type: "h2", text: "1. Indoor vs. Outdoor Pickleballs: What's the Difference?" },
      { type: "p", text: "The easiest way to tell many indoor and outdoor pickleballs apart is by looking at their holes." },
      { type: "p", text: "Indoor-style pickleballs typically have 26 larger holes, while outdoor-style pickleballs commonly have 40 smaller holes." },
      { type: "p", text: "That difference isn't just cosmetic. The hole pattern influences how air moves around the ball, which can affect its flight during play." },

      { type: "h3", text: "Indoor-style pickleballs" },
      { type: "p", text: "Indoor-style balls commonly feature:" },
      { type: "ul", items: [
        "26 larger holes.",
        "A softer feel in many models.",
        "Design characteristics intended for indoor playing conditions.",
        "Playing characteristics that can be more affected by air movement."
      ] },
      { type: "p", text: "Because of their construction, some indoor balls may feel different when struck compared with their outdoor counterparts." },

      { type: "h3", text: "Outdoor-style pickleballs" },
      { type: "p", text: "Outdoor-style balls commonly feature:" },
      { type: "ul", items: [
        "40 smaller holes.",
        "A harder construction in many models.",
        "Design characteristics intended for outdoor playing conditions.",
        "Greater resistance to wind-related changes in flight compared with typical indoor-style designs."
      ] },
      { type: "p", text: "Outdoor balls are commonly used on exposed courts, where wind can affect the direction and consistency of shots." },
      { type: "p", text: "A quick note: These are typical design differences, not universal rules. Ball construction and performance can vary between manufacturers and models." },

      { type: "h2", text: "2. Why Do Pickleballs Have Different Hole Patterns?" },
      { type: "p", text: "Those holes serve an important purpose." },
      { type: "p", text: "A pickleball needs to travel through the air predictably while maintaining the bounce and playing characteristics expected of the sport." },
      { type: "p", text: "The size and arrangement of the holes influence how air passes around the ball." },
      { type: "p", text: "Generally, outdoor-style balls have more, smaller holes, while indoor-style balls have fewer, larger holes." },
      { type: "p", text: "This is one reason outdoor-style balls are commonly preferred in windy conditions." },
      { type: "p", text: "However, don't assume that a 40-hole ball will always fly perfectly straight or that a 26-hole ball cannot be played outdoors." },
      { type: "p", text: "Wind, ball construction, playing conditions, and the individual model all matter." },

      { type: "h2", text: "3. Does the Court Surface Matter More Than Whether You're Playing Indoors or Outdoors?" },
      { type: "p", text: "Here's where things get interesting." },
      { type: "p", text: "A court being covered doesn't automatically mean you should use an indoor pickleball." },
      { type: "p", text: "Think about the actual playing surface." },
      { type: "p", text: "A polished wooden gym floor is different from a rough concrete or acrylic sports court, even if both facilities have roofs." },
      { type: "p", text: "The playing environment can influence how the ball behaves and how quickly it wears." },
      { type: "p", text: "Before buying a ball, consider:" },
      { type: "ul", items: [
        "Is the court smooth or textured?",
        "Is it exposed to wind?",
        "Is the playing area indoors, outdoors, or covered?",
        "What type of ball does the facility normally use?"
      ] },
      { type: "p", text: "If you're unsure, ask the court operator or regular players." },
      { type: "p", text: "It's better to use a ball suited to your actual playing conditions than to choose one based on the venue's label alone." },

      { type: "h2", text: "4. Which Ball Is More Durable?" },
      { type: "p", text: "This is one of the most common questions, especially when you're buying balls regularly." },
      { type: "p", text: "In general, outdoor-style balls are often made with harder construction to withstand outdoor playing conditions. However, they can also develop cracks after repeated impacts." },
      { type: "p", text: "Indoor-style balls are often softer and can experience deformation or changes in bounce with continued use." },
      { type: "p", text: "There is no universal lifespan for either type." },
      { type: "p", text: "How long a ball lasts depends on several factors:" },
      { type: "ul", items: [
        "The quality of its materials.",
        "The manufacturing process.",
        "The playing surface.",
        "How frequently it's used.",
        "How it's stored.",
        "The conditions in which it's played."
      ] },
      { type: "p", text: "A more expensive ball isn't automatically more durable, and a cheaper ball isn't automatically a poor purchase." },
      { type: "p", text: "What matters is how consistently it performs and how long it remains usable." },

      { type: "h2", text: "5. What Should You Look for When Buying Pickleballs?" },
      { type: "p", text: "You don't need to memorize every technical specification, but a few checks can help you avoid buying the wrong ball." },

      { type: "h3", text: "Check the number of holes" },
      { type: "p", text: "For a typical outdoor-style ball, look for 40 holes." },
      { type: "p", text: "For a typical indoor-style ball, look for 26." },
      { type: "p", text: "Remember that hole count alone doesn't establish quality or tournament approval." },

      { type: "h3", text: "Check the construction" },
      { type: "p", text: "Look for information about the material and how the ball is manufactured." },
      { type: "p", text: "Some manufacturers use seamless, one-piece construction." },
      { type: "p", text: "Don't rely solely on phrases such as \"professional quality\" or \"tournament grade\" in a marketplace listing. Look for verifiable specifications." },

      { type: "h3", text: "Check official approval if you plan to compete" },
      { type: "p", text: "If you intend to join tournaments, check whether the exact ball model appears on the USA Pickleball approved ball list, or whether it meets the requirements of the organization hosting your competition." },
      { type: "p", text: "A seller's claim that a ball is \"USAPA approved\" isn't enough by itself." },

      { type: "h3", text: "Consider the price per ball" },
      { type: "p", text: "Marketplace listings often display different prices depending on whether you're buying one ball, three, six, or a larger pack." },
      { type: "p", text: "Calculate the actual price per ball before comparing products." },
      { type: "p", text: "For players who frequently practice or play recreationally, buying a reasonably priced multi-pack can make more sense than spending heavily on individual balls." },

      { type: "h2", text: "6. Budget-Friendly Pickleball Balls Worth Considering" },
      { type: "p", text: "Let's be honest: not everyone wants to spend a lot on pickleballs." },
      { type: "p", text: "Balls get lost, damaged, and replaced. If you're regularly playing with friends or organizing drills, the cost can add up." },
      { type: "p", text: "Fortunately, there are options worth investigating beyond the familiar premium brands." },
      { type: "p", text: "Here are some products to put on your shortlist." },

      { type: "h3", text: "X-ace Pro-40" },
      { type: "p", text: "A budget-friendly candidate for recreational play and practice." },
      { type: "p", text: "X-ace Pro-40 is an interesting option for players who want a 40-hole outdoor-style ball without paying Franklin X-40 prices." },
      { type: "p", text: "Its marketplace listings advertise:" },
      { type: "ul", items: [
        "40-hole construction.",
        "One-piece, seamless construction.",
        "Polyethylene-based material.",
        "Outdoor-oriented design."
      ] },
      { type: "p", text: "One particularly interesting detail: USA Pickleball's approved ball database lists an X-ACE 40 manufactured by AMA Sport Goods Co., Ltd." },
      { type: "p", text: "However, the database entry uses the model name X-ACE 40, while marketplace listings use X-ace Pro-40 or PRO-40. Check that the exact ball you're purchasing matches the approved model before treating it as tournament-approved." },
      { type: "p", text: "Some Filipino players have also shared positive experiences with X-Ace for practice. One player reported that it felt slightly bouncier and poppier than the Franklin X-40." },
      { type: "p", text: "That's personal feedback rather than a controlled comparison, but it's worth considering when deciding whether to try a budget option." },
      { type: "p", text: "Our take: At approximately ₱80 per ball, X-ace Pro-40 deserves a closer look. It may be a sensible starting point for players who need several balls for practice. We would still want to test consistency and durability before calling it a proven alternative to premium tournament balls." },

      { type: "h3", text: "TECNIQ Elite PROX40" },
      { type: "p", text: "Another option worth checking is TECNIQ's Elite PROX40." },
      { type: "p", text: "Its marketplace listing offers a three-ball product variation at approximately ₱350, which works out to roughly ₱117 per ball if that is the selected pack." },
      { type: "p", text: "It is marketed as an outdoor tournament-style ball." },
      { type: "p", text: "Before purchasing, check the selected variation, exact specifications, and approval status." },
      { type: "p", text: "Our take: A potential middle-ground option for players willing to spend a little more per ball than the X-ace." },

      { type: "h3", text: "Franklin X-40" },
      { type: "p", text: "Franklin X-40 is a familiar reference point in outdoor pickleball." },
      { type: "p", text: "It is an established model with a substantial user base and is listed in USA Pickleball's approved equipment database." },
      { type: "p", text: "That makes it useful as a comparison point when evaluating other 40-hole balls." },
      { type: "p", text: "However, not everyone needs to buy Franklin." },
      { type: "p", text: "If you're mostly playing recreational games or practicing with friends, a less expensive option may make more financial sense." },
      { type: "p", text: "Our take: A useful benchmark, but not necessarily the best choice for every player's budget." },

      { type: "h3", text: "A quick comparison" },
      {
        type: "table",
        headers: ["Ball", "Positioning", "Our assessment"],
        rows: [
          ["X-ace Pro-40", "Budget", "Worth investigating"],
          ["TECNIQ Elite PROX40", "Mid-budget", "Worth comparing"],
          ["Franklin X-40", "Established option", "Useful benchmark"]
        ]
      },
      { type: "p", text: "Prices and availability can change. These are research candidates, not independently tested product rankings." },

      { type: "h2", text: "7. Can You Use an Outdoor Pickleball Indoors?" },
      { type: "p", text: "Yes, in many cases." },
      { type: "p", text: "According to USA Pickleball's Official Rulebook, approved balls are acceptable for indoor and outdoor play." },
      { type: "p", text: "This is an important distinction: the indoor and outdoor labels commonly describe the ball's design and intended playing characteristics, rather than an absolute rule about where it can be used." },
      { type: "p", text: "However, individual facilities and tournament organizers may specify which ball should be used." },
      { type: "p", text: "If you're playing casually, follow the facility's preference." },
      { type: "p", text: "If you're joining a competition, check its equipment requirements beforehand." },

      { type: "h2", text: "8. So, Which Pickleball Should You Buy?" },
      { type: "p", text: "There's no single answer for everyone." },
      { type: "p", text: "Here's a practical way to decide:" },
      { type: "p", text: "If you're a beginner:" },
      { type: "p", text: "Start with the type of ball commonly used at your regular playing venue. You don't need to spend a lot just to learn the game." },
      { type: "p", text: "If you're mostly playing outdoors:" },
      { type: "p", text: "Look for a well-made 40-hole outdoor-style ball that offers consistent bounce and reasonable durability." },
      { type: "p", text: "If you're practicing frequently:" },
      { type: "p", text: "Consider buying a multi-pack of reasonably priced balls. Having enough balls for drills is often more useful than buying one expensive ball." },
      { type: "p", text: "If you're joining tournaments:" },
      { type: "p", text: "Check the exact model against the official approved ball list and the tournament organizer's requirements." },
      { type: "p", text: "If you're on a budget:" },
      { type: "p", text: "Consider options such as X-ace Pro-40, but evaluate the actual product rather than relying entirely on marketplace descriptions." },

      { type: "h2", text: "The Pop. Takeaway" },
      { type: "p", text: "Indoor and outdoor pickleballs may look similar, but their construction and hole patterns can affect how they perform." },
      { type: "p", text: "The important thing isn't buying the most expensive ball or choosing whichever brand everyone else uses." },
      { type: "p", text: "It's finding a ball that suits your playing conditions, performs consistently, and fits your budget." },
      { type: "p", text: "For Filipino players who go through several balls during regular practice, options such as X-ace Pro-40 deserve attention." },
      { type: "p", text: "At around ₱80 per ball, it's an interesting budget candidate. Just remember to check the exact model, understand its limitations, and test it before committing to a large purchase." },
      { type: "p", text: "Because good pickleball doesn't have to come with an expensive ball bill." },
      { type: "p", text: "Play smart. Spend wisely. See you on the court." },

      { type: "h2", text: "Sources & References" },
      {
        type: "sources",
        items: [
          {
            name: "USA Pickleball — Official Approved Ball List",
            url: "https://equipment.usapickleball.org/ball-list/entry/7830/",
            note: "X-ACE 40 manufacturer, outdoor classification, diameter, weight, and material."
          },
          {
            name: "USA Pickleball — Official Rulebook",
            url: "https://usapickleball.org/what-is-pickleball/official-rules/",
            note: "Rules concerning approved ball use."
          },
          {
            name: "Selkirk Sport — The difference between indoor and outdoor pickleballs",
            url: "https://www.selkirk.com/blogs/paddles-and-product-education/the-difference-between-indoor-and-outdoor-pickleballs",
            note: "Manufacturer explainer: USA Pickleball ball parameters, typical indoor and outdoor differences in holes, weight and hardness, and playing surface and climate."
          },
          {
            name: "Reddit — r/PickleballPhilippines: Budget ball recommendations",
            url: "https://www.reddit.com/r/PickleballPhilippines/comments/1uul0t3/ano_maganda_brand_ng_bola_for_drills/",
            note: "Anecdotal player feedback about X-Ace Pro-40."
          }
        ]
      }
    ]
  },
];

export const storyCategories: StoryCategory[] = ["Beginner Tips", "Buying Guides", "Gear Guides", "Product Comparisons", "Court Lifestyle", "Filipino Pickleball"];

export const visibleStories = stories
  .filter((s) => s.status === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getStoryBySlug = (slug: string) => visibleStories.find((s) => s.slug === slug);
export const storiesForGear = (gearId: string) => visibleStories.filter((s) => s.relatedGearIds.includes(gearId));
