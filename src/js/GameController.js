import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import { getNextIndex, getRandomIndex } from './helpers';

export default class GameController {
  constructor(container, options) {
    this.container = container;
    this.options = options;
    this.board = null;
    this.scoreBoard = null;
    this.cells = [];
    this.currentIndex = null;
    this.previousIndex = null;
    this.hits = 0;
    this.misses = 0;
    this.isFinished = false;
    this.roundTimerId = null;
    this.boardHost = null;
    this.goblin = this.createGoblin();
  }

  createGoblin() {
    const goblin = document.createElement('img');
    goblin.classList.add('goblin');
    goblin.src = this.options.goblinImage;
    goblin.alt = 'Гоблин';
    goblin.draggable = false;
    return goblin;
  }

  init() {
    this.renderLayout();
    this.bindEvents();
    this.updateScore();
    this.startRound(true);
  }

  renderLayout() {
    this.container.innerHTML = '';
    this.container.classList.add('game');

    const infoHost = document.createElement('div');
    infoHost.classList.add('game__info');

    this.boardHost = document.createElement('div');
    this.boardHost.classList.add('game__board');

    this.container.append(infoHost, this.boardHost);

    this.scoreBoard = new ScoreBoard(infoHost);
    this.scoreBoard.render();

    this.board = new GameBoard(this.boardHost, this.options.boardSize);
    this.board.render();
    this.cells = this.board.getCells();
  }

  bindEvents() {
    this.board.boardElement.addEventListener('click', (event) => {
      if (this.isFinished) {
        return;
      }

      const clickedGoblin = event.target.closest('.goblin');

      if (!clickedGoblin) {
        return;
      }

      this.registerHit();
    });
  }

  startRound(isFirstRound = false) {
    if (this.isFinished) {
      return;
    }

    this.clearRoundTimer();

    const nextIndex = isFirstRound
      ? getRandomIndex(this.cells.length)
      : getNextIndex(this.cells.length, this.previousIndex);

    this.showGoblin(nextIndex);

    this.roundTimerId = setTimeout(() => {
      this.registerMiss();
    }, this.options.appearanceTime);
  }

  showGoblin(index) {
    this.hideGoblin();
    this.cells[index].append(this.goblin);
    this.currentIndex = index;
    this.previousIndex = index;
    this.scoreBoard.setStatus('Игра идёт');
    this.scoreBoard.setMessage('');
  }

  hideGoblin() {
    if (this.goblin.parentElement) {
      this.goblin.remove();
    }

    this.currentIndex = null;
  }

  registerHit() {
    this.hits += 1;
    this.updateScore();
    this.scoreBoard.setStatus('Есть попадание');
    this.hideGoblin();
    this.clearRoundTimer();
    this.startRound();
  }

  registerMiss() {
    this.misses += 1;
    this.updateScore();
    this.hideGoblin();

    if (this.misses >= this.options.maxMisses) {
      this.finishGame();
      return;
    }

    this.scoreBoard.setStatus('Промах');
    this.startRound();
  }

  updateScore() {
    this.scoreBoard.updateScore(this.hits, this.misses);
  }

  finishGame() {
    this.isFinished = true;
    this.clearRoundTimer();
    this.hideGoblin();
    this.scoreBoard.setStatus('Игра окончена');
    this.scoreBoard.setMessage(
      `Вы пропустили ${this.misses} гоблинов. Итоговый счёт: ${this.hits}.`,
    );
  }

  clearRoundTimer() {
    if (this.roundTimerId !== null) {
      clearTimeout(this.roundTimerId);
      this.roundTimerId = null;
    }
  }
}
