// Pictogrammes SVG des 4 phases, dessinés autour d'un centre (cx, cy).
// Chaque icône reçoit { cx, cy, color } et renvoie un groupe <g>.

function PlanIcon({ cx, cy, color }) {
  return (
    <g>
      <ellipse cx={cx} cy={cy - 3} rx="8" ry="9" fill="none" stroke={color} strokeWidth="2" />
      <line x1={cx - 4} y1={cy + 6} x2={cx + 4} y2={cy + 6} stroke={color} strokeWidth="2" />
      <line x1={cx - 3} y1={cy + 9} x2={cx + 3} y2={cy + 9} stroke={color} strokeWidth="2" />
      <line x1={cx} y1={cy - 14} x2={cx} y2={cy - 12} stroke={color} strokeWidth="2" />
      <line x1={cx + 10} y1={cy - 8} x2={cx + 8} y2={cy - 7} stroke={color} strokeWidth="2" />
      <line x1={cx - 10} y1={cy - 8} x2={cx - 8} y2={cy - 7} stroke={color} strokeWidth="2" />
    </g>
  )
}

function DoIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="7" fill="none" stroke={color} strokeWidth="2" />
      <circle cx={cx} cy={cy} r="3" fill={color} />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const a = (deg * Math.PI) / 180
        return (
          <line
            key={deg}
            x1={cx + 8 * Math.cos(a)}
            y1={cy + 8 * Math.sin(a)}
            x2={cx + 11 * Math.cos(a)}
            y2={cy + 11 * Math.sin(a)}
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
          />
        )
      })}
    </g>
  )
}

function CheckIcon({ cx, cy, color }) {
  return (
    <g>
      <circle cx={cx - 2} cy={cy - 2} r="8" fill="none" stroke={color} strokeWidth="2" />
      <line x1={cx + 4} y1={cy + 4} x2={cx + 10} y2={cy + 10} stroke={color} strokeWidth="3" strokeLinecap="round" />
      <polyline
        points={`${cx - 6},${cy + 1} ${cx - 3},${cy - 2} ${cx},${cy - 4} ${cx + 2},${cy - 1}`}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
    </g>
  )
}

function ActIcon({ cx, cy, color }) {
  return (
    <g>
      <rect x={cx - 9} y={cy - 2} width="5" height="8" fill={color} rx="1" />
      <rect x={cx - 2} y={cy - 7} width="5" height="13" fill={color} rx="1" />
      <rect x={cx + 5} y={cy - 11} width="5" height="17" fill={color} rx="1" />
      <line x1={cx - 10} y1={cy + 7} x2={cx + 11} y2={cy + 7} stroke={color} strokeWidth="1.5" />
      <polyline
        points={`${cx - 7},${cy - 2} ${cx},${cy - 8} ${cx + 7},${cy - 12}`}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="2,1"
      />
    </g>
  )
}

export const PHASE_ICONS = { P: PlanIcon, D: DoIcon, C: CheckIcon, A: ActIcon }
