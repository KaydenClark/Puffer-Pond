# S-003 - Creature And Pond Behavior

> Generated from LLM Workbench v2.3. Stable path
> specs/S-003-creature-and-pond-behavior/SPEC.md; never move between status folders.

**Spec ID:** S-003
**Status:** blocked
**Priority:** 3
**Owner:** Kayden
**Updated:** 2026-07-17
**Catalog description:** Maintain a distinct puffer family, snails, duck landings, and alternating rare visitors that make the pond feel alive without visual noise.
**Blockers:** S-002 owner watch and product-direction verdict
**Latest event:** Shipped creature scheduling and habitat contracts were split from the legacy broad ambient spec; optional behavior expansion is owner-gated.
**Next gate:** After S-002's phone watch, Kayden chooses whether current calm behavior is sufficient or names one desired variety gap.

## Outcome

The pond feels alive through distinct underwater movement and intermittent
above-water stories, with every creature respecting its habitat and no visitor
dominating the experience.

## Why It Matters

Creature behavior supplies the small stories that make the site watchable.
Unbounded variety would add noise and regression risk, so further behavior must
respond to an observed product gap rather than agent enthusiasm.

## Current Verified State

- createPufferFamily returns five named profiles with distinct durations,
  scales, anchors, and routes.
- Three snails crawl near grass/log regions below the waterline.
- Duck pairs wait 65-100 seconds, remain visible for 18 seconds, and land on
  the water surface.
- Hummingbirds wait 25-45 seconds for 11-second visits; dogs wait 55-95 seconds
  for 16-second visits.
- Rare visitors alternate after the first random choice.
- Query parameters force only the initial visitor state for deterministic proof.
- The original always-on blue-bird direction is superseded by duck pairs; the
  retained bird.webp file is unused production residue, not current behavior.

## Desired Behavior

- Five puffers retain distinguishable, calm movement below the waterline.
- Snails remain visible around grass and driftwood without becoming objectives.
- Ducks, hummingbird, and dogs remain intermittent and layered correctly.
- Rare visitor scheduling cannot starve one visitor kind.
- Debug visitor forcing remains deterministic and does not alter normal cadence
  after the forced visit ends.
- New behavior variety is added only after Kayden identifies repetition or a
  specific missing story during real use.

## Decisions And Contracts

- Ducks are independently scheduled surface visitors, not a RareVisitorKind.
- Hummingbird and dog visits alternate after the first randomized arrival.
- Habitat placement is a behavior contract, not purely visual decoration.
- Always-on blue birds are superseded and must not be restored accidentally.
- Optional investigate/hide/feed states remain a product-direction choice.

## Non-Goals

- Biological simulation, feeding systems, breeding, combat, needs, or scoring.
- Unlimited random visitors or procedurally generated species.
- Agent-selected behavior expansion without an observed owner need.

## Dependencies And Blockers

- S-001 supplies the ambient shell.
- S-002 supplies responsive/waterline acceptance and the real-phone verdict.
- S-004 supplies asset fidelity.
- Owner gate: preserve current calm behavior or name one additional behavior outcome.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Ship five distinct puffer profiles and visible snails below the waterline | done | none | createPufferFamily test, source inspection, and current renders |
| TK-002 | Ship intermittent duck landings and alternating hummingbird/dog visits with deterministic timing seams | done | TK-001 | four passing Vitest tests and desktop/mobile/odd-window proof |
| TK-003 | Add one named puffer behavior variety outcome only if Kayden identifies repetition after real-phone use | blocked | S-002, owner product-direction verdict | owner outcome pending |

## Acceptance Criteria

- [x] Five puffer profiles have distinct movement durations and valid scales.
- [x] Puffers and snails remain below the waterline.
- [x] Ducks land intermittently on the surface.
- [x] Hummingbird and dog delays stay inside their contract windows.
- [x] Rare visitors alternate so neither is starved.
- [x] Always-on blue birds remain superseded by duck pairs.
- [ ] Any additional puffer behavior is explicitly requested from observed repetition and proven without crowding.

## Testing Seams

- Pure delay boundary and alternation tests in simulation.test.ts.
- Puffer profile count/distinctness tests.
- Forced visitor browser routes for layer and animation proof.
- Owner watch evidence for repetition/noise judgments.

## Verification Procedure

~~~bash
npm test -- src/simulation.test.ts
npm test
npm run build
node tools/spec-workbench.mjs doctor
~~~

Use the forced visitor viewport checks in RUNBOOK.md for visible behavior.

## Documentation Impact

- LEXICON.md defines pond family, rare visitor, and waterline discipline.
- RUNBOOK.md owns timing claims and forced visitor URLs.
- TASKBOARD.md keeps the behavior-variety owner decision visible.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-07-14 | TK-001 | Puffer family and snails shipped | initial red/green suite reached 3 passing tests; renders inspected | legacy spec recorded behavior | future variety undecided |
| 2026-07-15 | TK-002 | Blue-bird behavior was replaced with intermittent duck pairs and shoreline visitors were polished | duck regression raised suite to 4 tests; build and responsive captures passed | Blueprint, Runbook, README, and legacy spec updated | future variety undecided |
| 2026-07-17 | canon harvest | Split autonomous behavior into S-003 and marked expansion owner-gated | source, tests, recent commits, renders, and owner campaign boundary compared | stable S-003 created; superseded bird truth recorded | TK-003 remains owner-gated |

## Completion Result

Pending only the optional owner direction. The shipped creature and pond
behavior contract is implemented, tested, and live.

## Remaining Limitations Or Follow-Up Specs

- Current tests cover scheduling/profile logic, not rendered path geometry.
- S-006/TK-004 is the agent-safe browser-proof follow-up.

## Supersession

- Supersedes: creature portions of legacy T-001, T-004, T-005, and specs/ambient-pond.md.
- Superseded by: none.
