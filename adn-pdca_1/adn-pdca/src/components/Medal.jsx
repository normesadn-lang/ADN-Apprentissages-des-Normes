// Médaille hexagonale d'une phase, avec son icône au centre.
import { PHASES } from '../theme.js'
import { PHASE_ICONS } from './icons.jsx'

/** Coordonnées des 6 sommets d'un hexagone régulier autour de (cx, cy). */
function hexagonPoints(cx, cy, radius, rotation = 30) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = ((i * 60 + rotation) * Math.PI) / 180
    return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`
  }).join(' ')
}

export function Medal({ phase, size = 28 }) {
  const theme = PHASES[phase] || PHASES.P
  const r = size / 2 - 1
  const scale = (size - 6) / 30
  const showIcon = size >= 22
  const Icon = PHASE_ICONS[phase] || PHASE_ICONS.P

  return (
    <svg
      width={size}
      height={size}
      viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        filter: `drop-shadow(0 0 5px ${theme.glow}AA)`,
      }}
    >
      <polygon points={hexagonPoints(0, 0, r)} fill={theme.tile} stroke={theme.border} strokeWidth="1.8" />
      <polygon points={hexagonPoints(0, 0, r - 3)} fill="none" stroke={theme.border} strokeWidth="0.7" strokeOpacity="0.55" />
      {showIcon && (
        <g transform={`scale(${scale})`}>
          <Icon cx={0} cy={0} color={theme.border} />
        </g>
      )}
    </svg>
  )
}
