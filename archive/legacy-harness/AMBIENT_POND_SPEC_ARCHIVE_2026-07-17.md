# Ambient Pond Capability - Legacy Archive

> Cold archive of specs/ambient-pond.md before stable-ID conversion. Current
> requirements and evidence live in S-001 through S-006.

The legacy record described one implemented ambient capability with these
accepted behaviors: a full-bleed viewport, five independently moving puffers,
snails near grass and driftwood, intermittent ducks, hummingbird and dog visits,
water ripples, opt-in sound, persistent day/night mode, reduced motion, and
desktop/390x844 no-overflow composition.

Founding prompt, preserved verbatim:

> https://github.com/KaydenClark/LLM_Workbench/tree/integration
>
> Will you create a new project willing the Genesis protocol under the projects folder, set up a new remote repo and when you are done, commit and push to it.
>
> Goal: A responsive website that has a pond with a family of pea puffers inside of it, swiming and looking for snails in the grass and under drift wood. above the water are trees with birds fling around landing on the ground by the water and in the trees. every once in a while a green humming bird should come out and drink from some flowers, or some dogs should run out and drink from the pond. It should be really cute and fun to watch and have open on my phone.

Hard constraints: responsive website; pond habitat; pea-puffer family; snails, grass, and driftwood; birds with flight and landing behavior; rare green hummingbird and dog visits; cute, watchable phone experience; new remote repository; commit and push when complete.

Behavior windows were 25-45 seconds for hummingbirds, 55-95 seconds for dogs,
65-100 seconds for ducks, with alternating rare visitors. The visual direction
was premium hand-painted children's nature-book gouache using the concept at
docs/concept-desktop.png.

Historical proof preserved from the original ledger:

| Date | Evidence | Result |
|---|---|---|
| 2026-07-14 | Genesis v2.3 controls, scaffold, remote, and handoff | pass |
| 2026-07-14 | Red Vitest run before simulation.ts existed | expected fail |
| 2026-07-14 | Green behavior suite | 3 tests passed |
| 2026-07-14 | Production build | 17 modules transformed |
| 2026-07-14 | Desktop and 390x844 captures plus interaction check | pass; no overflow |
| 2026-07-14 | Pages workflow 29386134625 and live phone check | pass |
| 2026-07-15 | Duck scheduling regression and full build | 4 tests passed; build green |
| 2026-07-15 | Desktop, mobile, 1100x460 dog, and reduced-motion inspection | pass |

The complete fidelity ledger and future ownership were ported into S-002,
S-003, S-004, and S-006. This archive is intentionally not parsed by the stable
spec lifecycle.
