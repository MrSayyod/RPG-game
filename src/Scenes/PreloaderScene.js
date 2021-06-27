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

    
    this.add.image(400, 200, 'logo');

    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

this.load.on('complete', function () {
  progressBar.destroy();
  progressBox.destroy();
  loadingText.destroy();
  percentText.destroy();
  assetText.destroy();
  this.ready();
}.bind(this));
 
this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
 
this.load.image('blueButton1', blue_button_02);
this.load.image('blueButton2', blue_button_03);
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
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }

  
};