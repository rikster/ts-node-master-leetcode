export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
    }
  
    const m = nums1.length;
    const n = nums2.length;
    let imin = 0;
    let imax = m;
    const halfLen = Math.floor((m + n + 1) / 2);
  
    while (imin <= imax) {
      const i = Math.floor((imin + imax) / 2);
      const j = halfLen - i;
  
      if (i < m && nums2[j - 1] > nums1[i]) {
        imin = i + 1;
      } else if (i > 0 && nums1[i - 1] > nums2[j]) {
        imax = i - 1;
      } else {
        let maxOfLeft;
        if (i === 0) {
          maxOfLeft = nums2[j - 1];
        } else if (j === 0) {
          maxOfLeft = nums1[i - 1];
        } else {
          maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]);
        }
  
        if ((m + n) % 2 === 1) {
          return maxOfLeft;
        }
  
        let minOfRight;
        if (i === m) {
          minOfRight = nums2[j];
        } else if (j === n) {
          minOfRight = nums1[i];
        } else {
          minOfRight = Math.min(nums1[i], nums2[j]);
        }
  
        return (maxOfLeft + minOfRight) / 2.0;
      }
    }
  
    return 0;
  }

//---------------------------------------------------------------------
// explanation


//---------------------------------------------------------------------  
//   Exercise
//   Median of Two Sorted Arrays
//   Hard
//   Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
  
//   The overall run time complexity should be O(log (m+n)).
  
//   Example 1:
//   Input: nums1 = [1,3], nums2 = [2]
//   Output: 2.00000
//   Explanation: merged array = [1,2,3] and median is 2.

//   Example 2:
//   Input: nums1 = [1,2], nums2 = [3,4]
//   Output: 2.50000
//   Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
  
//   Constraints:
//   nums1.length == m
//   nums2.length == n
//   0 <= m <= 1000
//   0 <= n <= 1000
//   1 <= m + n <= 2000
//   -106 <= nums1[i], nums2[i] <= 106
  