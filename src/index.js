import 'phaser'
import sky from './assets/sky.png'
import ground from './assets/platform.png'
// import sky from './assets/sky.png'
// import sky from './assets/sky.png'
// import sky from './assets/sky.png'

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
},
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let platforms
let game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', sky);
  this.load.image('ground', ground);
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
  this.add.image(400, 300, 'sky');
  platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
}

function update ()
{
}