export interface GameState {
    score: number;
    level: number;
}

export const initGameState = (): GameState => ({
    score: 0,
    level: 1,
})