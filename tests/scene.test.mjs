import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

import { SCENE_CONFIG } from '../scene-config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cssPath = path.join(root, 'scene.css');
const indexPath = path.join(root, 'index.html');
const scenePath = path.join(root, 'scene.js');
const imageAssets = Object.values(SCENE_CONFIG.asset);

test('scene has five visually distinct animals', () => {
  const { animals } = SCENE_CONFIG;
  assert.equal(animals.length, 5);
  assert.equal(new Set(animals.map((animal) => animal.id)).size, 5);
  assert.equal(new Set(animals.map((animal) => animal.profile)).size, 5);
});

test('all scene animals stay at or below waterline', () => {
  const { animals, waterlinePercent } = SCENE_CONFIG;
  for (const animal of animals) {
    assert.equal(animal.depth >= 0 && animal.depth <= 100, true);
    assert.equal(animal.left >= 0 && animal.left <= 100, true);
    const absoluteTop = waterlinePercent + (100 - waterlinePercent) * (animal.depth / 100);
    assert.equal(absoluteTop >= waterlinePercent, true);
    assert.equal(absoluteTop <= 100, true);
    assert.equal(typeof animal.left, 'number');
    assert.equal(typeof animal.depth, 'number');
  }
});

test('scene includes both puffer and snail profiles', () => {
  const types = new Set(SCENE_CONFIG.animals.map((animal) => animal.type));
  assert.equal(types.has('puffer'), true);
  assert.equal(types.has('snail'), true);
});

test('all required local assets exist', async () => {
  const files = await Promise.all(imageAssets.map((asset) => fs.access(path.join(root, asset))));
  assert.equal(files.length, imageAssets.length);
});

test('reduced-motion media query pauses motion', async () => {
  const css = await fs.readFile(cssPath, 'utf8');
  assert.match(css, /@media\s*\(\s*prefers-reduced-motion:\s*reduce\s*\)/);
  assert.match(css, /animation:\s*none/);
});

test('index and model are wired together', async () => {
  const indexMarkup = await fs.readFile(indexPath, 'utf8');
  const sceneSource = await fs.readFile(scenePath, 'utf8');
  assert.ok(indexMarkup.includes('scene.css'));
  assert.ok(indexMarkup.includes('scene.js'));
  assert.ok(indexMarkup.includes('pond-environment.png'));
  assert.ok(sceneSource.includes('SCENE_CONFIG'));
});
