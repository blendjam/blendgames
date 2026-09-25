import { useEffect, useState } from "react";
import type { GameDefinition } from "./types";

const GAMES_URL = "https://games.sanketlamsal.com.np/games.json";
export const defaultGames: GameDefinition[] = [
  {
    id: "kodewords",
    name: "KodeWords",
    description: "A fast-paced word guessing party game.",
    thumbnail: "https://games.sanketlamsal.com.np/kodewords-thumbnail.png",
    launchMode: "redirect",
    url: "https://kodewords.pages.dev",
  },
];

export function useGames(): GameDefinition[] {
  const [games, setGames] = useState<GameDefinition[]>(defaultGames);

  useEffect(() => {
    let cancelled = false;
    async function fetchGames() {
      try {
        const res = await fetch(GAMES_URL);
        if (!res.ok) {
          throw new Error(`Failed to fetch games: ${res.status}`);
        }
        const data: GameDefinition[] = await res.json();
        if (!cancelled) {
          setGames(data);
        }
      } catch (err) {
        console.log("Unable to fetch games", err);
        if (!cancelled) {
          setGames(defaultGames);
        }
      }
    }

    fetchGames();

    return () => {
      cancelled = true;
    };
  }, []);

  return games;
}
