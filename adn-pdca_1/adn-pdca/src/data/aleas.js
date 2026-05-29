// Cartes Aléa — 24 cartes (6 par phase) à contrainte spéciale, jouées sans indice.
// Disponibles comme données ; non distribuées dans le tirage par défaut.
// Chaque carte : { id, phase, titre, contrainte, scenario, mission, elements[], ref }.
export const ALEAS = {
  "P": [
    {
      "id": "ALA-P1",
      "phase": "P",
      "titre": "L'Accusé",
      "contrainte": "Un joueur est désigné comme responsable qualité mis en cause. Les autres joueurs forment le jury. Le jury dispose de 90 secondes pour poser deux questions courtes. L'accusé répond sans notes et sans QCM, uniquement à partir des exigences de la norme.",
      "scenario": "Lors d'un audit de renouvellement, l'auditeur externe constate que l'analyse de contexte de l'entreprise n'a pas été mise à jour depuis trois ans, alors que l'activité a doublé, qu'un concurrent majeur a disparu et qu'une nouvelle réglementation est entrée en vigueur.",
      "mission": "L'accusé doit justifier ce qui aurait dû être fait et montrer ce que la norme exige.",
      "elements": [
        "L'organisme doit tenir à jour son analyse des facteurs internes et externes.",
        "Toute évolution significative doit conduire à une révision de cette analyse.",
        "Cette compréhension sert de base à la politique qualité, aux objectifs et à la gestion des risques."
      ],
      "ref": "Article 4.1 — Compréhension de l'organisme et de son contexte."
    },
    {
      "id": "ALA-P2",
      "phase": "P",
      "titre": "Le Nouveau",
      "contrainte": "Le joueur qui répond est arrivé dans l'entreprise il y a trois jours. Il ne connaît pas les documents internes ni les habitudes locales. Il répond uniquement avec ce que demande la norme. Les autres écoutent sans aider.",
      "scenario": "Le directeur demande soudain : « On renouvelle la certification dans six semaines. Qu'est-ce qui doit absolument être défini pour que le système qualité tienne debout ? »",
      "mission": "Donner les fondations attendues en phase PLAN, sans s'appuyer sur le contexte particulier de l'entreprise.",
      "elements": [
        "Contexte interne et externe identifié.",
        "Parties intéressées pertinentes et attentes associées identifiées.",
        "Domaine d'application du SMQ défini.",
        "Processus et interactions cartographiés.",
        "Politique qualité, objectifs, risques et opportunités planifiés."
      ],
      "ref": "Articles 4.1 à 6.3 — Contexte, leadership et planification."
    },
    {
      "id": "ALA-P3",
      "phase": "P",
      "titre": "L'Avocat du Diable",
      "contrainte": "Un joueur doit défendre la mauvaise pratique décrite. Les autres ont 90 secondes pour la contredire avec des arguments ISO précis. À la fin, le groupe formule une réponse commune en une phrase. Pas de QCM.",
      "scenario": "Un directeur affirme : « Notre politique qualité, c'est \"Satisfaire nos clients\". C'est largement suffisant. Pas besoin d'objectifs chiffrés ni de plan d'action. »",
      "mission": "L'avocat du diable défend cette idée ; le groupe doit démontrer pourquoi elle est insuffisante.",
      "elements": [
        "Une politique qualité ne peut pas rester une formule vague.",
        "Elle doit fournir un cadre pour des objectifs qualité mesurables.",
        "Les objectifs doivent être suivis, planifiés et reliés à des actions concrètes."
      ],
      "ref": "Articles 5.2 et 6.2 — Politique qualité et objectifs qualité."
    },
    {
      "id": "ALA-P4",
      "phase": "P",
      "titre": "L'Analogie obligatoire",
      "contrainte": "La réponse doit commencer par une analogie de la vie quotidienne avant toute formulation technique. Le groupe vote pour valider ou non la pertinence de l'analogie. Si elle est rejetée, il faut recommencer.",
      "scenario": "Un chef de projet demande pourquoi il faut identifier les risques et les opportunités avant de lancer un nouveau projet, et ce que cela change concrètement dans le système qualité.",
      "mission": "Expliquer la logique des risques et opportunités avec une analogie mémorable, puis donner la réponse ISO.",
      "elements": [
        "Identifier les événements susceptibles d'empêcher ou de favoriser l'atteinte des résultats.",
        "Les prioriser selon leur impact et leur probabilité.",
        "Planifier des actions proportionnées et vérifier leur efficacité."
      ],
      "ref": "Article 6.1 — Actions face aux risques et opportunités."
    },
    {
      "id": "ALA-P5",
      "phase": "P",
      "titre": "Définition inversée",
      "contrainte": "Le meneur de jeu lit une définition reformulée. Le groupe doit retrouver le concept ISO exact et l'article correspondant. En cas de désaccord : débat obligatoire, moitié du groupe pour une réponse, moitié pour une autre, mise d'accord en 90 secondes, puis réponse commune. Pas de choix QCM.",
      "scenario": "« C'est le document qui dit où l'entreprise veut aller en matière de qualité, ce qu'elle promet de faire et sur quoi elle s'engage dans la durée. Il doit être cohérent avec l'activité réelle et compréhensible par tous. »",
      "mission": "Nommer le concept et citer l'article exact.",
      "elements": [
        "Concept : politique qualité.",
        "Article : 5.2.",
        "Points clés : cohérence avec le contexte et la stratégie, communication, compréhension, disponibilité."
      ],
      "ref": "Article 5.2 — Politique qualité."
    },
    {
      "id": "ALA-P6",
      "phase": "P",
      "titre": "Chaîne de mots",
      "contrainte": "Chaque joueur dit un seul mot à son tour pour construire collectivement la réponse. Si un mot est répété ou si un joueur bloque, la chaîne repart du début. Pas de QCM.",
      "scenario": "Un responsable qualité demande : « Que faut-il absolument décrire pour qu'une approche processus soit réellement opérationnelle et pas juste décorative dans un joli schéma ? »",
      "mission": "Construire une réponse collective, mot par mot, jusqu'à couvrir l'essentiel de l'exigence.",
      "elements": [
        "Identifier les processus nécessaires et leurs interactions.",
        "Définir entrées, sorties, responsables, ressources et critères de performance.",
        "Piloter, surveiller et améliorer les processus dans une logique système."
      ],
      "ref": "Article 4.4 — Système de management de la qualité et ses processus."
    }
  ],
  "D": [
    {
      "id": "ALA-D1",
      "phase": "D",
      "titre": "L'Accusé",
      "contrainte": "Un joueur est désigné comme responsable formation mis en cause. Les autres jouent le jury. Deux questions maximums, 90 secondes, réponse sans notes ni QCM.",
      "scenario": "Lors d'un audit, trois opérateurs utilisent depuis plusieurs mois une machine critique sans habilitation formelle ni évaluation documentée. Un incident qualité vient d'avoir lieu.",
      "mission": "L'accusé doit expliquer ce qui aurait dû être mis en place pour rendre la situation conforme.",
      "elements": [
        "Définir les compétences nécessaires au poste.",
        "Organiser la formation, l'accompagnement ou l'habilitation.",
        "Vérifier l'efficacité de cette montée en compétence.",
        "Conserver les preuves de compétence et d'habilitation."
      ],
      "ref": "Article 7.2 — Compétences."
    },
    {
      "id": "ALA-D2",
      "phase": "D",
      "titre": "Le Nouveau",
      "contrainte": "Le joueur qui répond vient d'arriver. Il ne connaît ni les habitudes ni les personnes. Il répond uniquement à partir des exigences normatives. Les autres n'aident pas.",
      "scenario": "Vous découvrez cinq versions différentes d'une même procédure de livraison. Chaque équipe utilise la sienne et prétend que c'est la bonne, ce qui commence à ressembler à une collection privée plus qu'à un système qualité.",
      "mission": "Expliquer par quoi commencer pour rétablir une vraie maîtrise documentaire.",
      "elements": [
        "Définir les règles de création, révision et approbation des documents.",
        "Identifier clairement la version en vigueur.",
        "Retirer ou archiver les versions obsolètes.",
        "Maîtriser la diffusion, l'accès, la lisibilité et la conservation."
      ],
      "ref": "Article 7.5 — Informations documentées."
    },
    {
      "id": "ALA-D3",
      "phase": "D",
      "titre": "L'Avocat du Diable",
      "contrainte": "Un joueur défend la mauvaise pratique. Les autres ont 90 secondes pour la contredire avec des arguments ISO précis. Le groupe conclut ensuite par une réponse commune.",
      "scenario": "Le responsable achats affirme : « Notre sous-traitant de soudure est certifié ISO 9001. Donc nous n'avons pas besoin de le surveiller, il gère cela de son côté. »",
      "mission": "Le groupe doit montrer pourquoi cette affirmation est insuffisante.",
      "elements": [
        "La certification du prestataire ne remplace pas la maîtrise exercée par l'organisme.",
        "Les exigences doivent être définies et communiquées.",
        "La performance du prestataire doit être évaluée et surveillée.",
        "La responsabilité de la conformité finale reste celle de l'organisme."
      ],
      "ref": "Article 8.4 — Maîtrise des processus, produits et services fournis par des prestataires externes."
    },
    {
      "id": "ALA-D4",
      "phase": "D",
      "titre": "L'Analogie obligatoire",
      "contrainte": "La réponse commence par une analogie de la vie quotidienne. Le groupe la valide ou la rejette. Si elle est rejetée, il faut recommencer.",
      "scenario": "Dans un centre d'appels, plusieurs conseillers considèrent que la qualité ne concerne que le responsable qualité. Ils appliquent les scripts sans se sentir concernés par les objectifs ni les impacts de leur travail.",
      "mission": "Expliquer pourquoi la sensibilisation de chacun est une exigence réelle du système qualité.",
      "elements": [
        "Chaque personne doit connaître la politique qualité et les objectifs utiles.",
        "Elle doit comprendre sa contribution aux résultats du système.",
        "Elle doit aussi percevoir les conséquences d'un non-respect des exigences."
      ],
      "ref": "Article 7.3 — Sensibilisation."
    },
    {
      "id": "ALA-D5",
      "phase": "D",
      "titre": "Experts silencieux",
      "contrainte": "Les deux joueurs les plus expérimentés du groupe ne peuvent pas parler. Les autres doivent répondre seuls. Pas de QCM.",
      "scenario": "Une entreprise de BTP confie son contrôle qualité béton à un laboratoire externe. Le client demande comment l'entreprise va garantir la qualité de cette prestation, alors que les deux experts maison ont justement perdu le droit de parler pour cette carte.",
      "mission": "Le reste du groupe doit proposer une démarche conforme de maîtrise d'un prestataire externe.",
      "elements": [
        "Définir clairement les exigences attendues.",
        "Sélectionner le prestataire selon des critères adaptés.",
        "Surveiller la prestation via contrôles, résultats, revues ou indicateurs.",
        "Réagir en cas de non-performance."
      ],
      "ref": "Article 8.4 — Maîtrise des prestataires externes."
    },
    {
      "id": "ALA-D6",
      "phase": "D",
      "titre": "Audit en langue étrangère",
      "contrainte": "Le meneur lit le scénario en anglais. La réponse peut être formulée en français. Le groupe doit comprendre la situation sans support écrit.",
      "scenario": "\"During an audit, the auditor notices that operators are using an outdated work instruction. The latest approved version was updated two months ago but never reached the production line. Three batches were produced with the wrong parameters.\"",
      "mission": "Expliquer ce qui a dysfonctionné et ce qu'il faut mettre en place.",
      "elements": [
        "La diffusion de la bonne version n'a pas été maîtrisée.",
        "Les versions obsolètes n'ont pas été retirées.",
        "Les lots concernés doivent être identifiés et traités comme non conformes si nécessaire.",
        "Une action corrective documentaire et opérationnelle doit être engagée."
      ],
      "ref": "Articles 7.5 et 8.7 — Informations documentées et maîtrise des éléments de sortie non conformes."
    }
  ],
  "C": [
    {
      "id": "ALA-C1",
      "phase": "C",
      "titre": "L'Accusé",
      "contrainte": "Un joueur est désigné comme responsable qualité mis en cause. Les autres sont le jury. Deux questions maximums, 90 secondes, réponse sans notes.",
      "scenario": "L'organisme collecte depuis trois ans des données de satisfaction client, des réclamations et des avis en ligne, mais personne ne les analyse réellement. Les chiffres dorment dans des fichiers et n'alimentent aucune décision.",
      "mission": "L'accusé doit expliquer ce qui aurait dû être fait et pourquoi la collecte seule ne suffit pas.",
      "elements": [
        "Il faut surveiller la perception du client, mais aussi exploiter cette information.",
        "Les données doivent être analysées, comparées, interprétées.",
        "Elles doivent alimenter la revue de direction et déboucher sur des décisions."
      ],
      "ref": "Articles 9.1.2, 9.1.3 et 9.3.2 — Satisfaction client, analyse et revue de direction."
    },
    {
      "id": "ALA-C2",
      "phase": "C",
      "titre": "Le Nouveau",
      "contrainte": "Le joueur qui répond a rejoint l'entreprise il y a trois jours. Il s'appuie uniquement sur la norme, sans connaissance historique de l'organisme.",
      "scenario": "Vous découvrez qu'aucun audit interne n'a été réalisé depuis deux ans, alors que l'entreprise est certifiée. L'ancien responsable qualité disait simplement que tout roulait très bien, ce qui n'est pas une méthode d'audit reconnue.",
      "mission": "Expliquer ce qu'est un audit interne, pourquoi il est nécessaire et comment le structurer.",
      "elements": [
        "L'audit interne vérifie la conformité et l'efficacité du système.",
        "Il doit être programmé selon les risques, les résultats et l'importance des processus.",
        "Les auditeurs doivent être compétents et impartiaux.",
        "Les constats doivent donner lieu à un suivi."
      ],
      "ref": "Article 9.2 — Audit interne."
    },
    {
      "id": "ALA-C3",
      "phase": "C",
      "titre": "L'Avocat du Diable",
      "contrainte": "Un joueur défend la mauvaise pratique. Les autres ont 90 secondes pour démonter l'argumentaire. Le groupe formule ensuite une réponse commune.",
      "scenario": "Un directeur affirme : « Notre taux de réclamations est très faible. Donc nos indicateurs sont bons. Pas besoin d'analyse complémentaire ni de revue de direction détaillée. »",
      "mission": "Le groupe doit démontrer pourquoi cette lecture est insuffisante.",
      "elements": [
        "Un indicateur isolé ne suffit pas à piloter le système.",
        "Il faut analyser les tendances, les écarts et croiser les données.",
        "Les résultats doivent nourrir la revue de direction et la prise de décision."
      ],
      "ref": "Articles 9.1.3 et 9.3 — Analyse, évaluation et revue de direction."
    },
    {
      "id": "ALA-C4",
      "phase": "C",
      "titre": "L'Analogie obligatoire",
      "contrainte": "La réponse doit commencer par une analogie. Le groupe vote pour la valider. Si elle ne fonctionne pas, une autre analogie doit être proposée.",
      "scenario": "Un manager demande si la revue de direction n'est finalement qu'une réunion annuelle un peu solennelle avec café tiède, diaporama optimiste et vague promesse de s'améliorer plus tard.",
      "mission": "Expliquer à quoi sert réellement la revue de direction, ce qu'elle doit contenir et ce qu'elle doit produire.",
      "elements": [
        "La revue de direction est un outil de pilotage stratégique du SMQ.",
        "Elle doit intégrer des entrées structurées : performances, satisfaction, audits, contexte, risques, actions précédentes.",
        "Elle doit déboucher sur des décisions, actions et besoins en ressources."
      ],
      "ref": "Article 9.3 — Revue de direction."
    },
    {
      "id": "ALA-C5",
      "phase": "C",
      "titre": "Définition inversée",
      "contrainte": "Une définition reformulée est lue. Le groupe doit retrouver le concept et l'article. En cas de désaccord, débat obligatoire en deux camps, accord final en 90 secondes, puis réponse commune.",
      "scenario": "« C'est une vérification organisée, indépendante et planifiée qui sert à confirmer que ce qui doit être fait est bien fait, et que cela fonctionne de manière efficace. »",
      "mission": "Identifier le concept et l'article correspondant.",
      "elements": [
        "Concept : audit interne.",
        "Article : 9.2.",
        "Mots-clés : programme, impartialité, critères, méthodes, résultats, suivi."
      ],
      "ref": "Article 9.2 — Audit interne."
    },
    {
      "id": "ALA-C6",
      "phase": "C",
      "titre": "Experts silencieux",
      "contrainte": "Les deux joueurs les plus expérimentés n'ont pas le droit de parler. Les autres doivent répondre seuls.",
      "scenario": "Une chaîne hôtelière reçoit des avis clients très contrastés selon ses établissements. Le siège veut mettre en place une surveillance cohérente de la satisfaction à l'échelle du réseau, sans se contenter de lire les commentaires comme on lit l'horoscope.",
      "mission": "Construire un dispositif de suivi de la satisfaction client conforme aux exigences ISO.",
      "elements": [
        "Définir les méthodes de collecte pertinentes.",
        "Fixer des indicateurs communs et une fréquence d'analyse.",
        "Attribuer les responsabilités d'analyse et d'exploitation.",
        "Utiliser les résultats pour agir et piloter le système."
      ],
      "ref": "Articles 9.1.2 et 9.1.3 — Satisfaction client, analyse et évaluation."
    }
  ],
  "A": [
    {
      "id": "ALA-A1",
      "phase": "A",
      "titre": "L'Accusé",
      "contrainte": "Un joueur est désigné comme responsable qualité mis en cause. Les autres constituent le jury. Deux questions, 90 secondes, réponse sans notes ni QCM.",
      "scenario": "La même erreur de dosage s'est reproduite cinq fois en huit mois. À chaque fois, l'équipe a corrigé le lot concerné, puis a repris le travail comme si de rien n'était. L'auditeur constate qu'aucune action corrective n'a été formalisée.",
      "mission": "Expliquer ce qui aurait dû être fait au-delà de la simple correction.",
      "elements": [
        "La correction traite l'effet immédiat.",
        "L'action corrective vise la cause racine pour éviter la répétition.",
        "Il faut enregistrer, analyser, agir, vérifier l'efficacité et tracer les décisions."
      ],
      "ref": "Article 10.2 — Non-conformité et action corrective."
    },
    {
      "id": "ALA-A2",
      "phase": "A",
      "titre": "Le Nouveau",
      "contrainte": "Le joueur qui répond vient d'arriver dans l'entreprise. Il ne se base que sur la norme.",
      "scenario": "L'entreprise est certifiée depuis sept ans, mais aucune démarche d'amélioration continue n'est structurée. Pas de plan, peu d'exploitation des audits, des réclamations ou des idées terrain.",
      "mission": "Expliquer ce qu'exige la norme en matière d'amélioration continue et par quoi commencer.",
      "elements": [
        "L'amélioration continue est une exigence du SMQ.",
        "Elle doit s'appuyer sur les résultats, audits, réclamations, analyses et revues.",
        "Les actions doivent être décidées, mises en œuvre, suivies et évaluées."
      ],
      "ref": "Articles 10.1 et 10.3 — Généralités amélioration et amélioration continue."
    },
    {
      "id": "ALA-A3",
      "phase": "A",
      "titre": "L'Avocat du Diable",
      "contrainte": "Un joueur défend la mauvaise pratique. Les autres ont 90 secondes pour la contredire avec précision. Le groupe conclut par une réponse commune.",
      "scenario": "Après un audit interne, sept écarts sont relevés. Le directeur qualité déclare : « On corrige chaque écart au fur et à mesure, donc tout va bien. Pas besoin d'analyser les causes profondes pour de petits problèmes. »",
      "mission": "Montrer pourquoi cette logique est insuffisante.",
      "elements": [
        "Corriger un écart ne suffit pas toujours.",
        "Il faut évaluer la nécessité d'une action corrective pour éviter la répétition.",
        "L'analyse de cause et la vérification d'efficacité sont des étapes clés."
      ],
      "ref": "Article 10.2 — Non-conformité et action corrective."
    },
    {
      "id": "ALA-A4",
      "phase": "A",
      "titre": "L'Analogie obligatoire",
      "contrainte": "La réponse commence obligatoirement par une analogie. Le groupe la valide ou non.",
      "scenario": "Un salarié propose une idée simple pour améliorer l'organisation du flux de production. Son responsable répond : « On ne touche à rien, ça évite les surprises. »",
      "mission": "Expliquer pourquoi une opportunité d'amélioration mérite d'être étudiée et comment le système qualité doit la traiter.",
      "elements": [
        "Le système qualité ne sert pas seulement à corriger, mais aussi à progresser.",
        "Les opportunités d'amélioration doivent être identifiées, évaluées et, si pertinent, mises en œuvre.",
        "L'amélioration continue concerne les processus, les produits et le SMQ lui-même."
      ],
      "ref": "Articles 10.1 et 10.3 — Amélioration et amélioration continue."
    },
    {
      "id": "ALA-A5",
      "phase": "A",
      "titre": "Définition inversée",
      "contrainte": "Une définition est lue. Le groupe doit retrouver le concept ISO et son article. En cas de désaccord, débat obligatoire en deux camps, 90 secondes pour s'accorder, puis réponse commune.",
      "scenario": "« Ce sont les actions menées non seulement pour réparer le problème observé, mais surtout pour empêcher qu'il revienne plus tard en traitant sa cause réelle. »",
      "mission": "Nommer le concept et l'article correspondant.",
      "elements": [
        "Concept : action corrective.",
        "Article : 10.2.",
        "Distinction à rappeler : la correction traite l'effet, l'action corrective traite la cause."
      ],
      "ref": "Article 10.2 — Non-conformité et action corrective."
    },
    {
      "id": "ALA-A6",
      "phase": "A",
      "titre": "Experts silencieux",
      "contrainte": "Les deux joueurs les plus expérimentés ne peuvent pas parler. Les autres doivent répondre seuls.",
      "scenario": "Un organisme de formation sort d'un audit interne avec plusieurs pistes d'amélioration et deux non-conformités documentaires. La revue de direction approche. Les experts du groupe se taisent ; les autres doivent expliquer comment transformer ces constats en vraie dynamique de progrès.",
      "mission": "Montrer comment traiter les résultats et les intégrer à l'amélioration du système.",
      "elements": [
        "Les non-conformités doivent être traitées avec une logique corrective adaptée.",
        "Les pistes d'amélioration doivent être priorisées et planifiées.",
        "Ces éléments doivent alimenter la revue de direction.",
        "Des décisions, actions et suivis doivent être formalisés."
      ],
      "ref": "Articles 10.2, 10.3 et 9.3 — Action corrective, amélioration continue et revue de direction."
    }
  ]
};

export default ALEAS;
