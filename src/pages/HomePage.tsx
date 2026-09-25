import { useGames } from "@/games/useGames";
import { GameGrid } from "../components/GameGrid";

export function HomePage() {
  const games = useGames();
  return (
    <main className="min-h-screen bg-stone-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/50">Party Games</p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Choose a game.</h1>

          <p className="mt-4 max-w-xl text-white/60">Multiplayer games to play together.</p>
        </header>

        <GameGrid games={games} />
      </div>
    </main>
  );
}

export default HomePage;
