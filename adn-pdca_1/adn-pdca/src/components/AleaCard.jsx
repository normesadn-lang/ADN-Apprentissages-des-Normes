// Carte Aléa : contrainte spéciale jouée sans indice.
// Composant fourni mais non distribué dans le tirage par défaut.
// Pour activer les Aléas (voir règle officielle), modifier la fonction de tirage
// dans App.jsx pour piocher aléatoirement dans ALEAS au lieu de DEFIS.
import { useState } from 'react'
import { PHASES } from '../theme.js'

export function AleaCard({ card, onComplete }) {
  const [revealed, setRevealed] = useState(false)
  const theme = PHASES[card.phase] || PHASES.P

  return (
    <div
      style={{
        background: 'white',
        borderRadius: 14,
        padding: 24,
        maxWidth: 560,
        margin: '0 auto',
        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: `linear-gradient(135deg,${theme.badge},${theme.tile})`,
          color: 'white',
          borderRadius: 10,
          padding: '12px 18px',
          marginBottom: 18,
        }}
      >
        <div>
          <div style={{ fontSize: 11, opacity: 0.9, letterSpacing: 2, fontWeight: 800 }}>
            ⚡ ALÉA — {theme.label}
          </div>
          <div style={{ fontSize: 18, fontWeight: 900, marginTop: 2 }}>{card.titre}</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>{card.id}</div>
      </div>

      <Section title="CONTRAINTE" titleColor="#C0392B" border="#E07A5F66" bg="#fdf1ee" italic>
        {card.contrainte}
      </Section>

      <Section title="SCÉNARIO" titleColor="#B8700B" border="#E6A23C66" bg="#fdf6ec">
        {card.scenario}
      </Section>

      <Section title="MISSION" titleColor="#6B46C1" border="#7C5CBF66" bg="#f5f1fb" bold>
        {card.mission}
      </Section>

      {revealed ? (
        <div>
          <div
            style={{
              background: '#eff6ff',
              borderRadius: 10,
              padding: 14,
              marginBottom: 12,
              borderLeft: '4px solid #2176AE',
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: '#2176AE',
                letterSpacing: 1,
                marginBottom: 8,
              }}
            >
              ÉLÉMENTS DE RÉPONSE ATTENDUS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {card.elements.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: theme.border, fontWeight: 900, flexShrink: 0, fontSize: 14 }}>▸</span>
                  <span style={{ fontSize: 12.5, color: '#1e293b', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {card.ref && (
            <div
              style={{
                background: '#f5f1fb',
                borderRadius: 8,
                padding: '8px 12px',
                marginBottom: 14,
                borderLeft: '4px solid #6B46C1',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 800, color: '#6B46C1' }}>RÉFÉRENCE ISO 9001 — </span>
              <span style={{ fontSize: 12, color: '#444', fontStyle: 'italic' }}>{card.ref}</span>
            </div>
          )}

          <button
            onClick={onComplete}
            style={{
              width: '100%',
              padding: '13px 0',
              background: theme.border,
              color: 'white',
              border: 'none',
              borderRadius: 10,
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Continuer la partie →
          </button>
        </div>
      ) : (
        <button
          onClick={() => setRevealed(true)}
          style={{
            width: '100%',
            padding: '12px 0',
            background: '#2176AE',
            color: 'white',
            border: 'none',
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 14,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Voir les éléments de réponse →
        </button>
      )}
    </div>
  )
}

function Section({ title, titleColor, border, bg, italic, bold, children }) {
  return (
    <div
      style={{
        borderRadius: 10,
        border: `2px solid ${border}`,
        background: bg,
        padding: '12px 14px',
        marginBottom: 12,
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 800, color: titleColor, letterSpacing: 1, marginBottom: 5 }}>{title}</div>
      <p
        style={{
          margin: 0,
          fontSize: italic ? 12.5 : 13,
          color: italic ? '#5a3a32' : '#1e293b',
          lineHeight: 1.6,
          fontStyle: italic ? 'italic' : 'normal',
          fontWeight: bold ? 600 : 400,
        }}
      >
        {children}
      </p>
    </div>
  )
}
