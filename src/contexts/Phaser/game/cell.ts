import { Scene } from "phaser"
import { v4 as uuid } from "uuid"
import { CellState, GridPosition } from "./types"
import { Channel, GAP_WIDTH, CELL_WIDTH } from "./constants"

export class Cell {
    id: string
    gridPosition: GridPosition
    cellState: CellState
    channel: Channel

    constructor(
        gridPosition: GridPosition,
        cellState: CellState,
    ) {
        this.id = uuid()
        this.gridPosition = gridPosition
        this.cellState = cellState
        this.channel = Channel.GAME_CELL
    }

    get imageName() {
        return `${this.cellState}-cell`
    }

    render(surface: Scene) {
        const [x,y] = this.gridPosition
        surface.add
            .sprite(
                GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*y,
                GAP_WIDTH + (CELL_WIDTH + GAP_WIDTH)*x,
                this.imageName,
            )
            .setOrigin(0,0)
            .setDepth(this.channel)
    }
}