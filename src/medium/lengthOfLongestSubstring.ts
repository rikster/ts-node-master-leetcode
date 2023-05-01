export default function lengthOfLongestSubstring(s: string): number {
    let maxLength: number = 0;
    let leftPointer: number = 0;
    let charMap: Map<string, number> = new Map();

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        const currentChar: string = s[rightPointer];
        //Check if the current character is present in charMap 
        //and if its index is greater than or equal to leftPointer. 
        //If so, update leftPointer to the next index after the previous occurrence of the character:
        if (charMap.has(currentChar) && charMap.get(currentChar)! >= leftPointer) {
            leftPointer = charMap.get(currentChar)! + 1;
        }
        //Update charMap with the current character and its index:
        charMap.set(currentChar, rightPointer);
        //Update the maxLength variable to the maximum value between the current maxLength 
        //and the difference between the right and left pointers, plus 1:
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }

    return maxLength;
}

//---------------------------------------------------------------------

//In summary,
//the function uses a sliding window technique to find the length of the longest substring
//without repeating characters.
//It iterates through the input string, checking for repeating characters and updating
//the left pointer accordingly, while maintaining a maximum length value.

//---------------------------------------------------------------------

//Exercise
// Longest Substring Without Repeating Characters
// Medium

// Given a string s, find the length of the longest substring
// without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

//---------------------------------------------------------------------