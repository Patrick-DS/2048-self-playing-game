import { Scene } from "phaser"
import { CellState } from "./state"
import { Channel, GAP_WIDTH, CELL_WIDTH } from "./constants"

export class Cell {
    gridPosition: [number, number]
    cellState: CellState
    channel: Channel

    constructor(
        gridPosition: [number, number],
        cellState: CellState,
    ) {
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