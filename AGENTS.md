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

- Keep each major clinical workflow as its own TanStack route while sharing the KosovaHealth shell and domain UI; this preserves deep links and consistent navigation.
- Keep the current experience demo-only and client-side until persistent accounts or clinical storage are explicitly requested; this avoids implying real medical data storage.
