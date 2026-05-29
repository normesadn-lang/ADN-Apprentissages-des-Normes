// Carte Audit : déroulement en trois temps (lecture du scénario 3 min,
// réponses minutées 2 min, puis bilan avec corrigé).
//
// Les questions sont des données structurées (voir src/data/audits.js) et
// couvrent cinq types : Vrai/Faux, QCM, Mot à trouver, Question ouverte,
// Mise en ordre PDCA. Chaque type a sa propre consigne et son mode de saisie.
import { useState, useEffect, useRef, useCallback } from 'react'
import { isCorrect, isAnswered } from './audit-utils.js'

const BLUE = '#2176AE'

// Libellé + consigne affichés pour chaque type de question.
const TYPE_META = {
  vf: { label: 'Vrai / Faux', hint: 'Choisissez Vrai ou Faux.' },
  qcm: { label: 'QCM', hint: 'Choisissez la bonne réponse.' },
  mot: { label: 'Mot à trouver', hint: 'Complétez par le mot manquant.' },
  ouverte: { label: 'Question ouverte', hint: 'Répondez en un ou deux mots.' },
  ordre: { label: 'Mise en ordre PDCA', hint: 'Associez chaque étape du cycle à une action (a–d).' },
}

const PHASE_NAMES = { P: 'Plan', D: 'Do', C: 'Check', A: 'Act' }

export function AuditCard({ card, onComplete }) {
  const [phase, setPhase] = useState('read') // 'read' | 'answer' | 'done'
  const [readSeconds, setReadSeconds] = useState(180)
  const [answerSeconds, setAnswerSeconds] = useState(120)
  const [answers, setAnswers] = useState({}) // { [n]: réponse }  (objet { P,D,C,A } pour 'ordre')
  const [revealed, setRevealed] = useState(false)
  const timer = useRef(null)

  const questions = card.questions
  const correctCount = questions.filter((q) => isCorrect(q, answers[q.n])).length
  const answeredCount = questions.filter((q) => isAnswered(q, answers[q.n])).length
  const scorePercent = Math.round((correctCount / questions.length) * 100)

  const setAnswer = (n, value) => {
    if (!revealed) setAnswers((m) => ({ ...m, [n]: value }))
  }
  const setOrdre = (n, slot, letter) => {
    if (revealed) return
    setAnswers((m) => ({ ...m, [n]: { ...(m[n] || {}), [slot]: letter } }))
  }

  const reveal = useCallback(() => {
    clearInterval(timer.current)
    setRevealed(true)
  }, [])

  // Minuteur — un par phase.
  useEffect(() => {
    if (phase === 'read') {
      timer.current = setInterval(() => {
        setReadSeconds((s) => {
          if (s <= 1) {
            clearInterval(timer.current)
            setPhase('answer')
            return 0
          }
          return s - 1
        })
      }, 1000)
    } else if (phase === 'answer') {
      timer.current = setInterval(() => {
        setAnswerSeconds((s) => {
          if (s <= 1) {
            clearInterval(timer.current)
            setRevealed(true)
            return 0
          }
          return s - 1
        })
      }, 1000)
    }
    return () => clearInterval(timer.current)
  }, [phase])

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  const scoreColor = scorePercent >= 70 ? '#166534' : scorePercent >= 50 ? '#92400e' : '#9B2335'
  const scoreBg = scorePercent >= 70 ? '#dcfce7' : scorePercent >= 50 ? '#fef3c7' : '#fee2e2'

  return (
    <div style={{ background: 'white', borderRadius: 14, padding: 24 }}>
      {/* En-tête : secteur + minuteur. */}
      <div
        style={{
          background: BLUE,
          color: 'white',
          borderRadius: 10,
          padding: '14px 20px',
          marginBottom: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: 1 }}>CARTE AUDIT {card.id}</div>
          <div style={{ fontSize: 16, fontWeight: 800 }}>{card.secteur}</div>
        </div>
        {phase !== 'done' && (
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, opacity: 0.7 }}>
              {phase === 'read' ? 'LECTURE' : revealed ? 'CORRIGÉ' : 'RÉPONSES'}
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: phase === 'answer' && !revealed && answerSeconds < 30 ? '#fbbf24' : 'white',
              }}
            >
              {phase === 'read' ? formatTime(readSeconds) : revealed ? '✓' : formatTime(answerSeconds)}
            </div>
          </div>
        )}
      </div>

      {/* --------- Phase 1 : lecture du scénario --------- */}
      {phase === 'read' && (
        <div>
          <div
            style={{
              background: '#fef3c7',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 14,
              fontSize: 12,
              color: '#78350f',
            }}
          >
            Lisez attentivement le scénario (3 min) avant de passer aux 10 questions.
          </div>
          <div
            style={{
              background: '#f8fafc',
              borderRadius: 10,
              padding: 16,
              lineHeight: 1.7,
              fontSize: 13,
              color: '#1e293b',
              marginBottom: 16,
              maxHeight: 280,
              overflowY: 'auto',
            }}
          >
            {card.scenario}
          </div>
          <button
            onClick={() => {
              clearInterval(timer.current)
              setPhase('answer')
            }}
            style={primaryBtn}
          >
            Passer aux questions — 2 min ⏱
          </button>
        </div>
      )}

      {/* --------- Phase 2 : réponses --------- */}
      {phase === 'answer' && (
        <div>
          <div
            style={{
              background: revealed ? '#eff6ff' : answerSeconds < 30 ? '#fee2e2' : '#f0fdf4',
              borderRadius: 8,
              padding: '10px 14px',
              marginBottom: 14,
              fontSize: 12,
              color: revealed ? '#1e3a8a' : answerSeconds < 30 ? '#9B2335' : '#166534',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {revealed
                ? '⏱ Corrigé affiché — la réponse attendue est indiquée sous chaque question.'
                : 'Répondez à chaque question selon sa consigne, puis validez.'}
            </span>
            {!revealed && <strong style={{ fontSize: 16 }}>{formatTime(answerSeconds)}</strong>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 400, overflowY: 'auto', paddingRight: 4 }}>
            {questions.map((q) => {
              const userAnswer = answers[q.n]
              const ok = revealed && isCorrect(q, userAnswer)
              const meta = TYPE_META[q.type] || { label: q.type, hint: '' }
              return (
                <div
                  key={q.n}
                  style={{
                    borderRadius: 10,
                    border: `2px solid ${revealed ? (ok ? '#57A773' : '#E07A5F') : '#e2e8f0'}`,
                    background: revealed ? (ok ? '#f0fdf4' : '#fef2f0') : '#f8fafc',
                    padding: '12px 14px',
                  }}
                >
                  {/* Type + consigne */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: 0.4,
                        color: BLUE,
                        background: '#e7f0f7',
                        borderRadius: 6,
                        padding: '2px 8px',
                      }}
                    >
                      Q{q.n} · {meta.label.toUpperCase()}
                    </span>
                    <span style={{ fontSize: 11, color: '#64748b', fontStyle: 'italic' }}>{meta.hint}</span>
                  </div>

                  <p style={{ margin: '0 0 10px', fontSize: 13, fontWeight: 600, color: '#1e293b' }}>{q.enonce}</p>

                  {/* QCM */}
                  {q.type === 'qcm' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {q.choix.map((choice) => {
                        const key = choice.trim().charAt(0)
                        const sel = userAnswer === key
                        const isCor = revealed && key === q.sol
                        return (
                          <button
                            key={key}
                            onClick={() => setAnswer(q.n, key)}
                            disabled={revealed}
                            style={choiceBtn(sel, isCor, revealed)}
                          >
                            <span style={radioDot(sel, isCor)}>{sel || isCor ? '●' : ''}</span>
                            <span style={{ flex: 1 }}>{choice}</span>
                            {isCor && <span style={{ color: '#166534', fontWeight: 800 }}>✓</span>}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* Vrai / Faux */}
                  {q.type === 'vf' && (
                    <div style={{ display: 'flex', gap: 10 }}>
                      {['Vrai', 'Faux'].map((label) => {
                        const sel = userAnswer === label
                        const isCor = revealed && label === q.sol
                        return (
                          <button
                            key={label}
                            onClick={() => setAnswer(q.n, label)}
                            disabled={revealed}
                            style={vfBtn(sel, isCor, revealed)}
                          >
                            {label}
                            {isCor ? ' ✓' : sel && revealed ? ' ✗' : ''}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* Mot à trouver / Question ouverte */}
                  {(q.type === 'mot' || q.type === 'ouverte') && (
                    <input
                      type="text"
                      placeholder={q.type === 'mot' ? 'Mot manquant…' : 'Réponse courte…'}
                      value={userAnswer || ''}
                      readOnly={revealed}
                      onChange={(e) => setAnswer(q.n, e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        borderRadius: 8,
                        border: `2px solid ${revealed ? (ok ? '#57A773' : '#E07A5F') : '#e2e8f0'}`,
                        fontSize: 13,
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                        background: 'white',
                        color: '#1e293b',
                      }}
                    />
                  )}

                  {/* Mise en ordre PDCA */}
                  {q.type === 'ordre' && (
                    <div>
                      <div
                        style={{
                          background: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: 8,
                          padding: '8px 10px',
                          marginBottom: 8,
                          fontSize: 12,
                          color: '#475569',
                          lineHeight: 1.6,
                        }}
                      >
                        {q.items.map((it) => (
                          <div key={it}>{it}</div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {['P', 'D', 'C', 'A'].map((slot) => {
                          const chosen = (userAnswer && userAnswer[slot]) || ''
                          const correctLetter = q.ordre[slot]
                          const slotOk = revealed && chosen && chosen === correctLetter
                          return (
                            <div key={slot} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <span style={{ width: 70, fontSize: 12, fontWeight: 700, color: BLUE }}>
                                {slot} · {PHASE_NAMES[slot]}
                              </span>
                              <select
                                value={chosen}
                                disabled={revealed}
                                onChange={(e) => setOrdre(q.n, slot, e.target.value)}
                                style={{
                                  flex: 1,
                                  padding: '7px 10px',
                                  borderRadius: 8,
                                  border: `2px solid ${revealed ? (slotOk ? '#57A773' : '#E07A5F') : '#e2e8f0'}`,
                                  fontSize: 12,
                                  fontFamily: 'inherit',
                                  background: 'white',
                                  color: '#1e293b',
                                }}
                              >
                                <option value="">— choisir une action —</option>
                                {q.items.map((it) => {
                                  const letter = it.trim().charAt(0)
                                  return (
                                    <option key={letter} value={letter}>
                                      {it.length > 48 ? it.slice(0, 47) + '…' : it}
                                    </option>
                                  )
                                })}
                              </select>
                              {revealed && (
                                <span style={{ fontSize: 11, fontWeight: 700, color: '#166534', width: 26 }}>
                                  = {correctLetter}
                                </span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Corrigé sous la question */}
                  {revealed && (
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: ok ? '#166534' : '#9B2335',
                      }}
                    >
                      {ok ? '✅ Bonne réponse' : '❌ Réponse attendue : '}
                      {!ok && <span style={{ fontWeight: 700 }}>{q.reponse}</span>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div
            style={{
              marginTop: 14,
              background: '#f8fafc',
              borderRadius: 10,
              padding: '10px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 13, color: '#475569' }}>
              {revealed ? (
                <span>
                  Score : <strong style={{ color: scoreColor }}>{correctCount}/{questions.length}</strong> ({scorePercent}%)
                </span>
              ) : (
                <span>{answeredCount}/{questions.length} répondues</span>
              )}
            </span>
            {revealed ? (
              <button onClick={() => setPhase('done')} style={smallBtn(BLUE)}>
                Voir le bilan →
              </button>
            ) : (
              <button onClick={reveal} style={smallBtn('#57A773')}>
                Valider mes réponses →
              </button>
            )}
          </div>
        </div>
      )}

      {/* --------- Phase 3 : bilan --------- */}
      {phase === 'done' && (
        <div>
          <div
            style={{
              background: scoreBg,
              borderRadius: 12,
              padding: 20,
              marginBottom: 16,
              textAlign: 'center',
              border: `2px solid ${scoreColor}44`,
            }}
          >
            <div style={{ fontSize: 13, color: scoreColor, fontWeight: 700, marginBottom: 4 }}>
              RÉSULTAT — AUDIT {card.id}
            </div>
            <div style={{ fontSize: 48, fontWeight: 900, color: scoreColor }}>
              {correctCount}
              <span style={{ fontSize: 24, opacity: 0.6 }}>/{questions.length}</span>
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: scoreColor }}>{scorePercent}%</div>
            <div style={{ fontSize: 12, color: scoreColor, marginTop: 6, opacity: 0.8 }}>
              {scorePercent >= 70 ? 'Excellente maîtrise' : scorePercent >= 50 ? 'Bonne progression' : 'À consolider'}
            </div>
          </div>

          <div style={{ marginBottom: 14, maxHeight: 240, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {questions.map((q) => {
              const ok = isCorrect(q, answers[q.n])
              return (
                <div
                  key={q.n}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: ok ? '#f0fdf4' : '#fef2f2',
                    borderLeft: `3px solid ${ok ? '#57A773' : '#F4A261'}`,
                  }}
                >
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{ok ? '✓' : '✗'}</span>
                  <span style={{ fontSize: 11, color: '#374151', lineHeight: 1.5 }}>
                    <strong>Q{q.n}. </strong>
                    {q.enonce}
                    {!ok && (
                      <span style={{ color: '#9B2335' }}>
                        {' '}— attendu : <strong>{q.reponse}</strong>
                      </span>
                    )}
                  </span>
                </div>
              )
            })}
          </div>

          <button onClick={() => onComplete(scorePercent)} style={primaryBtn}>
            Continuer la partie →
          </button>
        </div>
      )}
    </div>
  )
}

// ----- Styles réutilisables -----
const primaryBtn = {
  width: '100%',
  padding: '13px 0',
  background: BLUE,
  color: 'white',
  border: 'none',
  borderRadius: 10,
  fontWeight: 800,
  fontSize: 15,
  cursor: 'pointer',
  fontFamily: 'inherit',
}
const smallBtn = (bg) => ({
  padding: '9px 22px',
  background: bg,
  color: 'white',
  border: 'none',
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 13,
  cursor: 'pointer',
  fontFamily: 'inherit',
})
const choiceBtn = (sel, isCor, revealed) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 9,
  textAlign: 'left',
  padding: '9px 12px',
  borderRadius: 8,
  border: `2px solid ${isCor ? '#57A773' : sel ? (revealed ? '#E07A5F' : BLUE) : '#e2e8f0'}`,
  background: isCor ? '#dcfce7' : sel ? (revealed ? '#fee2e2' : '#eff6ff') : 'white',
  cursor: revealed ? 'default' : 'pointer',
  fontFamily: 'inherit',
  fontSize: 12.5,
  fontWeight: sel || isCor ? 700 : 400,
  color: '#1e293b',
  width: '100%',
})
const radioDot = (sel, isCor) => ({
  flexShrink: 0,
  width: 19,
  height: 19,
  borderRadius: '50%',
  border: `2px solid ${isCor ? '#57A773' : sel ? '#2176AE' : '#94a3b8'}`,
  background: sel || isCor ? (isCor ? '#57A773' : '#2176AE') : 'white',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 11,
  color: 'white',
})
const vfBtn = (sel, isCor, revealed) => ({
  flex: 1,
  padding: '11px 0',
  borderRadius: 8,
  border: `2px solid ${isCor ? '#57A773' : sel ? (revealed ? '#E07A5F' : BLUE) : '#e2e8f0'}`,
  background: isCor ? '#dcfce7' : sel ? (revealed ? '#fee2e2' : '#eff6ff') : 'white',
  cursor: revealed ? 'default' : 'pointer',
  fontFamily: 'inherit',
  fontSize: 14,
  fontWeight: 700,
  color: '#1e293b',
})
