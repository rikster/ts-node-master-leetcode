import lengthOfLongestSubstring from './lengthOfLongestSubstring';

describe('lengthOfLongestSubstring', () => {
    test('Example 1', () => {
        const input = 'abcabcbb';
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });

    test('Example 2', () => {
        const input = 'bbbbb';
        const output = 1;
        expect(lengthOfLongestSubstring(input)).toStrictEqual(output);
    });

    test('Example 3', () => {
        const input = 'pwwkew';
        const output = 3;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });

    test('Empty string', () => {
        const input = '';
        const output = 0;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });

    test('String with different character types', () => {
        const input = 'a1!@#b2$%^c3&*()_+=-`~|?><,.[]{};\':"';
        const output = input.length;
        expect(lengthOfLongestSubstring(input)).toBe(output);
    });
});
