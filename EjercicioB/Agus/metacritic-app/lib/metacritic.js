// mockGames.js
export async function getLatestGames() {
  // Simulamos un fetch con datos artificiales
  return [
    {
      slug: "elden-ring",
      title: "Elden Ring",
      description: "Un RPG de mundo abierto desarrollado por FromSoftware.",
      releaseDate: "2022-02-25",
      score: 95,
      image: "https://placehold.co/300x400?text=Elden+Ring",
    },
    {
      slug: "zelda-totk",
      title: "Zelda: Tears of the Kingdom",
      description: "La esperada secuela de Breath of the Wild.",
      releaseDate: "2023-05-12",
      score: 96,
      image: "https://placehold.co/300x400?text=Zelda+TOTK",
    },
    {
      slug: "god-of-war-ragnarok",
      title: "God of War: Ragnarok",
      description: "Kratos y Atreus enfrentan el fin de los tiempos.",
      releaseDate: "2022-11-09",
      score: 94,
      image: "https://placehold.co/300x400?text=GoW+Ragnarok",
    },
    {
      slug: "hades",
      title: "Hades",
      description: "Un roguelike mitológico con acción frenética.",
      releaseDate: "2020-09-17",
      score: 93,
      image: "https://placehold.co/300x400?text=Hades",
    },
    {
      slug: "cyberpunk-2077",
      title: "Cyberpunk 2077",
      description: "Un futuro distópico lleno de acción y caos.",
      releaseDate: "2020-12-10",
      score: 78,
      image: "https://placehold.co/300x400?text=Cyberpunk+2077",
    },
    {
      slug: "the-witcher-3",
      title: "The Witcher 3: Wild Hunt",
      description: "La épica aventura de Geralt de Rivia.",
      releaseDate: "2015-05-19",
      score: 92,
      image: "https://placehold.co/300x400?text=Witcher+3",
    },
    {
      slug: "red-dead-2",
      title: "Red Dead Redemption 2",
      description: "Un western inmersivo con narrativa profunda.",
      releaseDate: "2018-10-26",
      score: 97,
      image: "https://placehold.co/300x400?text=RDR2",
    },
    {
      slug: "super-mario-odyssey",
      title: "Super Mario Odyssey",
      description: "Mario explora mundos increíbles con Cappy.",
      releaseDate: "2017-10-27",
      score: 97,
      image: "https://placehold.co/300x400?text=Mario+Odyssey",
    },
    {
      slug: "hollow-knight",
      title: "Hollow Knight",
      description: "Una aventura metroidvania en el reino de Hallownest.",
      releaseDate: "2017-02-24",
      score: 90,
      image: "https://placehold.co/300x400?text=Hollow+Knight",
    },
    {
      slug: "doom-eternal",
      title: "DOOM Eternal",
      description: "Acción frenética contra hordas demoníacas.",
      releaseDate: "2020-03-20",
      score: 88,
      image: "https://placehold.co/300x400?text=DOOM+Eternal",
    },
    {
      slug: "persona-5",
      title: "Persona 5",
      description: "Un JRPG con estilo único y narrativa envolvente.",
      releaseDate: "2016-09-15",
      score: 93,
      image: "https://placehold.co/300x400?text=Persona+5",
    },
    {
      slug: "minecraft",
      title: "Minecraft",
      description: "Construye, explora y sobrevive en mundos infinitos.",
      releaseDate: "2011-11-18",
      score: 91,
      image: "https://placehold.co/300x400?text=Minecraft",
    },
    {
      slug: "fortnite",
      title: "Fortnite",
      description: "Battle Royale con construcción y acción constante.",
      releaseDate: "2017-07-21",
      score: 80,
      image: "https://placehold.co/300x400?text=Fortnite",
    },
    {
      slug: "league-of-legends",
      title: "League of Legends",
      description: "El MOBA más popular del mundo.",
      releaseDate: "2009-10-27",
      score: 85,
      image: "https://placehold.co/300x400?text=LoL",
    },
    {
      slug: "apex-legends",
      title: "Apex Legends",
      description: "Battle Royale con héroes únicos y acción rápida.",
      releaseDate: "2019-02-04",
      score: 89,
      image: "https://placehold.co/300x400?text=Apex+Legends",
    },
  ];
}

export async function getGameDetails(slug) {
  // Datos artificiales de detalle
  const details = {
    "elden-ring": {
      img: "https://placehold.co/600x400?text=Elden+Ring",
      title: "Elden Ring",
      slug: "elden-ring",
      description: "Explora las Tierras Intermedias en un vasto mundo abierto.",
      score: 95,
      reviews: [
        { quote: "Una obra maestra", score: 10, date: "2022-02-25", publicationName: "IGN", author: "John Doe" },
        { quote: "El mejor RPG moderno", score: 9.5, date: "2022-02-26", publicationName: "GameSpot", author: "Jane Smith" },
      ],
    },
    "zelda-totk": {
      img: "https://placehold.co/600x400?text=Zelda+TOTK",
      title: "Zelda: Tears of the Kingdom",
      slug: "zelda-totk",
      description: "Una aventura épica en el cielo y la tierra de Hyrule.",
      score: 96,
      reviews: [
        { quote: "Supera a Breath of the Wild", score: 10, date: "2023-05-12", publicationName: "Polygon", author: "Alice" },
      ],
    },
  };

  return details[slug] || null;
}
