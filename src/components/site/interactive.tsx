import { useState } from "react";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { platformLabels, siteSettings } from "@/content/settings";
import type { SocialPlatform } from "@/content/types";
import { track } from "@/lib/analytics";
import { safeExternalUrl } from "@/lib/url-safety";

export function SocialLinks({ tone = "light" }: { tone?: "light" | "dark" }) {
  const entries = Object.entries(siteSettings.socials) as [SocialPlatform, string][];
  const configured = entries.filter(([, url]) => safeExternalUrl(url));
  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {entries.map(([platform, url]) => (
          <li key={platform}>
            {safeExternalUrl(url) ? (
              <a
                href={safeExternalUrl(url)!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("social_outbound_click", { platform, placement: "profile" })}
                className={`btn btn-outline min-h-10 py-1.5 text-sm ${tone === "dark" ? "text-night-foreground" : "text-foreground"}`}
              >
                {platformLabels[platform]} <ExternalLink className="size-3" aria-hidden />
              </a>
            ) : (
              <span
                className={`chip py-2 ${tone === "dark" ? "bg-night-foreground/10 text-night-foreground/70" : "bg-muted text-muted-foreground"}`}
                title="Profile link not added yet"
              >
                {platformLabels[platform]} · soon
              </span>
            )}
          </li>
        ))}
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

const backendConfigured = false; // Flip when a real submission endpoint exists.

export function SuggestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  return (
    <form
      className="space-y-4 rounded-2xl border bg-card p-5 shadow-card"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const topic = String(data.get("topic") ?? "").trim();
        const url = String(data.get("url") ?? "").trim();
        if (!topic) return setError("Please add a topic.");
        if (url && !/^https?:\/\/\S+$/i.test(url)) return setError("Source URL should start with http:// or https://");
        setError("");
        setSubmitted(true);
        e.currentTarget.reset();
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
      <button type="submit" className="btn btn-primary w-full sm:w-auto">Submit suggestion</button>
      {submitted && (
        <p role="status" className="flex items-start gap-2 text-sm">
          <CheckCircle2 className="size-4 mt-0.5 text-value-strong" aria-hidden />
          {backendConfigured ? "Salamat! We received your suggestion." : "Thanks! This is a demo, so nothing was sent — your suggestion was not saved."}
        </p>
      )}
    </form>
  );
}
