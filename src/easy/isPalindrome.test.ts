import isPalindrome from './isPalindrome';

describe('isPalindrome', () => {
    test('should return true for palindrome numbers', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(12321)).toBe(true);
        expect(isPalindrome(0)).toBe(true);
    });

    test('should return false for non-palindrome numbers', () => {
        expect(isPalindrome(-121)).toBe(false);
        expect(isPalindrome(10)).toBe(false);
        expect(isPalindrome(123)).toBe(false);
    });
});