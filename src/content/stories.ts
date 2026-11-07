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
  {
    id: "s5",
    slug: "pickleball-doubles-court-positioning",
    title: "Where Should You Stand in Doubles Pickleball? A Beginner's Guide to Court Positioning",
    summary: "Knowing how to hit the ball is only half the game. Learn where to stand, how to move with your partner, and why getting to the kitchen line can make a big difference in doubles pickleball.",
    seoTitle: "Pickleball Doubles Positioning: Where Should You Stand?",
    metaDescription: "Not sure where to stand in doubles pickleball? Learn court positioning, partner movement, kitchen line strategy, and common beginner mistakes.",
    category: "Beginner Tips",
    author: "The Pop.",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    status: "published",
    coverImageUrl: "",
    coverImageAlt: "",
    relatedGearIds: [],
    content: [
      { type: "p", text: "Ever played doubles pickleball and found yourself wondering why your partner is suddenly on the other side of the court?" },
      { type: "p", text: "Or maybe both of you went for the same ball, leaving the opposite side wide open." },
      { type: "p", text: "It happens." },
      { type: "p", text: "When you're new to pickleball, most of your attention goes toward hitting the ball. You're thinking about your serve, your return, and whether you can get the ball over the net." },
      { type: "p", text: "But there's another part of the game that can make a big difference: knowing where to stand." },
      { type: "p", text: "Good court positioning helps you cover more space, work better with your partner, and avoid giving your opponents easy opportunities." },
      { type: "p", text: "Let's break down the basics." },

      { type: "h2", text: "1. Understand the Three Main Areas of the Court" },
      { type: "p", text: "Before talking about positioning, it helps to understand the three areas you'll move through during a doubles rally." },

      { type: "h3", text: "The baseline" },
      { type: "p", text: "The baseline is the back boundary of the court." },
      { type: "p", text: "You'll usually start behind or near this area when serving or returning serve." },
      { type: "p", text: "From here, you have room to hit deep shots and prepare for the next ball." },

      { type: "h3", text: "The transition zone" },
      { type: "p", text: "This is the area between the baseline and the Non-Volley Zone line." },
      { type: "p", text: "Some players call it No Man's Land." },
      { type: "p", text: "It's an important area because you'll pass through it when moving toward the net, but you generally don't want to remain there for too long." },
      { type: "p", text: "Why?" },
      { type: "p", text: "Because opponents can target your feet with low or hard shots, making it difficult to return the ball comfortably." },

      { type: "h3", text: "The kitchen line" },
      { type: "p", text: "The kitchen line is the line separating the Non-Volley Zone (NVZ) from the rest of the court." },
      { type: "p", text: "The Non-Volley Zone is the seven-foot area on each side of the net where volleying is restricted." },
      { type: "p", text: "Reaching the kitchen line gives you a better position to participate in dink exchanges, intercept balls, and put pressure on your opponents." },
      { type: "p", text: "This is why experienced players often work toward establishing a position near the kitchen line." },

      { type: "h2", text: "2. Why Getting to the Kitchen Line Matters" },
      { type: "p", text: "One of the most useful beginner lessons in pickleball is understanding the importance of the kitchen line." },
      { type: "p", text: "When both members of a doubles team reach the line in a balanced position, they can:" },
      { type: "ul", items: [
        "Cover more attacking opportunities.",
        "Play controlled dinks.",
        "Respond to balls directed toward their feet.",
        "Apply pressure through volleys.",
        "Work together to protect the middle of the court."
      ] },
      { type: "p", text: "But there's a catch." },
      { type: "p", text: "You shouldn't simply run toward the net after every shot." },
      { type: "p", text: "Your movement should depend on the quality of the shot you just played." },
      { type: "p", text: "A low, well-placed shot may give you time to move forward." },
      { type: "p", text: "A high, attackable shot may force you to stay back and defend." },
      { type: "p", text: "The goal isn't to reach the kitchen line as quickly as possible at any cost. It's to reach it without giving your opponents an easy opportunity to attack." },

      { type: "h2", text: "3. Understand the Two-Bounce Rule" },
      { type: "p", text: "The two-bounce rule is one of the main reasons doubles positioning looks different from other racket sports." },
      { type: "p", text: "Here's how it works:" },
      { type: "ol", items: [
        "The serve must bounce on the receiving team's side.",
        "The receiving team must return the ball, allowing it to bounce on the serving team's side.",
        "Only after those two bounces can either team volley the ball."
      ] },

      { type: "h3", text: "If your team is serving" },
      { type: "p", text: "After serving, stay prepared for the return to bounce." },
      { type: "p", text: "Once your team plays its third shot, you can begin working toward the kitchen line." },
      { type: "p", text: "A good third shot can give your team time to advance." },

      { type: "h3", text: "If your team is receiving" },
      { type: "p", text: "The returner should aim for a deep return and then work forward toward the kitchen line." },
      { type: "p", text: "Your partner should also be prepared to support the move." },
      { type: "p", text: "The receiving team often has an early positional advantage because it can establish a kitchen-line position before the serving team." },

      { type: "h2", text: "4. Move Together With Your Partner" },
      { type: "p", text: "Here's a simple rule that can improve your doubles positioning:" },
      { type: "p", text: "When your partner moves, you should usually adjust too." },
      { type: "p", text: "Imagine that you're both connected by an invisible line." },
      { type: "p", text: "When your partner shifts toward the left side of the court, you also shift left to help protect the space being opened." },
      { type: "p", text: "When the ball moves toward the right, you both adjust toward that side." },
      { type: "p", text: "This doesn't mean you should stand shoulder to shoulder." },
      { type: "p", text: "It means you should maintain useful spacing and avoid leaving large gaps between you." },

      { type: "h3", text: "What happens when one player moves wide?" },
      { type: "p", text: "Imagine your opponents hit a dink toward your partner near the sideline." },
      { type: "p", text: "Your partner moves wide to reach the ball." },
      { type: "p", text: "What should you do?" },
      { type: "p", text: "You should slightly shift toward the middle to help cover the space your partner has left open." },
      { type: "p", text: "If you remain in your original position, your opponents may have an easy opportunity to hit through the middle." },
      { type: "p", text: "The important thing is to move without crowding your partner or blocking their recovery path." },

      { type: "h2", text: "5. Who Should Take the Ball in the Middle?" },
      { type: "p", text: "This is one of the most common sources of confusion in doubles." },
      { type: "p", text: "Both players see the ball coming toward the middle." },
      { type: "p", text: "Both move toward it." },
      { type: "p", text: "And sometimes, neither ends up hitting it properly." },
      { type: "p", text: "A useful starting principle is:" },
      { type: "p", text: "The player with the forehand in the middle often takes priority." },
      { type: "p", text: "However, this isn't an absolute rule." },
      { type: "p", text: "You should also consider:" },
      { type: "ul", items: [
        "Which player is closer to the ball?",
        "Who is better balanced?",
        "Who has more time to prepare?",
        "Which player has a clearer shot?",
        "Are you playing with a left-handed partner?"
      ] },
      { type: "p", text: "For example, if your partner is moving forward and you're moving backward, your partner may be in a better position to take the ball even if it's closer to your forehand." },
      { type: "p", text: "Communication matters too." },
      { type: "p", text: "Use simple calls:" },
      { type: "ul", items: [
        "\"Mine!\" when you're taking the ball.",
        "\"Yours!\" when your partner should take it.",
        "\"Switch!\" when you need to exchange sides after a movement or scramble."
      ] },
      { type: "p", text: "Don't wait until both paddles are already moving toward the same ball." },
      { type: "p", text: "Call early." },

      { type: "h2", text: "6. Common Positioning Mistakes Beginners Make" },
      { type: "p", text: "You don't need complicated strategies to improve your court positioning. Sometimes, fixing a few habits makes a noticeable difference." },

      { type: "h3", text: "Mistake 1: Both players chase the ball" },
      { type: "p", text: "When both partners move toward the same ball, they leave the rest of the court exposed." },
      { type: "p", text: "What to do instead: Let one player handle the ball while the other adjusts to protect the open space." },

      { type: "h3", text: "Mistake 2: Staying too far back" },
      { type: "p", text: "If both teams have reached the kitchen line but you're still standing near the baseline, you may be giving your opponents more control over the rally." },
      { type: "p", text: "What to do instead: Look for opportunities to move forward after a good return or controlled third shot." },

      { type: "h3", text: "Mistake 3: Rushing forward behind a weak shot" },
      { type: "p", text: "Running toward the kitchen line immediately after hitting a high or attackable ball can put you in a difficult position." },
      { type: "p", text: "What to do instead: Watch your shot and judge whether you have enough time to advance safely." },

      { type: "h3", text: "Mistake 4: Leaving the middle open" },
      { type: "p", text: "Players sometimes focus so much on their assigned half of the court that they forget to protect the middle." },
      { type: "p", text: "What to do instead: Adjust your position when your partner is pulled wide." },

      { type: "h3", text: "Mistake 5: Standing too close to your partner" },
      { type: "p", text: "You need enough space to swing your paddle and react independently." },
      { type: "p", text: "What to do instead: Maintain comfortable spacing while staying connected as a team." },

      { type: "h2", text: "7. Three Simple Drills to Improve Your Court Positioning" },
      { type: "p", text: "You don't need a tournament to practice good positioning." },
      { type: "p", text: "Try these drills during your next session." },

      { type: "h3", text: "Drill 1: Shadow Movement" },
      { type: "p", text: "What you need: Two players and a court." },
      { type: "p", text: "How to do it:" },
      { type: "ol", items: [
        "Both players start near the kitchen line.",
        "One player or coach points toward different areas of the court.",
        "Both players move together in the indicated direction.",
        "Maintain your spacing throughout the exercise."
      ] },
      { type: "p", text: "The goal is to develop the habit of moving together rather than independently." },

      { type: "h3", text: "Drill 2: The Middle Ball Drill" },
      { type: "p", text: "What you need: Two players on one side and a feeder on the opposite side." },
      { type: "p", text: "How to do it:" },
      { type: "ol", items: [
        "The feeder sends balls toward the middle.",
        "Both players must decide who takes each ball.",
        "Call \"Mine\" or \"Yours\" before making contact.",
        "Switch responsibilities and repeat."
      ] },
      { type: "p", text: "The goal is to improve communication and reduce hesitation." },

      { type: "h3", text: "Drill 3: Move Up to the Kitchen" },
      { type: "p", text: "What you need: Four players or two players and a ball feeder." },
      { type: "p", text: "How to do it:" },
      { type: "ol", items: [
        "Begin near the baseline.",
        "Feed a third-shot opportunity.",
        "Play a controlled shot.",
        "Advance only when the shot gives you enough time.",
        "Stop and prepare for the next ball."
      ] },
      { type: "p", text: "The goal is to understand that moving forward is a decision, not an automatic reaction." },

      { type: "h2", text: "The Pop. Takeaway" },
      { type: "p", text: "Doubles pickleball isn't just about getting the ball over the net." },
      { type: "p", text: "It's about understanding the space around you, knowing when to move, and working with your partner instead of competing for the same ball." },
      { type: "p", text: "Start with three habits:" },
      { type: "ol", items: [
        "Work toward the kitchen line when the opportunity is there.",
        "Move with your partner to protect open spaces.",
        "Communicate before either player commits to a difficult ball."
      ] },
      { type: "p", text: "You don't need advanced strategies to start playing smarter." },
      { type: "p", text: "Sometimes, the biggest improvement comes from simply knowing where to stand." },
      { type: "p", text: "Play smart. Move together. See you on the court." },

      { type: "h2", text: "Sources & References" },
      {
        type: "sources",
        items: [
          {
            name: "USA Pickleball — Pickleball Basics: Positioning, Patience, and Kitchen Line Strategy",
            url: "https://usapickleball.org/pickleball-skills/level-two/pickleball-basics-positioning-tips/",
            note: "Kitchen-line positioning, two-bounce rule, transition zone, partner spacing, and split-step basics."
          },
          {
            name: "USA Pickleball — Official Rules",
            url: "https://usapickleball.org/what-is-pickleball/official-rules/",
            note: "Non-Volley Zone and two-bounce rule definitions."
          },
          {
            name: "PickleTip — Pickleball Positioning: Where to Stand, Move, and Recover in Doubles",
            url: "https://www.pickletip.com/pickleball-positioning/",
            note: "Partner movement, recovery, middle coverage, and situational positioning."
          },
          {
            name: "PickleTip — Pickleball Doubles Communication: Calls and Signals",
            url: "https://www.pickletip.com/pickleball-doubles-communication/",
            note: "Communication timing and partner coordination."
          },
          {
            name: "World Pickleball Federation — Play Pickleball: A Beginner's Guide",
            url: "https://www.worldpickleballfederation.org/wp-content/uploads/2021/07/Final-WPF-61220-In2Pickle_Play_Pickleball_Beginner_Guide_eBook.pdf",
            note: "Beginner doubles positioning and fundamental strategy."
          }
        ]
      }
    ]
  },
  {
    id: "s6",
    slug: "pickleball-running-shoes-vs-court-shoes",
    title: "Can You Play Pickleball in Running Shoes? What Your Footwear Actually Needs",
    summary:
      "Your running shoes might be comfortable, but are they suitable for pickleball? Learn the difference between running and court shoes, why lateral support matters, and what to consider before buying your next pair.",
    seoTitle: "Can You Play Pickleball in Running Shoes? Here's What to Know",
    metaDescription:
      "Can you play pickleball in running shoes? Learn why court shoes offer better lateral support, what features to look for, and how to choose footwear for indoor and outdoor play.",
    category: "Buying Guides",
    author: "The Pop.",
    publishedAt: "2026-11-03",
    updatedAt: "2026-11-03",
    status: "published",
    coverImageUrl: "",
    coverImageAlt: "",
    relatedGearIds: [],
    content: [
      { type: "p", text: "You've got your paddle, your balls, and a court reservation." },
      { type: "p", text: "There's just one thing left: what shoes should you wear?" },
      {
        type: "p",
        text: "If you're new to pickleball, you might be tempted to use the running shoes already sitting in your closet. They're comfortable, familiar, and you probably don't want to spend more money on another pair of sports shoes.",
      },
      { type: "p", text: "Fair enough." },
      { type: "p", text: "But here's something worth considering: pickleball involves a lot more than running forward." },
      {
        type: "p",
        text: "You'll move sideways, stop suddenly, change direction, and sometimes reach for balls that seem determined to land just outside your comfort zone.",
      },
      { type: "p", text: "That's why footwear matters." },
      {
        type: "p",
        text: "So, can you play pickleball in running shoes? Technically, yes. But for regular play, court shoes are generally the better choice.",
      },
      { type: "p", text: "Let's look at why." },

      { type: "h2", text: "1. Why Running Shoes Aren't Designed for Pickleball" },
      { type: "p", text: "Running shoes are designed primarily for forward movement." },
      {
        type: "p",
        text: "Their construction generally prioritizes cushioning, comfort, and support during repetitive strides.",
      },
      { type: "p", text: "Pickleball involves a different kind of movement." },
      { type: "p", text: "During a typical rally, you might:" },
      {
        type: "ul",
        items: [
          "Move quickly toward the kitchen line.",
          "Shuffle sideways to reach a dink.",
          "Stop suddenly when your opponent hits a short ball.",
          "Pivot to return a shot.",
          "Move backward to retrieve a lob.",
        ],
      },
      { type: "p", text: "These movements place different demands on your footwear." },
      {
        type: "p",
        text: "Running shoes may not provide the same lateral stability as shoes designed for court sports.",
      },

      { type: "h3", text: "What is lateral support?" },
      {
        type: "p",
        text: "Lateral support refers to how well a shoe helps support your foot during side-to-side movements.",
      },
      { type: "p", text: "Imagine moving quickly toward the right to reach a ball." },
      {
        type: "p",
        text: "Your foot needs to remain stable inside the shoe while your body changes direction.",
      },
      {
        type: "p",
        text: "A running shoe designed mainly for forward movement may not provide the same support during this type of movement.",
      },
      {
        type: "p",
        text: "This is one reason sports medicine professionals generally recommend court-specific footwear for sports involving frequent lateral movement.",
      },
      {
        type: "p",
        text: "The American Medical Association also highlights the differences between running and tennis shoes, particularly their side support, outsole firmness, and suitability for sudden changes in direction.",
      },

      { type: "h2", text: "2. Running Shoes vs. Court Shoes: What's the Difference?" },
      { type: "p", text: "Here's a simple comparison." },
      {
        type: "table",
        headers: ["Feature", "Running shoes", "Court shoes"],
        rows: [
          ["Main purpose", "Forward movement", "Multi-directional movement"],
          ["Cushioning", "Usually a major priority", "Varies by model"],
          ["Lateral support", "Generally less specialized", "Designed for side-to-side movement"],
          ["Outsole", "Designed for running surfaces", "Designed for court traction"],
          ["Stability", "Optimized for running mechanics", "Optimized for cutting and stopping"],
          ["Pickleball suitability", "Not ideal for regular play", "Generally preferred"],
        ],
      },
      {
        type: "p",
        text: "The biggest difference isn't which shoe feels softer or more comfortable.",
      },
      {
        type: "p",
        text: "It's whether the shoe is designed for the movements you're actually making.",
      },
      {
        type: "p",
        text: "A running shoe can feel great when walking onto the court but still be less suitable once a fast rally begins.",
      },

      { type: "h2", text: "3. What Should You Look for in Pickleball Shoes?" },
      { type: "p", text: "You don't necessarily need a shoe specifically branded for pickleball." },
      {
        type: "p",
        text: "Tennis shoes and other suitable court shoes can also work, depending on the playing surface.",
      },
      { type: "p", text: "Here are the features worth paying attention to." },

      { type: "h3", text: "Lateral stability" },
      { type: "p", text: "This should be one of your priorities." },
      { type: "p", text: "Look for a shoe that feels secure when moving sideways." },
      {
        type: "p",
        text: "Your foot shouldn't slide excessively inside the shoe when you change direction.",
      },

      { type: "h3", text: "Good traction" },
      { type: "p", text: "You need enough grip to move confidently without slipping." },
      { type: "p", text: "However, more grip isn't automatically better." },
      {
        type: "p",
        text: "The outsole should be appropriate for the court surface you're playing on.",
      },

      { type: "h3", text: "Comfortable cushioning" },
      { type: "p", text: "Pickleball involves repeated movement and sudden stops." },
      {
        type: "p",
        text: "A comfortable level of cushioning can help make longer sessions more enjoyable.",
      },
      { type: "p", text: "Don't assume that the softest shoe is necessarily the best one." },

      { type: "h3", text: "A secure fit" },
      { type: "p", text: "Your heel should feel stable, and your toes should have enough room." },
      {
        type: "p",
        text: "A shoe that is too loose can allow unnecessary movement inside the shoe.",
      },
      {
        type: "p",
        text: "One that's too tight can become uncomfortable during longer games.",
      },

      { type: "h3", text: "Durable construction" },
      {
        type: "p",
        text: "If you play frequently, consider the outsole and materials that experience the most wear.",
      },
      {
        type: "p",
        text: "A suitable court shoe should hold up to the movements and surfaces you regularly encounter.",
      },

      { type: "h2", text: "4. Are Tennis Shoes Good for Pickleball?" },
      {
        type: "p",
        text: "Yes. In fact, tennis shoes are among the most practical footwear options for pickleball.",
      },
      { type: "p", text: "Both sports involve:" },
      {
        type: "ul",
        items: [
          "Side-to-side movement.",
          "Sudden changes in direction.",
          "Quick starts and stops.",
          "Forward and backward movement.",
          "Repeated movement around a court.",
        ],
      },
      { type: "p", text: "Tennis shoes are designed with these demands in mind." },
      {
        type: "p",
        text: "You don't necessarily have to buy a separate pickleball-branded shoe if you already own a suitable pair of tennis or court shoes.",
      },
      {
        type: "p",
        text: "Just make sure the outsole is appropriate for your playing surface.",
      },

      { type: "h2", text: "5. What About Badminton and Volleyball Shoes?" },
      {
        type: "p",
        text: "This is where things become interesting for players who mostly use indoor facilities.",
      },
      { type: "p", text: "Badminton and volleyball shoes are also designed for court-based movement." },
      {
        type: "p",
        text: "They can be suitable options for indoor pickleball, depending on their fit, construction, and outsole.",
      },
      { type: "p", text: "However, the playing surface matters." },

      { type: "h3", text: "For indoor pickleball" },
      {
        type: "p",
        text: "Badminton or volleyball shoes may be appropriate for smooth indoor courts.",
      },
      {
        type: "p",
        text: "They are designed for movements that involve quick direction changes and court traction.",
      },

      { type: "h3", text: "For outdoor pickleball" },
      {
        type: "p",
        text: "Look for tennis or outdoor court shoes designed for the surface you're playing on.",
      },
      {
        type: "p",
        text: "Indoor court shoes may wear more quickly when repeatedly used on rough outdoor surfaces.",
      },

      { type: "h3", text: "If you play both indoors and outdoors" },
      {
        type: "p",
        text: "An outdoor-compatible court shoe can be a practical option, provided its outsole works on the indoor surface as well.",
      },
      { type: "p", text: "Check the manufacturer's surface recommendations before buying." },

      { type: "h2", text: "6. What If You Can't Afford New Pickleball Shoes Yet?" },
      { type: "p", text: "Let's be practical." },
      {
        type: "p",
        text: "Not everyone wants to buy another pair of shoes immediately after getting into pickleball.",
      },
      { type: "p", text: "And that's okay." },
      { type: "p", text: "If you're just starting, here's what you can do:" },
      { type: "p", text: "First, check what you already own." },
      {
        type: "p",
        text: "You may already have tennis shoes or suitable court shoes from another sport.",
      },
      { type: "p", text: "Second, consider indoor court footwear." },
      {
        type: "p",
        text: "If you mainly play on smooth indoor courts, suitable badminton or volleyball shoes may be worth considering.",
      },
      { type: "p", text: "Third, prioritize function over branding." },
      {
        type: "p",
        text: "A shoe doesn't need a pickleball logo to be appropriate for the sport.",
      },
      { type: "p", text: "Focus on stability, traction, fit, and the playing surface." },
      { type: "p", text: "Fourth, don't buy solely because of a marketplace description." },
      {
        type: "p",
        text: "Look for actual information about the shoe's intended sport and outsole.",
      },
      {
        type: "p",
        text: "A listing that says \"pickleball shoes\" doesn't automatically mean the shoe offers the right construction.",
      },
      {
        type: "p",
        text: "And if your only available footwear is a running shoe, understand its limitations rather than assuming it's an ideal long-term option.",
      },
      {
        type: "p",
        text: "For frequent play, investing in suitable court footwear is a sensible priority.",
      },

      { type: "h2", text: "7. How to Tell If Your Shoes Are Suitable for Pickleball" },
      { type: "p", text: "Before taking a new pair to the court, consider these questions:" },
      {
        type: "ul",
        items: [
          "Does the shoe feel secure when moving sideways?",
          "Does your heel stay in place?",
          "Is there enough room around your toes?",
          "Does the outsole suit your playing surface?",
          "Can you change direction without your foot sliding excessively inside the shoe?",
          "Does the shoe feel stable when stopping?",
        ],
      },
      { type: "p", text: "Try the shoes on and walk around in them first." },
      {
        type: "p",
        text: "If possible, test gentle side-to-side movements in a safe area.",
      },
      {
        type: "p",
        text: "Avoid using a shoe that feels unstable, slips excessively, or causes discomfort.",
      },
      {
        type: "p",
        text: "If you have existing foot or ankle problems, consider getting professional advice about appropriate footwear.",
      },

      { type: "h2", text: "The Pop. Takeaway" },
      {
        type: "p",
        text: "You can technically step onto a pickleball court wearing running shoes, but that doesn't make them the best option.",
      },
      {
        type: "p",
        text: "Pickleball requires frequent lateral movement, quick stops, and changes in direction. Court shoes are designed with those movements in mind.",
      },
      { type: "p", text: "The good news?" },
      {
        type: "p",
        text: "You don't need to buy something specifically marketed as a pickleball shoe.",
      },
      {
        type: "p",
        text: "A suitable pair of tennis shoes, or appropriate indoor court shoes, may already do the job.",
      },
      {
        type: "p",
        text: "Before spending your money, check the fit, stability, traction, and playing surface.",
      },
      { type: "p", text: "Your paddle helps you hit the ball." },
      { type: "p", text: "Your shoes help you get into position to hit it." },
      { type: "p", text: "Play smart. Move confidently. See you on the court." },

      { type: "h2", text: "Sources & References" },
      {
        type: "sources",
        items: [
          {
            name: "American Medical Association — What doctors want patients to know about preventing pickleball injuries",
            url: "https://www.ama-assn.org/public-health/prevention-wellness/what-doctors-want-patients-know-about-preventing-pickleball",
            note: "Why court and tennis shoes are generally preferable to running shoes for pickleball, particularly regarding lateral support and sudden directional changes.",
          },
          {
            name: "World Pickleball Federation — Play Pickleball: A Beginner's Guide",
            url: "https://www.worldpickleballfederation.org/wp-content/uploads/2021/07/Final-WPF-61220-In2Pickle_Play_Pickleball_Beginner_Guide_eBook.pdf",
            note: "Pickleball footwear recommendations, differences between court shoes and jogging shoes, and indoor/outdoor shoe considerations.",
          },
          {
            name: "Pickleball: Injury Considerations in an Increasingly Popular Sport",
            url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6913863/",
            note: "Footwear considerations, lateral stability, and the importance of suitable shoe fit during pickleball.",
          },
          {
            name: "South Carolina Sports Medicine and Orthopaedic Center — Athletic Shoe Selection",
            url: "https://scsportsmedicine.com/patient-information/health-information/athletic-shoe-selection",
            note: "Differences between running, cross-training, and court shoes, including the importance of shoe construction for different movement patterns.",
          },
          {
            name: "American Podiatric Medical Association — Choosing Shoes for Sports",
            url: "https://www.apma.org/patients-and-the-public/tips-for-healthy-feet/choosing-shoes-for-sports/",
            note: "Choosing footwear according to the activity and movement demands.",
          },
        ],
      },
    ],
  },
];

export const storyCategories: StoryCategory[] = ["Beginner Tips", "Buying Guides", "Gear Guides", "Product Comparisons", "Court Lifestyle", "Filipino Pickleball"];

export const visibleStories = stories
  .filter((s) => s.status === "published")
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const getStoryBySlug = (slug: string) => visibleStories.find((s) => s.slug === slug);
export const storiesForGear = (gearId: string) => visibleStories.filter((s) => s.relatedGearIds.includes(gearId));
