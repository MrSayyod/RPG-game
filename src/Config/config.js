/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'container',
  dom: {
    createContainer: true,
  },
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};
