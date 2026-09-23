import { Link, useParams } from "react-router-dom";
import { games } from "../games/catalog";
import { GameLoader } from "@/components/GameLoader";
import { ArrowLeft } from "lucide-react";

function GamePage() {
  const { gameId } = useParams();

  const game = games.find(game => game.id === gameId);

  if (!game) {
    return (
      <main className="grid min-h-screen place-items-center bg-stone-950 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Game not found</h1>

          <Link to="/" className="mt-4 inline-block text-white/60 hover:text-white">
            ← Back to games
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-stone-950 text-white">
      <Link to="/" className="absolute top-2 left-2 p-2 bg-black/40 flex items-center justify-center rounded-full">
        <ArrowLeft size={16} color="white" />
      </Link>
      <GameLoader game={game} />
    </main>
  );
}

export default GamePage;
