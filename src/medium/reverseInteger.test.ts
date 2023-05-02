import reverseInteger from './reverseInteger';

test('Reverses a positive integer', () => {
    expect(reverseInteger(123)).toBe(321);
});

test('RereverseIntegers a negative integer', () => {
    expect(reverseInteger(-123)).toBe(-321);
});

test('RereverseIntegers an integer with trailing zeros', () => {
    expect(reverseInteger(120)).toBe(21);
});

test('Returns 0 for an integer outside the 32-bit signed integer range', () => {
    expect(reverseInteger(2147483647)).toBe(0);
    expect(reverseInteger(-2147483648)).toBe(0);
});