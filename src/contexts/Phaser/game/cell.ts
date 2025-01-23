import { Scene } from "phaser"
import { Channel, GAP_WIDTH, CELL_WIDTH } from "./constants"

export class Cell {
    gridPosition: [number, number]
    imageName: string
    channel: Channel

    constructor(
        gridPosition: [number, number],
        imageName: string,
        channel: Channel
    ) {
        this.gridPosition = gridPosition
        this.imageName = imageName
        this.channel = channel
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