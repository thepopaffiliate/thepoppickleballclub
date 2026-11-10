import type { SocialPost } from "./types";

export const socialPosts: SocialPost[] = [];

export const visibleSocial = socialPosts.filter((p) => p.status !== "draft");
