// Definition for singly-linked list.
 export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 // This function takes two linked lists, l1 and l2, each represented by their head node, 
 // and returns a new linked list that is the sum of the two input lists.
export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead = new ListNode(0); // dummyhead node to simplify list construction. The dummyHead node has a value of 0 and will be used to store the result.
    let current = dummyHead; //current is a reference to the last node in the result list and initially points to the dummyHead.
    let carry = 0; //  stores the carry value when adding two digits from the input lists.

    while (l1 !== null || l2 !== null) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}


// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.