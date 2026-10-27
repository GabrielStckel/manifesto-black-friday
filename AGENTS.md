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

- Keep Manifesto content in the typed content module and render section kinds with a compile-time exhaustive switch, so content revisions remain independent of presentation.
- Use dedicated pattern, pillars and optional guide sections with existing SectionShell and Reveal primitives, so the visual identity remains consistent.
- Hide empty guide biographies and testimonial lists instead of generating filler, so only supplied evidence is shown.
- Keep checkout offer selection and campaign deadline centralized in config; checkout builders preserve incoming tracking without allowing offer overrides.
- Share immersion presentation through global semantic tokens, a common CTA component and viewport-aware animation primitives, so visual changes never alter content or checkout configuration.
- Keep the visitor bundle free of the backend client and React Query; backend access happens only in server routes, so initial JS stays small.
- Reveal is CSS-only (animation-timeline: view()) and content is visible in the HTML by default, so slow networks never hide text before hydration.
- Checkout links carry the full tracked URL in href and log clicks with sendBeacon without preventDefault, so tracking never delays or blocks the checkout.
- Gate only the hero CTA and floating CTA with the configured VTurb reveal class when VSL is enabled; keep the hero content free of a z-index stacking context so player overlays can rise above navigation.
- Serialize a self-contained Meta Pixel bootstrap into the root head, limiting initialization to the sales page and deferring the SDK after load; gate all reporting on the same-origin hosting country signal and current advertising refusal so SSR and hydration cannot duplicate events.
