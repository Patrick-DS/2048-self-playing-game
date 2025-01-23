import { MainScene } from './mainScene';
import { Types } from "phaser"

export const gameConfig: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    scene: MainScene,
};
