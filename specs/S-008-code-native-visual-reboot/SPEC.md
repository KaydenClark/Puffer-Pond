# S-008 - Code-Native Visual Reboot

> Generated from LLM Workbench v2.3. Stable path
> `specs/S-008-code-native-visual-reboot/SPEC.md`; never move between status folders.

**Spec ID:** S-008
**Status:** planned
**Priority:** 0
**Owner:** Kayden (product); Engineer (implementation)
**Updated:** 2026-07-19
**Catalog description:** Replace Puffer Pond's raster-led habitat and paper-like sprite presentation with a richer code-native ambient visual system while preserving the calm, one-viewport product.
**Blockers:** Workbench S-022 decision-skill update must complete its release and downstream-update proof before Puffer Pond becomes its dogfood visual reboot.
**Latest event:** Kayden rejected the current PNG/sprite-led visual direction and requested a from-scratch Workbench test-project reboot.
**Next gate:** Complete and pin the Workbench S-022 update; then update Puffer Pond from that exact Workbench source and approve the visual-reboot ticket decomposition.

## Outcome

Puffer Pond feels like a deliberate, living ambient website rather than a static
PNG environment with flipping paper-cutout sprites. It remains a calm, playful,
one-viewport pond on phone and desktop, but its habitat, depth, movement, and
wildlife are rendered primarily from code-native layers.

## Why It Matters

Puffer Pond is the active visual-product test case for the Workbench. The
current raster-led system meets earlier mechanical checks, but Kayden has
rejected its visual language as overly PNG-like and insufficiently polished.
The project should demonstrate a stronger end-to-end visual iteration without
adding product complexity or weakening accessibility.

## Current Verified State

- The project has the current released Workbench v2.3 lifecycle, but S-022's
  decision-skill update is still a verified development candidate rather than a
  completed downstream harness update.
- `src/App.tsx` and `src/styles.css` render a full-bleed raster environment plus
  transparent wildlife sprites with CSS motion.
- Existing behavior, controls, simulation rules, browser checks, and static
  deployment are owned by S-001, S-002, S-003, and S-006.
- The current visual direction is the warm gouache nature-book system recorded
  by S-004; it is superseded for future implementation by this owner request,
  while its historical proof remains intact.

## Desired Behavior

- Replace the raster-led habitat and paper-like sprite presentation with
  code-native layered illustration: depth, water, plants, lighting, and
  wildlife movement must read as one coherent scene rather than separate
  pasted images.
- Preserve the complete one-viewport experience, no-scroll invariant,
  keyboard/touch access, opt-in sound, local night preference, and
  reduced-motion behavior.
- Preserve the product's calm, whimsical character without turning it into a
  game HUD, a marketing page, photorealism, or a 3D engine.
- Retire production raster dependencies only after their replacements have
  passed the established responsive and behavior checks; historical proof and
  source art are retained unless a later ticket explicitly and safely retires
  them.

## Decisions And Contracts

- Kayden has rejected the current visual target: "Everything is much too png"
  and the flip-like paper presentation must not be carried forward as the
  design baseline.
- The new direction is a Workbench test: favor a code-native 2D composition
  over new PNG plates or sprite sheets.
- Existing pond interactions and deterministic wildlife schedules remain
  product constraints, not a mandate to preserve the current rendering code.
- This spec supersedes S-004 only for future visual direction; S-004 remains
  the historical owner of prior delivery and proof.

## Non-Goals

- Adding accounts, analytics, a backend, remote assets, a canvas game engine,
  or a 3D renderer.
- Changing the product into an aquarium-management game or adding progression.
- Deploying, merging to `main`, or deleting current production assets without
  the normal ticket-level proof and owner-controlled release decision.

## Dependencies And Blockers

- S-001, S-002, S-003, and S-006 remain the owners of interaction, responsive,
  wildlife-schedule, and delivery invariants.
- Workbench S-022 must complete its release/proof gate and be pinned as Puffer
  Pond's update source before visual implementation starts.
- Detailed implementation slices then require approval under `/to-tickets`
  before durable ticket state is changed.

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Design and build one code-native habitat prototype that preserves the existing scene contract at desktop and phone sizes | blocked | Workbench S-022 release/downstream-update proof; ticket decomposition approval | pending |

## Acceptance Criteria

- [ ] The production experience no longer depends on a full-bleed raster pond
      plate or paper-like wildlife sprites for its primary visual language.
- [ ] Desktop, 390x844 phone, 1100x460, and reduced-motion views retain a
      coherent, calm, accessible one-viewport scene.
- [ ] Existing interaction, sound, night-mode, and wildlife-scheduling behavior
      either remains proven or is deliberately replaced with equivalent proof.
- [ ] Kayden can inspect a short visual demo and judge the reboot directly.
- [ ] Native tests, browser acceptance, build, render, doctor, and diff checks
      pass before any release proposal.

## Testing Seams

- Existing simulation unit tests and interaction/browser acceptance suite.
- New browser assertions for code-native layer presence, responsive geometry,
  no overflow, keyboard/touch controls, and reduced-motion behavior.
- Desktop, phone, and odd-window screenshots as the owner-facing visual demo.

## Verification Procedure

~~~bash
npm test
npm run test:browser
npm run build
node tools/spec-workbench.mjs render
node tools/spec-workbench.mjs doctor
git diff --check
~~~

## Documentation Impact

- `BLUEPRINT.md` catalog is generated from this spec; its visual-layer entry
  changes only when implementation replaces the current raster system.
- `RUNBOOK.md`, S-004, and S-006 require updates only when the visual test or
  asset-delivery contract changes.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-19 | spec | Kayden rejected the PNG/sprite-led visual direction and requested a from-scratch code-native reboot as the active Workbench visual test. | Confirmed current v2.3 controls, clean project checkout, `spec-workbench doctor` green, and `next --json` null before planning. | Added S-008 and rendered its catalog/Taskboard projection. | Workbench S-022 must complete and Puffer must update from its pinned source before ticket decomposition or implementation. |

## Completion Result

Pending.

## Remaining Limitations Or Follow-Up Specs

- S-004 preserves the historical gouache delivery record; this spec owns only
  the superseding visual direction and reboot proof.

## Supersession

- Supersedes: S-004 for future visual direction only.
- Superseded by: none.
