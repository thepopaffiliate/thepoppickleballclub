const php = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

export const formatPHP = (n: number) => php.format(n);

/** Formats a YYYY-MM-DD (or ISO) date in Asia/Manila, e.g. "Oct 22, 2026". */
export function formatDate(iso: string) {
  const d = iso.length === 10 ? new Date(`${iso}T12:00:00+08:00`) : new Date(iso);
  return new Intl.DateTimeFormat("en-PH", { timeZone: "Asia/Manila", year: "numeric", month: "short", day: "numeric" }).format(d);
}

export function isPriceStale(checkedAt: string, staleAfterDays: number, now: Date = new Date()) {
  const checked = new Date(`${checkedAt.slice(0, 10)}T00:00:00+08:00`).getTime();
  return now.getTime() - checked > staleAfterDays * 86_400_000;
}
