# Puffer Pond

Puffer Pond is a responsive, full-screen living illustration: a family of pea
puffers explores grass and driftwood for snails while ducks land on the surface
and a green hummingbird and two thirsty dogs visit the shore.

**[Open Puffer Pond](https://kaydenclark.github.io/Puffer-Pond/)**

![Puffer Pond desktop preview](docs/desktop.png)

Tap or click the water to make a ripple. The top-right controls enable gentle
pond sounds and switch between day and night. Sound stays off until explicitly
enabled.

## Project Role

Puffer Pond is a real ambient product and the active small visual-product test
project for LLM Workbench Genesis, stable specs, responsive proof, static
deployment, remote recovery, and later harness/canon updates. That test role
does not make optional product ideas automatically approved.

## Control Surface

- AGENTS.md - agent boundaries, lifecycle, safety, and verification.
- BLUEPRINT.md - product identity, architecture, invariants, and coverage matrix.
- LEXICON.md - shared project and Workbench definitions.
- TASKBOARD.md - generated hot projection and owner decisions.
- RUNBOOK.md - exact setup, lifecycle, verification, deployment, and recovery.
- CLAUDE.md - thin Claude bridge to the shared agent contract.
- specs/S-###-slug/SPEC.md - durable capability requirements, tickets, and proof.

HARNESS_FEEDBACK.md records reusable Workbench friction rather than product work.

## Getting Started

~~~bash
npm ci
npm run dev -- --host 127.0.0.1
~~~

Open http://127.0.0.1:5173.

~~~bash
npm test
npm run build
node tools/spec-workbench.mjs doctor
node tools/spec-workbench.mjs next --json
~~~

## Project Status

The ambient product is implemented and live. The generated Taskboard identifies
one agent-safe verification ticket and keeps real-phone, PWA, behavior-variety,
and subjective visual decisions owner-gated.

## License

MIT. See LICENSE.
