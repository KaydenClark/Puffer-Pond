export type VisitorKind = 'hummingbird' | 'dogs'

export interface PufferProfile {
  id: string
  duration: number
  delay: number
  scale: number
  left: number
  top: number
  route: 'wide' | 'loop' | 'log' | 'grass' | 'deep'
}

const VISITOR_WINDOWS: Record<VisitorKind, readonly [number, number]> = {
  hummingbird: [25_000, 45_000],
  dogs: [55_000, 95_000],
}

export function getVisitorDelay(kind: VisitorKind, random: () => number = Math.random): number {
  const [minimum, maximum] = VISITOR_WINDOWS[kind]
  const sample = Math.min(1, Math.max(0, random()))
  return Math.round(minimum + (maximum - minimum) * sample)
}

export function pickNextVisitor(
  previous: VisitorKind | null,
  random: () => number = Math.random,
): VisitorKind {
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
