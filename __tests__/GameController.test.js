import GameController from '../src/js/GameController';

describe('GameController', () => {
  let container;
  let game;

  const options = {
    boardSize: 4,
    appearanceTime: 1000,
    maxMisses: 5,
    goblinImage: 'goblin.png',
  };

  beforeEach(() => {
    jest.useFakeTimers();

    document.body.innerHTML = '<div id="root"></div>';
    container = document.getElementById('root');

    game = new GameController(container, options);
    game.init();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
    document.body.innerHTML = '';
  });

  test('renders board and scoreboard on init', () => {
    expect(container.classList.contains('game')).toBe(true);
    expect(container.querySelector('.scoreboard')).not.toBeNull();
    expect(container.querySelectorAll('.hole')).toHaveLength(16);
    expect(container.querySelector('.goblin')).not.toBeNull();

    const values = Array.from(
      document.querySelectorAll('.scoreboard__value'),
    ).map((item) => item.textContent);

    expect(values[0]).toBe('0');
    expect(values[1]).toBe('0');
  });

  test('counts hit after click on goblin', () => {
    const goblin = document.querySelector('.goblin');

    goblin.click();

    const values = Array.from(
      document.querySelectorAll('.scoreboard__value'),
    ).map((item) => item.textContent);

    expect(values[0]).toBe('1');
    expect(values[1]).toBe('0');
    expect(document.querySelector('.goblin')).not.toBeNull();
  });

  test('counts misses and stops game after fifth miss', () => {
    for (let i = 0; i < 4; i += 1) {
      jest.advanceTimersByTime(1000);

      const values = Array.from(
        document.querySelectorAll('.scoreboard__value'),
      ).map((item) => item.textContent);

      expect(values[1]).toBe(String(i + 1));
      expect(document.querySelector('.goblin')).not.toBeNull();
    }

    jest.advanceTimersByTime(1000);

    const values = Array.from(
      document.querySelectorAll('.scoreboard__value'),
    ).map((item) => item.textContent);

    expect(values[1]).toBe('5');
    expect(document.querySelector('.goblin')).toBeNull();
    expect(game.isFinished).toBe(true);
  });
});
