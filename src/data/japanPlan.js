export const itineraryPhases = [
  {
    id: 'tokyo',
    title: 'Tokyo (J1 → J6)',
    vibe: 'Base urbaine et acclimatation',
    nights: 6,
    transport: 'Suica / métro',
    rationale: 'On démarre par Tokyo pour absorber le décalage horaire sans pression, tout en gardant des activités iconiques à portée de transport.',
    highlights: [
      'Shibuya sunset + Shibuya Sky',
      'Harajuku, Omotesando et vintage luxe',
      'Akihabara, Nakano Broadway, Golden Gai',
      'Atelier bagues + Shimokitazawa + Omoide Yokocho',
      'Musée Ghibli + Inokashira',
      'Excursion journée à Nikko'
    ]
  },
  {
    id: 'fuji-hakone',
    title: 'Fuji & Hakone (J7 → J9)',
    vibe: 'Respiration nature + onsen',
    nights: 3,
    transport: 'Voiture',
    rationale: 'Après 6 jours denses, on bascule vers un tempo plus lent : paysages, sources chaudes et routes secondaires pour éviter les foules.',
    highlights: [
      'Kawaguchiko et ryokan vue Fuji',
      'Oshino Hakkai tôt matin',
      'Hakone Open Air Museum',
      'Téléphérique volcanique + repos onsen'
    ]
  },
  {
    id: 'tohoku',
    title: 'Tohoku (J10 → J11)',
    vibe: 'Parenthèse brute',
    nights: 1,
    transport: 'Shinkansen + ferry',
    rationale: 'Le détour Sendai/Tashirojima casse le rythme touristique classique et apporte une ambiance minimaliste, très différente de Tokyo/Kansai.',
    highlights: [
      'Train vers Sendai',
      'Ferry vers Tashirojima',
      'Retour via Matsushima'
    ]
  },
  {
    id: 'kyoto',
    title: 'Kyoto & Nara (J12 → J15)',
    vibe: 'Patrimoine et spiritualité',
    nights: 4,
    transport: 'Trains locaux + vélo',
    rationale: 'Kyoto est placée après Tohoku pour rebasculer sur le Japon classique, avec des visites tôt le matin et des fins de journée à Pontocho.',
    highlights: [
      'Fushimi Inari à l’aube',
      'Philosopher’s Path',
      'Arashiyama hors sentiers',
      'Otagi Nenbutsu-ji',
      'Excursion Nara : Tosho Daiji, Kinpusenji, Okadera, Hasedera'
    ]
  },
  {
    id: 'osaka',
    title: 'Osaka (J16 → J18)',
    vibe: 'Énergie urbaine et fun',
    nights: 3,
    transport: 'Métro + train',
    rationale: 'On garde Osaka après Kyoto pour rester logique géographiquement dans le Kansai, puis on place USJ au milieu pour gérer la fatigue.',
    highlights: [
      'Shinsekai + Amerikamura',
      'Shinsaibashi vintage luxe',
      'USJ + Super Nintendo World',
      'Dotonbori de nuit'
    ]
  },
  {
    id: 'ghibli-alps',
    title: 'Ghibli Park & Alpes (J19 → J21)',
    vibe: 'Final cinématographique et montagne',
    nights: 3,
    transport: 'Voiture',
    rationale: 'On clôture par Ghibli Park puis la vallée de Kiso/Takayama pour finir sur un Japon traditionnel et apaisé avant le retour.',
    highlights: [
      'Ghibli Park',
      'Magome & Tsumago',
      'Takayama vieille ville',
      'Ryokan campagne'
    ]
  }
]

export const reservationCritical = [
  { item: 'Musée Ghibli', timing: '2 mois avant (ouverture le 10 du mois)', priority: 'Très haute' },
  { item: 'USJ + Super Nintendo World', timing: '2 mois avant', priority: 'Très haute' },
  { item: 'Ryokan onsen (Fuji/Hakone + Alpes)', timing: '6 à 10 semaines avant', priority: 'Haute' },
  { item: 'Voiture (2 segments)', timing: '4 à 8 semaines avant', priority: 'Haute' }
]
