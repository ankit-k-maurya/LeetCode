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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dumy: ListNode = new ListNode(0);
  dumy.next = head;
  let curr: ListNode = dumy.next;
  let size: number = 0;
  while(curr != null){
    curr = curr.next;
    size++;
  }   
  curr = dumy;
  for(let i = 0; i < size-n; i++) curr = curr.next;

   curr.next = curr.next.next;
   return dumy.next;
};