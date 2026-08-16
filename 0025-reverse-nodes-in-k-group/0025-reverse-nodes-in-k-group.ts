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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let dumy: ListNode = new ListNode(0);
  dumy.next = head;
  let prev: ListNode = dumy;

  let curr: ListNode = prev.next;
  let size: number = 0;
  while(curr != null){
    curr = curr.next;
    size++;
  }
  let grp: number = Math.floor(size / k);
  let z: number = 0;
  curr = prev.next;

  while(z < grp){
    let i = 0;
    while(i < k-1){
        let tmp: ListNode = curr.next;
        curr.next = tmp.next;
        tmp.next = prev.next;
        prev.next = tmp;
        i++;
    }
    prev = curr;
    curr = curr.next;
    z++;
  }
  return dumy.next;
};