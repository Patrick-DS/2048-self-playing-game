import { GameState } from "@/types"
import { Channel, GRID_COORDINATES } from "./constants"
import { Cell } from "./cell"
import { CellState } from "@/types/phaser"


export class MainScene extends Phaser.Scene {
  private updateGameState?: (newState: Partial<GameState>) => void

  constructor() {
    super({ key: "MainScene" })
  }

  init(data: { updateGameState: (newState: Partial<GameState>) => void }): void {
    this.updateGameState = data.updateGameState
  }

  preload() {
    // Load background image
    this.load.image("background", "/background.png")
    // Load background cell image
    this.load.image("cell", "/cell.png")

    // Load all game cell images
    const cellValues = [2,4,8,16,32,64,128,256,512,1024,2048] 
    cellValues.forEach(cellValue => {
        this.load.image(`${cellValue}-cell`, `/${cellValue}-cell.png`)
    })
  }

  create(): void {
    // Example of updating game state from within Phaser
    // We just try to render demo.png
    this.createBackgroundSprites()

    GRID_COORDINATES.filter((_, index) => index < 11).forEach(
        ([x,y], index) => {
            const gameCell = new Cell(
              [x,y],
              2**(index % 11 +1) as CellState,
              Channel.GAME_CELL
            )
            gameCell.render(this)
    })
  }

  createBackgroundSprites() {
    this.add
        .sprite(0, 0, "background")
        .setOrigin(0, 0)
        .setDepth(Channel.BACKGROUND)

    GRID_COORDINATES.forEach(gridPosition => {
        const cell = new Cell(
          gridPosition,
          null,
          Channel.BACKGROUND_CELL,
      )
        cell.render(this)
    })
  }
}
