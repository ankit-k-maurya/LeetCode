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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(head === null)  return head;
    
    let size: number = 0;
    let curr: ListNode = head;
    while(curr != null){
        curr = curr.next;
        size++;
    }
    k = k%size;
    if(k === 0) return head;

    curr = head;
    let newHead: ListNode = curr.next;
    for(let i = 0; i < size-k-1; i++){
        curr = curr.next;
        newHead = curr.next;
    }
    curr.next = null;
    curr = newHead;
    while(curr.next != null) curr = curr.next;

    curr.next = head;
    return newHead;
};