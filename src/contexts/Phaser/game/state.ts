import { Cell } from "./cell"

export type BoardState = Cell[]

export interface GameState {
    boardState: BoardState
}

export const initGameState = (): GameState => ({
    boardState: []
})  