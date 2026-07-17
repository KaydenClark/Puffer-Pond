# S-005 - Installable Offline PWA Direction

> Generated from LLM Workbench v2.3. Stable path
> specs/S-005-installable-offline-pwa/SPEC.md; never move between status folders.

**Spec ID:** S-005
**Status:** blocked
**Priority:** 5
**Owner:** Kayden
**Updated:** 2026-07-17
**Catalog description:** Decide whether Puffer Pond should remain a link-based static site or become an installable home-screen experience with offline reload.
**Blockers:** S-002 owner watch and PWA product-direction decision
**Latest event:** Legacy T-003 was corrected from ready implementation to an owner-gated product direction with a complete conditional ticket chain.
**Next gate:** Kayden chooses static-only or installable/offline after using the live site on a real phone.

## Outcome

Puffer Pond has an explicit, evidence-backed distribution contract: either the
current link-based static site remains intentionally sufficient, or a bounded
PWA shell makes it installable and reloadable offline without changing the
ambient product or introducing remote data.

## Why It Matters

Home-screen installation may make an ambient phone experience easier to reopen,
but service workers, icons, caching, and update behavior add durable complexity.
Feasibility alone is not evidence that the feature improves Kayden's use.

## Current Verified State

- The site is a static Vite build deployed on GitHub Pages.
- index.html includes viewport, theme-color, description, and title metadata.
- There is no web app manifest, app-icon set, service worker, offline cache, or
  install verification.
- The previous hand-written Taskboard labeled PWA implementation ready even
  though its own focus said Kayden should choose after a real-phone watch.
- The current campaign explicitly makes phone-watch and product-direction
  decisions owner-gated.

## Desired Behavior

If Kayden chooses static-only:

- record that the live link and browser bookmark are the intentional product;
- close this spec without adding a manifest or service worker.

If Kayden chooses installable/offline:

- provide a valid manifest, correctly sized project-owned icons, standalone
  display metadata, and theme/background colors;
- cache only the static application shell and production assets required for
  an offline reload;
- define an understandable cache-update/recovery strategy;
- prove installability and offline reload on a real phone;
- preserve no-account, no-tracker, and no-remote-data boundaries.

## Decisions And Contracts

- PWA direction is a product choice owned by Kayden.
- Static-only is a valid completion outcome, not a failure to implement.
- Any service worker must fail safely, avoid stale indefinite asset traps, and
  remain compatible with the GitHub Pages repository subpath.
- PWA work cannot add analytics, push notifications, background sync, accounts,
  or personal-data storage without a separate owner-approved spec.

## Non-Goals

- Native app-store packaging.
- Push notifications, background data sync, cloud state, or install prompts
  designed to pressure the viewer.
- Agent implementation before the owner direction.

## Dependencies And Blockers

- S-002 real-phone watch should establish whether reopening/offline use is valuable.
- S-006 owns release and browser proof infrastructure.
- Owner gate: static-only or installable/offline.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Record the owner choice between intentional static-only delivery and installable/offline PWA | blocked | S-002, owner PWA decision | owner decision pending |
| TK-002 | If approved, add manifest, project-owned icons, standalone metadata, and subpath-safe registration without product behavior changes | blocked | TK-001 approved PWA | pending |
| TK-003 | If approved, add bounded offline shell caching plus real-phone install, update, and offline reload proof | blocked | TK-002 | pending |

## Acceptance Criteria

- [ ] Kayden explicitly chooses static-only or installable/offline.
- [ ] Static-only choice is recorded as the intentional completion result, or
  all conditional PWA implementation criteria are met.
- [ ] Any PWA remains compatible with GitHub Pages subpath deployment.
- [ ] Any offline cache has a documented update and recovery path.
- [ ] No analytics, push, account, background sync, or personal data is added.

## Testing Seams

- Manifest schema and icon-size validation.
- Production build inspection for registered service worker and correct base paths.
- Browser installability audit.
- Real-phone install, launch, online update, and offline reload proof.
- Static-only completion can be proven by the recorded owner decision and
  absence of PWA artifacts.

## Verification Procedure

~~~bash
npm test
npm run build
node tools/spec-workbench.mjs doctor
~~~

If PWA is approved, add focused manifest/cache tests and the real-phone procedure
before implementation closes.

## Documentation Impact

- README.md and RUNBOOK.md change only if the distribution contract changes.
- TASKBOARD.md keeps the owner decision visible.
- This spec owns the chosen direction and conditional proof.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-17 | canon harvest | Verified that no PWA artifacts exist and corrected legacy T-003 from ready to owner-gated | index, public files, source, build config, workflow, and campaign boundary inspected | stable S-005 and Taskboard owner row created | TK-001 owner decision pending |

## Completion Result

Pending the owner distribution choice.

## Remaining Limitations Or Follow-Up Specs

- Browser/OS install behavior may vary and requires real-phone proof if approved.

## Supersession

- Supersedes: legacy T-003.
- Superseded by: none.
