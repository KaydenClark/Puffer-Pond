# Puffer Pond - Hot Taskboard

> Generated from LLM Workbench v2.3.

**Current focus:** Add repeatable browser acceptance proof without changing the shipped ambient experience.
**Owner:** Kayden; execution owner unassigned
**Last updated:** 2026-07-17

This is an active execution projection, not a requirements or proof store. Use
node tools/spec-workbench.mjs next --json to select work and load only its spec.

## Active Specs

<!-- hot-specs:start -->
| Spec | Current slice | Owner | Blocker | Latest meaningful event | Next gate |
|---|---|---|---|---|---|
| [S-002](specs/S-002-responsive-phone-experience/SPEC.md) | TK-003: Record a five-minute real-phone portrait/landscape watch verdict covering smoothness, thermal feel, cropping, controls, calmness, and repetition (blocked) | Kayden | owner real-phone watch | Responsive and reduced-motion behavior is shipped; the previous ready phone-profile task was corrected to an owner experience gate. | Kayden watches the live site for five minutes on one real phone and records the experiential verdict. |
| [S-003](specs/S-003-creature-and-pond-behavior/SPEC.md) | TK-003: Add one named puffer behavior variety outcome only if Kayden identifies repetition after real-phone use (blocked) | Kayden | S-002, owner product-direction verdict | Shipped creature scheduling and habitat contracts were split from the legacy broad ambient spec; optional behavior expansion is owner-gated. | After S-002's phone watch, Kayden chooses whether current calm behavior is sufficient or names one desired variety gap. |
| [S-004](specs/S-004-illustrated-visual-quality/SPEC.md) | TK-003: Apply one named subjective polish adjustment only after Kayden identifies a concrete mismatch (blocked) | Kayden | S-002, owner subjective verdict | The approved concept, production asset system, fidelity ledger, and current renders were captured in a dedicated stable spec. | Kayden either accepts the current shipped visual target or names one concrete mismatch after real-phone use. |
| [S-005](specs/S-005-installable-offline-pwa/SPEC.md) | TK-001: Record the owner choice between intentional static-only delivery and installable/offline PWA (blocked) | Kayden | S-002, owner PWA decision | Legacy T-003 was corrected from ready implementation to an owner-gated product direction with a complete conditional ticket chain. | Kayden chooses static-only or installable/offline after using the live site on a real phone. |
<!-- hot-specs:end -->

Completed specs disappear from this projection. Their requirements, decisions,
acceptance, proof, completion, and supersession remain in stable specs.

## Owner Decisions

| Spec | Decision | Options | Recommendation | Cost / impact | Owner | Next gate |
|---|---|---|---|---|---|---|
| S-002 | Real-phone watch and performance verdict | accept current behavior / request targeted tuning | Watch the live site for five minutes before changing motion | Owner time; tuning could trade motion richness for battery/thermal headroom | Kayden | Record device, smoothness, thermal, cropping, and calmness verdict |
| S-003 | Additional puffer behavior variety | preserve current calm family / add investigate-hide-feed states | Preserve current behavior unless the phone watch feels repetitive | Extra code, motion, and regression surface | Kayden | Decide after S-002 phone watch |
| S-004 | Further visual polish | freeze shipped visual target / request named adjustments | Freeze unless Kayden identifies a concrete mismatch | New art iteration and cross-viewport review | Kayden | Name the visual mismatch, if any |
| S-005 | PWA direction | keep link-based static site / add installable offline shell | Keep static-only unless home-screen/offline use has clear value | Manifest/icons/service worker and cache-update complexity | Kayden | Choose direction after real-phone use |
