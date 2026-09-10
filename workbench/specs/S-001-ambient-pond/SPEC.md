# S-001 - Ambient Pond

> Generated from LLM Workbench v3.2.0.

**Spec ID:** S-001
**Status:** complete
**Priority:** 2
**Owner:** codex
**Stance:** Builder
**Updated:** 2026-09-10
**Catalog description:** Opening the static site reveals a calm illustrated pond that fits the viewport and keeps five puffers and snails below its waterline.
**Blockers:** none
**Latest event:** Spec completed and removed from the hot board.
**Next gate:** none

## Outcome

Opening the static site reveals a calm illustrated pond that fits the viewport and keeps five puffers and snails below its waterline.

## Founding Prompt

Preserved verbatim from the caller-authored plan:

> Create a responsive full-screen ambient Puffer Pond for phone and desktop as the bounded useful S-00E proof. Show five gently moving pea puffers and snails below the waterline, respect reduced motion, and verify the independently generated project. Larger habitat features are deferred.

## Derived From Locked Decisions

The recorded decision wording and interpretation are preserved below. The generator validated their source links and status; semantic derivation remains a reviewer judgment.

### Q1 — decision-001

> For the authorized disposable S-00E proof, deliver one full-screen Puffer Pond with five gently moving puffers and snails below the waterline, respecting reduced motion. Larger habitat features remain outside this bounded first slice.

Recorded interpretation:

> Manager-selected demonstration input under the owner assignment to prove a useful fresh project; not a new personal product answer from Kayden.

### Q2 — decision-002

> Use the named public Puffer-Pond snapshot and its MIT pond, puffer and snail assets with attribution. Use static HTML, CSS, JavaScript and local Node verification, with no backend, analytics or automatic deployment. Preserve the existing remote main and publish proof only on a new task branch.

Recorded interpretation:

> Manager-selected bounded implementation and preservation choices for the authorized demonstration, grounded in historical product evidence; not a newly invented owner interview.

## Source Evidence

The complete derivation receipt is [DERIVATION.json](../../docs/intake/DERIVATION.json). The source repository and commit are a local checkout observation; remote availability was not established.

| Evidence | Kind | Preserved source | SHA-256 |
|---|---|---|---|
| E1 | fact | [preserved bytes](../../docs/intake/evidence/01-afa48f4bc5d1-BLUEPRINT.md) | afa48f4bc5d1db9fb4e4330020bc22a478cf332a5a64e8095293ee14ee9b0afc |
| E2 | fact | [preserved bytes](../../docs/intake/evidence/02-f8f06465191a-source.json) | f8f06465191a400b301a7c971112c31a406abd4b98942284aca98501ee07c25a |
| E3 | fact | [preserved bytes](../../docs/intake/evidence/03-dd7733920766-LICENSE) | dd77339207666288e00add34373189209c213719b7a33358eeb98222c97f26c8 |
| E4 | uncertainty | [preserved bytes](../../docs/intake/evidence/04-28baeabcee2e-README.md) | 28baeabcee2e720b7e0f21d3c243c1b3c23755bb9ae7a5d9586e70ffb83c3cc3 |

## Active ADRs

- [ADR-0002](../../docs/adr/0002-puffer-proof-runtime.md) — Static Puffer Pond proof runtime; source SHA-256 dc7c707b9eb6b0691705c571045394a3677f29a90edc365ec8a5a83846e3ee5e

## Open Or Unselected Material

| Question | Status | Prompt | Disposition |
|---|---|---|---|
| none | none | none | No excluded question material |

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Render the responsive pond with safe motion and verify its local tests, build and browser behavior. | done | none | node tests/build/browser proof passed: 7 Node tests, static build ok, desktop1536x1024 and phone390x844 Chrome checks passed with 5 puffers + 2 snails below waterline, loaded images, no overflow, no browser errors, reduced-motion animation removed |

## Acceptance Criteria

- [x] Five distinct puffers and snails remain below the waterline.
- [x] Reduced-motion preference pauses animal animation.
- [x] Desktop1536x1024 and phone390x844 browser checks show no document overflow.
- [x] Node tests and static production build pass using only project-local files.

## Testing Seams

- The capability's public behavior and named acceptance checks.

## Verification Procedure

Run the ticket's named checks, then render and doctor the room. Browser proof
uses local static serving plus host Chrome/Playwright; those browser tools are
not project runtime dependencies.

## Documentation Impact

README and RUNBOOK now describe the observed local result instead of planned
verification. Blueprint remains destination-only.

## Observed Verification

Commands and checks actually run for the completed TK-001 proof:

- `node workbench/tools/notepads.mjs read --note workbench/sessions/notepads/work/puffer-proof.json --view current` returned revision 4 with browser proof pending.
- `node workbench/tools/notepads.mjs validate --note workbench/sessions/notepads/work/puffer-proof.json` returned valid at revision 4.
- `node workbench/tools/spec-workbench.mjs doctor` passed before implementation continuation.
- `node workbench/tools/spec-workbench.mjs next --json` selected S-001 / TK-001.
- `node --test tests/*.test.mjs` passed 6 tests before correction, but that did not prove the founding prompt by species.
- Added species-count regression; `node --test tests/*.test.mjs` failed as expected with `3 !== 5` puffers.
- Updated `scene-config.mjs` to five puffer profiles plus two snail profiles; `node --test tests/*.test.mjs` then passed 6 tests.
- `node tools/build.mjs` passed.
- First browser proof command failed before running because the ad-hoc Node script mixed `require` with top-level `await`; no browser claim is based on that failed command.
- Browser proof then detected a desktop console 404 for `/favicon.ico` while layout checks passed.
- Added inline-favicon regression; `node --test tests/*.test.mjs` failed as expected because `index.html` lacked an inline icon.
- Added a data-URL icon in `index.html`; `node --test tests/*.test.mjs` passed 7 tests and `node tools/build.mjs` passed.
- Local browser proof against `http://127.0.0.1:4173/` with host Playwright at `/Users/kayden/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright` and installed Chrome passed desktop1536x1024 and phone390x844: no document overflow, five puffers, two snails, all images loaded, all animals below the visible waterline and in viewport, no console/page/request/http errors, and reduced-motion media removed CSS animations.
- Screenshots and machine-readable proof were saved under ignored `workbench/sessions/recovery/browser-proof/` and visually inspected.

Limitations: this proves local static behavior in installed Chrome on this host
only. It does not prove deployment, remote publication, push/merge state,
other browsers, other devices, or cross-device reliability.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-10 | genesis | Derived from Q1, Q2 and source-linked evidence | Generated-room layout, render and doctor passed before publication | Spec and derivation receipt created | Remote recovery omitted: this derivation creates local main and integration branches only; semantic review and implementation remain |
| 2026-09-10 | TK-001 | Ticket closed | node tests/build/browser proof passed: 7 Node tests, static build ok, desktop1536x1024 and phone390x844 Chrome checks passed with 5 puffers + 2 snails below waterline, loaded images, no overflow, no browser errors, reduced-motion animation removed | Updated S-001 evidence, README/RUNBOOK observed-state docs, and ignored browser-proof artifacts | Manager review/publication only; no push, merge, deployment, remote publication, or cross-device reliability claim |
| 2026-09-10 | spec | Spec completed | Acceptance gates satisfied | Documentation impact recorded above | none |

## Completion Result

TK-001 is complete locally. Opening the static site renders the bounded ambient
pond with five puffer profiles and two snail profiles below the waterline,
reduced-motion users receive a visible still scene without animal animations,
and required Node/build/browser checks passed with the limitations above.

## Supersession

- Supersedes: none.
- Superseded by: none.
