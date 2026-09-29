# Portfolio content sheet — review needed

Compiled on 27 September 2026 from Samuel's answers, the current portfolio, the résumé already in this workspace, public product pages, and read-only review of local backend repository histories. This is an inventory for confirmation, not new biographical copy.

## Positioning

- **Target:** software engineering roles, especially full-stack and backend roles. **Confirmed by Samuel.**
- **Current site headline:** “Full stack engineer building web products and payment systems.” **Existing copy; confirm or replace.**
- **Current site description:** “I work across interfaces, APIs and payment infrastructure, turning complex systems into products people can understand and trust.” **Existing copy; confirm or replace.**
- **Suggested emphasis for hiring managers:** show backend decisions and production outcomes early, with full-stack work as supporting proof. **Editorial suggestion; not a claim about Samuel.**

## Available assets and contact

- Portrait: a file exists in the original assets, but **Samuel later asked to remove his image from the portfolio**. The rebuilt page does not use it.
- Résumé: the April 2026 copy was removed from the public site because it lists the Rivo role as ending before Samuel's confirmed August 2026 date. A corrected résumé can be added later.
- Existing contact route: `ohianisammy2005@gmail.com`, [LinkedIn](https://www.linkedin.com/in/samuel-ohiani/), and [GitHub](https://github.com/samohiani). Samuel confirmed these links should stay.

## Candidate project stories

| Project | Material already available | Missing or to confirm |
| --- | --- | --- |
| **Qualiflow** | Current site describes a full-stack lead qualification workspace: CSV cleaning, adjustable scoring, reasons for rankings, and export. [Live app](https://leads-qualification-app.vercel.app/) was checked and loads; [source](https://github.com/samohiani/leads-qualification-app) and desktop screenshot are available. The site also describes an in-memory processing decision and spreadsheet-export safety. | Confirm the role and technical details, origin/problem, when it was built, a real result or user signal, and whether there is a mobile screenshot or demo. Current “result” describes functionality rather than measured impact. |
| **Iraid** | Current site describes a Next.js frontend and Sanity gallery workflow. [Live site](https://iraid.org) was checked and loads; [gallery](https://iraid.org/gallery), desktop and mobile screenshots are available. | Confirm exact ownership, client/organisation context, dates, whether the team is actively publishing without developer help, and any result or testimonial that can be shared. |
| **HebronBites** | Résumé dates it March 2024; current site describes campus food ordering and delivery with Node.js, Express, Sequelize, PostgreSQL and Paystack. Logo exists. | Need a product screenshot, live/repo/video link if available, your exact backend contribution, users or outcome if known, and whether payment/delivery features reached use. |
| **Buga Travels** | Résumé dates it July 2024; current site describes school ride booking with Node.js, Express, Sequelize and PostgreSQL. Logo exists. | Need a product screenshot, live/repo/video link if available, your exact backend contribution, rollout status, and outcomes if known. |
| **Rivo / Rivo Business** | **Samuel confirmed:** Rivo is under Low Gravity Limited, and he worked on both Rivo and Rivo Business from May 2025 to August 2026. [Public product site](https://www.userivo.co/) describes multi-currency wallets, business payments and developer integrations. Local backend history under apparent Samuel author names includes business onboarding/KYB, payment-link work, transfer support and webhook reliability changes. The résumé's **40% reduction in reported backend-related issues** is confirmed as accurate. Samuel supplied estimated all-time dashboard figures and asked to use the values only, not the image. | Need a concise explanation of the hardest engineering decision and confirmation of which features shipped during his tenure. Use the values as product context, never as a claim that Samuel personally generated the transaction volume. |
| **Nuvion acquiring / payment platform** | **Samuel confirmed:** Resilience 17 is his current employer and Nuvion is a product he helped build there. [Public Nuvion site](https://www.nuvion.co/) describes global banking and payments. Local `main` histories under apparent Samuel author names show payment-method/3DS work, refunds, payment test scenarios, provider error handling, payment-intent responses and shared error contracts. Samuel believes `main` corresponds to production. | Keep the public case study high-level. Do not call work seen only on other branches released. Need a measurable or qualitative result if one is available and approved public imagery or a safe diagram. |

## Experience to reconcile

| Source | What it says | Confirmation needed |
| --- | --- | --- |
| Résumé and Samuel | Resilience 17 — December 2025 to present. Samuel says Software Engineer or Backend Engineer is fine. | Use **Software Engineer** consistently for the portfolio, with the backend work clear in the description. Omit the “Contract” label unless Samuel wants it shown. |
| Samuel | Rivo (under Low Gravity Limited) — May 2025 to August 2026. He worked on Rivo and Rivo Business, and prefers the public name **Rivo**. | Update site and résumé dates. Confirm whether the résumé's **40%** reduction in reported backend issues is accurate and publishable. |
| Site only | Precise Financial Systems internship, March–August 2024; Unified Payment Services internship, March–September 2024. | Confirm both roles and dates and whether they should appear on the portfolio or résumé. |

## Public-facing draft language — not yet approved

- **Rivo:** “I helped build backend services for Rivo and Rivo Business, including business onboarding, KYB, payment links, transfers and webhook handling. My bug fixes and endpoint work helped reduce reported backend-related issues by 40%.” The first sentence follows apparent authored repository changes; the second follows the résumé and Samuel's confirmation.
- **Rivo platform context:** The supplied dashboard screenshot gives **estimated all-time** values of **$106,286.10 in crypto deposits**, **$52,654.98 swapped**, and **6,705 customers**. For public copy, round them to about **$106k**, **$53k** and **6.7k** and label them as platform figures. Do not convert the NGN figures without a dated exchange-rate basis.
- **Nuvion:** “At Resilience 17, I contributed to Nuvion's acquiring platform through payment-method integrations, refund flows, payment test scenarios and consistent API error handling.” This is supported by apparent authored changes reachable from the local `main` branches. Details found only on other branches remain outside production claims.
- **Outcome language:** “Built” or “shipped” should only describe work supported by the user's production statement. No new performance or transaction-success metric has been inferred from code history.

## Content gaps that matter most

1. **Four featured case studies selected:** Nuvion, Rivo / Rivo Business, Qualiflow, and Iraid. This order puts backend depth first for the roles Samuel wants. The latter two show full-stack and frontend range.
2. Give each chosen project a short **problem → contribution → decision → result** story. Use numbers only if you can stand behind them; a qualitative result is fine.
3. Retain all experience, including **Resilience 17 (current), Rivo (ended August 2026), Precise Financial Systems and Unified Payment Services (past internships)**. Keep HebronBites and Buga Travels as a compact earlier-project archive, even though they are not among the four featured stories.
4. Before offering a résumé download, update the old April 2026 copy with the confirmed Rivo end date of August 2026.

## Answer format

- **For copy review:** Correct any overstated contribution in the Rivo/Nuvion drafts above. The current evidence supports the categories, but it cannot by itself show Samuel's exact ownership or approved public wording.
- **For case studies:** Give one engineering decision or tradeoff for each of Rivo and Nuvion, if there is one you can describe publicly.
- **For Iraid/Qualiflow:** Correct any overstated role or outcome in their existing descriptions.

## 29 September content pass

- The featured stories now describe Nuvion's payment-intent actions, provider error parsing and sandbox scenarios, and Rivo's business permissions, payment-link settlement and webhook delivery states. These details were cross-checked against Samuel-authored commits on Nuvion `main` and Rivo `origin/production`.
- Qualiflow and Iraid describe working features and contribution, without invented adoption or revenue metrics. The past internships remain concise because the available sources do not identify a specific shipped feature for either role.
- The outdated résumé PDF was removed from `public/resume/` before launch. The portfolio does not currently offer a résumé download.
- The visible contact action hides the birth year in the email address, but its `mailto:` target still contains it. Replace the address if Samuel wants the year absent from the link itself.
