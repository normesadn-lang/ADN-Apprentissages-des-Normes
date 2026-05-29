// Composant principal : machine à états du jeu et orchestration des écrans.
// Écrans : 'setup' → 'playing' → 'audit' → ('playing' ou 'end').
// Pendant 'playing', trois onglets : 'board', 'card', 'scores'.
import { useState, useRef, useCallback } from 'react'

import { DEFIS } from './data/defis.js'
import { AUDITS } from './data/audits.js'
import { PHASES, LABELS, ORDER } from './theme.js'

import { Board } from './components/Board.jsx'
import { DefiCard } from './components/DefiCard.jsx'
import { AuditCard } from './components/AuditCard.jsx'
import { Medal } from './components/Medal.jsx'

import logo from './assets/logo.jpeg'

// Nombre de cases à parcourir avant que la phase ne soit terminée par l'étoile.
// Progression normale plafonnée à 4 (case Étoile) ; la réussite à l'étoile fait passer à 5.
const PHASE_END = 5
const STAR_POSITION = 4

export default function App() {
  // -----------------------------------------------------------
  // État du jeu
  // -----------------------------------------------------------
  const [screen, setScreen] = useState('setup')                          // 'setup' | 'playing' | 'audit' | 'end'
  const [phase, setPhase] = useState('P')                                // phase en cours (P/D/C/A)
  const [progress, setProgress] = useState({ P: 0, D: 0, C: 0, A: 0 })   // position du pion par phase
  const [completedPhases, setCompletedPhases] = useState(new Set())      // symboles déjà récupérés (set de phases)
  const [currentCard, setCurrentCard] = useState(null)
  const [indicesUsed, setIndicesUsed] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [pointsEarned, setPointsEarned] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [auditScores, setAuditScores] = useState([])
  const [currentAudit, setCurrentAudit] = useState(null)
  const [tab, setTab] = useState('board')                                // 'board' | 'card' | 'scores'
  const [startPhase, setStartPhase] = useState('P')
  const [cycleOrder, setCycleOrder] = useState(['P', 'D', 'C', 'A'])
  const [totalPoints, setTotalPoints] = useState(0)
  const [starsPassed, setStarsPassed] = useState(new Set())              // phases dont l'étoile a été franchie
  const [maxCycles, setMaxCycles] = useState(3)                          // 1 = tour unique, 3 = partie complète

  // Suit les cartes Défi déjà tirées par phase pour éviter les répétitions
  // (chaque deck contient 24 cartes ; au-delà, on remélange).
  const drawnIndices = useRef({ P: [], D: [], C: [], A: [] })

  // Suit les audits déjà tirés pour éviter de retomber sur le même dans une partie.
  const drawnAudits = useRef([])

  // Tire un audit non encore vu (remélange une fois les 24 épuisés).
  const pickAudit = () => {
    if (drawnAudits.current.length >= AUDITS.length) drawnAudits.current = []
    let idx
    do {
      idx = Math.floor(Math.random() * AUDITS.length)
    } while (drawnAudits.current.includes(idx))
    drawnAudits.current.push(idx)
    return AUDITS[idx]
  }

  const allPhasesDone = completedPhases.size === 4
  const phaseInfo = LABELS[phase] || {}
  const currentProgress = progress[phase] || 0

  // -----------------------------------------------------------
  // Tirage d'une carte Défi (aléatoire, sans répétition)
  // -----------------------------------------------------------
  const drawCard = useCallback(() => {
    const deck = DEFIS[phase]
    const used = drawnIndices.current[phase] || []
    if (used.length >= deck.length) used.length = 0    // on a fait le tour : remélange
    let idx
    do {
      idx = Math.floor(Math.random() * deck.length)
    } while (used.indexOf(idx) >= 0)
    used.push(idx)
    drawnIndices.current[phase] = used

    setCurrentCard(deck[idx])
    setIndicesUsed(0)
    setShowResult(false)
    setPointsEarned(0)
    setTab('card')
  }, [phase])

  // -----------------------------------------------------------
  // Validation d'une réponse à une carte Défi
  // -----------------------------------------------------------
  const answer = (choice) => {
    const atStar = (progress[phase] || 0) >= STAR_POSITION
    const reward = atStar ? 2 : Math.max(2 - indicesUsed, 1)
    const expected = (currentCard.reponse || '').toLowerCase().trim()
    const given = (choice || '').toLowerCase().trim()
    const ok =
      expected.startsWith(given) ||
      expected.includes(given) ||
      (given === 'v' && expected.includes('vrai')) ||
      (given === 'f' && (expected.includes('faux') || expected.startsWith('f')))
    const gained = ok ? reward : 0

    setPointsEarned(gained)
    setShowResult(true)
    setProgress((prev) => {
      const next = { ...prev }
      if (atStar) {
        // À la case étoile : réussite → on franchit le symbole et on termine la phase ;
        // échec → on reste sur l'étoile pour réessayer (toujours sans indice).
        next[phase] = ok ? PHASE_END : STAR_POSITION
      } else {
        next[phase] = Math.min((next[phase] || 0) + gained, STAR_POSITION)
      }
      return next
    })
    setTotalPoints((t) => t + gained)
  }

  // -----------------------------------------------------------
  // Continuation : termine la phase si nécessaire, sinon retourne au plateau.
  // -----------------------------------------------------------
  const continueAfterCard = () => {
    if ((progress[phase] || 0) >= PHASE_END) {
      // Phase terminée → on collecte le symbole.
      const updated = new Set(completedPhases)
      updated.add(phase)
      setCompletedPhases(updated)

      if (updated.size === 4) {
        // 4 symboles réunis → page intermédiaire des médailles, puis l'audit.
        setCurrentAudit(pickAudit())
        setScreen('medals')
        setTab('audit')
      } else {
        // Phase suivante dans l'ordre de cycle, en sautant celles déjà terminées.
        const order = cycleOrder
        let nextIdx = (order.indexOf(phase) + 1) % 4
        let nextPhase = order[nextIdx]
        while (updated.has(nextPhase) && updated.size < 4) {
          nextIdx = (order.indexOf(nextPhase) + 1) % 4
          nextPhase = order[nextIdx]
        }
        setPhase(nextPhase)
        setTab('board')
      }
    } else {
      setTab('board')
    }
  }

  const onContinueClick = () => {
    setCurrentCard(null)
    setShowResult(false)
    // L'étoile (case 4) est notée comme « franchie » dès qu'on l'atteint.
    if ((progress[phase] || 0) >= STAR_POSITION && !starsPassed.has(phase)) {
      const next = new Set(starsPassed)
      next.add(phase)
      setStarsPassed(next)
    }
    continueAfterCard()
  }

  // -----------------------------------------------------------
  // Fin de l'audit : on enchaîne sur un nouveau cycle ou on termine.
  // -----------------------------------------------------------
  const completeAudit = (score) => {
    const scores = [...auditScores, score]
    setAuditScores(scores)
    const nextCycle = cycle + 1
    setCycle(nextCycle)
    if (nextCycle >= maxCycles) {
      setScreen('end')
      setTab('scores')
    } else {
      setProgress({ P: 0, D: 0, C: 0, A: 0 })
      setCompletedPhases(new Set())
      setStarsPassed(new Set())
      setPhase(startPhase)
      setScreen('playing')
      setTab('board')
    }
  }

  // -----------------------------------------------------------
  // Démarrage et réinitialisation
  // -----------------------------------------------------------
  const startGame = () => {
    const all = ['P', 'D', 'C', 'A']
    const i = all.indexOf(startPhase)
    setCycleOrder([...all.slice(i), ...all.slice(0, i)])
    setPhase(startPhase)
    setScreen('playing')
    setTab('board')
  }

  const resetGame = () => {
    setScreen('setup')
    setPhase('P')
    setProgress({ P: 0, D: 0, C: 0, A: 0 })
    setCompletedPhases(new Set())
    setStarsPassed(new Set())
    setCurrentCard(null)
    setCycle(0)
    setAuditScores([])
    setTotalPoints(0)
    setTab('board')
    drawnIndices.current = { P: [], D: [], C: [], A: [] }
    drawnAudits.current = []
  }

  // -----------------------------------------------------------
  // Rendu
  // -----------------------------------------------------------
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        minHeight: '100vh',
        padding: '16px 8px',
        background: '#E8E4DC',
      }}
    >
      {screen === 'setup' && renderSetup()}
      {screen === 'playing' && renderPlaying()}
      {screen === 'medals' && renderMedals()}
      {screen === 'audit' && currentAudit && (
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <AuditCard card={currentAudit} onComplete={completeAudit} />
        </div>
      )}
      {screen === 'end' && renderEnd()}
    </div>
  )

  // ============================================================
  // Écran de configuration
  // ============================================================
  function renderSetup() {
    const startTheme = PHASES[startPhase] || PHASES.P
    return (
      <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <img
            src={logo}
            alt="ADN — Apprentissage Des Normes"
            style={{
              width: 'min(200px,55%)',
              height: 'auto',
              filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </div>

        <Board setupMode selectedStart={startPhase} onPhaseClick={setStartPhase} />

        <div style={{ background: '#1A1510', padding: '14px 16px', borderTop: '2px solid rgba(0,0,0,0.2)' }}>
          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: 11,
              margin: '0 0 10px',
              textAlign: 'center',
              letterSpacing: 1,
            }}
          >
            CHOISISSEZ VOTRE PHASE DE DÉPART
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
            {ORDER.map((p) => {
              const sel = startPhase === p
              const theme = PHASES[p] || {}
              return (
                <button
                  key={p}
                  onClick={() => setStartPhase(p)}
                  style={{
                    padding: '12px 4px',
                    borderRadius: 10,
                    border: sel ? `3px solid ${theme.border}` : `2px solid ${theme.border}44`,
                    background: sel ? theme.badge : 'rgba(255,255,255,0.06)',
                    color: sel ? theme.border : 'rgba(255,255,255,0.7)',
                    fontWeight: sel ? 800 : 500,
                    fontSize: 13,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.18s',
                    boxShadow: sel ? `0 4px 16px ${theme.glow}66` : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 900,
                      marginBottom: 2,
                      color: theme.border,
                    }}
                  >
                    {p}
                  </div>
                  {LABELS[p].label}
                </button>
              )
            })}
          </div>

          <div style={{ margin: '2px 0 14px' }}>
            <div
              style={{
                textAlign: 'center',
                fontSize: 11,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: 1.5,
                marginBottom: 7,
                fontWeight: 700,
              }}
            >
              MODE DE JEU
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                [1, 'Tour unique', '1 audit'],
                [3, 'Partie complète', '3 audits'],
              ].map(([value, title, sub]) => (
                <button
                  key={value}
                  onClick={() => setMaxCycles(value)}
                  style={{
                    flex: 1,
                    padding: '10px 6px',
                    background: maxCycles === value ? 'rgba(255,255,255,0.16)' : 'rgba(255,255,255,0.04)',
                    border: `2px solid ${maxCycles === value ? '#7ED0FF' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: 10,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    color: 'white',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: 13 }}>{title}</div>
                  <div style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>{sub}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startGame}
            style={{
              width: '100%',
              padding: '13px 0',
              background: startTheme.badge,
              color: startTheme.border,
              border: `2px solid ${startTheme.border}`,
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: 'inherit',
              letterSpacing: 1,
              boxShadow: `0 4px 18px ${startTheme.glow}66`,
            }}
          >
            DÉMARRER — Phase {startPhase} · {LABELS[startPhase].label} ▶
          </button>
        </div>
      </div>
    )
  }

  // ============================================================
  // Écran de jeu (3 onglets : Plateau / Carte / Scores)
  // ============================================================
  function renderPlaying() {
    return (
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 12, justifyContent: 'center' }}>
          {[['board', 'Plateau'], ['card', 'Carte'], ['scores', 'Scores']].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 13,
                background: tab === key ? '#2C2C2E' : 'rgba(0,0,0,0.08)',
                color: tab === key ? 'white' : '#3A3632',
                fontWeight: tab === key ? 700 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'board' && renderBoardTab()}
        {tab === 'card' && currentCard && renderCardTab()}
        {tab === 'card' && !currentCard && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <p style={{ color: '#555', marginBottom: 12 }}>Allez sur le Plateau pour tirer une carte</p>
            <button
              onClick={() => setTab('board')}
              style={{
                padding: '10px 24px',
                background: 'rgba(0,0,0,0.1)',
                color: '#333',
                border: '1px solid rgba(0,0,0,0.2)',
                borderRadius: 10,
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 600,
              }}
            >
              ← Plateau
            </button>
          </div>
        )}
        {tab === 'scores' && renderScoresTab()}
      </div>
    )
  }

  function renderBoardTab() {
    const phaseTheme = PHASES[phase] || PHASES.P
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <Board
            phaseProgress={progress}
            completedPhases={completedPhases}
            currentPhase={phase}
            auditScores={auditScores}
            starPassed={starsPassed.has(phase)}
          />
        </div>

        <div
          style={{
            textAlign: 'center',
            margin: '10px auto 0',
            maxWidth: 680,
            fontSize: 12,
            color: '#9a6800',
            background: '#FFF8E1',
            border: '1px solid #E6C15A77',
            borderRadius: 9,
            padding: '8px 12px',
            fontWeight: 600,
            lineHeight: 1.4,
          }}
        >
          ⭐ <strong>Règle — Stop à l&apos;étoile</strong> : à l&apos;étoile, la carte Défi se joue{' '}
          <strong>sans indice</strong>.
        </div>

        <div
          style={{
            background: 'rgba(0,0,0,0.06)',
            borderRadius: 14,
            padding: 16,
            marginBottom: 12,
            border: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: 10.5,
              fontWeight: 800,
              letterSpacing: 1,
              color: '#64748b',
              marginBottom: 9,
            }}
          >
            🔆 SYMBOLES RÉUNIS —{' '}
            <strong style={{ color: '#1A1510' }}>{completedPhases.size}/4</strong> · 4 = AUDIT
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, marginBottom: 12 }}>
            {ORDER.map((p) => {
              const done = completedPhases.has(p)
              return (
                <div key={p} style={{ textAlign: 'center', opacity: phase === p || done ? 1 : 0.6 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        transition: 'all .3s ease',
                        filter: done ? `drop-shadow(0 0 7px ${PHASES[p].glow})` : 'grayscale(0.8)',
                        opacity: done ? 1 : 0.4,
                        transform: done ? 'scale(1.15)' : 'scale(0.9)',
                      }}
                    >
                      <Medal phase={p} size={30} />
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: PHASES[p].border,
                      fontWeight: phase === p ? 800 : 600,
                      letterSpacing: 0.3,
                    }}
                  >
                    {done ? '🏅 ' : ''}
                    {LABELS[p].label}
                  </div>
                  <div style={{ fontSize: 11, color: '#555', fontWeight: 600 }}>{progress[p] || 0}/5</div>
                </div>
              )
            })}
          </div>

          <div style={{ background: 'rgba(0,0,0,0.12)', borderRadius: 6, height: 8, marginBottom: 8 }}>
            <div
              style={{
                background: phaseTheme.border,
                height: 8,
                borderRadius: 6,
                width: `${Math.min((currentProgress / 5) * 100, 100)}%`,
                transition: 'width 0.5s',
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#2A2520' }}>
            <span>
              Phase {phaseInfo.label} — {currentProgress}/5 pts
            </span>
            <span>
              Total : <strong style={{ color: '#1A1510' }}>{totalPoints} pts</strong>
            </span>
          </div>
        </div>

        {allPhasesDone ? (
          <div
            style={{
              textAlign: 'center',
              padding: '16px 20px',
              background: 'rgba(0,0,0,0.05)',
              borderRadius: 14,
              border: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <div style={{ color: '#1A1510', fontWeight: 700, fontSize: 15 }}>
              Cycle complet — Audit en cours...
            </div>
          </div>
        ) : (
          <button
            onClick={drawCard}
            style={{
              width: '100%',
              padding: '15px 0',
              background: `linear-gradient(135deg, ${phaseTheme.border}, ${phaseTheme.border}cc)`,
              color: 'white',
              border: 'none',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: 'inherit',
              letterSpacing: 0.5,
              boxShadow: `0 4px 16px ${phaseTheme.glow}66`,
            }}
          >
            Tirer une carte Défi {phaseInfo.label} →
          </button>
        )}
      </div>
    )
  }

  function renderCardTab() {
    const card = currentCard
    const phaseTheme = PHASES[phase] || PHASES.P
    const atStar = (progress[phase] || 0) >= STAR_POSITION
    const phaseEndReached = progress[phase] >= PHASE_END && !completedPhases.has(phase)

    return (
      <div
        style={{
          background: '#F4F0E8',
          backgroundImage:
            'radial-gradient(circle at 15% 25%, rgba(255,255,255,0.6) 0%, transparent 35%),' +
            ' radial-gradient(circle at 85% 75%, rgba(255,255,255,0.4) 0%, transparent 40%)',
          borderRadius: 14,
          overflow: 'hidden',
          boxShadow: `0 6px 30px rgba(0,0,0,0.18), 0 0 0 1px ${phaseTheme.border}55, inset 0 0 0 3px ${phaseTheme.border}22`,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'relative',
            padding: '16px 18px 14px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 12,
            borderBottom: `2px solid ${phaseTheme.border}44`,
            background: `linear-gradient(135deg, ${phaseTheme.border}10 0%, transparent 60%)`,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              className="adn-neon"
              style={{
                fontSize: 30,
                fontWeight: 900,
                color: phaseTheme.border,
                letterSpacing: 2.5,
                textShadow: `0 0 8px ${phaseTheme.border}aa, 0 0 16px ${phaseTheme.border}66, 0 2px 0 rgba(0,0,0,0.15)`,
                marginBottom: 8,
                lineHeight: 1,
              }}
            >
              {phaseInfo.label}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: phaseTheme.border,
                  letterSpacing: 1.5,
                  padding: '3px 9px',
                  background: `${phaseTheme.border}15`,
                  borderRadius: 4,
                  border: `1px solid ${phaseTheme.border}66`,
                }}
              >
                {card.type.toUpperCase()}
              </span>
              <span style={{ fontSize: 10, color: '#666', letterSpacing: 1.5, fontWeight: 700 }}>{card.id}</span>
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#1A1510', lineHeight: 1.3 }}>{card.titre}</div>
          </div>
          <div style={{ flexShrink: 0, marginTop: 2 }}>
            <Medal phase={phase} size={60} />
          </div>
        </div>

        <div style={{ padding: '14px 18px 18px', position: 'relative' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 10,
              padding: 12,
              marginBottom: 14,
              maxHeight: 140,
              overflowY: 'auto',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            <div style={{ fontSize: 9, fontWeight: 800, color: '#64748b', letterSpacing: 2, marginBottom: 4 }}>
              SCÉNARIO
            </div>
            <p style={{ margin: 0, fontSize: 12.5, color: '#334155', lineHeight: 1.6 }}>{card.scenario}</p>
          </div>

          <div
            style={{
              background: `linear-gradient(135deg, ${phaseTheme.border}1A, ${phaseTheme.border}08)`,
              borderRadius: 10,
              padding: 12,
              marginBottom: 14,
              border: `1px solid ${phaseTheme.border}55`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.4), 0 0 0 1px ${phaseTheme.border}11`,
            }}
          >
            <div style={{ fontSize: 9, fontWeight: 800, color: phaseTheme.border, letterSpacing: 2, marginBottom: 4 }}>
              QUESTION
            </div>
            <p style={{ margin: 0, fontSize: 13, color: '#1e293b', fontWeight: 600, lineHeight: 1.5 }}>
              {card.question}
            </p>
          </div>

          {showResult ? (
            <div>
              <DefiCard
                card={card}
                indicesUsed={indicesUsed}
                showResult
                pointsEarned={pointsEarned}
                atStar={atStar}
              />
              <button
                onClick={onContinueClick}
                style={{
                  width: '100%',
                  marginTop: 12,
                  padding: '14px 0',
                  background: `linear-gradient(135deg, ${phaseTheme.border}, ${phaseTheme.border}cc)`,
                  color: 'white',
                  border: 'none',
                  borderRadius: 10,
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  letterSpacing: 0.5,
                  boxShadow: `0 4px 14px ${phaseTheme.border}66`,
                }}
              >
                {phaseEndReached ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <Medal phase={phase} size={22} /> Phase validée ! Continuer →
                  </span>
                ) : (
                  'Carte suivante →'
                )}
              </button>
            </div>
          ) : (
            <DefiCard
              card={card}
              indicesUsed={indicesUsed}
              onUseIndice={(n) => setIndicesUsed(n)}
              onAnswer={answer}
              atStar={atStar}
            />
          )}
        </div>
      </div>
    )
  }

  function renderScoresTab() {
    return (
      <div
        style={{
          background: 'rgba(0,0,0,0.05)',
          borderRadius: 14,
          padding: 20,
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <h3 style={{ color: '#1A1510', margin: '0 0 16px', textAlign: 'center' }}>Tableau de bord</h3>

        <div style={{ display: 'flex', gap: 10, marginBottom: 16, justifyContent: 'center' }}>
          {Array.from({ length: maxCycles }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              style={{
                flex: 1,
                background: n <= cycle ? '#eff6ff' : '#f8fafc',
                borderRadius: 10,
                padding: 14,
                textAlign: 'center',
                border: `1px solid ${n <= cycle ? '#2176AE33' : '#e2e8f0'}`,
              }}
            >
              <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 4 }}>Audit {n}</div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color:
                    n <= auditScores.length
                      ? auditScores[n - 1] >= 70
                        ? '#166534'
                        : auditScores[n - 1] >= 50
                        ? '#92400e'
                        : '#9B2335'
                      : '#cbd5e1',
                }}
              >
                {n <= auditScores.length ? auditScores[n - 1] + '%' : '—'}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#FFF8E1,#FCEFC7)',
            borderRadius: 10,
            padding: 14,
            marginBottom: 16,
            border: '1px solid #E6C15A66',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: '#8B6914', letterSpacing: 0.3 }}>🏅 Médailles gagnées</span>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#8B6914' }}>
              {auditScores.length * 4 + completedPhases.size}
              <span style={{ fontSize: 13, opacity: 0.6, fontWeight: 700 }}> / {maxCycles * 4}</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {ORDER.map((p) => {
              const done = completedPhases.has(p)
              return (
                <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      transition: 'all .3s ease',
                      filter: done ? `drop-shadow(0 0 6px ${PHASES[p].glow})` : 'grayscale(0.85)',
                      opacity: done ? 1 : 0.4,
                      transform: done ? 'scale(1.1)' : 'scale(0.92)',
                    }}
                  >
                    <Medal phase={p} size={34} />
                  </span>
                  <div style={{ fontSize: 9, fontWeight: 700, color: done ? PHASES[p].border : '#b0a88f', letterSpacing: 0.5 }}>
                    {PHASES[p].label}
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ fontSize: 10, color: '#a8842a', textAlign: 'center', marginTop: 8, fontStyle: 'italic' }}>
            Cycle en cours · 1 médaille par phase validée · 4 par cycle
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.06)', borderRadius: 10, padding: 14 }}>
          {[
            ['Points accumulés', totalPoints + ' pts'],
            ['Médailles gagnées', auditScores.length * 4 + completedPhases.size + '/' + maxCycles * 4],
            ['Phases complétées (cycle)', completedPhases.size + '/4'],
            ['Cycle en cours', cycle + 1 + '/' + maxCycles],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 12,
                color: '#64748b',
                marginBottom: 6,
              }}
            >
              <span>{label}</span>
              <strong style={{ color: '#1e293b' }}>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ============================================================
  // Écran intermédiaire : les 4 médailles du cycle avant l'audit
  // ============================================================
  function renderMedals() {
    return (
      <div
        style={{
          maxWidth: 480,
          margin: '0 auto',
          background: '#F5F2EC',
          borderRadius: 16,
          padding: 28,
          textAlign: 'center',
          border: '1px solid #D8D4CC',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1, color: '#2176AE', marginBottom: 6 }}>
          CYCLE PDCA COMPLET
        </div>
        <h2 style={{ color: '#1e293b', margin: '0 0 6px' }}>Les 4 symboles sont réunis !</h2>
        <p style={{ color: '#64748b', margin: '0 0 22px', fontSize: 13 }}>
          Vous avez validé les quatre phases. Voici les médailles gagnées dans ce cycle.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 8, flexWrap: 'wrap' }}>
          {ORDER.map((p) => (
            <div key={p} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  display: 'inline-flex',
                  filter: `drop-shadow(0 0 8px ${PHASES[p].glow})`,
                  transform: 'scale(1.05)',
                }}
              >
                <Medal phase={p} size={62} />
              </span>
              <div style={{ fontSize: 11, fontWeight: 800, color: PHASES[p].border, letterSpacing: 0.5 }}>
                {PHASES[p].label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg,#FFF8E1,#FCEFC7)',
            borderRadius: 10,
            padding: '10px 14px',
            margin: '18px 0 22px',
            fontSize: 13,
            fontWeight: 700,
            color: '#8B6914',
            border: '1px solid #E6C15A66',
          }}
        >
          🏅 4 médailles gagnées · Cycle {cycle + 1}/{maxCycles}
        </div>

        <button
          onClick={() => {
            setScreen('audit')
            setTab('audit')
          }}
          style={{
            width: '100%',
            padding: '14px 0',
            background: '#2176AE',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'inherit',
            letterSpacing: 0.5,
          }}
        >
          Commencer l'audit →
        </button>
      </div>
    )
  }

  // ============================================================
  // Écran de fin
  // ============================================================
  function renderEnd() {
    return (
      <div
        style={{
          maxWidth: 480,
          margin: '0 auto',
          background: '#F5F2EC',
          borderRadius: 16,
          padding: 28,
          textAlign: 'center',
          border: '1px solid #D8D4CC',
          boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        }}
      >
        <div style={{ fontSize: 48, marginBottom: 8, display: 'flex', justifyContent: 'center', gap: 8 }}>
          {ORDER.map((p) => (
            <span key={p} style={{ display: 'inline-flex' }}>
              <Medal phase={p} size={52} />
            </span>
          ))}
        </div>
        <h2 style={{ color: '#1e293b', margin: '0 0 8px' }}>Partie terminée !</h2>
        <p style={{ color: '#64748b', marginBottom: 24 }}>
          {maxCycles} cycle{maxCycles > 1 ? 's' : ''} PDCA + {maxCycles} audit{maxCycles > 1 ? 's' : ''} complétés
        </p>

        <div style={{ display: 'flex', gap: 10, marginBottom: 24, justifyContent: 'center' }}>
          {auditScores.map((score, idx) => (
            <div
              key={idx}
              style={{
                background: score >= 70 ? '#dcfce7' : score >= 50 ? '#fef3c7' : '#fee2e2',
                borderRadius: 12,
                padding: '14px 20px',
                border: `1px solid ${score >= 70 ? '#86efac' : score >= 50 ? '#fcd34d' : '#fca5a5'}`,
              }}
            >
              <div style={{ fontSize: 10, color: '#64748b', marginBottom: 4 }}>Audit {idx + 1}</div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: score >= 70 ? '#166534' : score >= 50 ? '#92400e' : '#9B2335',
                }}
              >
                {score}%
              </div>
            </div>
          ))}
        </div>

        {auditScores.length === 3 && (
          <div
            style={{
              background: '#eff6ff',
              borderRadius: 10,
              padding: 14,
              marginBottom: 20,
              color: '#2176AE',
              fontSize: 14,
              fontWeight: 600,
              border: '1px solid #bfdbfe',
            }}
          >
            {auditScores[2] > auditScores[0]
              ? 'Progression détectée — Objectif atteint !'
              : 'Résultats stables — Continuez à pratiquer !'}
          </div>
        )}

        <button
          onClick={resetGame}
          style={{
            padding: '14px 32px',
            background: '#2176AE',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            fontWeight: 800,
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Nouvelle partie
        </button>
      </div>
    )
  }
}
