import type { GameDefinition } from "@/games/types";
import { useEffect } from "react";

export function GameLoader({ game }: { game: GameDefinition }) {
  useEffect(() => {}, [game]);

  if (game.launchMode === "iframe") {
    return <iframe title={game.name} src={game.url} className="h-screen w-full border-0" allow="fullscreen" />;
  }
}
