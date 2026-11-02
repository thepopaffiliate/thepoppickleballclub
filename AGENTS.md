<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Discovery architecture
- Keep category-specific four-option budgets in `src/content/gear-config.ts`; use numeric bounds rather than legacy budget IDs for matching so each category can evolve independently.
- Expose only status "published" records in public listings and detail routes (demo/draft slugs 404); demo records stay in source for tests only.
- Use `src/lib/product-data.ts` for price eligibility, review labels and exact channel-aware affiliate selection so every discovery surface shares the same safety rules.
- Use the existing `/stories` and `/news` routes for editorial and sourced updates; article gear blocks and related gear reuse product cards and `/gear/$slug` pages to avoid parallel discovery templates.
- Use the Button component's site variants for modified controls to preserve the existing brand button styling without bypassing the shared design system.
