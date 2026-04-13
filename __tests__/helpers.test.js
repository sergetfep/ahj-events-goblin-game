import { getNextIndex } from '../src/js/helpers';

describe('helpers', () => {
  test('returns zero when there is only one cell', () => {
    expect(getNextIndex(1, 0)).toBe(0);
  });

  test('does not return previous index for several cells', () => {
    for (let i = 0; i < 30; i += 1) {
      expect(getNextIndex(4, 2)).not.toBe(2);
    }
  });
});
