import { GameState } from "@/types"

enum Channels {
    BACKGROUND = 0,
    CELLS = 1,
    NUMBER_CELLS = 2,
}

const GAP_WIDTH = 20
const CELL_WIDTH = 175

export class MainScene extends Phaser.Scene {
  private updateGameState?: (newState: Partial<GameState>) => void

  constructor() {
    super({ key: "MainScene" })
  }

  preload() {
    this.load.image("cell", "/cell.png")
    this.load.image("background", "/background.png")
    const cellValues = [2,4,8,16,32,64,128,256,512,1024,2048] 
    cellValues.forEach(cellValue => {
        this.load.image(`${cellValue}-cell`, `/${cellValue}-cell.png`)
    })
  }

  init(data: { updateGameState: (newState: Partial<GameState>) => void }): void {
    this.updateGameState = data.updateGameState
  }

  create(): void {
    // Example of updating game state from within Phaser
    // We just try to render demo.png
    this.add
        .sprite(0, 0, "background")
        .setOrigin(0, 0)
        .setDepth(Channels.BACKGROUND)
    
    const coordinates: [number,number][] = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,1],[1,2],[1,3],[2,0],[2,1],[2,2],[2,3],[3,0],[3,1],[3,2],[3,3]]
    coordinates.forEach(
        ([x,y], index) => {
        this.add
            .sprite(
                GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*y,
                GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*x,
                index < 11 ? `${2**(index % 11 +1)}-cell` : "cell",
            )
            .setOrigin(0,0)
            .setDepth(Channels.CELLS)
    })
  }
}
