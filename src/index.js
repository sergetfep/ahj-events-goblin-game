import './css/style.css';

import goblinImage from './img/goblin.svg';
import GameController from './js/GameController';
import {
  BOARD_SIZE,
  APPEARANCE_TIME,
  MAX_MISSES,
  PAUSE_AFTER_HIT,
} from './js/constants';

const app = document.querySelector('#app');

const game = new GameController(app, {
  boardSize: BOARD_SIZE,
  appearanceTime: APPEARANCE_TIME,
  maxMisses: MAX_MISSES,
  pauseAfterHit: PAUSE_AFTER_HIT,
  goblinImage,
});

game.init();
