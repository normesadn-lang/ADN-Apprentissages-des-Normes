// Carte Défi : affiche soit la question + choix de réponse + indice,
// soit le résultat après validation.
import { useState } from 'react'
import { PHASES } from '../theme.js'

/** Retire d'un libellé un éventuel préfixe « A. », « B) », « C : »… */
function stripChoicePrefix(text) {
  return (text || '').replace(/^\s*[A-Da-d]\s*[.)\:\-]\s*/, '')
}

export function DefiCard({
  card,
  indicesUsed = 0,
  onUseIndice = () => {},
  onAnswer = () => {},
  showResult = false,
  pointsEarned = 0,
  atStar = false,
}) {
  const [selected, setSelected] = useState(null)
  const phaseLetter = (card.id || 'P').charAt(0)
  const phaseColor = (PHASES[phaseLetter] || PHASES.P).border
  const isTrueFalse = (card.type || '').toLowerCase().includes('vrai')

  // Construit la liste des choix QCM à partir de choixA / choixB / choixC / choixD.
  const choices = []
  if (card.choixA) choices.push({ key: 'A', text: stripChoicePrefix(card.choixA) })
  if (card.choixB) choices.push({ key: 'B', text: stripChoicePrefix(card.choixB) })
  if (card.choixC) choices.push({ key: 'C', text: stripChoicePrefix(card.choixC) })
  if (card.choixD) choices.push({ key: 'D', text: stripChoicePrefix(card.choixD) })

  function validate() {
    if (selected !== null) onAnswer(selected)
  }

  // ============================================================
  // Vue « résultat » : affichée après validation de la réponse.
  // ============================================================
  if (showResult) {
    const isCorrect = pointsEarned > 0
    const expected = (card.reponse || '').trim()
    const matched = choices.find((c) => c.key === expected)
    const displayAnswer = matched ? `${matched.key}. ${matched.text}` : expected

    return (
      <div>
        <div
          style={{
            background: isCorrect ? '#dcfce7' : '#fee2e2',
            borderRadius: 10,
            padding: '14px 18px',
            marginBottom: 12,
            border: `2px solid ${isCorrect ? '#16a34a' : '#dc2626'}`,
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontSize: 16,
              color: isCorrect ? '#15803d' : '#dc2626',
              marginBottom: 4,
            }}
          >
            {isCorrect
              ? `✅ Bonne réponse ! +${pointsEarned} case${pointsEarned > 1 ? 's' : ''}`
              : '❌ Réponse incorrecte'}
          </div>
          <div style={{ fontSize: 13, color: '#374151' }}>
            <strong>Réponse :</strong> {displayAnswer}
          </div>
        </div>

        {card.adn && (
          <div
            style={{
              background: '#eff6ff',
              borderRadius: 10,
              padding: '12px 16px',
              marginBottom: 10,
              borderLeft: '4px solid #1A3A5C',
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#1A3A5C',
                letterSpacing: 1,
                marginBottom: 4,
              }}
            >
              🧬 CONTENU ADN
            </div>
            <p style={{ margin: 0, fontSize: 12, color: '#1e293b', lineHeight: 1.6 }}>{card.adn}</p>
          </div>
        )}

        {card.ref && (
          <div style={{ fontSize: 11, color: '#64748b', fontStyle: 'italic' }}>📖 {card.ref}</div>
        )}
      </div>
    )
  }

  // ============================================================
  // Vue « réponse » : indice + choix + bouton de validation.
  // ============================================================
  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        {atStar ? (
          <div
            style={{
              padding: '6px 14px',
              background: '#fff6da',
              border: '1px solid #C8860B',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              color: '#9a6800',
            }}
          >
            ⭐ Case Étoile — sans indice obligatoire
          </div>
        ) : indicesUsed < 1 && card.indice1 ? (
          <button
            onClick={() => onUseIndice(1)}
            style={{
              padding: '6px 14px',
              background: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: 20,
              fontSize: 12,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            💡 Indice (−1 case)
          </button>
        ) : indicesUsed >= 1 ? (
          <div
            style={{
              padding: '6px 14px',
              background: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: 20,
              fontSize: 12,
            }}
          >
            💡 {card.indice1}
          </div>
        ) : null}

        <div
          style={{
            marginLeft: 'auto',
            fontSize: 12,
            color: '#64748b',
            padding: '6px 0',
          }}
        >
          Cases possibles : <strong>{atStar ? 2 : 2 - indicesUsed}</strong>
        </div>
      </div>

      {/* Choix Vrai / Faux */}
      {isTrueFalse && (
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          {['Vrai', 'Faux'].map((label) => {
            const key = label.charAt(0)
            const isSel = selected === key
            return (
              <button
                key={label}
                onClick={() => setSelected(key)}
                style={{
                  flex: 1,
                  padding: '12px 0',
                  borderRadius: 10,
                  border: `2px solid ${isSel ? phaseColor : '#e2e8f0'}`,
                  background: isSel ? phaseColor : 'white',
                  color: isSel ? 'white' : '#374151',
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {label === 'Vrai' ? '✅ Vrai' : '❌ Faux'}
              </button>
            )
          })}
        </div>
      )}

      {/* Choix QCM (A / B / C / D) */}
      {!isTrueFalse && choices.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {choices.map(({ key, text }) => {
            const isSel = selected === key
            return (
              <button
                key={key}
                onClick={() => setSelected(key)}
                style={{
                  padding: '10px 16px',
                  borderRadius: 10,
                  border: `2px solid ${isSel ? phaseColor : '#e2e8f0'}`,
                  background: isSel ? phaseColor + '14' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 13,
                  fontWeight: isSel ? 700 : 400,
                  color: isSel ? phaseColor : '#374151',
                }}
              >
                <strong>{key}.</strong> {text}
              </button>
            )
          })}
        </div>
      )}

      <button
        onClick={validate}
        disabled={selected === null}
        style={{
          width: '100%',
          padding: '12px 0',
          borderRadius: 10,
          border: 'none',
          background: selected ? phaseColor : '#e2e8f0',
          color: selected ? 'white' : '#94a3b8',
          fontWeight: 700,
          fontSize: 15,
          cursor: selected ? 'pointer' : 'default',
          fontFamily: 'inherit',
          transition: 'all 0.2s',
        }}
      >
        Valider ma réponse →
      </button>
    </div>
  )
}
