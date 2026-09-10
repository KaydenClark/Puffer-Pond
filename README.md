# Puffer Pond

> Generated from LLM Workbench v3.2.0.

Puffer Pond now implements `S-001 / TK-001`: a responsive full-viewport ambient
scene for phone and desktop. The first slice shows five distinct pea puffers and
snails below a declared waterline, with gentle motion that pauses for
reduced-motion users.

This project directory includes source and verification records for the fresh
proof implementation, plus the room-brain routing and local work note. It has
not been pushed, merged, deployed, or remote-published by this proof.

## Local Scope

The implementation uses static HTML, CSS, browser-native JavaScript, and Node
built-in tests. It uses no framework, package dependencies, backend,
tracking, analytics, accounts, remote settings, remote fonts, third-party scripts,
or network requests. Visitors, audio, night mode, ripples, and game mechanics are
deferred.

## Observed Verification

The local proof passed:

- `node --test tests/*.test.mjs`
- `node tools/build.mjs`
- `node workbench/tools/spec-workbench.mjs doctor`
- Chrome browser checks at `1536x1024` and `390x844`

The browser proof verified no document overflow, five puffer profiles plus two
snail profiles below the visible waterline, loaded images, no browser errors,
and reduced-motion animation removal. Screenshots and `result.json` were saved
under ignored `workbench/sessions/recovery/browser-proof/`. This is local Chrome
proof only; it is not a cross-browser or cross-device reliability claim.

## Source Evidence And Asset Notice

The bounded destination is grounded in historical public evidence from
[`KaydenClark/Puffer-Pond`](https://github.com/KaydenClark/Puffer-Pond), pinned
to `93c3d2cf9bb4fba5f3e501f7ebc0670b9435ed11`. S-001 retains the source
evidence route and MIT notice boundary for the copied environment, puffer, and
snail assets. The historical project itself is not adopted or changed.

Read [AGENTS.md](AGENTS.md) for project rules, [BLUEPRINT.md](BLUEPRINT.md) for
destination, [LEXICON.md](LEXICON.md) for terms, [TASKBOARD.md](TASKBOARD.md) for
the current slice context, and [workbench/wiki/MEMORY.md](workbench/wiki/MEMORY.md)
for durable routing.
