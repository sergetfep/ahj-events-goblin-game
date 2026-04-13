export default class GameBoard {
  constructor(container, size) {
    this.container = container;
    this.size = size;
    this.boardElement = null;
  }

  createBoard() {
    const board = document.createElement('div');
    board.classList.add('game-board');
    board.style.gridTemplateColumns = `repeat(${this.size}, 120px)`;

    const cellsCount = this.size ** 2;

    for (let i = 0; i < cellsCount; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('hole');
      cell.dataset.index = String(i);
      board.append(cell);
    }

    this.boardElement = board;
    return board;
  }

  render() {
    const board = this.createBoard();
    this.container.append(board);
  }

  getCells() {
    return Array.from(this.boardElement.children);
  }
}
