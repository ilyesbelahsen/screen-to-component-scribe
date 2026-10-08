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

## Conventions

- Sections are visually separated by surface tone, not borders: use the `Section` component's `tone` prop (`ivory`, `sand`, `ink`) and keep neighbouring sections on different tones. Why: the site reads as alternating ivoire / beige / anthracite bands, so a raw `<section>` or a repeated tone flattens the hierarchy.
