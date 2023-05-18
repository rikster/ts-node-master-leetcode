function romanToInt(s: string): number {
  const romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap.get(s[i])!;
    const next = romanMap.get(s[i + 1]);

    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}

console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994

//--------------------------------------------

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:
// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

//--------------------------------------------

// this problem is solved by iterating through the string and adding the value of the current roman numeral to a total sum.
// However, if the current roman numeral is smaller than the next one, this means that you have to subtract it from the total sum

// In this solution, we first create a Map romanMap where the keys are the Roman numeral characters and the values are their
// corresponding decimal values. Then we iterate through each character in the string s and get its value from the Map.
// If the current character is less than the next character (meaning we have a subtraction scenario like IV, IX, etc.),
// we subtract the current value from total. Otherwise, we add the current value to total.
// We continue this process until we have traversed the entire string. The result is the converted integer value of the Roman numeral.

//--------------------------------------------

// Super fast solution
function romanToIntFast(s: string): number {
  let sum = 0;
  let romanToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; ++i) {
    if (i < s.length - 1 && romanToArabic[s[i]] < romanToArabic[s[i + 1]]) {
      sum -= romanToArabic[s[i]];
    } else {
      sum += romanToArabic[s[i]];
    }
  }

  return sum;
}

console.log(romanToIntFast("III")); // Output: 3
console.log(romanToIntFast("LVIII")); // Output: 58
console.log(romanToIntFast("MCMXCIV")); // Output: 1994

// In the faster code you provided, a JavaScript object (dictionary) is used for the mappings instead of a Map object. Object property
// access can often be faster than Map.get() calls because JavaScript engines optimize object property accesses.

// In general, JavaScript engines do several optimizations for object property access, like creating hidden classes and inline caching.

// 1. Hidden Classes: JavaScript engines create internal "hidden classes" behind the scenes that speed up property access.
// If the objects have the same hidden class, property access is fast.

// 2. Inline Caching: This is an optimization technique used in the JavaScript engines to reduce the overhead of dynamic dispatch
// (figuring out what method to call). If the same operation is done repeatedly, such as accessing properties on an object,
// the engine can create an "inline cache" to store the location of the property in memory and access it directly instead of looking it up every time.

// However, the difference in performance between using an object and a Map will be negligible for smaller datasets.
// In large applications with complex data structures and very frequent data access, using one over the other could make a difference.

// It's also important to remember that readability and clarity of code often takes precedence over minor performance optimizations.
// Map might be more suitable if you need features it provides such as ordering of keys, easy size determination, or storage of non-string keys.

// The second code block avoids a few operations that the first does, such as Map.get() and the existence check of next character,
// and hence may have slight performance benefits. But again, the difference in speed should be negligible for this size of dataset.
