# Puffer Pond - Runbook

> Generated from LLM Workbench v2.3.

## Prerequisites

Verified on:

- Windows PowerShell
- Node.js `v24.14.1`
- npm `11.11.0`
- Chromium through Playwright `1.61.1` for visual verification

## Environment Configuration

No environment variables, credentials, backend, database, or external API are required.

Sound and day/night choices are stored only in the browser's local storage.

## Install

From the repository root:

```powershell
npm.cmd install
```

For a clean lockfile-based install, including CI:

```powershell
npm.cmd ci
```

## Run Locally

```powershell
npm.cmd run dev -- --host 127.0.0.1
```

Open `http://127.0.0.1:5173`.

Rare visitors can be shown immediately for deterministic visual inspection:

- `http://127.0.0.1:5173/?visitor=hummingbird`
- `http://127.0.0.1:5173/?visitor=dogs`
- `http://127.0.0.1:5173/?visitor=ducks`

## Test And Build

Run the behavior suite:

```powershell
npm.cmd test
```

Run the TypeScript and production build gate:

```powershell
npm.cmd run build
```

The complete local verification gate is:

```powershell
npm.cmd test
npm.cmd run build
```

### Test Coverage Policy

- Pure scheduling and state rules require focused Vitest coverage.
- Visual motion, responsive composition, and browser APIs require real-browser inspection.
- Bug fixes should add a regression test when the failure can be expressed deterministically.

## Evaluation And Benchmarking

Capture the approved desktop and phone viewports with the local server running:

```powershell
npx.cmd --yes --package playwright playwright screenshot --browser=chromium --viewport-size="1536,1024" --wait-for-timeout=10000 "http://127.0.0.1:5173/?visitor=ducks" "docs/desktop.png"
npx.cmd --yes --package playwright playwright screenshot --browser=chromium --viewport-size="390,844" --wait-for-timeout=10000 "http://127.0.0.1:5173/?visitor=ducks" "docs/mobile.png"
npx.cmd --yes --package playwright playwright screenshot --browser=chromium --viewport-size="1100,460" --wait-for-timeout=8000 "http://127.0.0.1:5173/?visitor=dogs" "docs/odd-window.png"
```

Inspect `docs/concept-desktop.png`, `docs/desktop.png`, and `docs/mobile.png` together. Check waterline discipline, full-viewport fit, title/control legibility, touch targets, wildlife layering, palette, and cropping.

### Benchmark-Driven Improvement

Profile only after a real phone shows frame drops. Preserve the asset-led illustration before reducing character count or motion.

### Claims To Test

- five distinct puffer movement profiles remain below the waterline;
- hummingbird delays remain 25-45 seconds, dog delays remain 55-95 seconds, and duck landings wait 65-100 seconds;
- rare events alternate so neither visitor is starved;
- the viewport never scrolls horizontally or vertically;
- sound, night mode, and ripple interactions remain usable by pointer and keyboard.

### Evaluation Design

Use a 1536x1024 desktop viewport and a 390x844 phone viewport. Force one visitor per capture, and include an 1100x460 dog capture when changing shoreline positioning. Use the normal unforced URL for a five-minute watch test when tuning pacing.

### Workbench Evaluation Commands

No upstream harness evaluator is copied into this downstream project. Verify the v2.3 completion gate with targeted placeholder searches plus the project tests and build.

### Harness Feedback Loop

Record project-specific process friction in the active spec evidence log. Escalate a reusable harness problem to the source LLM Workbench repository only when it affects more than this project.

## Data Operations

There is no database. To reset local preferences, clear site data for `127.0.0.1:5173` or remove the `puffer-pond-night` local-storage key.

## Deployment Or Startup

The repository includes `.github/workflows/deploy-pages.yml`. A push to `main` runs tests, builds `dist/`, uploads the static artifact, and deploys it to GitHub Pages.

Vite uses `base: './'`, so hashed assets and the pond art resolve correctly below a repository subpath.

- Repository: `https://github.com/KaydenClark/Puffer-Pond`
- Live site: `https://kaydenclark.github.io/Puffer-Pond/`

## Version-Control Procedures

Before committing:

```powershell
git status --short --branch
git diff --check
npm.cmd test
npm.cmd run build
```

Stage only intended project files. Do not stage `node_modules/`, `dist/`, `tmp/`, or obsolete browser captures.

## Upgrading The Harness

This project was generated from LLM Workbench v2.3 on the linked `integration` branch. Compare changed template sections against the source, preserve project-specific facts, bump all four control-doc stamps together, re-run the full gate, and append evidence to `specs/ambient-pond.md`.

## Troubleshooting

- **Vite reports `spawn EPERM` in a sandbox:** run the dev server in a normal local PowerShell; the application build itself is not failing.
- **Wildlife appears above/below the wrong layer:** inspect percentage anchors and transform paths in `src/styles.css` against the visual waterline.
- **No sound plays:** sound is opt-in; click the Sound control. Browser autoplay rules intentionally prevent startup audio.
- **A rare visitor does not appear quickly:** use the deterministic query string for inspection or wait for its configured interval.
- **Pages serves missing assets:** confirm `vite.config.ts` still uses `base: './'` and the workflow uploads `dist/`.

## Recovery And Rollback

Use Git history to revert the smallest offending commit. Do not reset or rewrite shared history. Regenerate `dist/` with `npm.cmd run build`; never edit build output directly.

## Operational Proof

Verified during Genesis on 2026-07-14:

- red test failed because `src/simulation.ts` did not yet exist;
- green test: 3 Vitest tests passed;
- production build: 17 modules transformed successfully;
- desktop render: 1536x1024;
- phone render: 390x844;
- interaction QA: sound and night toggled to `aria-pressed=true`, one ripple appeared, and overflow was false.
- GitHub Pages workflow run `29386134625`: build and deploy jobs passed; the live site was visually checked at 390x844.
