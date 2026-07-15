import { describe, expect, it } from 'vitest'
import { createPufferFamily, getVisitorDelay, pickNextVisitor } from './simulation'

describe('ambient pond scheduling', () => {
  it('keeps each rare visitor inside its intended timing window', () => {
    expect(getVisitorDelay('hummingbird', () => 0)).toBe(25_000)
    expect(getVisitorDelay('hummingbird', () => 1)).toBe(45_000)
    expect(getVisitorDelay('dogs', () => 0)).toBe(55_000)
    expect(getVisitorDelay('dogs', () => 1)).toBe(95_000)
  })

  it('alternates rare visitors so one event cannot starve the other', () => {
    expect(pickNextVisitor(null, () => 0.25)).toBe('hummingbird')
    expect(pickNextVisitor(null, () => 0.75)).toBe('dogs')
    expect(pickNextVisitor('hummingbird', () => 0)).toBe('dogs')
    expect(pickNextVisitor('dogs', () => 1)).toBe('hummingbird')
  })

  it('creates a five-member family with distinct movement profiles', () => {
    const family = createPufferFamily()

    expect(family).toHaveLength(5)
    expect(new Set(family.map((puffer) => puffer.duration))).toHaveLength(5)
    expect(family.every((puffer) => puffer.scale >= 0.58 && puffer.scale <= 1)).toBe(true)
  })
})
