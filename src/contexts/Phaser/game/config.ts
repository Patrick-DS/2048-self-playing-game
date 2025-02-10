import { MainScene } from './mainScene';
import { Types } from "phaser"

export const gameConfig: Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 800,
    backgroundColor: '#333333',
    transparent: true,
    scene: MainScene,
    // Do not specify parent property
    // We take care of this in src/contexts/Phaser/provider.tsx
};
