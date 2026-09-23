import type { GameDefinition } from "../games/types";

type GameLoaderProps = {
  game: GameDefinition;
};

export function GameLoader({ game }: GameLoaderProps) {
  if (game.type === "html5") {
    return <iframe title={game.name} src={game.url} className="h-screen w-full border-0" allow="fullscreen" />;
  }

  return null;
}
