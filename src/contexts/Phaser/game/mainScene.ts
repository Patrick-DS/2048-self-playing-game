import { Types } from "phaser"
import { Channel, GRID_COORDINATES, GAP_WIDTH, CELL_WIDTH } from "./constants"
import { GameState, initGameState } from "./state"
import generateCell from "./cellGenerator"

export class MainScene extends Phaser.Scene {
  gameState: GameState
  cursors: Types.Input.Keyboard.CursorKeys | undefined;

  constructor() {
    super({ key: "MainScene" })
    
    this.gameState = initGameState()
  }

  init(data: { updateGameState: (newState: Partial<GameState>) => void }): void {

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
    this.startGame()
    this.initArrowKeyCursors()
  }

  startGame() {
    ["", ""].forEach(() => { this.addCell() }) 
  }

  addCell() {
    const newCell = generateCell(this.gameState)
    console.log([newCell.gridPosition, newCell.cellState])
    this.gameState.boardState.push([newCell.gridPosition, newCell.cellState])
    newCell.render(this)
  }

  createBackgroundSprites() {
    // Add grid background
    this.add
        .sprite(0, 0, "background")
        .setOrigin(0, 0)
        .setDepth(Channel.BACKGROUND)

    // Add background cells
    GRID_COORDINATES.forEach(gridPosition => {
      const [x,y] = gridPosition
      this.add
        .sprite(
            GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*y,
            GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*x,
            "cell",
        )
        .setOrigin(0,0)
        .setDepth(Channel.BACKGROUND_CELL)
    })
  }

  initArrowKeyCursors() {
    // Initialize cursor keys
    this.cursors = this.input.keyboard!.createCursorKeys();

    // Set up event listeners for each arrow key
    ["LEFT", "RIGHT", "UP", "DOWN"].forEach(direction => {
      this.input.keyboard!.on(`keydown-${direction}`, () => {
          console.log(`CLICKED ${direction}`);
          this.addCell()
      })
    })
  }
}
