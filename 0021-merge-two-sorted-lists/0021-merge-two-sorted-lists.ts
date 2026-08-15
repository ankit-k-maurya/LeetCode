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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null || l2 === null) return l1 != null ? l1 : l2;
    
    let result: ListNode = new ListNode();
    let pre: ListNode = result;

    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            pre.next = l1;
            l1 = l1.next;
            pre = pre.next;
        }
        else{
            pre.next = l2;
            l2 = l2.next;
            pre = pre.next;
        }
    }
    pre.next = l1 != null ? l1 : l2;
    return result.next;
};