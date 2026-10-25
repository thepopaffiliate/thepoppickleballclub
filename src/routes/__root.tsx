import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteFooter, SiteHeader } from "@/components/site/layout";
import { track } from "@/lib/analytics";

function NotFoundComponent() {
  return (
    <div className="container-page py-24 text-center">
      <p className="eyebrow text-primary-strong">Out of bounds</p>
      <h1 className="font-display mt-2 text-8xl">404</h1>
      <p className="mt-2 text-muted-foreground">Wala dito ang hinahanap mo. The page doesn't exist or has moved.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">Go home</Link>
        <Link to="/gear" className="btn btn-outline">Browse gear</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-5xl">This page didn't load</h1>
      <p className="mt-2 text-muted-foreground">Something went wrong. Try again or head back home.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-primary">Try again</button>
        <a href="/" className="btn btn-outline">Go home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Pop. — play more. spend less." },
      { name: "description", content: "Budget-friendly pickleball finds, honest guides and Filipino pickleball news." },
      { property: "og:site_name", content: "The Pop." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1A1A2E" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Montserrat:wght@600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PH">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    track("page_view", { path: pathname });
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
