import 'phaser';
 
export default {
  type: Phaser.AUTO,
  parent: 'container',
  dom: {
    createContainer: true
  },
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  }
  // scene: {
  //   preload: preload,
  //   create: create,
  //   update: update
  // }
};
