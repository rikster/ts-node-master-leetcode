export default function lengthOfLongestSubstring(s: string): number {
    let maxLength: number = 0;
    let leftPointer: number = 0;
    let charMap: Map<string, number> = new Map();

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        const currentChar: string = s[rightPointer];
        if (charMap.has(currentChar) && charMap.get(currentChar)! >= leftPointer) {
            leftPointer = charMap.get(currentChar)! + 1;
        }
        charMap.set(currentChar, rightPointer);
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
    }

    return maxLength;
}
