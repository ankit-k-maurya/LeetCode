/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
     if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];

    const mid = Math.ceil(lists.length / 2);
    let left = mergeKLists(lists.slice(0, mid));
    let right = mergeKLists(lists.slice(mid));

    if (!left) return right;
    if (!right) return left;

    let head: ListNode;
    if (left.val > right.val) {
        head = right;
        right = right.next;
    } else {
        head = left;
        left = left.next;
    }

    let current = head;
    while (left && right) {
        if (left.val > right.val) {
            current.next = right;
            right = right.next;
        } else {
            current.next = left;
            left = left.next;
        }
        current = current.next!;
    }

    current.next = left ?? right;

    return head;
};