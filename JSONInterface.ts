interface Actor {
  name: string;
  age: number;
}

interface Show {
  title: string;
  seasons: number;
  episodes: number;
  genre: string;
  actors: Actor[];
}

const breakingBad: Show = {
  title: "Breaking Bad",
  seasons: 5,
  episodes: 62,
  genre: "Crime drama",
  actors: [
    {
      name: "Bryan Cranston",
      age: 67,
    },
    {
      name: "Aaron Paul",
      age: 44,
    },
  ],
};
