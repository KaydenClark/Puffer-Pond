# Puffer Pond - Runbook

> Generated from LLM Workbench v3.2.0.

**Status:** `S-001 / TK-001` is locally complete. Project-local Node tests,
static build, doctor, and required local Chrome browser proof have passed.

## Ordinary Entry

Follow `AGENTS.md` -> this file -> `LEXICON.md`, then load the assigned Spec.
Run the project-local doctor and `next --json` (`node workbench/tools/spec-workbench.mjs next --json`)
after the fresh room and its runtime tools are available.

## Prerequisites

- Node.js 20 or later.
- A modern local browser for independent desktop and phone checks.

The bounded slice has no package-manager dependencies, environment variables,
credentials, remote service, database, or network dependency. Browser proof may
use host verification tools outside the project; those tools are not project
runtime dependencies.

## Local Commands

Run:

```bash
node --test tests/*.test.mjs
node tools/build.mjs
node workbench/tools/spec-workbench.mjs doctor
```

Observed result on 2026-09-10: all 7 tests passed, the static build produced
`dist`, and doctor reported no blocker for the actual `S-001` packet.

## Browser Proof

Use an independent local browser at `1536x1024` and `390x844`. Capture a
screenshot at each size and check that the document has no horizontal or
vertical overflow, five puffers plus snails remain below the visible waterline,
images load, no browser errors occur, and reduced motion pauses or removes
decorative animation.

Observed result on 2026-09-10: local Chrome checks passed at both required
viewports, with five puffer profiles and two snail profiles below the waterline.
Screenshots and machine-readable proof were saved under ignored
`workbench/sessions/recovery/browser-proof/`.

## Test Coverage

`tests/scene.test.mjs` covers five unique puffer profiles plus snails, every
selected underwater position at or below the scene-model waterline, asset
presence, page wiring, reduced-motion CSS, and inline favicon declaration.
Browser inspection covers CSS layout and rendering, which pure Node tests cannot
establish.

## Asset Provenance

The fresh project may copy only the environment, puffer, and snail assets named
in the first spec and source provenance, preserving the MIT notice from the supplied public source.
Record their URL, pinned commit, blob hashes, author notice, and copy date in
the actual S-001 evidence. Do not copy historical application code, controls,
specs, remote configuration, screenshots, or unselected assets.

## Git And Recovery

The owner named the public Puffer-Pond test repository. New proof recovery uses
a separate task branch there. Use the manifest-declared integration branch and
the project Git rules; verify the remote and candidate before publication.
The bounded proof does not authorize a deployment or replacement of main.

## Review

Before integration or publication, a separate-context reviewer should inspect
the immutable candidate, S-001 source lineage, the destination-only Blueprint,
the absence of inherited historical tasks/runtime claims, and actual
test/build/browser proof. This run did not push, merge, deploy, or remote-publish
the site.
