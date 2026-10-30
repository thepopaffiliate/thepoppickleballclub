export function pageMeta(opts: { title: string; description: string; path: string; type?: string; image?: string; noindex?: boolean }) {
  const title = `${opts.title} | The Pop.`;
  return {
    meta: [
      { title },
      { name: "description", content: opts.description },
      { property: "og:title", content: title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.type ?? "website" },
      { property: "og:url", content: opts.path },
      { name: "twitter:card", content: "summary_large_image" },
      ...(opts.noindex ? [{ name: "robots", content: "noindex" }] : []),
      ...(opts.image?.startsWith("https://") ? [
        { property: "og:image", content: opts.image },
        { name: "twitter:image", content: opts.image },
      ] : []),
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
