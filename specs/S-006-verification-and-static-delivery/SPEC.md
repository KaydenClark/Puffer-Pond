# S-006 - Verification And Static Delivery

> Generated from LLM Workbench v2.3. Stable path
> specs/S-006-verification-and-static-delivery/SPEC.md; never move between status folders.

**Spec ID:** S-006
**Status:** active
**Priority:** 1
**Owner:** unassigned
**Updated:** 2026-07-17
**Catalog description:** Keep deterministic logic tests, production builds, browser acceptance evidence, GitHub Pages deployment, and remote recovery reproducible.
**Blockers:** none
**Latest event:** Existing native, visual, deployment, and recovery proof was harvested; the smallest safe gap is a repeatable browser acceptance runner.
**Next gate:** Claim TK-004 and add automated geometry/interaction proof without changing product behavior.

## Outcome

An engineer can verify Puffer Pond from a clean checkout and prove that the
behavioral rules, production build, critical browser interactions, responsive
geometry, public deployment, and recovery point are truthful.

## Why It Matters

Puffer Pond's active test-project role depends on evidence across the full
delivery path, not just attractive screenshots. Current manual browser proof is
good historical evidence but is harder to rerun and easier to overclaim than a
small automated acceptance seam.

## Current Verified State

- npm test passes one Vitest file with four scheduling/profile tests.
- npm run build passes TypeScript and Vite, transforming 17 modules.
- Current proof images cover 1536x1024, 390x844, and 1100x460.
- Historical interaction proof recorded sound/night aria state, one ripple, and
  no overflow.
- GitHub Actions run 29539998708 completed successfully for source 93c3d2c.
- The live Pages site returns HTTP 200 and references the expected hashed assets.
- Current local native verification passes on macOS with Node.js 26.3.0 and npm
  11.16.0; the workflow verifies Node.js 24.
- Browser acceptance remains a documented manual process rather than a
  repository-owned repeatable script/test.

## Desired Behavior

- Logic contracts fail deterministically when timing/profile behavior regresses.
- TypeScript and the production build fail closed on integration errors.
- A small browser acceptance runner starts the built or local app, checks no
  overflow and minimum control geometry at desktop/phone, toggles sound/night,
  creates one valid ripple, emulates reduced motion, and checks forced visitor
  habitat placement at the odd-window seam.
- Browser proof remains deterministic and does not decide subjective visual quality.
- Pages deployment remains main-only, static, and recoverable from Git.
- Fresh-clone instructions reproduce tests, build, and doctor from the pushed branch.

## Decisions And Contracts

- Vitest owns pure scheduling/profile logic; browser automation owns DOM,
  geometry, interaction, and browser API seams.
- Screenshot inspection remains required for subjective fidelity, even after
  geometry automation exists.
- CI/deployment changes must not promote a feature branch or bypass owner merge.
- Test tooling may not add analytics, external runtime services, or production dependencies.
- Static evaluator scores are diagnostics, not product-outcome proof.

## Non-Goals

- Exhaustive animation pixel diffs or synthetic FPS claims.
- Deploying this planning branch to production.
- Replacing owner phone-watch or subjective visual acceptance.
- Adding an external test SaaS.

## Dependencies And Blockers

- S-001 through S-004 define the behavior and geometry to preserve.
- Current product direction and proof seams are settled; TK-004 requires no owner choice.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Establish deterministic scheduling/profile tests and a TypeScript production build gate | done | none | 4 Vitest tests pass; Vite build transforms 17 modules |
| TK-002 | Establish desktop, phone, odd-window, reduced-motion, and interaction evidence seams | done | TK-001 | current docs images and 2026-07-14/15 browser proof |
| TK-003 | Establish main-only GitHub Pages deployment, live verification, and Git remote recovery | done | TK-001 | workflow run 29539998708, live HTTP 200, origin/main 93c3d2c |
| TK-004 | Add one repeatable browser acceptance runner for viewport overflow, controls, ripple, reduced motion, and forced visitor geometry | ready | none | pending |

### Scoped Ticket: TK-004

**Vertical outcome:** A single repository-owned command proves critical browser
behavior at 1536x1024, 390x844, and 1100x460 without changing the pond product.

**Done criteria:**

- Red proof demonstrates the repository currently lacks the automated runner.
- The runner asserts no horizontal/vertical overflow at desktop and phone sizes.
- Sound and night controls toggle their aria-pressed state and remain at least
  44px in the phone viewport.
- A valid below-water pointer action creates one ripple; control input does not.
- Reduced motion keeps a visible stationary pond/duck composition.
- Forced dogs remain above the responsive shoreline in the odd-window viewport.
- Targeted browser checks, npm test, npm run build, render, doctor, and diff check pass.
- No production behavior, deployed branch, analytics, or owner-gated visual
  decision changes.

**Required proof:** red/green transcript, exact browser command, pass summary,
and one compact screenshot or trace artifact inspectable in under a minute.

## Acceptance Criteria

- [x] Pure scheduling and profile contracts have deterministic tests.
- [x] TypeScript and the production build pass.
- [x] Current desktop, phone, odd-window, reduced-motion, and interaction proof exists.
- [x] Main-only Pages deployment succeeds and the live site returns HTTP 200.
- [x] Remote recovery source and fresh-clone procedure are documented.
- [ ] One repeatable browser acceptance command proves critical geometry and interactions.

## Testing Seams

- simulation.test.ts for pure scheduling/profile behavior.
- TypeScript project build and Vite production bundling.
- Future repository-owned browser runner for DOM/geometry/interaction behavior.
- GitHub Actions and live HTTP checks for deployed state.
- Fresh clone of the pushed branch for recovery.

## Verification Procedure

~~~bash
npm test -- src/simulation.test.ts
npm test
npm run build
node tools/spec-workbench.mjs render
node tools/spec-workbench.mjs doctor
git diff --check
~~~

TK-004 adds its exact browser command to RUNBOOK.md before closing.

## Documentation Impact

- RUNBOOK.md owns all exact verification, deployment, and recovery commands.
- README.md exposes the public and contributor entry points.
- This spec owns acceptance and proof for the complete delivery chain.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-14 | TK-001 | Red/green scheduling suite and production build established | expected missing-module red; 3 green tests; 17-module build | legacy Runbook/spec recorded commands | duck regression not yet added |
| 2026-07-14 | TK-002 | Desktop/phone screenshots and interaction proof established | sound true, night true, ripple count 1, overflow false | legacy Runbook/spec updated | odd-window/reduced-motion proof pending |
| 2026-07-14 | TK-003 | GitHub Pages workflow and live deployment established | run 29386134625 passed; public phone view rendered | README and Runbook linked live site | later head deployment not yet checked |
| 2026-07-15 | TK-001, TK-002, TK-003 | Duck regression, responsive proof, and latest deployment completed | 4 tests; build green; desktop/mobile/odd/reduced-motion pass; run 29539998708 success | legacy controls updated | automated browser runner absent |
| 2026-07-17 | canon harvest | Reverified native and live proof and isolated browser automation as the smallest safe engineer ticket | npm test 4/4; npm run build 17 modules; live HTTP 200; origin/main and workflow SHA match | stable S-006 and current Runbook created | TK-004 ready |

## Completion Result

Pending TK-004. Current native, visual, deployment, and recovery proof is green;
the remaining gap is repeatable browser acceptance automation.

## Remaining Limitations Or Follow-Up Specs

- Real-phone experiential proof remains S-002 owner work.
- Subjective visual acceptance remains S-004 owner work.

## Supersession

- Supersedes: verification/delivery portions of legacy T-001, T-005, and specs/ambient-pond.md.
- Superseded by: none.
