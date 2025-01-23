import { GameState } from "@/types"

export class MainScene extends Phaser.Scene {
    private updateGameState?: (newState: Partial<GameState>) => void;

    constructor() {
        super({ key: 'MainScene' });
    }

    init(data: { updateGameState: (newState: Partial<GameState>) => void }): void {
        this.updateGameState = data.updateGameState;
    }

    create(): void {
        // Example of updating game state from within Phaser
        // const sprite = this.add.sprite(400, 300, 'your-sprite');
        // sprite.setInteractive();
        
        // sprite.on('pointerdown', () => {
        //     if (this.updateGameState) {
        //         const currentScore = this.game.registry.get('score') as number;
        //         this.updateGameState({ score: currentScore + 10 });
        //     }
        // });
    }
}