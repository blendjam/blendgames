export type GameLaunchMode = "redirect" | "iframe";

export type GameDefinition = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  launchMode: GameLaunchMode;
  url: string;
};
