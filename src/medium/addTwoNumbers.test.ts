import addTwoNumbers, { ListNode } from './addTwoNumbers';

describe('addTwoNumbers', () => {
    test('should return null if both lists are empty', () => {
        expect(addTwoNumbers(null, null)).toBeNull();
    });

    test('should return the original list if only one list is provided', () => {
        const list = new ListNode(1);
        expect(addTwoNumbers(list, null)).toStrictEqual(list);
        expect(addTwoNumbers(null, list)).toStrictEqual(list);
    });

    test('should add two numbers correctly', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
        const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });

    test('should handle carry over correctly', () => {
        const l1 = new ListNode(9, new ListNode(9, new ListNode(9)));
        const l2 = new ListNode(9, new ListNode(9));
        const expected = new ListNode(8, new ListNode(9, new ListNode(0, new ListNode(1))));
        expect(addTwoNumbers(l1, l2)).toEqual(expected);
    });
});
