import type { GameDefinition } from "@/games/types";
import { GameCard } from "./GameCard";

type GameGridProps = {
  games: GameDefinition[];
};

export function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
