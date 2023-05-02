export default function reverseInteger(x: number): number {
    let rev: number = 0;
    const INT_MIN: number = -Math.pow(2, 31);
    const INT_MAX: number = Math.pow(2, 31) - 1;

    while (x !== 0) {
        const pop: number = x % 10;
        x = Math.trunc(x / 10);

        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

        rev = rev * 10 + pop;
    }
    
    return rev;
}


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1