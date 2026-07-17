# Puffer Pond - Runbook

> Generated from LLM Workbench v2.3.

**Last reviewed:** 2026-07-17
**Runtime owner:** Kayden
**Environment:** local development and public GitHub Pages

## Prerequisites

- Node.js 24 in GitHub Pages CI.
- Current local verification also passes on Node.js 26.3.0 with npm 11.16.0.
- Chromium installed through Playwright for headless acceptance:

~~~bash
npx playwright install chromium
~~~

No environment variables, credentials, backend, database, external API, or
paid service are required. Night preference is stored in localStorage; sound is
session-local and opt-in.

## Install

~~~bash
npm ci
~~~

Expected result: dependencies install from package-lock.json without changing it.

## Run Locally

~~~bash
npm run dev -- --host 127.0.0.1
~~~

Open http://127.0.0.1:5173. Deterministic visitor inspection URLs are:

- http://127.0.0.1:5173/?visitor=hummingbird
- http://127.0.0.1:5173/?visitor=dogs
- http://127.0.0.1:5173/?visitor=ducks

## Stable Spec Lifecycle

~~~bash
node tools/spec-workbench.mjs doctor
node tools/spec-workbench.mjs next --json
node tools/spec-workbench.mjs show S-006
~~~

Claim and close commands are:

~~~bash
node tools/spec-workbench.mjs claim S-006 --agent engineer-name --date 2026-07-17
node tools/spec-workbench.mjs close S-006 --proof "named proof" --docs "docs result" --remaining-gap "remaining gap" --date 2026-07-17
node tools/spec-workbench.mjs render
node tools/spec-workbench.mjs doctor
~~~

## Test And Build

Targeted deterministic suite:

~~~bash
npm test -- src/simulation.test.ts
~~~

Targeted headless browser acceptance:

~~~bash
npm run test:browser
~~~

The runner starts a local Vite server on 127.0.0.1:4173 and checks desktop and
phone overflow, phone control state and touch geometry, valid and rejected
ripple input, reduced-motion pond/duck composition, and forced dog shoreline
geometry at 1100x460. Duck and dog acceptance requires each image to report
complete with positive natural width and height; a blocked-asset regression
proves missing visitor art cannot pass geometry checks. The runner writes the
compact reduced-motion proof artifact to docs/browser-acceptance.jpg.

Full native gate:

~~~bash
npm test
npm run test:browser
npm run build
node tools/spec-workbench.mjs render
node tools/spec-workbench.mjs doctor
git diff --check
~~~

Pure scheduling and state rules require Vitest coverage. Visible motion,
responsive composition, browser APIs, accessibility, and subjective calmness
require browser or owner proof. A skipped automated test must name why the
behavior is not deterministic and provide the strongest repeatable manual seam.

## Visual And Interaction Verification

With the local server running:

~~~bash
npx --yes --package playwright playwright screenshot --browser=chromium --viewport-size="1536,1024" --wait-for-timeout=10000 "http://127.0.0.1:5173/?visitor=ducks" "docs/desktop.png"
npx --yes --package playwright playwright screenshot --browser=chromium --viewport-size="390,844" --wait-for-timeout=10000 "http://127.0.0.1:5173/?visitor=ducks" "docs/mobile.png"
npx --yes --package playwright playwright screenshot --browser=chromium --viewport-size="1100,460" --wait-for-timeout=8000 "http://127.0.0.1:5173/?visitor=dogs" "docs/odd-window.png"
~~~

Inspect docs/concept-desktop.png, docs/desktop.png, docs/mobile.png, and
docs/odd-window.png together. Check full-viewport fit, waterline discipline,
touch targets, wildlife layering, title/control legibility, palette, and cropping.

Current claims to preserve:

- five distinct puffer profiles remain below the waterline;
- hummingbird delays are 25-45 seconds, dog delays 55-95 seconds, and duck
  landings 65-100 seconds;
- rare visitors alternate so neither is starved;
- sound, night mode, and ripple interactions remain pointer/keyboard usable;
- the viewport does not scroll horizontally or vertically; and
- reduced motion retains a legible, mostly still scene.

The automated geometry and interaction gate complements these manual captures;
it does not replace subjective screenshot inspection or the owner phone watch.

The owner-only five-minute phone watch records device/browser, portrait and
landscape cropping, perceived smoothness, thermal/battery concern, control
comfort, and whether the scene remains calm rather than repetitive.

## Evaluation And Harness Feedback

Static evaluator diagnostics:

~~~bash
node "/Users/kayden/GPT_OS/Workbench Factory/tools/evaluate-workbench.mjs" --path "/Users/kayden/GPT_OS/Projects/Puffer-Pond" --include-controls
~~~

The evaluator is a harness diagnostic, not product-outcome proof. Record reusable
harness friction in HARNESS_FEEDBACK.md and product proof in the assigned spec.

## Deployment And Live Verification

Pushes to main run .github/workflows/deploy-pages.yml: npm ci, npm test, npm run
build, artifact upload, and GitHub Pages deployment. Feature/planning branches do
not deploy. The owner controls merge to main and the resulting production change.

- Repository: https://github.com/KaydenClark/Puffer-Pond
- Live site: https://kaydenclark.github.io/Puffer-Pond/

Read-only checks:

~~~bash
gh api repos/KaydenClark/Puffer-Pond/actions/runs --jq '.workflow_runs[:3][] | [.id,.head_sha,.status,.conclusion,.html_url] | @tsv'
curl -fsSIL https://kaydenclark.github.io/Puffer-Pond/
~~~

## Version Control And Remote Recovery

~~~bash
git status --short --branch
git remote -v
git branch -vv
git diff --check
git switch -c codex/<spec-ticket-slug>
git push -u origin codex/<spec-ticket-slug>
~~~

Fresh-clone verification for the canon checkpoint:

~~~bash
puffer_verify_dir=$(mktemp -d)
git clone https://github.com/KaydenClark/Puffer-Pond.git "$puffer_verify_dir/Puffer-Pond"
git -C "$puffer_verify_dir/Puffer-Pond" checkout codex/puffer-pond-canon-spec-coverage
cd "$puffer_verify_dir/Puffer-Pond"
npm ci
npx playwright install chromium
npm test
npm run test:browser
npm run build
node tools/spec-workbench.mjs doctor
~~~

The update source was origin/main at
93c3d2cf9bb4fba5f3e501f7ebc0670b9435ed11. The vendored spec-workbench tool
checksum is ef31d219c092d8c9b1c595734d933de9560c1d099967daf212b7481040acd672;
markdown-table.mjs is acca5cb04cecb0044c74aaa38f42d6f0e4e6addb26b45a744d14ca0b74487e6b.

## Upgrading The Harness

Canonical source: /Users/kayden/GPT_OS/Workbench Factory. Use the update-harness
protocol, not first-time Adoption. Verify source and target branches, capture the
native baseline, reconcile rather than overwrite project truth, copy lifecycle
helpers exactly, update the dedicated upgrade spec, render, doctor, re-run the
native gate, and push a remotely recoverable checkpoint. Do not rerun Genesis.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| Visitor does not appear quickly | normal intermittent pacing | use a visitor query URL | use forced URL only for inspection |
| Wildlife crosses wrong layer | responsive anchor/path drift | compare CSS percentages with waterline capture | correct the smallest anchor/path and add proof |
| Sound does not start | browser autoplay protection | inspect Sound aria-pressed state | explicitly activate Sound |
| Pages has missing assets | wrong Vite base or stale artifact | inspect vite.config.ts and workflow | retain base './' and rebuild |
| Doctor reports render drift | generated regions are stale | run render then doctor | do not hand-edit generated regions |

## Recovery And Rollback

Use Git history to revert the smallest offending change. Do not reset shared
history or edit dist/ directly. Rebuild, rerun the failed check, append evidence
to the assigned spec, render, and doctor.

## Operational Proof

The completed capability specs retain Genesis, visual, deployment, and upgrade
evidence. Routine read-only checks need only be named in the final response.
