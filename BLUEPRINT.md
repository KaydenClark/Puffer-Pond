# Puffer Pond - Blueprint

> Generated from LLM Workbench v2.3.

**Last reviewed:** 2026-07-17
**Status:** active
**Source root:** /Users/kayden/GPT_OS/Projects/Puffer-Pond

## Product Map

Puffer Pond is a responsive, full-screen ambient website for Kayden to leave
open on a phone or desktop. Opening the site immediately reveals a charming
living pond where a family of pea puffers searches for snails while ducks and
occasional shoreline visitors make the habitat feel alive.

Core promise:

> A cute, calm, one-viewport living pond that is immediately watchable on a
> phone and needs no account, setup flow, or ongoing attention.

Primary user: Kayden, especially on a phone in portrait or landscape orientation.

### Active Test-Project Purpose

Puffer Pond is also the active end-to-end test project for the LLM Workbench's
small visual-product path. It tests whether one settled Genesis request can be
carried through filled controls and stable specs, generated art, a working
React implementation, red/green logic tests, responsive visual proof, public
static deployment, remote recovery, and later canon/harness updates without
losing shipped behavior or history. It is a real ambient product first; its
test role does not justify artificial features or benchmark-only product work.

The founding prompt, preserved verbatim in the cold legacy spec archive,
established the pond, puffer family, snails, birds, hummingbird, dogs, cute phone
experience, new remote, commit, and push. The 2026-07-15 owner revision
superseded always-on blue birds with less-frequent duck pairs while retaining
the hummingbird and requiring dogs above the responsive waterline.

## Goals And Pillars

- **Alive at a glance:** the first viewport is the complete product and motion
  is already underway.
- **Small stories, not noise:** wildlife overlaps naturally without clutter.
- **Phone-first calm:** controls remain thumb-friendly and the habitat fills
  any supported screen.
- **Illustrated warmth:** gouache assets maintain a coherent nature-book style.
- **Respectful motion:** reduced-motion users keep the scene with calmer motion.
- **Evidence-backed delivery:** tests, browser proof, deployment, and remote
  recovery make the active test-project claim inspectable.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Runtime | Evergreen browser; Node.js 24 in Pages CI and current local Node.js 26 tooling | Static product with no runtime service; package and workflow verified 2026-07-17 |
| Product surface | React 19, TypeScript 7, Vite 8 single-page ambient scene | src/App.tsx, src/styles.css, package.json |
| Visual layer | Full-bleed raster environment plus transparent wildlife sprites and CSS motion | public/assets/, docs/concept-desktop.png |
| State/storage | React state plus localStorage for night preference; sound is session-local and opt-in | src/App.tsx |
| Behavior model | Pure scheduling/profile helpers plus browser timers | src/simulation.ts and src/simulation.test.ts |
| Backend/data | None | No account, database, analytics, API, or personal data |
| Testing | Vitest logic suite, TypeScript/Vite build, browser viewport and interaction checks | package scripts and RUNBOOK.md |
| Deployment | GitHub Pages from main through .github/workflows/deploy-pages.yml | Live URL and successful workflow at source SHA 93c3d2c |

Rules that span capabilities:

- The pond fits one viewport with no required scrolling.
- Puffers and snails stay below the waterline; visiting animals respect the
  responsive shoreline.
- Rare visitors remain intermittent and are not required to understand the scene.
- UI copy and controls remain code-native, labelled, keyboard accessible, and
  at least 44px on touch surfaces.
- Reduced motion retains a legible habitat rather than removing the product.
- No tracker, remote font, account, credential, backend, or personal-data
  collection is introduced without an owner decision.
- Product-direction work is not agent-ready merely because it appears feasible.

## Non-Goals

- Aquarium husbandry simulation or biologically exact fish AI.
- Feeding, breeding, inventory, scores, currencies, or progression.
- Accounts, cloud saves, chat, analytics, advertising, or payments.
- A conventional marketing page below the pond, photorealism, or a 3D engine.
- Adding features only to make the Workbench test project appear more complex.

## Spec Catalog

The generated catalog links every durable capability record, including completed
history. Human-authored product prose stays outside the markers.

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Ambient Habitat Experience](specs/S-001-ambient-habitat-experience/SPEC.md) | Deliver the immediately watchable one-viewport pond shell with local interactions, opt-in sound, and day/night preference. | complete |
| [S-002 - Responsive Phone Experience](specs/S-002-responsive-phone-experience/SPEC.md) | Keep the full habitat readable, accessible, and overflow-free across phones, desktop, reduced motion, and unusual viewport shapes. | blocked |
| [S-003 - Creature And Pond Behavior](specs/S-003-creature-and-pond-behavior/SPEC.md) | Maintain a distinct puffer family, snails, duck landings, and alternating rare visitors that make the pond feel alive without visual noise. | blocked |
| [S-004 - Illustrated Visual Quality](specs/S-004-illustrated-visual-quality/SPEC.md) | Preserve the approved warm gouache nature-book direction and prove coherent, readable composition across supported viewports. | blocked |
| [S-005 - Installable Offline PWA Direction](specs/S-005-installable-offline-pwa/SPEC.md) | Decide whether Puffer Pond should remain a link-based static site or become an installable home-screen experience with offline reload. | blocked |
| [S-006 - Verification And Static Delivery](specs/S-006-verification-and-static-delivery/SPEC.md) | Keep deterministic logic tests, production builds, browser acceptance evidence, GitHub Pages deployment, and remote recovery reproducible. | active |
| [S-007 - Workbench v2.3 Lifecycle Update](specs/S-007-workbench-v2-3-lifecycle-update/SPEC.md) | Reconcile Puffer Pond's generated controls with the complete v2.3 stable-spec lifecycle while preserving shipped behavior, proof, and remote history. | active |
<!-- spec-catalog:end -->

## Blueprint-To-Spec Coverage Matrix

This matrix records the classification found during the 2026-07-17 canon
harvest and the durable owner after conversion. Every meaningful current
capability or decision is accounted for.

| # | Direction or capability | Harvest classification | Current owner | Evidence / resolution |
|---:|---|---|---|---|
| 1 | Full-screen ambient pond shell | implemented but missing a durable capability spec | S-001 | App and CSS ship the one-viewport scene |
| 2 | Ripple interaction below the waterline | implemented but missing a durable capability spec | S-001 | App pointer handler and current browser proof |
| 3 | Opt-in pond sound | implemented but missing a durable capability spec | S-001 | Web Audio starts only after the Sound control |
| 4 | Persistent day/night preference | implemented but missing a durable capability spec | S-001 | localStorage-backed Night control |
| 5 | Responsive no-overflow composition | implemented but missing a durable capability spec | S-002 | desktop, mobile, odd-window captures and CSS |
| 6 | Phone-safe controls and safe-area layout | implemented but missing a durable capability spec | S-002 | mobile CSS and 46px controls |
| 7 | Keyboard, labels, live arrival text, and reduced motion | implemented but missing a durable capability spec | S-002 | App semantics and reduced-motion CSS |
| 8 | Real-phone five-minute performance/watch verdict | unresolved owner decision | S-002 | owner must experience thermal, smoothness, and calmness |
| 9 | Five-member puffer family and snails | implemented but missing a durable capability spec | S-003 | simulation profiles, sprites, and tests |
| 10 | Intermittent duck-pair landings | implemented but missing a durable capability spec | S-003 | duck scheduler and current visual proof |
| 11 | Alternating hummingbird and dog visits | implemented but missing a durable capability spec | S-003 | tested visitor windows and alternation |
| 12 | Additional puffer behavior variety | unresolved owner decision | S-003 | optional direction after real-phone watch |
| 13 | Approved gouache nature-book direction | implemented but missing a durable capability spec | S-004 | concept and production assets |
| 14 | Cross-viewport visual fidelity | implemented but missing a durable capability spec | S-004 | concept, desktop, mobile, and odd-window ledger |
| 15 | Further subjective visual polish | unresolved owner decision | S-004 | requires Kayden's product verdict |
| 16 | Installable home-screen and offline PWA | unresolved owner decision | S-005 | previous taskboard incorrectly labeled this ready; now owner-gated |
| 17 | Deterministic scheduling/profile tests | implemented but missing a durable capability spec | S-006 | four Vitest tests pass |
| 18 | TypeScript and production build gate | implemented but missing a durable capability spec | S-006 | npm run build transforms 17 modules |
| 19 | Browser screenshot and interaction proof | implemented but missing a durable capability spec | S-006 | current desktop/mobile/odd-window artifacts |
| 20 | GitHub Pages deployment and remote recovery | implemented but missing a durable capability spec | S-006 | live HTTP 200 and successful workflow run 29539998708 |
| 21 | Always-on blue birds | superseded | S-003 | owner replaced them with intermittent duck pairs; unused bird asset is not current behavior |
| 22 | Windows-only operating assumption | contradicted by live source | S-006 / RUNBOOK.md | native tests/build pass on the current Mac with Node.js 26.3.0 |
| 23 | Stable spec lifecycle, generated board, Lexicon, Claude bridge | implemented but missing a durable capability spec | S-007 | current update-harness checkpoint |

Coverage result: 23 classified items, 23 assigned owners, zero unexplained or
unjustified uncovered items. Category totals at harvest: 17 implemented but
missing durable specs, 0 settled-unimplemented missing specs, 1 contradicted by
live source, 1 superseded item, and 4 unresolved owner decisions.

## Cross-Cutting Health

- npm test passes the deterministic behavior suite.
- npm run build passes TypeScript and the production build.
- The live Pages site returns HTTP 200 at the recorded deployed source SHA.
- Visual proof covers desktop, 390x844 phone, reduced motion, and 1100x460.
- node tools/spec-workbench.mjs doctor must remain green after control changes.
