import { Route, Routes } from "react-router-dom";
import GamePage from "@/pages/GamePage";
import HomePage from "@/pages/HomePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/games/:gameId" element={<GamePage />} />
    </Routes>
  );
}
