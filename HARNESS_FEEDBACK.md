# Puffer Pond - Harness Feedback

> Generated from LLM Workbench v2.3. See RUNBOOK.md -> Upgrading The Harness.

This append-only log carries reusable control-plane friction back to the LLM
Workbench. Product work and local defects stay in their owning stable specs.

| Date | Doc / section | What happened | Impact | Proposed change | Status |
|---|---|---|---|---|---|
| 2026-07-17 | tools/spec-workbench.mjs -> renderCatalog | The canonical v2.3 tool emits the Spec catalog header row twice while doctor expects the duplicated output. | low; lifecycle remains deterministic, but the rendered Blueprint table is visually malformed | Remove the duplicate header entry and add an exact render fixture before the next Workbench release. | new |
