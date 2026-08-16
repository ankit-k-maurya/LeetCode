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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(head === null || left === right) return head;
 
    let dumy: ListNode = new ListNode(0);
    dumy.next = head;
    let prev: ListNode = dumy;

    for(let i = 0; i < left -1; i++) prev = prev.next;

    let curr: ListNode = prev.next;
    for(let i = 0; i < right-left; i++){
        let tmp: ListNode = curr.next;
        curr.next = tmp.next;
        tmp.next = prev.next;
        prev.next = tmp;
    }
    return dumy.next;

};