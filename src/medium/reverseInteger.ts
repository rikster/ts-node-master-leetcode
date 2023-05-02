export default function reverseInteger(x: number): number {
    // to store the reversed integer.
    let rev: number = 0;
    // the minimum value for a signed 32-bit integer.
    const INT_MIN: number = -Math.pow(2, 31);
    // the maximum value for a signed 32-bit integer.
    const INT_MAX: number = Math.pow(2, 31) - 1;

    // while x is not 0.
    while (x !== 0) {
        // in each iteration, calculate the last digit of x using the modulus operator.
        const pop: number = x % 10;

        // last digit is removed from x using integer division.
        x = Math.trunc(x / 10);

        //adding the next digit would cause the reversed integer to exceed the maximum value, the function returns 0.
        if (rev > INT_MAX / 10 || (rev === INT_MAX / 10 && pop > 7)) return 0;
        // adding the next digit would cause the reversed integer to go below the minimum value, the function returns 0.
        if (rev < INT_MIN / 10 || (rev === INT_MIN / 10 && pop < -8)) return 0;

        //adding the next digit would cause the reversed integer to go below the minimum value, the function returns 0.
        rev = rev * 10 + pop;
        console.log(rev)
    }

    // adding the next digit would cause the reversed integer to go below the minimum value, the function returns 0.
    console.log('---');
    return rev;
}

console.log(reverseInteger(123));

// Problem:
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
// -2^31 <= x <= 2^31 - 1