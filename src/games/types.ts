export type GameType = "react" | "html5";

export type GameDefinition = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  type: GameType;
  // Where the actual game is hosted
  url: string;
};
