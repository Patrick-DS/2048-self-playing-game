import { createContext } from "react";
import { Game } from "phaser"
import { GameState } from "@/types"

interface GameContext {
    game: Game | null;
    gameState: GameState | null;
    updateGameState: (newState: Partial<GameState>) => void;
}

const ConversationContext = createContext<GameContext>({
  game: null,
  gameState: null,
  updateGameState: () => {}
});

export default ConversationContext;
