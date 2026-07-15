# Puffer Pond - Blueprint

> Generated from LLM Workbench v2.3.

## Product Map

Puffer Pond is a responsive, full-screen ambient website for Kayden to leave open on a phone or desktop. Its core promise is simple: opening the site immediately reveals a charming living pond where a family of pea puffers searches for snails while birds and occasional visitors make the habitat feel alive.

Primary user: Kayden, especially on a phone in portrait or landscape orientation.

Founding prompt, preserved verbatim:

> https://github.com/KaydenClark/LLM_Workbench/tree/integration
>
> Will you create a new project willing the Genesis protocol under the projects folder, set up a new remote repo and when you are done, commit and push to it.
>
> Goal: A responsive website that has a pond with a family of pea puffers inside of it, swiming and looking for snails in the grass and under drift wood. above the water are trees with birds fling around landing on the ground by the water and in the trees. every once in a while a green humming bird should come out and drink from some flowers, or some dogs should run out and drink from the pond. It should be really cute and fun to watch and have open on my phone.

Hard constraints: responsive website; pond habitat; pea-puffer family; snails, grass, and driftwood; birds with flight and landing behavior; rare green hummingbird and dog visits; cute, watchable phone experience; new remote repository; commit and push when complete.

Assumptions: no account, backend, data collection, or paid service is needed. The experience should work as a static site and retain only local sound/theme preferences.

## Goals And Pillars

1. **Alive at a glance** - the first viewport is the complete product, with motion already underway.
2. **Small stories, not noise** - wildlife behaviors overlap naturally without turning the scene into visual clutter.
3. **Phone-first calm** - controls remain thumb-friendly, animation remains legible, and the habitat fills any screen.
4. **Illustrated warmth** - generated gouache assets establish a coherent premium nature-book style.
5. **Respectful motion** - reduced-motion users receive a calm, mostly still habitat without losing the scene.

## Cross-Cutting Architecture And Invariants

| Concern | Choice | Reason |
|---|---|---|
| Runtime | Modern evergreen browser; Node.js 24 for tooling | Static delivery keeps operation simple and phone-friendly. |
| Language | TypeScript 7 | Strong contracts for visitor scheduling and UI state. |
| Frontend | React 19 + Vite 8 | Small, well-supported component model with fast static builds. |
| Visual layer | Full-bleed raster environment plus transparent wildlife sprites and CSS motion | Matches the approved illustrated concept while keeping characters independently animated. |
| Storage | `localStorage` for sound and day/night preferences only | No server or personal data is necessary. |
| Backend | None | The product is a self-contained ambient scene. |
| Testing | Vitest for scheduling/state logic; TypeScript and Vite production build | Covers deterministic behavior and integration viability. |
| Deployment | Static hosting compatible with GitHub Pages, Netlify, or Vercel | No runtime service is required. |

Invariants:

- The pond scene always fits one viewport and does not require scrolling.
- Above-water wildlife stays above the visual waterline; puffers and snails stay below it.
- Rare visitors are intermittent and never required to understand the experience.
- UI copy and controls remain code-native and keyboard accessible.
- Generated source art is retained only when it is part of durable design evidence; temporary chroma-key sources are not shipped.
- No network request, tracking, account, credential, or personal-data collection is introduced without an explicit owner decision.

## Non-Goals

- Aquarium husbandry simulation or biologically exact fish AI.
- Feeding, breeding, inventory, scores, currencies, or game progression.
- User accounts, cloud saves, chat, analytics, advertising, or payments.
- A conventional marketing homepage with sections below the pond.
- Photorealistic wildlife or a 3D engine.

## Spec Catalog

| Capability | Spec | Status |
|---|---|---|
| Ambient pond experience | `specs/ambient-pond.md` | active |

## Cross-Cutting Health

- Visual target: `docs/concept-desktop.png`.
- Performance target: smooth motion on a modern phone with no layout overflow.
- Accessibility target: labelled 44px touch controls, keyboard access, sensible contrast, and `prefers-reduced-motion` support.
- Asset budget: generated production images should be compressed and reused rather than duplicated per animal.
