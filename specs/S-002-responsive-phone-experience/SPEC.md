# S-002 - Responsive Phone Experience

> Generated from LLM Workbench v2.3. Stable path
> specs/S-002-responsive-phone-experience/SPEC.md; never move between status folders.

**Spec ID:** S-002
**Status:** blocked
**Priority:** 2
**Owner:** Kayden
**Updated:** 2026-07-17
**Catalog description:** Keep the full habitat readable, accessible, and overflow-free across phones, desktop, reduced motion, and unusual viewport shapes.
**Blockers:** owner real-phone watch verdict
**Latest event:** Responsive and reduced-motion behavior is shipped; the previous ready phone-profile task was corrected to an owner experience gate.
**Next gate:** Kayden watches the live site for five minutes on one real phone and records the experiential verdict.

## Outcome

Puffer Pond retains its complete sky, shoreline, water, and underwater story on
phone and desktop while controls remain comfortable, content remains layered
correctly, and reduced-motion viewers keep a calm legible scene.

## Why It Matters

Kayden's phone is the primary use case. Screenshot correctness is necessary but
cannot establish thermal comfort, perceived smoothness, or whether the pacing
is pleasant over time.

## Current Verified State

- CSS fills width/height with hidden overflow and 100svh minimum height.
- Header placement uses safe-area insets and mobile controls are 46px square.
- Desktop 1536x1024, phone 390x844, and odd-window 1100x460 captures exist.
- Reduced-motion CSS retains stationary wildlife and disables repeated motion.
- The dog shoreline anchor was corrected in commit 93c3d2c.
- No current real-phone five-minute watch verdict identifies device, thermal
  behavior, landscape crop, control comfort, or repetition.

## Desired Behavior

- Supported viewports show one complete scene without horizontal or vertical scroll.
- The title, controls, waterline, and all habitat bands remain readable.
- Controls remain labelled, keyboard accessible, and at least 44px.
- Reduced motion produces a calm, understandable habitat.
- A real-phone owner watch validates the subjective/performance experience
  before any motion reduction or feature prioritization.

## Decisions And Contracts

- Phone-first does not mean phone-only; desktop and odd windows remain supported.
- Waterline discipline is responsive rather than one fixed pixel coordinate.
- Screenshots and synthetic checks cannot close the owner watch verdict.
- Agents may fix objective overflow/accessibility regressions, but may not tune
  subjective calmness, thermal tradeoffs, or pacing without Kayden's result.

## Non-Goals

- Supporting obsolete browsers or every possible embedded webview.
- Native iOS/Android packaging.
- Claiming battery/FPS quality from desktop automation alone.

## Dependencies And Blockers

- S-001 supplies the ambient shell.
- S-003 and S-004 supply the moving/layered content under test.
- Owner gate: one five-minute watch on a real phone in portrait and landscape.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Make the full habitat and controls responsive at desktop and 390x844 phone sizes with no overflow | done | none | desktop.png, mobile.png, source inspection, and legacy interaction proof |
| TK-002 | Keep shoreline visitors and reduced-motion composition correct at unusual window shapes | done | TK-001 | odd-window.png, reduced-motion inspection, and commit 93c3d2c |
| TK-003 | Record a five-minute real-phone portrait/landscape watch verdict covering smoothness, thermal feel, cropping, controls, calmness, and repetition | blocked | owner real-phone watch | owner evidence pending |

## Acceptance Criteria

- [x] Desktop and 390x844 phone views fit without scroll.
- [x] Safe-area-aware controls remain at least 44px and labelled.
- [x] Dogs remain above the shoreline in the 1100x460 proof viewport.
- [x] Reduced motion retains a legible pond and stationary duck pair.
- [ ] Kayden records a real-phone portrait and landscape watch verdict.
- [ ] Any requested tuning is either completed with proof or routed to a linked follow-up spec.

## Testing Seams

- Browser viewport overflow assertions.
- Element bounding-box checks for controls, habitat layers, and shoreline visitors.
- Reduced-motion emulation and screenshot comparison.
- Owner phone-watch checklist for subjective and thermal qualities.

## Verification Procedure

~~~bash
npm test
npm run build
node tools/spec-workbench.mjs doctor
~~~

Run the desktop, 390x844, odd-window, reduced-motion, and owner phone-watch
procedures in RUNBOOK.md.

## Documentation Impact

- RUNBOOK.md owns viewport and phone-watch procedures.
- TASKBOARD.md projects the owner decision until resolved.
- This spec owns the final experiential verdict and any follow-up routing.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-14 | TK-001 | Responsive desktop and phone composition shipped | 1536x1024 and 390x844 captures; overflow false | legacy spec and Runbook updated | owner watch not yet run |
| 2026-07-15 | TK-002 | Duck and dog shoreline composition polished | desktop, mobile, 1100x460 dog, and reduced-motion inspections passed | legacy controls updated | owner watch not yet run |
| 2026-07-17 | canon harvest | Corrected legacy T-002 from ready agent work to an owner-gated experiential verdict | source, captures, and live runtime compared with campaign boundary | stable S-002 and Taskboard owner row created | TK-003 remains owner-gated |

## Completion Result

Pending the owner real-phone verdict. Objective responsive and reduced-motion
acceptance is already implemented and evidenced.

## Remaining Limitations Or Follow-Up Specs

- A real phone may expose thermal, landscape crop, or pacing issues not visible
  in current automated proof.

## Supersession

- Supersedes: legacy T-002, T-005 responsive scope, and responsive portions of specs/ambient-pond.md.
- Superseded by: none.
