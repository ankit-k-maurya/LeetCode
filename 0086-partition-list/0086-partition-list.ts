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

function partition(head: ListNode | null, x: number): ListNode | null {
  let slist: ListNode = new ListNode(0);
  let blist: ListNode = new ListNode(0);
  let small: ListNode = slist;
  let big: ListNode = blist;

  while(head != null){
    if(head.val < x){
        small.next = head;
        small = small.next;
    }
    else{
        big.next = head;
        big = big.next;
    }
    head = head.next;
  }  
  small.next = blist.next;
  big.next = null;

  return slist.next;
};