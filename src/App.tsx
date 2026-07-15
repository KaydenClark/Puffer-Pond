import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { createPufferFamily, getDuckDelay, getVisitorDelay, pickNextVisitor, type RareVisitorKind } from './simulation'
import './styles.css'

const puffers = createPufferFamily()

interface Ripple {
  id: number
  x: number
  y: number
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 9v6h4l5 4V5L9 9H5Z" />
      {muted ? (
        <path d="m18 9 4 4m0-4-4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <path d="M17 8.5c1.8 1.8 1.8 5.2 0 7M19.5 6c3.3 3.3 3.3 8.7 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  )
}

function MoonIcon({ night }: { night: boolean }) {
  return night ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.3A8.7 8.7 0 0 1 8.7 3.8 9 9 0 1 0 20.2 15.3Z" /></svg>
  )
}

function readNightPreference(): boolean {
  return window.localStorage.getItem('puffer-pond-night') === 'true'
}

function useRareVisitor(): RareVisitorKind | null {
  const forced = new URLSearchParams(window.location.search).get('visitor')
  const forcedVisitor = forced === 'hummingbird' || forced === 'dogs' ? forced : null
  const [visitor, setVisitor] = useState<RareVisitorKind | null>(forcedVisitor)

  useEffect(() => {
    let active = true
    let waitTimer: number | undefined
    let visitTimer: number | undefined

    const queue = (previous: RareVisitorKind | null) => {
      const next = pickNextVisitor(previous)
      waitTimer = window.setTimeout(() => {
        if (!active) return
        setVisitor(next)
        const visitLength = next === 'hummingbird' ? 11_000 : 16_000
        visitTimer = window.setTimeout(() => {
          if (!active) return
          setVisitor(null)
          queue(next)
        }, visitLength)
      }, getVisitorDelay(next))
    }

    if (forcedVisitor) {
      visitTimer = window.setTimeout(() => {
        if (!active) return
        setVisitor(null)
        queue(forcedVisitor)
      }, forcedVisitor === 'hummingbird' ? 11_000 : 16_000)
    } else {
      queue(null)
    }

    return () => {
      active = false
      window.clearTimeout(waitTimer)
      window.clearTimeout(visitTimer)
    }
  }, [forcedVisitor])

  return visitor
}

function useDuckVisit(): boolean {
  const forced = new URLSearchParams(window.location.search).get('visitor') === 'ducks'
  const [visiting, setVisiting] = useState(forced)

  useEffect(() => {
    let active = true
    let waitTimer: number | undefined
    let visitTimer: number | undefined

    const queue = () => {
      waitTimer = window.setTimeout(() => {
        if (!active) return
        setVisiting(true)
        visitTimer = window.setTimeout(() => {
          if (!active) return
          setVisiting(false)
          queue()
        }, 18_000)
      }, getDuckDelay())
    }

    if (forced) {
      visitTimer = window.setTimeout(() => {
        if (!active) return
        setVisiting(false)
        queue()
      }, 18_000)
    } else {
      queue()
    }

    return () => {
      active = false
      window.clearTimeout(waitTimer)
      window.clearTimeout(visitTimer)
    }
  }, [forced])

  return visiting
}

function startPondAudio(): () => void {
  const AudioContextClass = window.AudioContext
  const context = new AudioContextClass()
  const master = context.createGain()
  master.gain.value = 0.045
  master.connect(context.destination)

  const playDrop = () => {
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const now = context.currentTime
    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(520 + Math.random() * 180, now)
    oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.34)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.16, now + 0.025)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42)
    oscillator.connect(gain)
    gain.connect(master)
    oscillator.start(now)
    oscillator.stop(now + 0.45)
  }

  playDrop()
  const interval = window.setInterval(playDrop, 2_800 + Math.random() * 2_200)

  return () => {
    window.clearInterval(interval)
    void context.close()
  }
}

export default function App() {
  const [night, setNight] = useState(readNightPreference)
  const [soundOn, setSoundOn] = useState(false)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const stopAudio = useRef<(() => void) | null>(null)
  const nextRippleId = useRef(0)
  const visitor = useRareVisitor()
  const ducksVisiting = useDuckVisit()

  useEffect(() => () => stopAudio.current?.(), [])

  const toggleSound = () => {
    if (soundOn) {
      stopAudio.current?.()
      stopAudio.current = null
      setSoundOn(false)
      return
    }
    stopAudio.current = startPondAudio()
    setSoundOn(true)
  }

  const toggleNight = () => {
    setNight((current) => {
      const next = !current
      window.localStorage.setItem('puffer-pond-night', String(next))
      return next
    })
  }

  const addRipple = (event: PointerEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest('button')) return
    const rect = event.currentTarget.getBoundingClientRect()
    const y = ((event.clientY - rect.top) / rect.height) * 100
    if (y < 41) return
    const ripple = {
      id: nextRippleId.current++,
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y,
    }
    setRipples((current) => [...current.slice(-5), ripple])
    window.setTimeout(() => {
      setRipples((current) => current.filter((item) => item.id !== ripple.id))
    }, 1_500)
  }

  return (
    <main className={`pond ${night ? 'is-night' : ''}`} onPointerDown={addRipple}>
      <div className="pond-background" aria-hidden="true" />
      <div className="sunlight" aria-hidden="true" />

      <header className="pond-header">
        <h1>Puffer Pond</h1>
        <div className="controls" aria-label="Pond controls">
          <button type="button" onClick={toggleSound} aria-pressed={soundOn} aria-label={soundOn ? 'Mute pond sounds' : 'Play pond sounds'}>
            <SoundIcon muted={!soundOn} />
            <span>Sound</span>
          </button>
          <button type="button" onClick={toggleNight} aria-pressed={night} aria-label={night ? 'Switch to day' : 'Switch to night'}>
            <MoonIcon night={night} />
            <span>{night ? 'Day' : 'Night'}</span>
          </button>
        </div>
      </header>

      <section className="sky-life" aria-label="Wildlife above the pond">
        {ducksVisiting && (
          <div className="duck-visit" aria-label="Two ducks land on the pond">
            <img className="duck duck-one" src="./assets/duck.webp" alt="" />
            <img className="duck duck-two" src="./assets/duck.webp" alt="" />
          </div>
        )}
        {visitor === 'hummingbird' && (
          <img className="hummingbird" src="./assets/hummingbird.webp" alt="A green hummingbird visits the flowers" />
        )}
        {visitor === 'dogs' && (
          <img className="dogs" src="./assets/dogs.webp" alt="Two friendly dogs stop to drink from the pond" />
        )}
      </section>

      <section className="underwater-life" aria-label="Pea puffers swimming below the water">
        {puffers.map((puffer) => (
          <div
            key={puffer.id}
            className={`puffer-route route-${puffer.route}`}
            style={{
              '--left': `${puffer.left}%`,
              '--top': `${puffer.top}%`,
              '--duration': `${puffer.duration}s`,
              '--delay': `${puffer.delay}s`,
              '--scale': puffer.scale,
            } as CSSProperties}
          >
            <img src="./assets/puffer.webp" alt="" />
          </div>
        ))}

        <img className="snail snail-one" src="./assets/snail.webp" alt="" />
        <img className="snail snail-two" src="./assets/snail.webp" alt="" />
        <img className="snail snail-three" src="./assets/snail.webp" alt="" />
        <div className="bubbles bubbles-one" aria-hidden="true" />
        <div className="bubbles bubbles-two" aria-hidden="true" />
      </section>

      <div className="ripple-layer" aria-hidden="true">
        {ripples.map((ripple) => (
          <span key={ripple.id} className="ripple" style={{ left: `${ripple.x}%`, top: `${ripple.y}%` }} />
        ))}
      </div>

      <p className="pond-note">Stay awhile. Something small is always happening.</p>
      <p className="sr-only" aria-live="polite">
        {visitor === 'hummingbird'
          ? 'A hummingbird has arrived.'
          : visitor === 'dogs'
            ? 'Two dogs have arrived at the pond.'
            : ducksVisiting
              ? 'Two ducks have landed on the pond.'
              : ''}
      </p>
    </main>
  )
}
