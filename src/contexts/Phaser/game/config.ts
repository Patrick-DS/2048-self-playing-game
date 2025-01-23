import { MainScene } from './mainScene';
import { Types } from "phaser"

export const gameConfig: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#333333',
    transparent: true,
    scene: MainScene,
};
