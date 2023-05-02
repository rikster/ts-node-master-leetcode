import regularExpressionMatch from './regularExpressionMatch';

describe('regularExpressionMatch', () => {
  it('returns false when s = "aa" and p = "a"', () => {
    expect(regularExpressionMatch('aa', 'a')).toBe(false);
  });

  it('returns true when s = "aa" and p = "a*"', () => {
    expect(regularExpressionMatch('aa', 'a*')).toBe(true);
  });

  it('returns true when s = "ab" and p = ".*"', () => {
    expect(regularExpressionMatch('ab', '.*')).toBe(true);
  });
});