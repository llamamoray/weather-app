import { isInDay } from './date';

describe('#isInDay', () => {
  it('should correctly work', () => {
    expect(isInDay(1579547277830 / 1000, 1, 5 * 60)).toBe(true);
  });
});