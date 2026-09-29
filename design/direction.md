# Portfolio design direction — initial concept for Samuel

This initial light concept was superseded by the implemented [cinematic direction](./cinematic-direction.md) after Samuel's September 27 feedback. Keep this record for the content decisions and earlier rationale; use the cinematic direction for current colours, type and motion.

Status: **Implemented as a local preview.** Updated after Samuel requested a portrait-free rebuild of the whole site.

## Core idea

A **quiet engineering portfolio with one cinematic entrance**. The main site borrows Victor Williams's reading clarity, Henry Taiwo's direct engineering point of view, and the strong project imagery in Samuel's other references. A brief red-on-black reveal supplies the Stranger Things-inspired mood; the work itself stays calm, credible and easy to scan.

## Palette

| Role | Colour | Use |
| --- | --- | --- |
| Paper | `#F5F6F4` | Main reading canvas. A cool near-white, not cream. |
| Ink | `#111317` | Headlines, body text and navigation. |
| Graphite | `#5B6064` | Supporting copy and metadata. |
| Rule | `#D8DCDA` | Hairline separators and image boundaries. |
| Midnight | `#09090C` | Cinematic reveal and occasional project media background. |
| Signal red | `#8C1825` | Brief entrance light and rare focus/hover detail. Never a neon headline highlight. |

## Type

- **IBM Plex Sans:** headlines, body, navigation. Use size, weight and spacing for character instead of mixing many type styles.
- **IBM Plex Mono:** a small supporting role in the intro and technical details. No decorative uppercase labels on every section.

## Page structure

1. **Hero:** a compact name/role line followed by a confident statement and two-line description. No portrait. Links to work and email stay plain.
2. **Selected work:** four editorial case studies, ordered **Nuvion → Rivo → Qualiflow → Iraid** for backend and full-stack roles. Each shows problem, Samuel's contribution, one real decision and outcome. Nuvion uses a public-safe graphic; Rivo has a simple service map and uses only the supplied dashboard's all-time USD values as labelled text; Qualiflow and Iraid use their real screenshots.
3. **Experience:** a clean dated list with Resilience 17 as current; Rivo ends in August 2026. Precise Financial Systems and Unified Payment Services stay visible as earlier internships. Each entry has a short, concrete contribution rather than a card of generic skills.
4. **Earlier builds:** a compact text-and-link archive for HebronBites and Buga Travels, preserving work that is no longer live or featured.
5. **About:** a short first-person paragraph about how Samuel approaches full-stack and backend engineering. No portrait or invented biography.
6. **Contact/footer:** email as the main action, with GitHub and LinkedIn nearby. The résumé link will return after its Rivo date is corrected.

## One memorable moment

On the first visit in a browser session, a narrow red light appears on a near-black screen, then the panels open to reveal the quiet portfolio. The animation lasts about 1.75 seconds, never displays a fake loading percentage, and never delays a returning visitor in the same session. Reduced-motion visitors see the page immediately. It draws on cinematic tension without copying the show's title, lettering or assets.

## Checks against the templated look

- No numbered section labels, coloured headline word, grid of identical rounded cards, icon tiles or decorative technology pills.
- No arrow on every link or repeated fade-up effect.
- The Rivo numbers appear as clearly labelled estimated all-time platform context in its case study, not as a screenshot or personal-impact counter row.
- Project imagery and specific technical choices carry the visual story.

## Open content points

- The Rivo dashboard numbers are approximate all-time product figures. Only the USD figures should be shown; no screenshot or NGN-to-USD conversion is proposed.
- Rivo's 40% reduction in reported backend-related issues is a separate, confirmed résumé claim.
- Nuvion production wording stays tied to changes found on local `main`; other branch work can be described as contribution only if needed, without saying it launched.
