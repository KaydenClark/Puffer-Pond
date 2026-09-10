import { SCENE_CONFIG } from './scene-config.mjs';

const underwater = document.getElementById('underwater');

function percent(v) {
  return `${Number(v)}%`;
}

function buildAnimalNode(entry) {
  const animal = document.createElement('img');
  animal.className = `pond-animal pond-animal--${entry.type}`;
  if (entry.flipped) animal.classList.add('pond-animal--flipped');
  animal.style.setProperty('--left', percent(entry.left));
  animal.style.setProperty('--depth', percent(entry.depth));
  animal.style.setProperty('--size', `${entry.size}vmin`);
  animal.style.setProperty('--duration', `${entry.duration}s`);
  animal.style.setProperty('--delay', `${entry.delay}s`);
  animal.style.setProperty('--sway-x', `${entry.swayX}vmin`);
  animal.style.setProperty('--sway-y', `${entry.swayY}vmin`);
  animal.style.setProperty('--spin', `${entry.spin}deg`);
  animal.src = entry.type === 'snail' ? SCENE_CONFIG.asset.snail : SCENE_CONFIG.asset.puffer;
  animal.alt = `${entry.type} profile ${entry.profile}`;
  animal.loading = 'lazy';
  return animal;
}

function render() {
  const existing = underwater.querySelectorAll('.pond-animal');
  existing.forEach((animal) => animal.remove());
  SCENE_CONFIG.animals.forEach((entry) => {
    underwater.appendChild(buildAnimalNode(entry));
  });
}

render();
