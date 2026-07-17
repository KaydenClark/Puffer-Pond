# S-001 - Ambient Habitat Experience

> Generated from LLM Workbench v2.3. Stable path
> specs/S-001-ambient-habitat-experience/SPEC.md; never move between status folders.

**Spec ID:** S-001
**Status:** complete
**Priority:** 0
**Owner:** Kayden
**Updated:** 2026-07-17
**Catalog description:** Deliver the immediately watchable one-viewport pond shell with local interactions, opt-in sound, and day/night preference.
**Blockers:** none
**Latest event:** Shipped ambient shell and interactions were harvested from source and legacy proof into a stable capability record.
**Next gate:** none

## Outcome

Opening Puffer Pond immediately presents a complete ambient habitat that is
pleasant to leave open, while a few quiet local interactions let the viewer
engage without turning it into a task or game.

## Why It Matters

The complete first viewport is the product's core promise. Sound, ripples, and
day/night state support calm ownership without accounts, menus, or progression.

## Current Verified State

- App.tsx renders one main pond surface with title, controls, wildlife layers,
  ripple layer, and ambient note.
- Pointer input below 41 percent of the viewport creates a temporary ripple;
  button presses do not create ripples.
- Sound uses a local synthesized Web Audio texture and starts only after the
  viewer activates the labelled control.
- Night mode is a local visual overlay and persists only the
  puffer-pond-night preference in localStorage.
- The live GitHub Pages site returns HTTP 200 at deployed source 93c3d2c.

## Desired Behavior

- The complete ambient product appears in one viewport with motion underway.
- Below-water pointer input may create short-lived ripples without interfering
  with controls.
- Sound remains quiet, synthesized locally, opt-in, and stoppable.
- Day/night mode remains reversible and locally persistent.
- No account, remote state, analytics, or conventional page flow is introduced.

## Decisions And Contracts

- The pond shell is an ambient experience, not a game loop.
- Audio autoplay is forbidden; explicit activation is required.
- Only the night preference persists; sound does not silently restart.
- The visual product remains usable when interactions are ignored.

## Non-Goals

- Feeding, inventory, scores, goals, notifications, or user progression.
- Cloud preferences, accounts, analytics, or remote audio.
- Sections below the pond or a separate settings page.

## Dependencies And Blockers

- S-002 owns responsive/accessibility behavior.
- S-003 owns autonomous creatures and pond behavior.
- S-004 owns illustrated visual fidelity.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Ship the complete full-viewport pond shell with title, habitat layers, and calm ambient copy | done | none | App.tsx and styles.css plus desktop/mobile captures |
| TK-002 | Ship local ripple, opt-in sound, and persistent day/night interactions without network state | done | TK-001 | 2026-07-14 browser interaction proof and current source inspection |

## Acceptance Criteria

- [x] Opening the root URL immediately shows the complete pond experience.
- [x] No scroll or second page section is required.
- [x] Water input creates a temporary ripple and controls remain independent.
- [x] Sound starts only after explicit activation and can be stopped.
- [x] Night mode toggles and persists locally.
- [x] The ambient experience introduces no account, tracker, backend, or remote data.

## Testing Seams

- Browser interaction check for sound and night aria-pressed state.
- Browser assertion that one ripple appears after valid pond input.
- DOM/CSS overflow checks at representative viewports.
- Source/network inspection for accidental external requests.

## Verification Procedure

~~~bash
npm test
npm run build
node tools/spec-workbench.mjs doctor
~~~

Then run the interaction and viewport checks in RUNBOOK.md.

## Documentation Impact

- BLUEPRINT.md owns the ambient product promise and non-goals.
- README.md explains viewer interactions.
- RUNBOOK.md owns exact browser verification.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-14 | TK-001 | Genesis shipped the one-viewport ambient shell | production build transformed 17 modules; desktop and 390x844 renders inspected | legacy controls and README recorded the product | none |
| 2026-07-14 | TK-002 | Ripple, sound, and night interactions shipped | browser proof: sound true, night true, ripple count 1, overflow false | legacy spec recorded acceptance | none |
| 2026-07-17 | canon harvest | Ported shipped behavior and proof from the non-stable ambient spec | source, screenshots, live site, native tests, and build inspected | stable S-001 created; legacy record archived | none |

## Completion Result

The ambient habitat shell and its optional local interactions are implemented,
live, documented, and independently verifiable without a backend or account.

## Remaining Limitations Or Follow-Up Specs

- Phone-specific experience is S-002.
- Optional installability is S-005 and remains owner-gated.

## Supersession

- Supersedes: ambient portions of legacy T-001 and specs/ambient-pond.md.
- Superseded by: none.
