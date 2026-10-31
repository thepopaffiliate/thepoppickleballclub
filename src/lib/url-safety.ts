/** Returns the exact original string when it is a safe HTTPS URL; otherwise null. Never normalizes. */
export function safeExternalUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.length === 0) return null;
  if (value !== value.trim() || /[\s\u0000-\u001f\u007f]/.test(value)) return null;
  if (!/^https:\/\/[^/]/i.test(value)) return null;
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return null;
  }
  if (parsed.protocol !== "https:" || !parsed.hostname || parsed.username || parsed.password) return null;
  return value;
}

/** Allows root-relative local asset paths (single leading slash) or safe HTTPS URLs; otherwise null. */
export function safeImageSrc(value: unknown): string | null {
  if (typeof value !== "string" || value.length === 0) return null;
  if (value !== value.trim() || /[\s\u0000-\u001f\u007f\\]/.test(value)) return null;
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  return safeExternalUrl(value);
}
