import findMedianSortedArrays from './findMedianSortedArrays';

describe('findMedianSortedArrays', () => {
    test('Example 1', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        const expected = 2.00000;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expected);
    });

    test('Example 2', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        const expected = 2.50000;
        expect(findMedianSortedArrays(nums1, nums2)).toBe(expected);
    });

});