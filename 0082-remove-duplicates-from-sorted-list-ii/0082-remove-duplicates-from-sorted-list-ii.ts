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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dumy: ListNode = new ListNode(0);
  dumy.next = head;
  let prev: ListNode = dumy;
  let curr: ListNode = head;

  while(curr != null){
    while(curr.next != null && curr.val === curr.next.val)
    curr = curr.next;

    if(prev.next === curr) prev = prev.next;
    else prev.next = curr.next;
    curr = curr.next;
  }
  return dumy.next;  
};
