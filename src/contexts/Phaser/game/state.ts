export type CellState = 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048
export type GridPosition = [number, number]
export type BoardState = [GridPosition, CellState][]

export interface GameState {
    boardState: BoardState
}

export const initGameState = (): GameState => ({
    boardState: []
})  