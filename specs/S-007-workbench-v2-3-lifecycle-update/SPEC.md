# S-007 - Workbench v2.3 Lifecycle Update

> Generated from LLM Workbench v2.3. Stable path
> specs/S-007-workbench-v2-3-lifecycle-update/SPEC.md; never move between status folders.

**Spec ID:** S-007
**Status:** complete
**Priority:** 0
**Owner:** planner-puffer-sol-high
**Updated:** 2026-07-17
**Catalog description:** Reconcile Puffer Pond's generated controls with the complete v2.3 stable-spec lifecycle while preserving shipped behavior, proof, and remote history.
**Blockers:** none
**Latest event:** Spec completed and removed from the hot board.
**Next gate:** none

## Outcome

Puffer Pond uses one complete Workbench v2.3 control plane: stable capability
specs, generated Blueprint catalog and hot Taskboard, shared Lexicon, thin Claude
bridge, exact lifecycle commands, archived legacy queue/proof, and remotely
recoverable evidence.

## Why It Matters

The project was generated with v2.3-labelled controls but lacked the stable-ID
spec lifecycle, lifecycle tool, Lexicon, Claude bridge, and generated markers.
Its hand-written queue also mislabeled owner product decisions as ready agent
work. Without reconciliation, the active test project could not actually test
current Workbench selection, proof, or canon-to-spec conversion.

## Current Verified State

Update source and provenance:

- Target remote: https://github.com/KaydenClark/Puffer-Pond.git.
- Target base ref: origin/main.
- Target resolved source commit:
  93c3d2cf9bb4fba5f3e501f7ebc0670b9435ed11.
- Target worktree was clean on main with no other registered worktree.
- Canonical Workbench source: /Users/kayden/GPT_OS/Workbench Factory,
  remote KaydenClark/LLM_Workbench, branch codex/workbench-canon-spec-coverage,
  resolved commit cf6fd6e; origin/main and origin/integration expose the same
  lifecycle helper checksum used here.
- spec-workbench.mjs checksum:
  ef31d219c092d8c9b1c595734d933de9560c1d099967daf212b7481040acd672.
- markdown-table.mjs checksum:
  acca5cb04cecb0044c74aaa38f42d6f0e4e6addb26b45a744d14ca0b74487e6b.

Pre-update baseline:

- npm test: 1 file, 4 tests passed.
- npm run build: TypeScript/Vite green, 17 modules transformed.
- Lifecycle render, doctor, and next all failed because
  tools/spec-workbench.mjs did not exist.
- Static Workbench evaluator diagnostic: 50.6/113.
- Live site HTTP 200; workflow run 29539998708 succeeded at source 93c3d2c.

## Harness Inventory And Migration Map

| Existing surface | Classification | Reconciled owner |
|---|---|---|
| AGENTS.md | port and fold | current lifecycle, safety, project-specific engineering and visual rules remain in AGENTS.md |
| BLUEPRINT.md | port | stable product/test-project direction, architecture, invariants, and coverage matrix |
| TASKBOARD.md | retire active form | old queue archived; generated hot projection now owns current state |
| RUNBOOK.md | port and correct | cross-platform native/lifecycle/browser/deploy/recovery commands and verified Mac truth |
| README.md | keep and update | public product and contributor navigation |
| specs/ambient-pond.md | port then retire | proof and requirements split across S-001 through S-006; cold archive preserved |
| src/, package/config, workflow | keep | verified product implementation; no product source edits in this update |
| docs/ and public/assets/ | keep | approved visual evidence and production art |
| CLAUDE.md, LEXICON.md, HARNESS_FEEDBACK.md | add | missing current v2.3 control surfaces |
| tools/spec-workbench.mjs and markdown-table.mjs | add exact | canonical stable-spec lifecycle helpers |

## Desired Behavior

- Every current capability or unresolved decision has exactly one stable owner.
- BLUEPRINT.md contains generated catalog markers and the complete coverage matrix.
- TASKBOARD.md is generated only from active/blocked specs and contains explicit
  owner decision rows outside the generated region.
- Completed proof remains in stable specs and cold archive, not the hot board.
- doctor is green and next selects S-006/TK-004 after this upgrade completes.
- Native tests/build match the pre-update baseline.
- No product source, production asset, workflow, or deployment behavior changes.
- The pushed branch is independently recoverable from the remote.

## Decisions And Contracts

- This is update-harness, not first-time Adoption or a Genesis rerun.
- The existing code, product history, Pages deployment, and project vocabulary survive.
- The non-stable broad ambient spec is archived after its truth is ported.
- Canonical lifecycle helper files are copied byte-for-byte and their checksums recorded.
- The duplicate catalog header emitted by the canonical helper is logged in
  HARNESS_FEEDBACK.md rather than silently patching downstream behavior.
- Owner decisions remain blocked; the only next agent-safe Engineer slice is
  browser acceptance automation in S-006/TK-004.

## Non-Goals

- Implementing a product ticket, changing pond behavior, or regenerating art.
- Deploying the planning branch or merging it to main.
- Fixing the upstream Workbench catalog-header defect in this repository.
- Rewriting historical commits or deleting the legacy proof ledger.

## Dependencies And Blockers

- Canonical Workbench v2.3 templates, update-harness skill, and lifecycle tools.
- Current request authorizes canon decomposition, commit, and push.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Inventory and reconcile project controls while preserving the green product baseline and legacy proof | done | none | migration map; baseline 4 tests and 17-module build; legacy archives |
| TK-002 | Create the complete Blueprint coverage matrix, stable specs/tickets, generated regions, Lexicon, Claude bridge, and exact lifecycle helpers | done | TK-001 | 23-item matrix, 7 stable specs, canonical helper checksums, no product-source diff |
| TK-003 | Run render, doctor, native and evaluator verification, then commit/push and prove remote recovery | done | TK-002 | render and doctor green; native 4/4 tests and 17-module build; evaluator 73.2/113; canonical helpers exact; checkpoint 38fa5ba pushed and matched origin |

## Acceptance Criteria

- [x] Existing steering files are classified and live truth has one current owner.
- [x] Legacy queue and broad proof record are archived, not deleted.
- [x] Stable specs cover every meaningful Blueprint/current-direction item.
- [x] CLAUDE.md, LEXICON.md, HARNESS_FEEDBACK.md, and lifecycle helpers exist.
- [x] No product source, production art, or deployment workflow was changed.
- [x] Render, doctor, and next are deterministic and truthful.
- [x] Native tests/build match or improve on baseline.
- [x] The checkpoint is committed, pushed, and verified against the remote ref.

## Testing Seams

- Helper byte/checksum comparison against canonical Workbench source.
- render, doctor, next, and show lifecycle commands.
- Placeholder, retired-name, duplicate-queue, and stable-path searches.
- npm test and npm run build before/after comparison.
- Evaluator before/after diagnostic.
- Git diff/status, pushed branch, ls-remote equality, and fresh-clone procedure.

## Verification Procedure

~~~bash
shasum -a 256 tools/spec-workbench.mjs tools/markdown-table.mjs
node tools/spec-workbench.mjs render
node tools/spec-workbench.mjs doctor
node tools/spec-workbench.mjs next --json
npm test
npm run build
git diff --check
~~~

Then run the evaluator and remote recovery procedure in RUNBOOK.md.

## Documentation Impact

- All current project controls were reconciled because the lifecycle ownership
  model changed.
- No product implementation or deployment document changed beyond correcting
  stale operating and queue claims.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-17 | TK-001 | Verified clean main, remote recovery source, recent commits, live deployment, source/tests/manifests, and the green pre-update baseline | 4 Vitest tests; 17-module build; live HTTP 200; workflow 29539998708 success | migration inputs captured in S-007 | lifecycle and coverage conversion pending |
| 2026-07-17 | TK-002 | Reconciled the complete v2.3 control model and ported the old queue/proof into stable capability owners | 23 matrix rows assigned; canonical helper checksums recorded; src/, public/assets/, and workflow untouched | controls, 7 specs, 2 cold archives, Lexicon, Claude bridge, and feedback log created | final verification and remote checkpoint pending |
| 2026-07-17 | TK-003 | Ticket closed | render and doctor green; native 4/4 tests and 17-module build; evaluator 73.2/113; canonical helpers exact; checkpoint 38fa5ba pushed and matched origin | all project controls, stable specs, coverage matrix, legacy archives, and recovery commands reconciled; no product source changed | upstream duplicate catalog header logged; S-006/TK-004 remains the next agent-safe Engineer ticket |
| 2026-07-17 | spec | Spec completed | Acceptance gates satisfied | Documentation impact recorded above | none |

## Completion Result

The project now has a complete, remotely checkpointed v2.3 stable-spec
lifecycle with preserved shipped behavior and history. Seven stable specs own
the full canon, the generated board exposes one safe Engineer ticket, and all
phone-watch/product-direction work remains owner-gated.

## Remaining Limitations Or Follow-Up Specs

- The canonical helper's duplicate Blueprint catalog header is an upstream
  Workbench defect logged locally for later source-repo handling.
- S-006/TK-004 remains the smallest safe Engineer ticket after this planning pass.

## Supersession

- Supersedes: the incomplete generated-v2.3 control arrangement at source 93c3d2c.
- Superseded by: none.
