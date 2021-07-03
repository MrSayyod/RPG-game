/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';

export default class GetUserName extends Phaser.Scene {
  constructor() {
    super('GetUserName');
  }

  create() {
    this.add.text(300, 100, 'Please Enter Your Name:');
    this.input = this.add.dom(400, 150, 'input');
    this.submit = this.add.dom(400, 200, 'button', 'padding:10px;background-color:gray;', 'Submit');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.inputValue = document.querySelector('input').value;
      if (this.inputValue == null || this.inputValue === '') {
        localStorage.setItem('username:', JSON.stringify('Unnamed'));
      } else {
        localStorage.setItem('username:', JSON.stringify(this.inputValue));
      }
      this.scene.start('Boot');
    });
  }

  update() {} // eslint-disable-line
}