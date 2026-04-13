import GameBoard from '../src/js/GameBoard';

describe('GameBoard', () => {
  test('renders board with 16 cells for size 4', () => {
    document.body.innerHTML = '<div id="app"></div>';
    const root = document.querySelector('#app');
    const board = new GameBoard(root, 4);

    board.render();

    const cells = board.getCells();
    expect(cells).toHaveLength(16);
    expect(cells[0].dataset.index).toBe('0');
    expect(cells[15].dataset.index).toBe('15');
  });
});
