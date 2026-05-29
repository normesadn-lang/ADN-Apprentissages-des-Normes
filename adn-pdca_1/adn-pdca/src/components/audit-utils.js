// Utilitaires de correction des cartes Audit (modèle de données structuré).
//
// Chaque question porte son type et sa solution :
//   vf      -> q.sol  = "Vrai" | "Faux"
//   qcm     -> q.sol  = "A" | "B" | "C"
//   mot     -> q.accept = [variantes normalisées acceptées]
//   ouverte -> q.accept = [variantes normalisées acceptées]
//   ordre   -> q.ordre  = { P, D, C, A } -> lettre de l'item ("a".."d")

/** Normalise une chaîne : minuscules, sans accents, alphanumérique et espaces. */
export function normalize(value) {
  return (value == null ? '' : String(value))
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Indique si la réponse de l'utilisateur est correcte pour une question structurée.
 * @param question objet question (avec type et solution)
 * @param userAnswer réponse de l'utilisateur (string, ou objet { P,D,C,A } pour 'ordre')
 */
export function isCorrect(question, userAnswer) {
  if (userAnswer == null || userAnswer === '') return false

  if (question.type === 'vf') {
    return normalize(userAnswer).charAt(0) === normalize(question.sol).charAt(0)
  }

  if (question.type === 'qcm') {
    return normalize(userAnswer) === normalize(question.sol)
  }

  if (question.type === 'mot' || question.type === 'ouverte') {
    const u = normalize(userAnswer)
    if (u.length < 2) return false
    return (question.accept || []).some(
      (v) => v && (u === v || v.indexOf(u) >= 0 || u.indexOf(v) >= 0),
    )
  }

  if (question.type === 'ordre') {
    const sol = question.ordre || {}
    return ['P', 'D', 'C', 'A'].every(
      (k) => userAnswer[k] && String(userAnswer[k]).toLowerCase() === String(sol[k]).toLowerCase(),
    )
  }

  return false
}

/** Compte les réponses fournies (pour l'indicateur « X/10 répondues »). */
export function isAnswered(question, userAnswer) {
  if (userAnswer == null || userAnswer === '') return false
  if (question.type === 'ordre') {
    return ['P', 'D', 'C', 'A'].every((k) => userAnswer[k])
  }
  return String(userAnswer).trim().length > 0
}
