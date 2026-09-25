import type { GameDefinition } from "@/games/types";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type GameCardProps = {
  game: GameDefinition;
};

export function GameCard({ game }: GameCardProps) {
  const navigate = useNavigate();

  const handleGameClick = () => {
    if (game.launchMode === "redirect") {
      window.location.href = game.url;
    } else if (game.launchMode === "iframe") {
      navigate(`/games/${game.id}`);
    }
  };

  return (
    <button
      onClick={handleGameClick}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="aspect-video overflow-hidden bg-white/5">
        <img
          src={game.thumbnail}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold">{game.name}</h2>

        <p className="mt-2 text-sm text-white/50">{game.description}</p>

        <div className="mt-5 text-sm font-medium flex gap-2 items-center ">
          <span>Play</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </button>
  );
}
