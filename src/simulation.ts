export type RareVisitorKind = 'hummingbird' | 'dogs'

export interface PufferProfile {
  id: string
  duration: number
  delay: number
  scale: number
  left: number
  top: number
  route: 'wide' | 'loop' | 'log' | 'grass' | 'deep'
}

const VISITOR_WINDOWS: Record<RareVisitorKind, readonly [number, number]> = {
  hummingbird: [25_000, 45_000],
  dogs: [55_000, 95_000],
}

const DUCK_WAIT_WINDOW: readonly [number, number] = [65_000, 100_000]

function sampleDelay(
  [minimum, maximum]: readonly [number, number],
  random: () => number,
): number {
  const sample = Math.min(1, Math.max(0, random()))
  return Math.round(minimum + (maximum - minimum) * sample)
}

export function getVisitorDelay(kind: RareVisitorKind, random: () => number = Math.random): number {
  return sampleDelay(VISITOR_WINDOWS[kind], random)
}

export function getDuckDelay(random: () => number = Math.random): number {
  return sampleDelay(DUCK_WAIT_WINDOW, random)
}

export function pickNextVisitor(
  previous: RareVisitorKind | null,
  random: () => number = Math.random,
): RareVisitorKind {
  if (previous === 'hummingbird') return 'dogs'
  if (previous === 'dogs') return 'hummingbird'
  return random() < 0.5 ? 'hummingbird' : 'dogs'
}

export function createPufferFamily(): PufferProfile[] {
  return [
    { id: 'pepper', duration: 24, delay: -8, scale: 1, left: 23, top: 62, route: 'wide' },
    { id: 'pea', duration: 31, delay: -21, scale: 0.78, left: 53, top: 58, route: 'loop' },
    { id: 'pip', duration: 27, delay: -13, scale: 0.67, left: 39, top: 77, route: 'grass' },
    { id: 'poppy', duration: 36, delay: -29, scale: 0.58, left: 66, top: 81, route: 'log' },
    { id: 'pickle', duration: 42, delay: -34, scale: 0.72, left: 78, top: 69, route: 'deep' },
  ]
}
