# Puffer Pond - Agent Operating System

> Generated from LLM Workbench v2.3.

Work like a pragmatic senior engineer. Start with the answer, preserve the full-screen pond promise, and make the smallest correct change. Use red/green testing when behavior can be exercised deterministically.

## Authority Order

1. Current owner request.
2. This `AGENTS.md`.
3. Verified source, tests, browser output, and build output.
4. `BLUEPRINT.md` for stable product direction and architecture.
5. `TASKBOARD.md` for current work state.
6. Active capability specs under `specs/`.
7. `RUNBOOK.md` for commands and operations.
8. Older notes and generated artifacts.

When documentation and verified behavior disagree, trust the verified behavior, flag the drift, and update the owning document in the same task.

## Read Scope

Agents may read:

- root control docs, package manifests, TypeScript configuration, and workflow files;
- `src/`, `specs/`, `docs/`, and `public/assets/`;
- tests next to source files;
- generated `dist/` output only while diagnosing a build or deployment;
- dependency metadata needed to understand a relevant package.

Do not read secrets, credentials, browser profiles, unrelated repositories, or raw personal data. Environment files are out of scope unless the owner explicitly names one.

## Edit Scope

Agents may edit:

- application source and tests in `src/`;
- production art in `public/assets/` when the task is explicitly visual;
- project docs in `docs/` and capability specs in `specs/`;
- root controls: `AGENTS.md`, `BLUEPRINT.md`, `TASKBOARD.md`, `RUNBOOK.md`, and `README.md`;
- package/config files and `.github/workflows/` when required by the current task.

Agents must not edit:

- `.git/`, `node_modules/`, `dist/`, `.vite/`, `coverage/`, or temporary browser/image output as source;
- files outside this repository;
- unrelated projects under `E:\GPT_OS\Projects`;
- secrets, credentials, account settings, or external service configuration without explicit authority.

Claude Code mechanical settings are deliberately omitted: the project is tool-agnostic, contains no secrets or backend, and this concrete prose scope is the governing boundary.

## Work Selection And Lifecycle

- Read `TASKBOARD.md` and the active spec before changing behavior.
- Prefer the highest-priority `ready` item that is not already owned.
- Mark work in progress before long edits and return it to `ready` if abandoned.
- Keep one capability change per commit when practical.
- A task is done only when its required proof exists and docs reflect the result.

## Engineering And Verification

For behavior changes:

1. State the expected behavior.
2. Add or update a focused failing test.
3. Confirm the failure is for the expected reason.
4. Implement the smallest correction.
5. Run `npm test` and `npm run build`.
6. For visible changes, run desktop and 390x844 browser checks and inspect screenshots.

Preserve these invariants:

- no scrolling or viewport overflow;
- puffers and snails remain below the waterline;
- birds and visiting animals remain above it;
- controls remain keyboard accessible with at least 44px touch targets;
- `prefers-reduced-motion` remains respected;
- no personal data or network dependency is introduced accidentally.

## Documentation Ownership And Proof

The agent making a durable change owns its documentation:

- stable product/architecture change -> `BLUEPRINT.md`;
- current status or next work -> `TASKBOARD.md`;
- capability behavior and acceptance proof -> owning file in `specs/`;
- run, test, build, deploy, or recovery procedure -> `RUNBOOK.md`;
- user-facing setup or product summary -> `README.md`.

Append proof to the active spec evidence log. Do not rewrite older evidence rows. If docs need no change, say `Docs checked; no update needed` with the reason in the final response.

## Safety And Change Control

- Validate user-visible inputs and browser APIs before using them.
- Keep audio opt-in because browsers and users expect explicit playback consent.
- Do not add analytics, remote fonts, third-party scripts, or trackers without owner approval.
- Do not delete production assets, rewrite history, or change repository visibility without explicit approval.
- Prefer reversible static-hosting and local-state choices.

## Git Rules

- Inspect `git status --short --branch` and the diff before staging.
- Stage only this project's intended files.
- Never commit secrets, `node_modules/`, `dist/`, temporary chroma-key sources, or browser scratch output.
- Do not force push, rewrite history, or change remotes without explicit owner direction.
- The Genesis request explicitly authorizes the initial remote creation and first push; later pushes require a current request or established workflow authority.

## Long Session Control

- Re-read `TASKBOARD.md` after a context summary or a long pause.
- Keep the active spec evidence log concise and append-only.
- If the hot queue exceeds seven items, move lower-priority ideas into a clearly labelled backlog section.
- If blocked, record the exact failing command, evidence, and smallest next action.

## Visual And Asset Work

- `docs/concept-desktop.png` is the approved direction for palette, composition, typography mood, and animal treatment.
- Generated production art must be stored in `public/assets/`, visually inspected after background removal, and compressed appropriately for phones.
- UI text, controls, state, and accessibility remain code-native.
- Any intentional visual deviation must be recorded in `specs/ambient-pond.md` with the reason.
- Compare the concept and latest desktop/mobile renders with `view_image` before handing off material visual work.
