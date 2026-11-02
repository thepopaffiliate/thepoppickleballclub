import { describe, expect, it } from "vitest";
import { gear, getGearBySlug, visibleGear } from "@/content/gear";
import { stories, getStoryBySlug, visibleStories, storiesForGear } from "@/content/stories";
import { news, getNewsBySlug } from "@/content/news";

describe("public visibility", () => {
  it("lists only published gear and stories", () => {
    expect(visibleGear.every((g) => g.status === "published")).toBe(true);
    expect(visibleStories.every((s) => s.status === "published")).toBe(true);
  });
  it("demo/draft gear, story and news slugs are not reachable", () => {
    for (const g of gear.filter((x) => x.status !== "published")) expect(getGearBySlug(g.slug)).toBeUndefined();
    for (const s of stories.filter((x) => x.status !== "published")) expect(getStoryBySlug(s.slug)).toBeUndefined();
    for (const n of news.filter((x) => x.status !== "published")) expect(getNewsBySlug(n.slug)).toBeUndefined();
  });
  it("related stories exclude demo content", () => {
    expect(storiesForGear("g1")).toEqual([]);
  });
});
