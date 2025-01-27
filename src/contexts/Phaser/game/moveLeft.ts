import { range } from "lodash"
import { BoardState } from "./state";
import { Cell } from "./cell";
import { GridPosition } from "./types";

export interface Movement {
    cellId: string
    originalGridPosition: GridPosition
    newGridPosition: GridPosition
}

export const getLeftMovements = (boardState: BoardState): Movement[] => {
    const movements: Movement[] = [] 
    const cellRows = range(4).map((rowIndex: number) => (
        boardState
            .filter((cell: Cell) => cell.gridPosition[0] == rowIndex)
    ))
    
    cellRows.forEach((cellRow: Cell[]) => {
        cellRow.forEach((cell: Cell, columnIndex: number) => {
            movements.push({
                cellId: cell.id,
                originalGridPosition: cell.gridPosition,
                newGridPosition: [cell.gridPosition[0], columnIndex]
            })
        })
    })

    return movements
}