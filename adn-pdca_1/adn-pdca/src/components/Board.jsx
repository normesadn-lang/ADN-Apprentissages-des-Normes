// Plateau du jeu : image de fond + superpositions (pion, étoile, halos, scores).
import boardImage from '../assets/board.jpg'
import { PHASES, ARCS, ORDER, PAWN_RADIUS } from '../theme.js'

// Cadres rectangulaires correspondant aux 4 quadrants du plateau.
const QUADRANTS = {
  P: { top: '2%',    left: '2%',  width: '48%', height: '48%' },
  D: { top: '2%',    right: '2%', width: '48%', height: '48%' },
  A: { bottom: '2%', left: '2%',  width: '48%', height: '48%' },
  C: { bottom: '2%', right: '2%', width: '48%', height: '48%' },
}

// Positions des 3 cadrans d'audit au centre du plateau.
const AUDIT_DIALS = [
  { top: '31%', left: '30%' },
  { top: '31%', right: '30%' },
  { top: '49%', left: '43%' },
]

export function Board({
  phaseProgress = { P: 0, D: 0, C: 0, A: 0 },
  completedPhases = new Set(),
  currentPhase = null,
  auditScores = [],
  setupMode = false,
  selectedStart = 'P',
  onPhaseClick = null,
  starPassed = false,
}) {
  // Calcul de la position du pion et du marqueur étoile sur l'arc courant.
  let pawn = null
  let star = null
  if (!setupMode && currentPhase && ARCS[currentPhase]) {
    const arc = ARCS[currentPhase]
    const progress = Math.min((phaseProgress && phaseProgress[currentPhase]) || 0, 5)
    const pawnAngle = ((arc.s + ((arc.e - arc.s) * progress) / 5) * Math.PI) / 180
    pawn = {
      x: 50 + PAWN_RADIUS * Math.cos(pawnAngle),
      y: 50 + PAWN_RADIUS * Math.sin(pawnAngle),
      theme: PHASES[currentPhase] || PHASES.P,
    }
    // La case étoile est positionnée à 4/5 de l'arc (avant-dernière case).
    const starAngle = ((arc.s + ((arc.e - arc.s) * 4) / 5) * Math.PI) / 180
    star = {
      x: 50 + PAWN_RADIUS * Math.cos(starAngle),
      y: 50 + PAWN_RADIUS * Math.sin(starAngle),
      theme: PHASES[currentPhase] || PHASES.P,
      passed: starPassed,
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 680,
        aspectRatio: '1/1',
        margin: '0 auto',
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0,0,0,0.35)',
      }}
    >
      <img
        src={boardImage}
        alt="Plateau ADN"
        style={{ width: '100%', height: '100%', display: 'block', userSelect: 'none' }}
        draggable={false}
      />

      {/* Halo doux sur les quadrants des phases déjà complétées. */}
      {!setupMode &&
        ORDER.filter((p) => completedPhases && completedPhases.has(p)).map((p) => (
          <div
            key={p + '-done'}
            style={{
              position: 'absolute',
              ...QUADRANTS[p],
              pointerEvents: 'none',
              borderRadius: 14,
              boxShadow: `inset 0 0 30px ${PHASES[p].glow}66`,
              '--c': PHASES[p].glow,
              animation: 'adnPulse 2.6s ease-in-out infinite',
            }}
          />
        ))}

      {/* Bordure clignotante sur le quadrant de la phase en cours. */}
      {!setupMode && currentPhase && (
        <div
          style={{
            position: 'absolute',
            ...QUADRANTS[currentPhase],
            pointerEvents: 'none',
            borderRadius: 14,
            border: `2px dashed ${PHASES[currentPhase].border}cc`,
            '--c': PHASES[currentPhase].glow,
            animation: 'adnCurrent 2.2s ease-in-out infinite',
          }}
        />
      )}

      {/* Marqueur visuel de la case Étoile (point 4 de l'arc). */}
      {star && (
        <div
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: '8%',
            height: '8%',
            transform: 'translate(-50%,-50%)',
            pointerEvents: 'none',
            zIndex: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '78%',
              height: '78%',
              borderRadius: '50%',
              background: star.passed
                ? 'radial-gradient(circle at 35% 30%,#d8ffe2,#22aa44 60%,#0a7a2a)'
                : 'radial-gradient(circle at 35% 30%,#fff6da,#FFD24A 55%,#C8860B)',
              border: `2.5px solid ${star.passed ? '#0a7a2a' : '#fff'}`,
              boxShadow: star.passed
                ? '0 0 12px #22ff66'
                : '0 0 10px #FFC83D, 0 2px 5px rgba(0,0,0,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(10px,2vw,16px)',
                fontWeight: 900,
                color: star.passed ? '#fff' : '#7a4a00',
                lineHeight: 1,
              }}
            >
              {star.passed ? '✓' : '★'}
            </span>
          </div>
          <div
            style={{
              fontSize: 'clamp(5px,1vw,8px)',
              fontWeight: 800,
              color: star.passed ? '#0a7a2a' : '#9a6800',
              marginTop: 1,
              textShadow: '0 1px 2px rgba(255,255,255,0.95)',
              whiteSpace: 'nowrap',
            }}
          >
            ÉTOILE
          </div>
        </div>
      )}

      {/* Pion de déplacement. */}
      {pawn && (
        <div
          style={{
            position: 'absolute',
            left: `${pawn.x}%`,
            top: `${pawn.y}%`,
            width: '8.5%',
            height: '8.5%',
            transform: 'translate(-50%,-50%)',
            transition: 'left .65s cubic-bezier(.34,1.4,.5,1), top .65s cubic-bezier(.34,1.4,.5,1)',
            pointerEvents: 'none',
            zIndex: 6,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: `radial-gradient(circle at 35% 28%, #fff 0%, ${pawn.theme.border} 52%, ${pawn.theme.badge} 100%)`,
              border: '2.5px solid #fff',
              boxShadow: `0 0 16px ${pawn.theme.glow}, 0 0 7px ${pawn.theme.glow}, 0 3px 8px rgba(0,0,0,0.55)`,
              '--c': pawn.theme.glow,
              animation: 'adnGlow 1.8s ease-in-out infinite',
            }}
          />
        </div>
      )}

      {/* Scores d'audit affichés sur les cadrans centraux. */}
      {!setupMode &&
        auditScores &&
        auditScores.slice(0, 3).map((score, idx) => {
          const color = score >= 70 ? '#22ff66' : score >= 50 ? '#ffd633' : '#ff5566'
          return (
            <div
              key={'d' + idx}
              style={{
                position: 'absolute',
                ...AUDIT_DIALS[idx],
                width: '15%',
                height: '15%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                fontFamily: "'Segoe UI',sans-serif",
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(12px,2.4vw,20px)',
                  fontWeight: 900,
                  color,
                  textShadow: `0 0 8px ${color}cc, 0 2px 4px rgba(0,0,0,0.9)`,
                  lineHeight: 1,
                }}
              >
                {score}%
              </div>
              <div
                style={{
                  fontSize: 'clamp(6px,1.1vw,9px)',
                  color: 'rgba(255,255,255,0.75)',
                  letterSpacing: 0.5,
                  marginTop: 2,
                  textShadow: '0 1px 2px rgba(0,0,0,0.9)',
                }}
              >
                Audit {idx + 1}
              </div>
            </div>
          )
        })}

      {/* En configuration : quadrants cliquables pour choisir la phase de départ. */}
      {setupMode &&
        ORDER.map((p) => {
          const selected = selectedStart === p
          return (
            <button
              key={p}
              onClick={() => onPhaseClick && onPhaseClick(p)}
              aria-label={`Choisir ${PHASES[p].label}`}
              style={{
                position: 'absolute',
                ...QUADRANTS[p],
                cursor: 'pointer',
                background: selected ? `${PHASES[p].glow}1A` : 'transparent',
                border: selected ? `3px solid ${PHASES[p].border}` : '3px solid transparent',
                borderRadius: 14,
                boxShadow: selected
                  ? `inset 0 0 40px ${PHASES[p].glow}66, 0 0 22px ${PHASES[p].glow}cc`
                  : 'none',
                transition: 'all .25s ease',
                padding: 0,
                outline: 'none',
              }}
            >
              {selected && (
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    fontSize: 11,
                    padding: '4px 8px',
                    borderRadius: 6,
                    background: PHASES[p].border,
                    color: '#000',
                    fontWeight: 900,
                    letterSpacing: 1,
                    boxShadow: `0 0 12px ${PHASES[p].glow}`,
                  }}
                >
                  ✓ DÉPART
                </div>
              )}
            </button>
          )
        })}
    </div>
  )
}
