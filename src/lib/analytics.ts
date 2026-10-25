// Privacy-conscious event hooks. No analytics provider is configured, so this
// is a safe no-op unless a provider later registers itself via setAnalyticsSink.
// Never pass personal data (names, emails, free-text messages) here.
// Note: outbound clicks are NOT purchases — Shopee-confirmed sales live in Shopee's dashboard.

export type AnalyticsEvent =
  | "page_view"
  | "gear_finder_start"
  | "gear_finder_complete"
  | "product_card_click"
  | "shopee_outbound_click"
  | "story_open"
  | "news_open"
  | "social_outbound_click";

type Props = Record<string, string | number | boolean | undefined>;
type Sink = (event: AnalyticsEvent, props: Props) => void;

let sink: Sink | null = null;

export function setAnalyticsSink(fn: Sink | null) {
  sink = fn;
}

export function track(event: AnalyticsEvent, props: Props = {}) {
  if (typeof window === "undefined" || !sink) return;
  try {
    sink(event, props);
  } catch {
    /* never break the UI because of analytics */
  }
}
