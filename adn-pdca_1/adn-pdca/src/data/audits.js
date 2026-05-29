// Cartes Audit du jeu ADN — Apprentissage Des Normes
// 24 audits sectoriels, 10 questions chacun (Vrai/Faux, Mot a trouver, QCM,
// Question ouverte, Mise en ordre PDCA). Donnees fideles aux cartes physiques.
//
// Structure d'une question :
//   { n, type, enonce, reponse (corrige affiche),
//     choix? (QCM : ["A. ...", ...]),
//     items? (ordre : ["a) ...", ...]),
//     sol?    (vf: "Vrai"/"Faux" ; qcm: "B"),
//     accept? (mot/ouverte : variantes acceptees, normalisees),
//     ordre?  (ordre : { P, D, C, A } -> lettre de l'item) }

export const AUDITS = [
  {
    "id": "AUD-01",
    "secteur": "Usine « Croq'Bon » (biscuits sans gluten)",
    "scenario": "L'usine agroalimentaire « Croq'Bon » fabrique des biscuits classiques et une nouvelle gamme « sans gluten ». Pour gagner des parts de marché, la direction a décidé d'utiliser la même ligne de production, en s'appuyant sur une analyse de risques allergènes réalisée il y a un an, jamais réactualisée malgré l'arrivée de nouveaux clients et de nouvelles exigences de distributeurs. Les changements de série sont courts, plusieurs versions de procédures de nettoyage circulent en atelier, et des opérateurs récemment recrutés ont été formés « sur le tas ». Quelques réclamations de clients signalent des suspicions de traces de gluten ; elles sont traitées au cas par cas, sans indicateur dédié ni revue spécifique. Le dernier audit interne du processus de nettoyage date de deux ans. La seule décision prise en réaction a été d'agrandir visuellement la mention « sans gluten » sur les cartons, sans analyse de cause approfondie ni vérification d'efficacité.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'analyse du contexte peut ignorer l'essor du marché « sans gluten » et les nouvelles exigences clients.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Pour maîtriser les risques allergènes, l'usine doit actualiser l'analyse de .",
        "reponse": "risques (ou « risques et opportunités »).",
        "accept": [
          "risques",
          "risques et opportunites",
          "risques  ou   risques et opportunites"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Concernant la formation des nouveaux opérateurs, l'usine doit :",
        "reponse": "B",
        "choix": [
          "A. Les laisser apprendre seuls",
          "B. Définir les compétences requises, former et conserver les preuves",
          "C. Supposer que l'expérience suffit"
        ],
        "sol": "B"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Plusieurs versions de procédures de nettoyage en circulation respectent l'exigence de maîtrise des informations documentées.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les réclamations allergènes peuvent être utilisées comme données de satisfaction client.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Un indicateur pertinent pour suivre les incidents allergènes est le taux de client.",
        "reponse": "réclamations (ou « non",
        "accept": [
          "reclamations",
          "reclamations  ou   non"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Quelle est la différence entre changer l'étiquette (réaction immédiate) et analyser la cause des incidents pour modifier le processus ? → Réponse attendue en 1 mot : vs action corrective.",
        "reponse": "Correction",
        "accept": [
          "correction"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Ne pas auditer le processus de nettoyage pendant deux ans :",
        "reponse": "B",
        "choix": [
          "A. Est acceptable si personne n'est volontaire",
          "B. Viole l'exigence d'audit interne basé sur l'importance et les risques",
          "C. N'a pas d'impact sur le SMQ"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue consiste à utiliser régulièrement les données, réclamations et audits pour ajuster le système.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Classez ces actions dans l'ordre P–D–C–A :",
        "reponse": "P=c, D=a, C=b, A=d.",
        "items": [
          "a) Mettre à jour la procédure, former, appliquer",
          "b) Analyser les données de réclamations et d'essais",
          "c) Décider de renforcer la maîtrise des allergènes",
          "d) Lancer une nouvelle action corrective si incidents persistent"
        ],
        "ordre": {
          "P": "c",
          "D": "a",
          "C": "b",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-02",
    "secteur": "Hôpital de jour « Bonne Santé » (surchargé)",
    "scenario": "L'hôpital de jour « Bonne Santé » a augmenté de 40% son activité en un an après l'ouverture d'un nouveau service. Aucune mise à jour formelle de l'analyse de contexte ni des parties intéressées n'a été faite depuis trois ans. Les locaux sont saturés, certains patients attendent dans le couloir, et les retards de prise en charge se multiplient. Des infirmiers recrutés récemment n'ont reçu qu'une formation rapide, non tracée. Les procédures d'accueil existent mais plusieurs versions papier circulent encore. Quelques réclamations de patients et de familles mentionnent un manque d'information et des temps d'attente excessifs, mais elles ne sont pas exploitées dans un indicateur de satisfaction. La revue de direction la plus récente n'a pas abordé spécifiquement ces problèmes, et aucun plan d'actions global n'a été décidé.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'augmentation d'activité et la saturation des locaux doivent être intégrées dans l'analyse de contexte et des risques.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Avant de modifier l'organisation d'accueil, l'hôpital doit identifier les liés à cette situation.",
        "reponse": "risques (ou « enjeux »).",
        "accept": [
          "risques",
          "enjeux",
          "risques  ou   enjeux"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Pour les nouveaux infirmiers, l'exigence clé est de :",
        "reponse": "B",
        "choix": [
          "A. Leur faire signer le règlement intérieur uniquement",
          "B. Définir les compétences requises, les former et enregistrer leur habilitation",
          "C. Supposer que le diplôme suffit"
        ],
        "sol": "B"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Plusieurs versions de procédures d'accueil en circulation respectent l'article 7.5.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les réclamations des patients peuvent être utilisées comme source de données de satisfaction client.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Un indicateur pertinent pour mesurer la performance de l'accueil est le temps moyen d'.",
        "reponse": "attente (ou « retard »).",
        "accept": [
          "attente",
          "retard",
          "attente  ou   retard"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La revue de direction doit aboutir à des et des pour traiter ces problèmes. → Réponse attendue : 2 mots.",
        "reponse": "décisions / actions (ou « décisions / ressources »)",
        "accept": [
          "decisions   actions",
          "decisions   ressources",
          "decisions   actions  ou   decisions   ressources"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Quelle action relève d'une vraie amélioration continue ?",
        "reponse": "B",
        "choix": [
          "A. Ignorer les réclamations tant que la certification est maintenue",
          "B. Analyser données et réclamations, décider d'actions et suivre leurs effets",
          "C. Faire un sondage une fois puis l'oublier"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Les audits internes peuvent ignorer les processus qui ne posent pas de problème visible.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez ces actions :",
        "reponse": "P=c, D=b, C=a, A=d.",
        "items": [
          "a) Mesurer les temps d'attente et analyser les résultats",
          "b) Réorganiser les horaires/ressources à l'accueil",
          "c) Constater la hausse d'activité et les plaintes",
          "d) Lancer de nouvelles actions si les temps restent trop longs"
        ],
        "ordre": {
          "P": "c",
          "D": "b",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-03",
    "secteur": "Centre d'appels « ServiPlus »",
    "scenario": "Le centre d'appels « ServiPlus » gère le SAV de plusieurs grandes marques. Suite à la mise en place d'un nouvel outil téléphonique, les temps d'attente ont doublé et les clients se plaignent de la difficulté à joindre un conseiller. Aucune mise à jour des risques ni des objectifs qualité n'a été faite ; le seul objectif affiché reste « offrir le meilleur service ». Des conseillers ont été formés par compagnonnage, sans plan ni trace formelle. Les scripts d'appel ont plusieurs versions concurrentes. Les indicateurs collectés (temps d'attente, taux d'abandon, satisfaction) existent mais ne sont pas analysés en équipe : ils sont simplement envoyés en pièce jointe avant la revue de direction, sans discussion ni décision.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'orientation client impose de connaître les attentes (délai, accessibilité) et d'adapter le service.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les objectifs qualité doivent être, comme « réduire le temps moyen d'attente de 20% ».",
        "reponse": "mesurables",
        "accept": [
          "mesurables"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Pour les scripts d'appel, l'auditeur vérifie surtout que :",
        "reponse": "B",
        "choix": [
          "A. Chaque conseiller écrit le sien",
          "B. Une version à jour unique est définie et utilisée",
          "C. Il n'existe aucun script"
        ],
        "sol": "B"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Une formation informelle non tracée suffit pour démontrer la compétence des conseillers.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les résultats d'indicateurs doivent être analysés et discutés, pas seulement archivés.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Un indicateur central ici est le taux d'appels.",
        "reponse": "abandon.",
        "accept": [
          "abandon"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La revue de direction doit aboutir à des et des pour améliorer ce service. → Réponse attendue : 2 mots.",
        "reponse": "décisions / actions",
        "accept": [
          "decisions   actions"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Face à des réclamations répétées sur l'accessibilité, quelle approche relève d'une action corrective ?",
        "reponse": "B",
        "choix": [
          "A. Ignorer les plaintes",
          "B. Analyser causes (outil, dimensionnement), modifier le dispositif, vérifier le résultat",
          "C. Changer de logo"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Les audits internes peuvent totalement ignorer le centre d'appels si aucun incident majeur n'est remonté.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=a, C=c→d (ou b→c→a→d selon logique PDCA).",
        "items": [
          "a) Former les conseillers aux nouveaux scripts",
          "b) Constater les réclamations répétées",
          "c) Analyser les causes (outil, process)",
          "d) Vérifier la diminution des abandons"
        ],
        "ordre": {
          "P": "b",
          "D": "a",
          "C": "c",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-04",
    "secteur": "Mairie « Proxi - Ville » (titres d'identité)",
    "scenario": "La mairie de « Proxi-Ville » délivre cartes d'identité et passeports. Les délais se sont allongés, avec de nombreuses plaintes des citoyens. Les risques (perte de documents, erreurs de saisie) n'ont pas été réévalués depuis le passage au rendez-vous en ligne. Les agents sont formés « sur le tas ». Aucune mesure systématique du délai moyen ni taux de dossiers refusés en préfecture n'est faite. Les réclamations sont enregistrées dans un cahier papier non exploité. Le logiciel de saisie plante deux fois par jour, l'espace d'accueil est bruyant et ne permet pas la confidentialité. Les agents n'ont pas de fiches de poste claires.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Les citoyens sont une partie intéressée prioritaire pour ce processus.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les exigences pour les titres doivent être prises en compte dans le processus.",
        "reponse": "légales (ou « réglementaires »)",
        "accept": [
          "legales",
          "reglementaires",
          "legales  ou   reglementaires"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Pour les agents, l'exigence qualité clé est :",
        "reponse": "B",
        "choix": [
          "A. Noter leurs heures supplémentaires",
          "B. Définir les compétences, les former et tracer ces actions",
          "C. Compter le nombre de cafés par jour"
        ],
        "sol": "B"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'environnement de travail (espace bruyant) est une ressource selon l'article 7.1.4.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les réclamations citoyennes peuvent servir de données pour améliorer le service.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Un indicateur pertinent : délai de délivrance.",
        "reponse": "moyen.",
        "accept": [
          "moyen"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Quel aspect du système qualité la revue de direction doit-elle vérifier régulièrement ? → Réponse attendue en 1 mot : l' du SMQ.",
        "reponse": "efficacité (ou « adéquation »)",
        "accept": [
          "efficacite",
          "adequation",
          "efficacite  ou   adequation"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Face à une hausse de refus préfecture, une action corrective consiste à :",
        "reponse": "B",
        "choix": [
          "A. Ignorer le problème",
          "B. Analyser les causes, adapter la procédure, former, vérifier le résultat",
          "C. Supprimer les contrôles"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Il est acceptable qu'aucun audit interne ne porte sur ce processus clé.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d.",
        "items": [
          "a) Mesurer les délais et taux de refus",
          "b) Décider d'objectifs de délai max",
          "c) Modifier l'organisation / formation",
          "d) Vérifier résultats, ajuster si besoin"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-05",
    "secteur": "Chantier BTP « Bâti - Solide »",
    "scenario": "L'entreprise « Bâti-Solide » construit une tour. Les enjeux riverains (bruit) n'ont pas été identifiés. Sur le chantier, les plans utilisés sont la version V1 alors que la V3 est sortie. Le béton est coulé sans attendre les résultats de résistance. Une fissure apparaît sur un pilier ; elle est rebouchée au mortier sans analyser si le calcul de structure était faux. Les inspections de sécurité sont faites mais les rapports ne sont jamais lus par le conducteur de travaux. Aucune évaluation des sous-traitants d'électricité n'est réalisée.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Les riverains sont une partie intéressée pertinente pour ce projet.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Travailler avec des plans périmés viole la maîtrise des informations .",
        "reponse": "documentées",
        "accept": [
          "documentees"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Couler le béton sans attendre les tests viole :",
        "reponse": "A",
        "choix": [
          "A. La libération des produits (8.6)",
          "B. L'orientation client (5.1.2)",
          "C. La politique qualité (5.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Reboucher la fissure sans analyser la cause est une action corrective.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Ne pas évaluer les sous-traitants électriciens viole l'article 8.4.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Les rapports d'inspection sont des outils de (9.1).",
        "reponse": "surveillance (ou « mesure »).",
        "accept": [
          "surveillance",
          "mesure",
          "surveillance  ou   mesure"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Quelle qualité la direction doit-elle démontrer vis-à-vis du SMQ selon l'article 5.1 ? → Réponse attendue en 1 mot :",
        "reponse": "leadership (ou « engagement »)",
        "accept": [
          "leadership",
          "engagement",
          "leadership  ou   engagement"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "La fissure rebouchée sans analyse est :",
        "reponse": "A",
        "choix": [
          "A. Une correction (traitement de l'effet)",
          "B. Une action corrective (traitement de la cause)",
          "C. Une opportunité"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'ISO 9001 exige de planifier les risques de retard de chantier.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d (ou b→c→a→d).",
        "items": [
          "a) Analyser la cause de la fissure (calcul ? exécution ?)",
          "b) Constater la fissure",
          "c) Reboucher provisoirement",
          "d) Décider d'une action pour éviter la récurrence"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-06",
    "secteur": "Clinique « Bel - Air » (parcours patient)",
    "scenario": "La clinique modifie son accueil sans analyser l'impact sur le temps d'attente. Les nouveaux infirmiers n'ont pas accès aux protocoles d'urgence à jour. Les médicaments sont stockés sans contrôle de température. Un patient a reçu un mauvais traitement ; l'erreur a été notée mais aucune réunion de retour d'expérience n'a eu lieu pour changer les étiquettes de produits. Les enquêtes de satisfaction montrent un mécontentement, mais la direction ne les présente pas en revue, se focalisant sur le budget.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Modifier l'accueil sans analyse respecte la planification des changements (6.3).",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "L'absence d'accès aux protocoles est un défaut d'information .",
        "reponse": "documentée",
        "accept": [
          "documentee"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Le stockage des médicaments sans contrôle de température concerne :",
        "reponse": "A",
        "choix": [
          "A. La préservation (8.5.4)",
          "B. La vente",
          "C. La communication"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'erreur de traitement est une non-conformité.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les enquêtes de satisfaction sont facultatives en revue de direction.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Ne pas analyser la cause d'une erreur empêche l' “ “corrective.",
        "reponse": "action.",
        "accept": [
          "action"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Qui est responsable de l'efficacité du SMQ ? → Réponse attendue :",
        "reponse": "direction",
        "accept": [
          "direction"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "S'assurer que le personnel est formé relève :",
        "reponse": "A",
        "choix": [
          "A. Des compétences (7.2)",
          "B. De l'audit interne (9.2)",
          "C. De la revue de direction (9.3)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue (10.3) s'applique même si la clinique est rentable.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d.",
        "items": [
          "a) Analyser pourquoi l'erreur s'est produite",
          "b) Constater l'erreur de traitement",
          "c) Corriger immédiatement (traiter le patient)",
          "d) Modifier les étiquettes pour éviter la répétition"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-07",
    "secteur": "Centre d'appels « Allo -Qualité »",
    "scenario": "Le centre « Allo-Qualité » gère le SAV d'un grand e-commerçant. La direction a renouvelé le contrat sans identifier les nouvelles exigences de protection de la vie privée. Les conseillers utilisent des scripts d'appels datant de l'année dernière, alors que les produits ont changé. Les nouvelles recrues ne sont pas formées au logiciel de gestion. Le temps d'attente moyen n'est pas mesuré et les abandons d'appels sont ignorés. Face au mécontentement sur les réseaux sociaux, le centre rembourse systématiquement sans analyser si le script est erroné. Aucune revue de direction n'a traité la surcharge des équipes.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Ignorer les nouvelles exigences de vie privée du client viole l'article 4.2 (parties intéressées).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "L'absence de formation des recrues est un manque de .",
        "reponse": "compétences (ou « formation »)",
        "accept": [
          "competences",
          "formation",
          "competences  ou   formation"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Des scripts d'appels périmés sont un défaut de :",
        "reponse": "A",
        "choix": [
          "A. Maîtrise des informations documentées (7.5)",
          "B. Maîtrise des prestataires (8.4)",
          "C. Revue de direction (9.3)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Ne pas mesurer le temps d'attente empêche d'évaluer la performance (9.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "La satisfaction client doit être surveillée même sans plaintes (9.1.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Rembourser sans analyser la cause est une , pas une action corrective.",
        "reponse": "correction.",
        "accept": [
          "correction"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La revue de direction doit décider des nécessaires. → Réponse attendue en 1 mot.",
        "reponse": "ressources",
        "accept": [
          "ressources"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "L'orientation client (5.1.2) impose de :",
        "reponse": "B",
        "choix": [
          "A. Toujours rembourser",
          "B. Comprendre et satisfaire les besoins",
          "C. Ignorer les réclamations"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue peut ignorer les retours clients tant que les ventes progressent.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=d, D=b, C=a→c, A=(ajustements).",
        "items": [
          "a) Mesurer le temps d'attente",
          "b) Former les conseillers aux nouveaux scripts",
          "c) Analyser les causes des abandons",
          "d) Définir des scripts adaptés aux nouveaux produits"
        ],
        "ordre": {
          "P": "d",
          "D": "b",
          "C": "a",
          "A": "c"
        }
      }
    ]
  },
  {
    "id": "AUD-08",
    "secteur": "Mairie « État Civil » (collectivité)",
    "scenario": "La mairie souhaite certifier son service « Titres d'identité ». Le maire a signé une politique qualité mais les agents à l'accueil n'en ont jamais entendu parler. Les délais d'obtention des passeports ne sont pas suivis. L'espace d'accueil est bruyant et ne permet pas la confidentialité des données. Les dossiers incomplets sont rejetés sans qu'on analyse pourquoi les usagers remplissent mal le formulaire. Les agents n'ont pas de fiches de poste claires. Le logiciel de saisie plante deux fois par jour.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Des agents non sensibilisés à la politique qualité, c'est un manque selon l'article 7.3.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Un logiciel qui plante est une défaillance de l'.",
        "reponse": "infrastructure",
        "accept": [
          "infrastructure"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "L'absence de fiches de poste claires viole :",
        "reponse": "A",
        "choix": [
          "A. L'article 5.3 (rôles et responsabilités)",
          "B. L'article 9.2 (audit interne)",
          "C. L'article 8.4 (prestataires)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'environnement de travail (espace bruyant) est une ressource selon l'article 7.1.4.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Analyser pourquoi les formulaires sont mal remplis est une action corrective.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Le service doit définir des pour suivre les délais (9.1).",
        "reponse": "indicateurs.",
        "accept": [
          "indicateurs"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "L'amélioration continue (10.3) concerne-t-elle les services publics ? → Réponse attendue : Oui / Non + justification en 1 mot.",
        "reponse": "Oui",
        "accept": [
          "oui"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Le rejet d'un dossier incomplet est :",
        "reponse": "A",
        "choix": [
          "A. Une sortie non conforme",
          "B. Une opportunité",
          "C. Une action corrective"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue ne concerne pas les services publics.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser pourquoi les usagers se trompent",
          "b) Constater les rejets répétés",
          "c) Simplifier le formulaire",
          "d) Mesurer la baisse des rejets"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-09",
    "secteur": "Boulangerie « Le Fournil d'Antan »",
    "scenario": "Cette boulangerie veut garantir la régularité de son pain bio. Le patron achète sa farine sans vérifier le certificat bio du fournisseur. Les recettes sont transmises oralement et varient selon le mitron. La balance de pesage n'a pas été contrôlée depuis sa livraison. Le taux de gâchis en fin de journée est de 20%, mais aucune action n'est prise pour ajuster la production. Le personnel ne respecte pas les règles d'hygiène en zone de pétrissage.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Ne pas vérifier le certificat du fournisseur viole l'article 8.4.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Une balance non vérifiée est un manquement à la de la mesure (7.1.5).",
        "reponse": "traçabilité (ou « étalonnage »)",
        "accept": [
          "tracabilite",
          "etalonnage",
          "tracabilite  ou   etalonnage"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Des recettes uniquement orales manquent de :",
        "reponse": "A",
        "choix": [
          "A. Maîtrise des informations documentées (7.5)",
          "B. Politique qualité (5.2)",
          "C. Audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'hygiène fait partie de la maîtrise des conditions de production (8.5.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Un artisan n'a pas besoin d'objectifs qualité (6.2).",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Le gâchis de 20% est une perte de (opportunité d'amélioration).",
        "reponse": "performance (ou « rentabilité »).",
        "accept": [
          "performance",
          "rentabilite",
          "performance  ou   rentabilite"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "L'organisme doit surveiller quelle perception des clients ? → Réponse attendue en 1 mot : la .",
        "reponse": "satisfaction",
        "accept": [
          "satisfaction"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Qui doit s'assurer de l'étalonnage des balances ?",
        "reponse": "B",
        "choix": [
          "A. Le fournisseur de balances",
          "B. Le patron (l'organisme)",
          "C. L'auditeur de certification"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Réduire le gâchis est une opportunité d'amélioration (10.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c→a, C=d, A=(ajustements).",
        "items": [
          "a) Former tous les mitrons à la recette standard",
          "b) Constater les écarts de goût",
          "c) Documenter la recette par écrit",
          "d) Vérifier la régularité du pain"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "d",
          "A": "a"
        }
      }
    ]
  },
  {
    "id": "AUD-10",
    "secteur": "Banque « Banque - Invest » (prêts",
    "scenario": "L'agence traite des dossiers de prêts. Suite à une fusion, l'analyse des risques de non-conformité n'a pas été mise à jour. Les dossiers originaux des clients sont stockés dans un bureau ouvert à tous. Le taux d'erreurs dans les offres de prêt est de 10%, mais aucune réunion n'analyse pourquoi ces erreurs surviennent. La direction n'a pas tenu de revue de direction depuis 18 mois. Les conseillers n'ont pas accès à la dernière version des taux légaux sur le serveur.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Ne pas mettre à jour l'analyse des risques après une fusion viole l'article 6.1.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les dossiers clients mal protégés violent l'exigence de de la propriété du client (8.5.3).",
        "reponse": "protection (ou « préservation »)",
        "accept": [
          "protection",
          "preservation",
          "protection  ou   preservation"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Les taux légaux périmés sont un défaut de :",
        "reponse": "A",
        "choix": [
          "A. Maîtrise des informations documentées (7.5)",
          "B. Ressources humaines (7.2)",
          "C. Communication (7.4)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Une revue de direction doit avoir lieu à intervalles planifiés.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "L'audit interne peut être fait par le directeur sur son propre travail.",
        "reponse": "Faux",
        "sol": "Faux"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "L'absence d'analyse de cause empêche l' corrective.",
        "reponse": "action.",
        "accept": [
          "action"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La banque doit déterminer les internes et externes (4.1). → Réponse attendue en 1 mot.",
        "reponse": "enjeux",
        "accept": [
          "enjeux"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "La satisfaction client doit être :",
        "reponse": "B",
        "choix": [
          "A. Devinée",
          "B. Surveillée (9.1.2)",
          "C. Ignorée"
        ],
        "sol": "B"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "La protection des données clients est une exigence critique pour une banque.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser les causes des 10% d'erreurs",
          "b) Constater le taux d'erreurs",
          "c) Former / ajuster les processus",
          "d) Vérifier la baisse des erreurs"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-11",
    "secteur": "EHPAD « Sérénité - Automne »",
    "scenario": "L'EHPAD gère 80 résidents. Les besoins des familles n'ont pas été recensés. Le personnel est en sous-effectif, empêchant le respect des protocoles de soin. Un nouveau menu est lancé sans test préalable. Trois chutes ont eu lieu dans le même couloir, mais aucune analyse des causes n'a été faite. En revue de direction, on ignore les indicateurs de santé pour se focaliser sur le budget.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Oublier les familles dans l'analyse viole l'article 4.2 (parties intéressées).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Le manque de personnel est une défaillance des humaines (7.1.2).",
        "reponse": "ressources",
        "accept": [
          "ressources"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Lancer un menu sans test viole :",
        "reponse": "A",
        "choix": [
          "A. La validation de la conception (8.3)",
          "B. L'audit interne (9.2)",
          "C. La politique qualité (5.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Analyser la cause des chutes est une action corrective.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les protocoles de soin doivent être documentés (7.5).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Ignorer les indicateurs de santé en revue de direction viole l'article 9.3.2 sur les de la revue.",
        "reponse": "entrées",
        "accept": [
          "entrees"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Le personnel doit être sensibilisé à sa à la qualité (7.3). → Réponse attendue en 1 mot.",
        "reponse": "contribution",
        "accept": [
          "contribution"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Un résident qui tombe est :",
        "reponse": "A",
        "choix": [
          "A. Une non-conformité (événement indésirable)",
          "B. Une fatalité inévitable",
          "C. Une opportunité"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'EHPAD doit assurer l'amélioration continue (10.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser pourquoi 3 chutes ont eu lieu au même endroit",
          "b) Constater les chutes",
          "c) Modifier l'aménagement du couloir",
          "d) Vérifier qu'il n'y a plus de chutes"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-12",
    "secteur": "Atelier « Méca - Précision » (usinage)",
    "scenario": "L'atelier produit des pièces aéronautiques. Les bacs n'ont aucune étiquette de référence. L'outil de mesure utilisé a une vignette d'étalonnage périmée. Les ordres sont contradictoires car les rôles sont flous. Plusieurs pièces rebutes sont mélangées aux pièces conformes. L'audit interne a été réalisé par le chef de production lui-même.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'absence d'étiquettes viole l'exigence d'identification et de traçabilité (8.5.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Un outil de mesure périmé viole l'exigence d' (7.1.5).",
        "reponse": "étalonnage",
        "accept": [
          "etalonnage"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Le flou sur les ordres est un manque de définition :",
        "reponse": "A",
        "choix": [
          "A. Des responsabilités (5.3)",
          "B. Des compétences (7.2)",
          "C. De la politique qualité (5.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'auditeur interne doit être impartial.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "L'amélioration continue ncessite d'analyser les rebuts.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Des pièces rebutes non isolées violent l'article 8.7 sur la maîtrise des éléments de sortie non .",
        "reponse": "conformes",
        "accept": [
          "conformes"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La direction doit démontrer son (5.1.1). → Réponse attendue en 1 mot.",
        "reponse": "leadership (ou « engagement »)",
        "accept": [
          "leadership",
          "engagement",
          "leadership  ou   engagement"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Le pied à coulisse est :",
        "reponse": "A",
        "choix": [
          "A. Une ressource de mesure (7.1.5)",
          "B. Une infrastructure (7.1.3)",
          "C. Un document (7.5)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Il faut conserver des informations documentées comme preuves (7.5).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=c, D=d→a, C=b, A=(action si récurrent).",
        "items": [
          "a) Identifier les pièces rebutes",
          "b) Décider du traitement (rebut, reprise, dérogation)",
          "c) Constater une pièce non conforme",
          "d) Isoler physiquement les pièces rebutes"
        ],
        "ordre": {
          "P": "c",
          "D": "d",
          "C": "b",
          "A": "a"
        }
      }
    ]
  },
  {
    "id": "AUD-13",
    "secteur": "Assureur « Assur - Direct » (sinistres auto)",
    "scenario": "L'assureur « Assur-Direct » traite des sinistres auto. La procédure de remboursement est jugée trop complexe par les clients. Les experts externes ne sont jamais évalués sur leurs délais ni leur qualité de rapport. La satisfaction client est estimée « au feeling » par les responsables d'agence, sans mesure formelle. Aucun audit interne n'a été réalisé depuis deux ans. Les dossiers sinistres sont classés sans règle de nommage claire, rendant les recherches difficiles. Suite à une fusion avec un autre assureur, aucune mise à jour de l'analyse de contexte n'a été faite.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Une procédure complexe qui génère des plaintes clients doit être revue dans le cadre de l'article 8.2.2 (exigences relatives aux produits/services).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les experts externes sont des prestataires qui doivent être (8.4).",
        "reponse": "évalués (ou « surveillés »)",
        "accept": [
          "evalues",
          "surveilles",
          "evalues  ou   surveilles"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Le ressenti n'est pas une mesure suffisante de la satisfaction client. L'article applicable est :",
        "reponse": "A",
        "choix": [
          "A. 9.1.2 (satisfaction du client)",
          "B. 5.2 (politique qualité)",
          "C. 7.2 (compétences)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'absence d'audit interne depuis deux ans viole l'article 9.2.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Le nommage des dossiers relève de la maîtrise des informations documentées (7.5).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Suite à une fusion, l'organisme doit revoir son analyse de (4.1).",
        "reponse": "contexte",
        "accept": [
          "contexte"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Que doit établir la direction pour donner le cadre des objectifs qualité ? → Réponse attendue en 1 mot : la .",
        "reponse": "politique",
        "accept": [
          "politique"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Fusionner deux agences nécessite :",
        "reponse": "A",
        "choix": [
          "A. De planifier les changements du SMQ (6.3)",
          "B. De supprimer tous les documents",
          "C. D'ignorer les différences de pratiques"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Les objectifs qualité doivent être mesurables (6.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Mesurer la satisfaction client (enquête, NPS...)",
          "b) Constater les plaintes sur la complexité",
          "c) Simplifier la procédure de remboursement",
          "d) Vérifier l'amélioration de la satisfaction"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-14",
    "secteur": "Entreprise « Net - Express » (nettoyage",
    "scenario": "L'entreprise « Net-Express » assure le nettoyage de bureaux. Le dosage des produits chimiques est fait « à l'œil » par les agents. Certains agents n'ont pas d'EPI adaptés. Un écran d'ordinateur client a été cassé lors d'une intervention, mais l'incident n'a pas été signalé au client. Une plainte client n'a pas été enregistrée par le responsable de secteur. Le planning des passages n'est pas tenu à jour, créant des confusions. Les conseillers commerciaux promettent parfois des prestations sans vérifier la capacité de l'équipe terrain.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Le dosage « à l'œil » viole la maîtrise opérationnelle (8.5.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "L'absence d'EPI impacte l' de travail (7.1.4).",
        "reponse": "environnement",
        "accept": [
          "environnement"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "L'écran cassé non signalé est une défaillance de :",
        "reponse": "A",
        "choix": [
          "A. La protection de la propriété du client (8.5.3)",
          "B. La revue de direction (9.3)",
          "C. L'audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Ne pas enregistrer une plainte client viole l'article 10.2 (action corrective).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Un planning périmé manque de maîtrise de la planification opérationnelle (8.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Lorganisme doit identifier les nécessaires (7.1).",
        "reponse": "ressources",
        "accept": [
          "ressources"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La plainte client est une donnée de (9.1.2). → Réponse attendue en 1 mot.",
        "reponse": "satisfaction",
        "accept": [
          "satisfaction"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Promettre des prestations sans vérifier la capacité viole :",
        "reponse": "A",
        "choix": [
          "A. La revue des exigences (8.2.3)",
          "B. La politique qualité (5.2)",
          "C. L'étalonnage (7.1.5)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue exige de former les agents (10.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d.",
        "items": [
          "a) Analyser pourquoi l'écran a été cassé (formation ? processus ?)",
          "b) Constater l'écran cassé",
          "c) Informer le client et remplacer l'écran",
          "d) Former les agents à la manipulation prudente"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-15",
    "secteur": "Entrepôt « Rapid - Log » (logistique)",
    "scenario": "L'entrepôt « Rapid-Log » stocke et expédie des colis. Le risque d'incendie n'a pas été réévalué après une extension de 50% de la surface. 10% des colis présentent des erreurs d'adressage. Le système informatique ne permet pas de tracer quel préparateur a préparé quel colis. Plusieurs chariots élévateurs sont en panne depuis des semaines. La direction refuse d'investir dans des scanners code-barres pour améliorer la traçabilité. Les exigences clients (délais, conditionnement) ne sont pas systématiquement revues avant acceptation de commande.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'extension impose de revoir les risques (6.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "L'impossibilité de tracer le préparateur viole l'exigence d' (8.5.2).",
        "reponse": "identification (ou « traçabilité »)",
        "accept": [
          "identification",
          "tracabilite",
          "identification  ou   tracabilite"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Les chariots en panne sont un défaut :",
        "reponse": "A",
        "choix": [
          "A. D'infrastructure (7.1.3)",
          "B. De compétences (7.2)",
          "C. De politique qualité (5.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Le refus d'investir dans la traçabilité peut bloquer l'amélioration continue (10.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "10% d'erreurs est un indicateur de performance qui doit être analysé (9.1.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "L'organisme doit déterminer les exigences du (8.2).",
        "reponse": "produit (ou « client »)",
        "accept": [
          "produit",
          "client",
          "produit  ou   client"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Le personnel doit être pour son poste (7.2). → Réponse attendue en 1 mot.",
        "reponse": "compétent",
        "accept": [
          "competent"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Le feu est :",
        "reponse": "A",
        "choix": [
          "A. Un risque à planifier (6.1)",
          "B. Une non-conformité (8.7)",
          "C. Une opportunité (10.1)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "La traçabilité est obligatoire si le client l'exige (8.5.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=a, C=c→d, A=(ajustements).",
        "items": [
          "a) Former les préparateurs / installer des scanners",
          "b) Constater 10% d'erreurs",
          "c) Analyser les causes (fatigue, process, outils)",
          "d) Vérifier la baisse des erreurs"
        ],
        "ordre": {
          "P": "b",
          "D": "a",
          "C": "c",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-16",
    "secteur": "Hôtel « Luxe - Palace » (luxe)",
    "scenario": "L'hôtel « Luxe-Palace » accueille une clientèle VIP. Les attentes spécifiques des clients (allergies, préférences) ne sont pas notées systématiquement. Le personnel n'a pas reçu de formation spécifique au service haut de gamme. Les avis négatifs sur les plateformes en ligne sont supprimés sans analyse. La communication entre réception, conciergerie et étages est défaillante, créant des oublis. Le plan d'amélioration annuel est vide. La revue de direction n'a pas eu lieu depuis un an.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Ne pas noter les attentes VIP viole l'article 8.2.2 (exigences clients).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Le manque de formation est un défaut de (7.2).",
        "reponse": "compétences",
        "accept": [
          "competences"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Supprimer les avis négatifs sans analyse viole :",
        "reponse": "A",
        "choix": [
          "A. La satisfaction client (9.1.2)",
          "B. L'infrastructure (7.1.3)",
          "C. L'étalonnage (7.1.5)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "La communication interne est le liant du système qualité (7.4).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "La revue de direction évalue l'efficacité du SMQ (9.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Un plan d'amélioration vide montre un manque d'________ d'amélioration (10.1).",
        "reponse": "opportunités",
        "accept": [
          "opportunites"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "L'orientation est une priorité (5.1.2). → Réponse attendue en 1 mot.",
        "reponse": "client",
        "accept": [
          "client"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Une chambre pas prête à l'heure est :",
        "reponse": "A",
        "choix": [
          "A. Une non-conformité (sortie non conforme)",
          "B. Un détail sans importance",
          "C. Une opportunité"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "La direction doit établir la politique qualité (5.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser les avis clients (positifs et négatifs)",
          "b) Constater les réclamations répétées",
          "c) Former le personnel / ajuster les process",
          "d) Vérifier l'amélioration de la satisfaction"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-17",
    "secteur": "E- commerce « Shop -Online » (mode)",
    "scenario": "La plateforme « Shop-Online » vend des vêtements en ligne. Les stocks affichés sont souvent faux, créant des frustrations clients. Les colis arrivent parfois avec des vêtements tachés ou froissés. Un bug de paiement récurrent bloque les commandes, mais aucune action n'a été prise. Les motifs de retours (taille, qualité, défaut) ne sont pas analysés. La politique qualité existe mais n'est pas accessible aux collaborateurs. Les prestataires de livraison ne sont jamais évalués.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Un stock affiché faux montre un manque de maîtrise de la réalisation (8.5.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les vêtements tachés révèlent un défaut de (8.5.4).",
        "reponse": "préservation",
        "accept": [
          "preservation"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Un bug récurrent non traité est un risque mal :",
        "reponse": "A",
        "choix": [
          "A. Géré (6.1)",
          "B. Audité (9.2)",
          "C. Communiqué (7.4)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Analyser les motifs de retours permet l'amélioration (9.1.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Une politique qualité cachée viole l'article 5.2.2 (communication de la politique).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "L'organisme doit identifier les externes (4.1).",
        "reponse": "enjeux",
        "accept": [
          "enjeux"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Les prestataires de livraison doivent être (8.4). → Réponse attendue en 1 mot.",
        "reponse": "évalués",
        "accept": [
          "evalues"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Le remboursement d'un vêtement taché est :",
        "reponse": "A",
        "choix": [
          "A. Une correction",
          "B. Une action corrective",
          "C. Une opportunité"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue peut réduire les retours (10.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser les causes de retours (qualité, taille, photo trompeuse)",
          "b) Constater un taux élevé de retours",
          "c) Améliorer les process (contrôle qualité, photo, guide taille)",
          "d) Mesurer la baisse des retours"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-18",
    "secteur": "Centre « Forma - Avenir » (formation",
    "scenario": "Le centre « Forma-Avenir » dispense des formations professionnelles. Les supports de cours datent de 5 ans et ne sont plus à jour. Les formateurs externes ne sont jamais évalués sur la qualité pédagogique. Le taux d'échec aux examens est de 40%, mais aucune analyse des causes n'est menée. Aucune revue de direction n'a eu lieu. Les besoins des entreprises recruteuses ne sont pas connus. Les stagiaires ne sont pas interrogés sur leur satisfaction.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Des cours périmés violent la maîtrise des informations documentées (7.5).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Ne pas évaluer les formateurs externes viole l'article sur les (8.4).",
        "reponse": "prestataires",
        "accept": [
          "prestataires"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "L'absence d'analyse du taux d'échec bloque :",
        "reponse": "A",
        "choix": [
          "A. L'action corrective (10.2)",
          "B. La politique qualité (5.2)",
          "C. L'étalonnage (7.1.5)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "La revue de direction doit valider l'adéquation du SMQ (9.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Ignorer les entreprises recruteuses manque l'identification des parties intéressées (4.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Le centre doit identifier le de son SMQ (4.3).",
        "reponse": "domaine",
        "accept": [
          "domaine"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Le taux d'échec est une donnée de (9.1). → Réponse attendue en 1 mot.",
        "reponse": "performance",
        "accept": [
          "performance"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Les stagiaires sont :",
        "reponse": "A",
        "choix": [
          "A. Des clients (partie intéressée)",
          "B. Des fournisseurs",
          "C. Des auditeurs"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "L'amélioration continue s'appuie sur les audits (9.2 / 10.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a→d, A=(ajustements).",
        "items": [
          "a) Analyser les causes d'échec (contenu, pédagogie, prérequis)",
          "b) Constater 40% d'échec",
          "c) Réviser les supports / former les formateurs",
          "d) Mesurer la baisse du taux d'échec"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-19",
    "secteur": "Agence « Event - Pro » (festivals)",
    "scenario": "L'agence « Event-Pro » organise des festivals. Aucun plan de secours n'est prévu pour les orages. Le prestataire de sécurité est choisi car le moins cher, sans vérifier ses agréments. Le flux de spectateurs n'est pas compté en temps réel, créant des risques de saturation. Suite à une coupure de courant, l'électricien a réparé le câble mais n'a pas vérifié pourquoi il avait fondu. Les avis des festivaliers sur les réseaux sociaux ne sont pas exploités. La communication avec les services de secours est informelle.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "L'orage est un risque qui doit être planifié (6.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Choisir un prestataire sans vérifier ses agrements viole la des prestataires (8.4).",
        "reponse": "sélection (ou « évaluation »)",
        "accept": [
          "selection",
          "evaluation",
          "selection  ou   evaluation"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Ne pas compter les entrées est un défaut de :",
        "reponse": "A",
        "choix": [
          "A. Surveillance (9.1)",
          "B. Compétences (7.2)",
          "C. Politique qualité (5.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Réparer le câble sans chercher la cause est une correction, pas une action corrective.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les avis des festivaliers mesurent la satisfaction client (9.1.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "L'agence doit identifier les parties (4.2).",
        "reponse": "intéressées",
        "accept": [
          "interessees"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La direction doit assurer la externe avec les secours (7.4). → Réponse attendue en 1 mot.",
        "reponse": "communication",
        "accept": [
          "communication"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "La coupure de courant est :",
        "reponse": "A",
        "choix": [
          "A. Une sortie non conforme (incident)",
          "B. Un aléa météo",
          "C. Une opportunité"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Le festival doit être réalisé dans des conditions maîtrisées (8.5.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d.",
        "items": [
          "a) Analyser pourquoi le câble a fondu (surcharge, défaut)",
          "b) Constater la coupure",
          "c) Réparer provisoirement",
          "d) Modifier l'installation pour éviter la récurrence"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-20",
    "secteur": "Cabinet « Archi - Design » (architecture)",
    "scenario": "Le cabinet d'architecture « Archi-Design » conçoit des bâtiments. Les données d'entrée de conception (besoins clients, contraintes réglementaires) ne sont pas toujours formalisées. Les plans sont validés en interne mais jamais revus avec le client avant fabrication. Plusieurs chantiers ont révélé des erreurs de calcul, mais aucune analyse systématique n'est faite. Les modifications de plans en cours de projet ne sont pas tracées. Les architectes ne suivent pas de formation continue sur les nouvelles normes.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Ne pas formaliser les données d'entrée de conception viole l'article 8.3.3.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les plans doivent être avec le client avant réalisation (8.3.5).",
        "reponse": "validés",
        "accept": [
          "valides"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Les erreurs de calcul répétées nécessitent :",
        "reponse": "A",
        "choix": [
          "A. Une action corrective (10.2)",
          "B. Une simple relecture",
          "C. Aucune action"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Les modifications de conception doivent être identifiées et maîtrisées (8.3.6).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les compétences des architectes doivent être maintenues à jour (7.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Les données d'entrée sont les de conception (8.3).",
        "reponse": "exigences",
        "accept": [
          "exigences"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "La revue de conception permet de vérifier que les sont satisfaites. → Réponse attendue en 1 mot : les .",
        "reponse": "exigences",
        "accept": [
          "exigences"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Une erreur de calcul détectée sur chantier est :",
        "reponse": "A",
        "choix": [
          "A. Une non-conformité (sortie non conforme)",
          "B. Une opportunité",
          "C. Un détail sans importance"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "La conception et le développement doivent être planifiés (8.3.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d (ou b→c→a→d).",
        "items": [
          "a) Revue de conception avec le client",
          "b) Recueillir les besoins clients et contraintes",
          "c) Concevoir les plans",
          "d) Valider les plans avant transmission chantier"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-21",
    "secteur": "Laboratoire « BioTest » (analyses",
    "scenario": "Le laboratoire « BioTest » réalise des analyses sanguines. Un nouvel automate a été installé sans validation formelle. Les résultats critiques ne sont pas toujours communiqués en urgence au médecin prescripteur. Les tubes mal étiquetés sont traités « au cas par cas » sans analyse de cause. Les compétences des techniciens sur le nouvel automate ne sont pas vérifiées. Les délais de rendu des résultats ne sont pas suivis. Un incident d'inversion de résultats a été corrigé mais sans action pour éviter la récurrence.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Un nouvel équipement doit être validé avant mise en service (8.5.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les résultats critiques doivent faire l'objet d'une urgente (7.4).",
        "reponse": "communication",
        "accept": [
          "communication"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Les tubes mal étiquetés sont :",
        "reponse": "A",
        "choix": [
          "A. Des non-conformités à analyser (10.2)",
          "B. Des détails sans importance",
          "C. Des opportunités"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Les compétences sur un nouvel équipement doivent être vérifiées (7.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les délais de rendu sont un indicateur de performance (9.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "L'inversion de résultats est une sortie non (8.7).",
        "reponse": "conforme",
        "accept": [
          "conforme"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Corriger sans analyser la cause empêche l' corrective. → Réponse attendue en 1 mot.",
        "reponse": "action",
        "accept": [
          "action"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "La validation d'un équipement relève de :",
        "reponse": "A",
        "choix": [
          "A. La maîtrise opérationnelle (8.5.1)",
          "B. La politique qualité (5.2)",
          "C. L'audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Les résultats d'analyses sont des sorties du processus qui doivent être maîtrisées (8.6).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=a→c, C=d, A=(ajustements).",
        "items": [
          "a) Valider le nouvel automate (tests, comparaison)",
          "b) Installer le nouvel automate",
          "c) Former les techniciens",
          "d) Vérifier la fiabilité des résultats"
        ],
        "ordre": {
          "P": "b",
          "D": "a",
          "C": "d",
          "A": "c"
        }
      }
    ]
  },
  {
    "id": "AUD-22",
    "secteur": "Garage « Auto - Pro » (réparation auto)",
    "scenario": "Le garage « Auto-Pro » effectue des réparations. Les outils de diagnostic ne sont jamais étalonnés. Les pièces de rechange sont commandées sans vérifier la conformité aux spécifications constructeur. Les clients ne reçoivent pas de devis écrit avant intervention. Plusieurs véhicules sont rendus avec des défauts non corrigés, mais le mécanicien affirme « avoir fait au mieux ». Les réclamations clients ne sont pas enregistrées. Les fiches d'intervention sont incomplètes.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Les outils de diagnostic doivent être étalonnés (7.1.5).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les pièces de rechange sont des externes à maîtriser (8.4).",
        "reponse": "produits (ou « prestataires »)",
        "accept": [
          "produits",
          "prestataires",
          "produits  ou   prestataires"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "L'absence de devis écrit viole :",
        "reponse": "A",
        "choix": [
          "A. La revue des exigences avant engagement (8.2.3)",
          "B. La politique qualité (5.2)",
          "C. L'audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Un véhicule rendu avec défauts est une sortie non conforme (8.7).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les réclamations doivent être enregistrées et traitées (10.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Les fiches d'intervention sont des informations (7.5).",
        "reponse": "documentées",
        "accept": [
          "documentees"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Avant de s'engager, le garage doit vérifier sa à réaliser la réparation. → Réponse attendue en 1 mot.",
        "reponse": "capacité",
        "accept": [
          "capacite"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "« Avoir fait au mieux » sans résultat conforme montre :",
        "reponse": "A",
        "choix": [
          "A. Un manque de maîtrise opérationnelle (8.5.1)",
          "B. Une opportunité",
          "C. Un leadership efficace"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "La satisfaction client doit être surveillée (9.1.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c, C=a, A=d.",
        "items": [
          "a) Analyser la cause du défaut non corrigé",
          "b) Recevoir une réclamation client",
          "c) Reprendre la réparation",
          "d) Former le mécanicien / ajuster le process"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-23",
    "secteur": "Agence « Pub - Créa » (publicité)",
    "scenario": "L'agence « Pub-Créa » conçoit des campagnes publicitaires. Les briefs clients sont souvent incomplets, mais l'équipe créative se lance sans clarification. Les validations intermédiaires avec le client ne sont pas systématiques. Un visuel a été diffusé avec une faute d'orthographe, créant un bad buzz. Aucune analyse de cause n'a été faite. Les créatifs freelances ne sont jamais évalués sur la qualité de leurs livrables. La satisfaction client n'est mesurée que par le renouvellement des contrats.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Des briefs incomplets violent l'exigence de détermination des exigences (8.2.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Les validations intermédiaires sont des de conception (8.3.4).",
        "reponse": "revues",
        "accept": [
          "revues"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "La faute d'orthographe diffusée est :",
        "reponse": "A",
        "choix": [
          "A. Une sortie non conforme (8.7)",
          "B. Une opportunité",
          "C. Un détail créatif"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "L'absence d'analyse de cause empêche l'action corrective (10.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les freelances sont des prestataires externes à évaluer (8.4).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "La satisfaction client doit être , pas seulement estimée (9.1.2).",
        "reponse": "mesurée (ou « surveillée »)",
        "accept": [
          "mesuree",
          "surveillee",
          "mesuree  ou   surveillee"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Les données de sortie de conception doivent satisfaire les d'entrée. → Réponse attendue en 1 mot : les .",
        "reponse": "exigences",
        "accept": [
          "exigences"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Se lancer sans clarifier le brief montre un manque de :",
        "reponse": "A",
        "choix": [
          "A. Revue des exigences (8.2.3)",
          "B. Leadership (5.1)",
          "C. Audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Les modifications de visuels doivent être maîtrisées (8.3.6).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c→d, C=a, A=(corrections si besoin).",
        "items": [
          "a) Valider le visuel avec le client avant diffusion",
          "b) Recevoir un brief incomplet",
          "c) Clarifier le brief avec le client",
          "d) Créer le visuel"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  },
  {
    "id": "AUD-24",
    "secteur": "Menuiserie « Bois - Noble » (artisanat)",
    "scenario": "La menuiserie « Bois-Noble » fabrique des meubles sur mesure. Les plans clients ne sont pas toujours validés par écrit avant fabrication. Le bois est stocké en extérieur sans protection, créant des déformations. Les outils de coupe ne sont pas vérifiés régulièrement. Un meuble livré présentait des éclats, mais le menuisier l'a juste « retouché » sans chercher pourquoi. Les délais promis ne sont jamais respectés, mais aucun indicateur n'est suivi. Les apprentis travaillent seuls sans supervision.",
    "questions": [
      {
        "n": 1,
        "type": "vf",
        "enonce": "Les plans doivent être validés par écrit avec le client avant fabrication (8.2.3).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 2,
        "type": "mot",
        "enonce": "Le bois mal stocké viole l'exigence de (8.5.4).",
        "reponse": "préservation",
        "accept": [
          "preservation"
        ]
      },
      {
        "n": 3,
        "type": "qcm",
        "enonce": "Les outils de coupe doivent être :",
        "reponse": "A",
        "choix": [
          "A. Vérifiés régulièrement (7.1.5)",
          "B. Ignorés tant qu'ils fonctionnent",
          "C. Changés chaque année"
        ],
        "sol": "A"
      },
      {
        "n": 4,
        "type": "vf",
        "enonce": "Retoucher sans analyser la cause est une correction, pas une action corrective.",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 5,
        "type": "vf",
        "enonce": "Les délais sont un indicateur de performance à suivre (9.1).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 6,
        "type": "mot",
        "enonce": "Les apprentis doivent être pour travailler seuls (7.2).",
        "reponse": "compétents",
        "accept": [
          "competents"
        ]
      },
      {
        "n": 7,
        "type": "ouverte",
        "enonce": "Le meuble avec éclats est une sortie non . → Réponse attendue en 1 mot.",
        "reponse": "conforme",
        "accept": [
          "conforme"
        ]
      },
      {
        "n": 8,
        "type": "qcm",
        "enonce": "Ne pas respecter les délais promis viole :",
        "reponse": "A",
        "choix": [
          "A. La maîtrise de la réalisation (8.5.1)",
          "B. La politique qualité (5.2)",
          "C. L'audit interne (9.2)"
        ],
        "sol": "A"
      },
      {
        "n": 9,
        "type": "vf",
        "enonce": "Un artisan doit aussi surveiller la satisfaction de ses clients (9.1.2).",
        "reponse": "Vrai",
        "sol": "Vrai"
      },
      {
        "n": 10,
        "type": "ordre",
        "enonce": "Ordonnez :",
        "reponse": "P=b, D=c→d, C=a, A=(livraison si conforme).",
        "items": [
          "a) Vérifier la conformité du meuble avant livraison",
          "b) Recevoir la commande client",
          "c) Valider les plans par écrit",
          "d) Fabriquer le meuble"
        ],
        "ordre": {
          "P": "b",
          "D": "c",
          "C": "a",
          "A": "d"
        }
      }
    ]
  }
];
