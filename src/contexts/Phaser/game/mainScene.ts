import { GameState } from "@/types"

export class MainScene extends Phaser.Scene {
  private updateGameState?: (newState: Partial<GameState>) => void

  constructor() {
    super({ key: "MainScene" })
  }

  preload() {
    this.load.image("demo", "/demo.png")
  }

  init(data: { updateGameState: (newState: Partial<GameState>) => void }): void {
    this.updateGameState = data.updateGameState
  }

  create(): void {
    // Example of updating game state from within Phaser
    // We just try to render demo.png
    this.add.sprite(0, 0, "demo").setOrigin(0, 0)
  }
}
