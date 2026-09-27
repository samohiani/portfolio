# Frontend design review — initial light concept

This review predates the current [cinematic direction](./cinematic-direction.md).

Applied to the local portfolio after installing Anthropic's `frontend-design` skill. Samuel's brief: a minimal, cinematic portfolio for backend and full-stack roles, with no portrait, four leading projects, complete experience, and a Stranger Things-inspired entrance confined to the loader.

## Design plan

- **Colour:** paper `#F5F6F4`, ink `#111317`, graphite `#5B6064`, rule `#D8DCDA`, midnight `#09090C`, signal red `#8C1825`. The red line links the loader to the payment-flow visual.
- **Type:** IBM Plex Sans carries the large headline and readable project stories. IBM Plex Mono appears only in the loader and a technical flow where it conveys system states.
- **Layout:** left-aligned, open hero; alternating visual and explanation for four case studies; dated experience rows; compact earlier builds; a dark closing section. Editorial space, rather than repeated cards, groups the work.

```text
Samuel Ohiani                         Work  Experience  About  Contact
status                                             Lagos

FROM INTERFACE
TO INFRASTRUCTURE.
                                  concise positioning + links

Selected work                    scope of work
Nuvion visual                    contribution / decision / result
Rivo flow                        contribution / decision / result
Qualiflow screenshot             contribution / decision / result
Iraid screenshot                 contribution / decision / result

Experience                       dated roles
Earlier builds                   archived projects
About / contact                  one dark closing field
```

- **Principle:** show engineering judgment and public product evidence without making private architecture into decoration. The loader is the one dramatic motion moment.

## Review against the brief

The existing palette, type, project order, and loader fit the brief. The duplicate hero role, generic section introductions, repeated middle-dot metadata, and purely decorative Rivo rings could have appeared on another engineer's portfolio. Remove those. Use Rivo's verified areas of work to turn its visual into a simple, readable service flow. Keep the Qualiflow and Iraid screenshots literal, and preserve the Rivo USD figures as labelled all-time platform context in text only.
