import { ReactNode, FC, useRef, useState, useEffect } from "react"
import GameContext from "./context"
import { Game } from "phaser"
import { GameState, createEmptyBoardState } from "@/types"
import { gameConfig } from "./game/config"

interface GameProviderProps {
  readonly children?: ReactNode
}

const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const gameRef = useRef<HTMLDivElement>(null)
  const [game, setGame] = useState<Game | null>(null)
  const [gameState, setGameState] = useState<GameState>(createEmptyBoardState)

  useEffect(() => {
    if (gameRef.current && !game && !gameRef.current.querySelector("canvas")) {
      const newGame = new Game({
        ...gameConfig,
        parent: gameRef.current,
      })
      setGame(newGame)
    }

    return () => {
      if (game) {
        game.destroy(true)
      }
    }
  }, [gameRef, game])

  const gameContext = {
    game,
    gameState,
    updateGameState: () => {
      setGameState({ ...gameState })
    },
  }

  return (
    <GameContext.Provider value={gameContext}>
      <div ref={gameRef} id="game-content" />
      {children}
    </GameContext.Provider>
  )
}

export default GameProvider
