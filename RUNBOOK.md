# Puffer Pond - Runbook

> Generated from LLM Workbench v3.2.0.

**Status:** Draft for the S-00E fresh-project proof. No command below has run
for Puffer Pond yet.

## Ordinary Entry

Follow `AGENTS.md` -> this file -> `LEXICON.md`, then load the assigned Spec.
Run the project-local doctor and `next --json` only after Genesis has created
the fresh room and its runtime tools.

## Prerequisites

- Node.js 20 or later.
- A modern local browser for independent desktop and phone checks.

The bounded slice has no package-manager dependencies, environment variables,
credentials, remote service, database, or network dependency.

## Planned Local Commands

After the fresh project contains its source, tests, build tool, manifest, and
installed Workbench runtime, run:

```bash
node --test tests/*.test.mjs
node tools/build.mjs
node workbench/tools/spec-workbench.mjs doctor
```

Expected result, not yet verified: the tests pass, the static build produces
the project output, and doctor reports no blocker for the actual `S-001` packet.

## Planned Browser Proof

Use an independent local browser at `1536x1024` and `390x844`. Capture a
screenshot at each size and check that the document has no horizontal or
vertical overflow, puffers/snails remain below the visible waterline, and
reduced motion pauses decorative animation. These checks are required before
claiming responsive or visual acceptance; none has run for this draft.

## Test Coverage

`tests/scene.test.mjs` will cover five unique puffer profiles, every selected
underwater position at or below the scene-model waterline, and the reduced-motion
state. Browser inspection covers CSS layout and rendering, which pure Node tests
cannot establish.

## Asset Provenance

The fresh project may copy only the environment, puffer, and snail assets named
in the first spec and source provenance, preserving the MIT notice from the supplied public source.
Record their URL, pinned commit, blob hashes, author notice, and copy date in
the actual S-001 evidence. Do not copy historical application code, controls,
specs, remote configuration, screenshots, or unselected assets.

## Git And Recovery

The owner named the public Puffer-Pond test repository. New proof recovery uses
a separate task branch there; main and its deployment remain unchanged. This draft makes
no remote, branch, commit, push, deployment, or browser-proof claim. Once the
manifest exists, use its declared integration branch and the project Git rules.

## Review

Before integration, a separate-context reviewer must inspect the immutable
candidate, S-001 source lineage, the destination-only Blueprint, the absence of
inherited historical tasks/runtime claims, and actual test/build/browser proof.
