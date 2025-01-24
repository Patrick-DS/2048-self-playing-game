export type CellState = 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048
export type GridPosition = [number, number]
export type BoardState = [GridPosition, CellState][]

export interface GameState {
    currentBoardState: BoardState
    targetBoardState: BoardState
    isAnimating: boolean
}

export const createEmptyBoardState = (): GameState => ({
    currentBoardState: [],
    targetBoardState: [],
    isAnimating: false,
})