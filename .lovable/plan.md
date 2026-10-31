# Security audit and minimal launch plan — The Pop.

Scope: static editorial/affiliate site. No accounts, payments, database, or submission backend. Nothing added beyond what is listed.

## Findings (prioritized)

### Confirmed in code

1. **MEDIUM: No scheme check on content links.** These URLs go straight into `href` with no validation: `getAffiliateDestination` (`src/lib/product-data.ts`, used in `src/components/site/cards.tsx`), `sourceUrl` (`src/routes/gear.$slug.tsx`, `src/routes/news.$slug.tsx`), `postUrl` (`cards.tsx`), and social URLs (`src/components/site/interactive.tsx`). React 19 only warns on `javascript:` URLs, it does not block them. All content is local and written by the editor, so the risk is a copy-paste mistake, not an outside attacker. Still, this is the main gap to fix before real links go in. External links already use `rel="noopener noreferrer"`, plus `sponsored` on affiliate links.
2. **MEDIUM (low real-world impact): Dependency advisories.** `seroval` (moderate, script injection through serialized RegExp/typed arrays) comes in through `@tanstack/react-router`, `@tanstack/react-start` and `@tanstack/router-plugin`. `zod` 3.25.76 (high, memory exhaustion) and `js-yaml` (high, CPU) come through build tooling. `source-map-js` comes through `@tailwindcss/vite`, which is build-time only. The app has no server functions, no zod schemas, and no YAML parsing of visitor input, so none of these can be reached by visitors today. Seroval is the only one used at runtime (SSR state), and it only serializes the app's own data.
   - Recommendation: don't do a manual dependency update now. The TanStack versions are pinned to the template, and bumping them risks breaking the build. Revisit once newer template versions are out.
3. **LOW: Image `src` values come from content** (`imageUrl`, `coverImageUrl`, story block `src`, `thumbnailUrl`). Images can't run script, but a bad host could load broken or tracking images. The same validator can cover them (https only, or a local asset path).
4. **INFO: `dangerouslySetInnerHTML`** appears only in `src/components/ui/chart.tsx`, a shadcn chart component that builds CSS from static config. It is not used with content. No other raw HTML rendering found; story blocks render as React elements.
5. **INFO: Error handling doesn't leak details.** `src/lib/error-page.ts` returns a fixed page with no stack trace. `src/server.ts` and `src/start.ts` write errors to server logs only. The root error screen shows a generic message. CSRF middleware is present.
6. **INFO: No secrets found.** There are no `.env` files, no `VITE_` or `process.env` use in `src`, and `.gitignore` covers `*.local` and `.dev.vars`. `public/` holds only `favicon.ico` and `robots.txt`.
7. **INFO: Forms don't send anything.** `SuggestForm` has `backendConfigured = false`, calls `preventDefault`, and makes no network call. Poll answers stay in memory only. Keep both as they are.
8. **LOW: The privacy page may be slightly incomplete.** `src/lib/lovable-error-reporting.ts` forwards errors to `window.__lovableEvents` / `__lovableReportRuntimeError` only if the hosting platform injects them. The code says this hook exists only in the editor preview; I haven't checked whether the published site injects it. The site's own `track()` does nothing because no tracker is registered. The privacy page says "no analytics service is active". That is accurate for the site's own code, but it doesn't mention possible platform error reports.

### Needs checking on the live site (not confirmed)

9. **HTTP security headers.** The project sets none. I haven't checked what Lovable hosting adds (HSTS, nosniff, and so on). Check with `curl -sI https://thepoppickleballclub.lovable.app` before adding anything, and only add what is missing.
10. **Whether the published site injects the error-reporting script** (decides the wording for finding 8).

## Proposed smallest plan (fits within 5 credits)

**Step 1: URL safety helper (about 1 credit).**
- Add `src/lib/safe-url.ts` with `safeExternalUrl(url)`. It returns the original string unchanged if it parses as `https:` (or `http:` if you allow it). Otherwise it returns `null`. It never trims, re-encodes or adds parameters to the URL.
- Add `safeImageSrc(url)`, which accepts `https:` URLs or local/bundled asset paths.
- Optional host allowlist for affiliate links (`shopee.ph`, `s.shopee.ph`, `shp.ee`, plus any hosts you confirm) applied only in `getAffiliateDestination`. A failing link shows the existing "Product link not yet available" state.
- Use it at the five link points listed in finding 1. Story/news/social links that fail are hidden.

**Step 2: Tests (part of step 1).** Add to `src/test/rules.test.ts`:
- `javascript:`, `data:`, and relative/garbage values return `null`.
- An exact Shopee affiliate URL with tracking parameters comes back unchanged (`===`).
- A host not on the allowlist turns into the disabled button state.

**Step 3: Privacy wording (about 0.5 credit).** Add one sentence to `src/routes/privacy.tsx` saying the hosting platform may receive technical error reports without personal details. Add it only if the live check (item 10) shows the script runs. Add a test that the analytics sink stays unset by default.

**Step 4: Headers (about 1 credit, only if the live check shows they're missing).** Add response headers in `src/server.ts`. Set `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, and `X-Frame-Options: SAMEORIGIN`. Leave HSTS to the hosting provider.
- Use a CSP in **Report-Only** mode at first: `default-src 'self'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self' 'unsafe-inline'; connect-src 'self'; frame-ancestors 'self'`. Add a test that the headers appear on the response from `server.ts`.

**Deferred:** dependency bumps (finding 2) and enforcing the CSP.

## Risks of breaking the site
- **Step 4, enforcing the CSP:** this could break the editor preview, Lovable's injected scripts, hydration scripts, or Google Fonts. That is why it starts as Report-Only, and why `X-Frame-Options`/`frame-ancestors` may need to allow the Lovable editor frame. If the preview stops loading, drop those two first.
- **Step 1, the allowlist:** if a real affiliate link uses a host that isn't listed, its button turns disabled. Please confirm which Shopee short-link hosts you'll use.
- **Step 3:** wording only, no risk.
- **Upgrading dependencies now:** high risk, so I'm not proposing it.
