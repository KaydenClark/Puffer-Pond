# Ambient Pond Capability

Status: implemented

Owner: Kayden

## Promise

Opening Puffer Pond immediately shows a complete, cute, responsive habitat that is pleasant to leave running on a phone. The underwater family looks for snails among grass and driftwood while above-water visitors create occasional small surprises.

## Acceptance Criteria

- [x] The product is one full-bleed viewport with no required scrolling.
- [x] Five pea puffers move independently below the waterline.
- [x] Snails appear in grass and around the driftwood arch.
- [x] Birds fly above water and visually pause near tree/shore destinations.
- [x] A green hummingbird visits the flowers intermittently.
- [x] Two friendly dogs intermittently approach the shore and drink.
- [x] Tap/click below the waterline creates a ripple.
- [x] Sound is optional and begins only after explicit input.
- [x] Day/night mode is available and persists locally.
- [x] Motion respects `prefers-reduced-motion`.
- [x] Desktop and 390x844 phone compositions remain readable and overflow-free.

## Behavior Contract

- Hummingbird wait window: 25-45 seconds; visible for 11 seconds.
- Dog wait window: 55-95 seconds; visible for 16 seconds.
- Rare visitors alternate after the first randomized event.
- Five puffer profiles use distinct durations, scales, anchors, and routes.
- Debug-only visitor query strings affect only the initial visible state and remain useful for screenshots.
- Sound uses a tiny synthesized water-drop texture and creates no network request.

## Visual System

- Direction: premium hand-painted children's nature-book gouache; cute, calm, and editorial rather than babyish.
- Palette: sky blue, clear aqua, moss, fern, sage, warm cream, and golden animal accents.
- Typography: hand-lettered system cursive for title/note; compact rounded system sans for controls.
- Container model: one full-bleed scene with only two small rounded controls.
- Production assets: generated environment, puffer, bird, hummingbird, dog pair, and snail in `public/assets/`.
- Concept: `docs/concept-desktop.png`.

## Fidelity Ledger

| Comparison point | Concept evidence | Render evidence | Resolution |
|---|---|---|---|
| Full-screen composition | Waterline splits one illustrated viewport | `docs/desktop.png` and `docs/mobile.png` fill each viewport | matched |
| Copy | Title, Sound, Night, and one bottom note | Same four visible copy elements | matched |
| Wildlife layering | Birds/dogs/hummingbird above; puffers/snails below | Final screenshots keep every species in its habitat | fixed after first QA pass |
| Palette and asset treatment | Bright gouache nature-book world | Generated background and transparent sprites share the same palette/medium | matched |
| Controls | Two warm-cream rounded controls in top-right | 48px desktop and 46px mobile touch controls | matched |
| Responsive continuation | Phone should retain sky, shore, water, and underwater log/grass | 390x844 capture shows all habitat bands without overflow | matched |
| Motion | Autonomous wildlife with quiet rare events | CSS wildlife paths plus tested event scheduler | matched in browser and logic tests |

Intentional deviation: the environment is a clean animal-free production plate rather than the concept image itself, allowing each animal to move independently. The composition, palette, and illustration style remain locked to the concept.

## Evidence Log

Append only.

| Date | Evidence | Result | Demo |
|---|---|---|---|
| 2026-07-14 | Genesis v2.3 frame, blueprint, architecture, scaffold, concrete scopes, runbook, hot projection, and handoff completed | pass | `docs/desktop.png` |
| 2026-07-14 | `npm.cmd test` before implementation | expected fail: missing `src/simulation.ts` | red phase captured |
| 2026-07-14 | `npm.cmd test` after implementation | pass: 3 tests | terminal proof |
| 2026-07-14 | `npm.cmd run build` | pass: Vite production build, 17 modules | `dist/` regenerated |
| 2026-07-14 | Playwright 1536x1024 and 390x844 captures with forced rare visitors | pass after correcting puffer path origins; no visual overflow | `docs/desktop.png`, `docs/mobile.png` |
| 2026-07-14 | Playwright interaction script | pass: sound true, night true, ripple count 1, overflow false | terminal JSON proof |
| 2026-07-14 | GitHub Pages workflow run `29386134625` plus live 390x844 Playwright capture | pass: build and deploy jobs green; public phone view rendered correctly | `https://kaydenclark.github.io/Puffer-Pond/` |
