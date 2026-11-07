import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import paddleArtwork from "@/assets/the-pop-paddle.jpg.asset.json";
import courtPhoto from "@/assets/pickleball-court-hero.png.asset.json";

function Pickleball({ className = "", pink = false }: { className?: string; pink?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute block rounded-full ${pink ? "bg-primary" : "bg-value"} ${className}`}
    >
      <span className="absolute left-[18%] top-[24%] size-[18%] rounded-full bg-night/70" />
      <span className="absolute right-[20%] top-[42%] size-[16%] rounded-full bg-night/70" />
      <span className="absolute bottom-[18%] left-[38%] size-[17%] rounded-full bg-night/70" />
    </span>
  );
}

export function PaddleParallax() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    async function setupParallax() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled || !section) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      const context = gsap.context(() => {
        media.add(
          {
            mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
            desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
          },
          (matchContext) => {
            const mobile = Boolean(matchContext.conditions?.["mobile"]);
            const depth = mobile ? 0.45 : 1;
            const select = gsap.utils.selector(section);
            const timeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            });

            timeline
              .fromTo(select("[data-depth='court']"), { yPercent: -3 * depth }, { yPercent: 3 * depth }, 0)
              .fromTo(select("[data-depth='paddle']"), { yPercent: 5 * depth }, { yPercent: -6 * depth }, 0)
              .fromTo(select("[data-depth='message']"), { yPercent: 3 * depth }, { yPercent: -3 * depth }, 0)
              .fromTo(
                select("[data-depth='ball-left']"),
                { x: -10 * depth, y: 18 * depth, rotation: -8 },
                { x: 10 * depth, y: -18 * depth, rotation: 8 },
                0,
              )
              .fromTo(
                select("[data-depth='ball-right']"),
                { x: 8 * depth, y: -14 * depth, rotation: 6 },
                { x: -8 * depth, y: 14 * depth, rotation: -6 },
                0,
              );
          },
        );
      }, section);

      cleanup = () => {
        media.revert();
        context.revert();
      };
      ScrollTrigger.refresh();
    }

    void setupParallax();
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="pop-parallax-heading"
      className="relative isolate mt-16 overflow-hidden bg-blush"
    >
      <div data-depth="court" className="absolute -inset-y-10 inset-x-0 -z-20" aria-hidden>
        <img
          src={courtPhoto.url}
          alt=""
          width={1672}
          height={941}
          loading="lazy"
          className="size-full object-cover opacity-[0.08] grayscale"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-blush/35" aria-hidden />
      <div className="absolute left-1/2 top-1/2 -z-10 hidden h-[34rem] w-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-[4rem] border-2 border-night/10 md:block" aria-hidden>
        <span className="absolute left-1/2 top-0 h-full border-l-2 border-night/10" />
        <span className="absolute left-0 top-1/2 w-full border-t-2 border-night/10" />
      </div>

      <div className="container-page relative flex min-h-[46rem] flex-col items-center justify-center py-20 text-center md:min-h-[52rem]">
        <div data-depth="ball-left" className="absolute left-[3%] top-[24%] md:left-[12%] md:top-[28%]">
          <Pickleball pink className="relative size-12 opacity-80 md:size-20" />
        </div>
        <div data-depth="ball-right" className="absolute bottom-[5%] right-[4%] md:bottom-[25%] md:right-[13%]">
          <Pickleball className="relative size-14 opacity-80 md:size-24" />
        </div>

        <div data-depth="message" className="relative z-20">
          <p className="eyebrow text-primary-strong">The Pop. way</p>
          <h2 id="pop-parallax-heading" className="font-display mx-auto mt-3 max-w-3xl text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
            Find your fit.<br />Then go play.
          </h2>
        </div>

        <div data-depth="paddle" className="relative z-10 -my-5 size-[19rem] sm:size-[23rem] md:-my-8 lg:size-[27rem]">
          <div className="relative size-full overflow-hidden rounded-full border border-night/10 bg-blush shadow-card">
            <img
              src={paddleArtwork.url}
              alt="The Pop. pink paddle and green pickleball illustration"
              width={2000}
              height={2000}
              loading="lazy"
              className="absolute left-1/2 top-1/2 size-[138%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover mix-blend-multiply"
            />
          </div>
        </div>

        <div data-depth="message" className="relative z-20 max-w-xl">
          <p className="text-base font-medium text-night/80 md:text-lg">
            Budget-friendly gear, no-nonsense guides, and a growing Filipino pickleball community.
          </p>
          <Link to="/gear-finder" className="btn btn-night mt-5">
            Find your gear <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
