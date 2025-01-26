import { random } from "lodash"
import { GameState, CellState } from "./state"
import { GRID_COORDINATES } from "./constants"
import { Cell } from "./cell"

const hashGridPosition = (gridPosition: [number, number]): string => `${gridPosition[0]}.${gridPosition[1]}`

const generateCellPosition = (gameState: GameState): [number, number] => {
    const allocatedCoordinates = gameState.boardState.map(([gridPosition, cellState]) => gridPosition)
    console.log("Allocated coordinates: ", allocatedCoordinates)
    const availableCoordinates = GRID_COORDINATES.filter(gridPosition => (
        !allocatedCoordinates
            .map(hashGridPosition)
            .includes(hashGridPosition(gridPosition))
    ))

    console.log("Available coordinates: ", availableCoordinates)
    console.log("GRID COORDINATES", GRID_COORDINATES)

    const selectedCellIndex = random(0, availableCoordinates.length - 1, false)
    return availableCoordinates[selectedCellIndex]
}

const PROBABILITY_OF_A_FOUR = 0.1

const generateCellState = (): CellState => {
    const randomSample = random(0,1,true)
    return (
        randomSample > PROBABILITY_OF_A_FOUR 
            ? 2 
            : 4
    ) as CellState
}

const generateCell = (gameState: GameState): Cell => new Cell(
    generateCellPosition(gameState),
    generateCellState(),
)

export default generateCell