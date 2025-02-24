// Importamos las escenas
import BootScene from './scenes/boot-scene.js';
import MenuScene from './scenes/menu-scene.js';
import DecisionScene from './scenes/decision-scene.js';
import BoicotScene from './scenes/boicot-scene.js';
import SutilScene from './scenes/sutil-scene.js';
import EndScene from './scenes/end-scene.js';

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  scene: [BootScene, MenuScene, DecisionScene, BoicotScene, SutilScene, EndScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  }
};

const game = new Phaser.Game(config);
