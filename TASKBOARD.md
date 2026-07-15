# Puffer Pond - Hot Taskboard

> Generated from LLM Workbench v2.3.

**Shipping state:** Complete ambient-scene MVP live at `https://kaydenclark.github.io/Puffer-Pond/`.

**Health:** Tests and production build are green; desktop, 390x844, reduced-motion, and 1100x460 odd-window visual checks pass.

**Current focus:** Let the owner watch the quieter duck pacing and choose whether any optional behavior deserves the next slice.

**Blockers:** None.

**Next milestone:** Owner-approved polish based on a real-phone watch test.

## Active Specs

| ID | Capability | Spec | Status | Priority | Required proof | Docs impact |
|---|---|---|---|---|---|---|
| T-001 | Ambient pond MVP | `specs/ambient-pond.md` | done | P0 | tests, build, desktop/mobile screenshots, interaction QA | all four controls, README, spec |
| T-002 | Real-phone performance profile | `specs/ambient-pond.md` | ready | P1 | 5-minute watch test on one real phone; record FPS/thermal observations | spec evidence |
| T-003 | Installable home-screen PWA | `specs/ambient-pond.md` | ready | P2 | install prompt or manual install; offline reload on phone | blueprint, runbook, README, spec |
| T-004 | Additional puffer behavior variety | `specs/ambient-pond.md` | ready | P2 | visible investigate/hide/feed states without crowding; regression tests | spec and taskboard |
| T-005 | Responsive shoreline visitor polish | `specs/ambient-pond.md` | done | P1 | scheduling test, build, odd-window desktop and 390x844 screenshots | spec and taskboard |

## Owner Decisions

No decision blocks the shipped MVP.

Optional future decision: after watching on a real phone, choose between PWA installation, more puffer behaviors, or leaving the calm scope unchanged. Recommendation: run T-002 before adding features.
