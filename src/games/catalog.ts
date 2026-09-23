import type { GameDefinition } from "./types";

export const games: GameDefinition[] = [
  {
    id: "kodewords",
    name: "KodeWords",
    description: "A fast-paced word guessing party game.",
    thumbnail: "/games/kodewords/thumbnail.jpeg",
    type: "html5",
    url: "https://kodewords.pages.dev",
  },

  {
    id: "momo-mafia",
    name: "Momo Mafia",
    description: "A bluffing and deduction party game.",
    thumbnail: "/games/momo-mafia/thumbnail.webp",
    type: "html5",
    url: "https://games.sanketlamsal.com.np/momo-mafia/",
  },
];
