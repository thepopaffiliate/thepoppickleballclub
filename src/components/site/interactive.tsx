import { useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { platformLabels, siteSettings } from "@/content/settings";
import type { SocialPlatform } from "@/content/types";
import { track } from "@/lib/analytics";
import { safeExternalUrl } from "@/lib/url-safety";

const socialDisplayNames: Record<SocialPlatform, string> = {
  facebook: "The Pop. Pickleball Club",
  instagram: "@the_poppickleball",
  tiktok: "@thepoppickleballclub",
  "shopee-video": "Shopee Video",
};

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.4v3h2.7v8h3.4Z" />
      </svg>
    );
  }

  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="currentColor">
        <path d="M15.4 3c.3 2.1 1.5 3.4 3.6 3.6v2.9c-1.5 0-2.7-.4-3.7-1.1v5.8c0 3.6-2.2 5.8-5.5 5.8A5.2 5.2 0 0 1 4.5 15c0-3.1 2.4-5.3 5.4-5.3.4 0 .8 0 1.2.1v3c-.4-.1-.7-.2-1.1-.2-1.3 0-2.4.9-2.4 2.3 0 1.3 1 2.3 2.3 2.3 1.5 0 2.4-1 2.4-2.8V3h3.1Z" />
      </svg>
    );
  }

  return null;
}

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const entries = Object.entries(siteSettings.socials) as [SocialPlatform, string][];
  const configured = entries.filter(([, url]) => safeExternalUrl(url));

  return (
    <div>
      <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {entries.map(([platform, url]) => {
          const safeUrl = safeExternalUrl(url);
          const label = socialDisplayNames[platform];

          if (platform === "shopee-video") return null;

          return (
            <li key={platform}>
              {safeUrl ? (
                <a
                  href={safeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("social_outbound_click", { platform, placement: "profile" })}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75 ${tone === "dark" ? "text-night-foreground" : "text-foreground"}`}
                  aria-label={`Open The Pop. on ${platform}`}
                >
                  <SocialIcon platform={platform} />
                  <span>{label}</span>
                </a>
              ) : (
                <span
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${tone === "dark" ? "text-night-foreground/45" : "text-muted-foreground"}`}
                  title="Profile link not added yet"
                >
                  <span className="opacity-70"><SocialIcon platform={platform} /></span>
                  <span>Shopee Video · soon</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
      {configured.length === 0 && (
        <p className={`mt-2 text-xs ${tone === "dark" ? "opacity-60" : "text-muted-foreground"}`}>Social profile links will appear here once added.</p>
      )}
    </div>
  );
}

export function Poll({ question, options }: { question: string; options: string[] }) {
  const [choice, setChoice] = useState<string | null>(null);
  return (
    <fieldset className="rounded-2xl bg-card p-5 text-card-foreground shadow-card">
      <legend className="sr-only">{question}</legend>
      <p className="font-ui text-lg font-bold" aria-hidden>{question}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={choice === o}
            onClick={() => setChoice(o)}
            className={`btn rounded-xl border-2 ${choice === o ? "border-primary bg-accent" : "border-border hover:border-primary"}`}
          >
            {o}
          </button>
        ))}
      </div>
      <p className="mt-3 min-h-5 text-sm text-muted-foreground" aria-live="polite">
        {choice
          ? `Nice — ${choice} it is! Votes stay on your device only; tell us more in the comments on our socials.`
          : "Just for fun — no account needed, nothing is saved."}
      </p>
    </fieldset>
  );
}

const backendConfigured = true; // Delivered via FormSubmit to the owner inbox.
const SUGGEST_ENDPOINT = "https://formsubmit.co/ajax/thepopaffiliate@gmail.com";

export function SuggestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  return (
    <form
      className="space-y-4 rounded-2xl border bg-card p-5 shadow-card"
      noValidate
      onSubmit={async (e) => {
        e.preventDefault();
        if (sending) return;
        const form = e.currentTarget;
        const data = new FormData(form);
        const topic = String(data.get("topic") ?? "").trim();
        const url = String(data.get("url") ?? "").trim();
        const message = String(data.get("message") ?? "").trim();
        if (!topic) return setError("Please add a topic.");
        if (url && !/^https?:\/\/\S+$/i.test(url)) return setError("Source URL should start with http:// or https://");
        setError("");
        setSubmitted(false);
        setSending(true);
        try {
          const res = await fetch(SUGGEST_ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              _subject: topic,
              _template: "box",
              _captcha: "false",
              Topic: topic,
              "Source URL": url || "(none)",
              Message: message || "(none)",
            }),
          });
          const json = (await res.json().catch(() => ({}))) as { success?: string | boolean };
          if (!res.ok || String(json.success) !== "true") throw new Error("send failed");
          setSubmitted(true);
          form.reset();
        } catch {
          setError("Sorry, your suggestion couldn't be sent. Please try again or message us on our socials.");
        } finally {
          setSending(false);
        }
      }}
    >
      <div>
        <h3 className="font-ui text-lg font-bold">Suggest a story or event</h3>
        {!backendConfigured && (
          <p className="mt-1 rounded-lg bg-warning p-2 text-xs font-semibold text-warning-foreground">
            Demo form: submissions are not sent or stored yet. Message us on our socials in the meantime.
          </p>
        )}
      </div>
      <label className="block">
        <span className="font-ui text-sm font-semibold">Topic *</span>
        <input name="topic" required maxLength={140} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5" />
      </label>
      <label className="block">
        <span className="font-ui text-sm font-semibold">Source URL</span>
        <input name="url" type="url" inputMode="url" placeholder="https://" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5" />
      </label>
      <label className="block">
        <span className="font-ui text-sm font-semibold">Message (optional)</span>
        <textarea name="message" rows={3} maxLength={1000} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5" />
      </label>
      {error && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
      <button type="submit" disabled={sending} aria-busy={sending} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">{sending ? "Sending…" : "Submit suggestion"}</button>
      {submitted && (
        <p role="status" className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="size-4 mt-0.5 text-value-strong" aria-hidden />
          {backendConfigured ? "Thanks! Your suggestion has been sent to The Pop." : "Thanks! This is a demo, so nothing was sent — your suggestion was not saved."}
        </p>
      )}
    </form>
  );
}
