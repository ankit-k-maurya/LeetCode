/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if(head === null) return null;

    let curr: _Node = head;
    while(curr != null){
        let new_node: Node = new Node(curr.val);
        new_node.next = curr.next;
        curr.next = new_node;
        curr = new_node.next;
    }
    curr = head;
    while(curr != null){
        if(curr.random != null){
            curr.next.random = curr.random.next;
        }
        curr = curr.next != null ? curr.next.next : null;
    }
    let old_head: Node = head;
    let new_head: Node = head.next;
    let curr_old: Node = old_head;
    let curr_new: Node = new_head;

    while(curr_old != null){
        curr_old.next = curr_old.next.next;
        curr_new.next = curr_new.next != null ? curr_new.next.next : null;
        curr_old = curr_old.next;
        curr_new = curr_new.next;
    }
    return new_head;
};  