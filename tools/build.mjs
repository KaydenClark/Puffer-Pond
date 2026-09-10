import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(toolsDir, '..');
const outDir = path.join(root, 'dist');

async function copyDirectory(source, destination) {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });
  for (const entry of entries) {
    const from = path.join(source, entry.name);
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      await copyDirectory(from, to);
    } else {
      await cp(from, to);
    }
  }
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

await cp(path.join(root, 'index.html'), path.join(outDir, 'index.html'));
await cp(path.join(root, 'scene.css'), path.join(outDir, 'scene.css'));
await cp(path.join(root, 'scene.js'), path.join(outDir, 'scene.js'));
await cp(path.join(root, 'scene-config.mjs'), path.join(outDir, 'scene-config.mjs'));

await copyDirectory(path.join(root, 'public'), path.join(outDir, 'public'));

console.log(JSON.stringify({
  status: 'ok',
  output: path.relative(root, outDir),
  files: ['index.html', 'scene.css', 'scene.js', 'scene-config.mjs', 'public/*'],
}, null, 2));
