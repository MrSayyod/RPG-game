/* eslint-disable import/no-unresolved */
import Phaser from 'phaser';
import APIHandler from '../APIHandler';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.add.image(400, 300, 'sky');
    this.add.text(300, 200, 'Game Over', { fontSize: '32px', fill: '#000' });

    const myID = 'peQd10aVIzyQmZoVWY3p';
    const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myID}/scores/`;
    const score = JSON.parse(localStorage.getItem('score:'));
    const username = JSON.parse(localStorage.getItem('username:'));
    const obj = { // eslint-disable-line
      user: username,
      score,
    };


    APIHandler.getData(url)
      .then(data => {
        this.space = 0;

        data.result.sort((a, b) => b.score - a.score).slice(0, 10).forEach((userObj, index) => {
          this.add.text(
            250,
            270 + this.space,
            `${index + 1}. ${userObj.user} | ${userObj.score}`,
            {
              font: '19px monospace',
              fill: '#0000ff',
            },
          );
          this.space += 30;
        });
      });

    this.submit = this.add.dom(350, 500, 'button', 'padding:10px;background-color:royalblue;', 'Go Back');

    this.btn = document.querySelector('button');
    this.btn.addEventListener('click', () => {
      this.scene.start('Title');
    });
  }
}