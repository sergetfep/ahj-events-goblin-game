import ScoreBoard from '../src/js/ScoreBoard';

describe('ScoreBoard', () => {
  test('updates values and message', () => {
    document.body.innerHTML = '<div id="app"></div>';
    const root = document.querySelector('#app');
    const scoreBoard = new ScoreBoard(root);

    scoreBoard.render();
    scoreBoard.updateScore(3, 2);
    scoreBoard.setStatus('Промах');
    scoreBoard.setMessage('Тестовое сообщение');

    const values = Array.from(root.querySelectorAll('.scoreboard__value')).map((item) => item.textContent);
    expect(values).toEqual(['3', '2', 'Промах']);
    expect(root.querySelector('.scoreboard__message').textContent).toBe('Тестовое сообщение');
  });
});
