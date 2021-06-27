import 'phaser';
import blue_button_02 from '../assets/ui/blue_button02.png'
import blue_button_03 from '../assets/ui/blue_button03.png'
import bomb from '../assets/bomb.png'
import phaserLogo from '../assets/logo.png'
import sky from '../assets/sky.png'
import ground from '../assets/platform.png'
import starObject from '../assets/star.png'
import grey_box from '../assets/ui/grey_box.png'
import checked_box from '../assets/ui/blue_boxCheckmark.png'
import playerObject from '../assets/dude.png'
import bgMusic from '../assets/TownTheme.mp3'

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init () {
    this.readyCount = 0;
  }

  preload() {

    
    // add logo image
    this.add.image(400, 200, 'logo');

    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    // remove progress bar when complete
this.load.on('complete', function () {
  progressBar.destroy();
  progressBox.destroy();
  loadingText.destroy();
  percentText.destroy();
  assetText.destroy();
  this.ready();
}.bind(this));
 
this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
 
// load assets needed in our game
this.load.image('blueButton1', blue_button_02);
this.load.image('blueButton2', blue_button_03);
// this.load.image('phaserLogo', 'assets/logo.png');

// part2
this.load.image('phaserLogo', phaserLogo);
this.load.image('sky', sky);
this.load.image('ground', ground);
this.load.image('starObject', starObject);
this.load.image('bomb', bomb);
this.load.image('box', grey_box);
this.load.image('checkedBox', checked_box);
this.load.audio('bgMusic', [bgMusic]);
this.load.spritesheet('dude', playerObject, { frameWidth: 32, frameHeight: 48 });

  }

  ready () {
    this.scene.start('Title');
    // this.scene.start('Credits');
    // this.scene.start('Options');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }

  
};