# S-004 - Illustrated Visual Quality

> Generated from LLM Workbench v2.3. Stable path
> specs/S-004-illustrated-visual-quality/SPEC.md; never move between status folders.

**Spec ID:** S-004
**Status:** blocked
**Priority:** 4
**Owner:** Kayden
**Updated:** 2026-07-17
**Catalog description:** Preserve the approved warm gouache nature-book direction and prove coherent, readable composition across supported viewports.
**Blockers:** S-002 owner watch and subjective visual verdict
**Latest event:** The approved concept, production asset system, fidelity ledger, and current renders were captured in a dedicated stable spec.
**Next gate:** Kayden either accepts the current shipped visual target or names one concrete mismatch after real-phone use.

## Outcome

Puffer Pond looks like one coherent illustrated nature-book world rather than a
collection of unrelated sprites, and the composition remains charming and
readable from desktop through phone and unusual window shapes.

## Why It Matters

Visual warmth is the emotional product. Objective layering and viewport checks
can prevent regressions, but only Kayden can decide whether additional polish
improves the experience enough to justify new art iteration.

## Current Verified State

- docs/concept-desktop.png is the approved style/composition reference.
- public/assets contains one environment plate and independent puffer, duck,
  hummingbird, dog, and snail sprites in a compatible gouache treatment.
- The production environment intentionally contains no baked-in animals so
  creatures can move independently.
- desktop.png, mobile.png, and odd-window.png show coherent habitat layering,
  palette, title/controls, and cropping.
- Current production uses system cursive and rounded system sans typography;
  no remote font request is required.

## Desired Behavior

- Palette, medium, animal treatment, and typography mood remain consistent with
  the approved concept.
- Production animals remain independent from the background plate.
- UI copy and controls remain code-native, sharp, accessible, and visually quiet.
- Desktop, phone, and odd-window compositions retain recognizable sky,
  shoreline, water, underwater grass/log, and wildlife layers.
- New or replacement assets are visually inspected, compressed for phones, and
  carry source/license/attribution records when third-party material is used.
- Subjective polish begins only from a named owner mismatch.

## Decisions And Contracts

- The concept image is direction evidence, not the production background.
- Clean animal-free environment art is an intentional fidelity-preserving deviation.
- Generated production sprites may be reused across instances rather than
  generating unique files per creature.
- Avoid emoji icons and remote font dependencies.
- Visual deviation reasons belong in this spec's append-only evidence.

## Non-Goals

- Photorealism, 3D rendering, or a generic product-design house style.
- Replacing current art merely to increase asset count or novelty.
- Treating an agent's taste as final product acceptance.

## Dependencies And Blockers

- S-002 owns responsive and real-phone composition experience.
- S-003 owns behavior/layer intent for the sprites.
- Owner gate: accept current visual target or name a concrete mismatch.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Establish a coherent animal-free gouache environment and transparent wildlife asset system from the approved concept | done | none | concept-desktop.png, public/assets inventory, and Genesis evidence |
| TK-002 | Prove visual fidelity and habitat layering across desktop, phone, odd-window, and reduced-motion views | done | TK-001 | desktop.png, mobile.png, odd-window.png, and legacy fidelity ledger |
| TK-003 | Apply one named subjective polish adjustment only after Kayden identifies a concrete mismatch | blocked | S-002, owner subjective verdict | owner mismatch pending |

## Acceptance Criteria

- [x] Production palette and treatment remain coherent with the approved concept.
- [x] The environment plate supports independently animated animals.
- [x] Title, controls, and ambient copy remain readable and code-native.
- [x] Desktop, phone, and odd-window captures preserve habitat hierarchy.
- [x] Current assets are compressed web-ready production formats.
- [ ] Any further polish is tied to a named owner-observed mismatch and re-proven across viewports.

## Testing Seams

- Side-by-side concept and production image inspection.
- Browser screenshots at canonical viewports and reduced-motion emulation.
- Asset dimension/format/size inventory.
- Owner visual acceptance after real-phone viewing.

## Verification Procedure

~~~bash
npm run build
node tools/spec-workbench.mjs doctor
~~~

Then inspect the four images named by RUNBOOK.md together.

## Documentation Impact

- BLUEPRINT.md owns the illustrated-warmth pillar.
- LEXICON.md defines the visual target.
- RUNBOOK.md owns viewport capture and comparison commands.
- TASKBOARD.md projects the subjective owner decision.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-14 | TK-001 | Approved concept was translated into an animal-free environment and independent production sprites | desktop and phone captures inspected after asset integration | legacy visual system and fidelity ledger created | owner watch pending |
| 2026-07-15 | TK-002 | Duck and dog responsive polish preserved the visual target in unusual viewports | desktop, mobile, odd-window, and reduced-motion inspection passed | legacy fidelity ledger updated | owner watch pending |
| 2026-07-17 | canon harvest | Ported visual direction and proof into S-004 without changing product art | concept and all current proof images inspected | stable S-004 created; legacy spec archived | TK-003 remains owner-gated |

## Completion Result

Pending only optional subjective owner direction. The shipped visual system and
objective fidelity contract are implemented and evidenced.

## Remaining Limitations Or Follow-Up Specs

- Current visual comparison is human-inspected rather than pixel-diff based.
- S-006/TK-004 can automate geometry and interaction assertions without making
  a subjective visual verdict.

## Supersession

- Supersedes: visual portions of legacy T-001, T-005, and specs/ambient-pond.md.
- Superseded by: none.
