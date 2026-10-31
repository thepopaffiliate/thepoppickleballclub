import { describe, expect, it } from "vitest";
import { safeExternalUrl, safeImageSrc } from "@/lib/url-safety";
import { withSecurityHeaders } from "@/server";

describe("safeExternalUrl", () => {
  it.each([
    "javascript:alert(1)", "JavaScript:alert(1)", "data:text/html,<b>x</b>", "//evil.example/x",
    "http://example.com", "https://", "not a url", " https://example.com", "https://example.com ",
    "https://user:pass@example.com/", "https://user@example.com/", "",
  ])("rejects %j", (u) => expect(safeExternalUrl(u)).toBeNull());

  it("accepts HTTPS", () => expect(safeExternalUrl("https://example.com/p")).toBe("https://example.com/p"));

  it("returns a tracked affiliate URL byte-for-byte unchanged", () => {
    const issued = "https://s.example.co/AbC?Sub_ID=News%2FStory&utm_source=x&b=2&a=1#frag";
    expect(safeExternalUrl(issued)).toBe(issued);
  });
});

describe("safeImageSrc", () => {
  it("accepts local root-relative paths and HTTPS", () => {
    expect(safeImageSrc("/assets/hero-abc.jpg")).toBe("/assets/hero-abc.jpg");
    expect(safeImageSrc("https://cdn.example.com/a.jpg")).toBe("https://cdn.example.com/a.jpg");
  });
  it.each(["javascript:alert(1)", "data:image/png;base64,AAAA", "//evil.example/a.jpg", "assets/a.jpg", "http://x.com/a.jpg", "https://", " /a.jpg"])(
    "rejects %j", (s) => expect(safeImageSrc(s)).toBeNull(),
  );
});

describe("security headers", () => {
  it("adds three headers and keeps existing headers, status and body", async () => {
    const res = withSecurityHeaders(new Response("hello", { status: 404, headers: { "content-type": "text/plain", "x-custom": "1", "Referrer-Policy": "no-referrer" } }));
    expect(res.status).toBe(404);
    expect(await res.text()).toBe("hello");
    expect(res.headers.get("x-custom")).toBe("1");
    expect(res.headers.get("content-type")).toBe("text/plain");
    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(res.headers.get("Referrer-Policy")).toBe("no-referrer");
    expect(res.headers.get("Permissions-Policy")).toBe("camera=(), microphone=(), geolocation=()");
  });
  it("sets Referrer-Policy when hosting did not", () => {
    expect(withSecurityHeaders(new Response("x")).headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
  });
});
