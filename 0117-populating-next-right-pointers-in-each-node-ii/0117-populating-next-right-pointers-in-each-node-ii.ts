/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 * 
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


function connect(root: _Node | null): _Node | null {
    if (root === null) return null; 
    
    const q: _Node[] = [root];
    
    while (q.length > 0) {
        const size = q.length;
        let prev: _Node | null = null;
        for (let i = 0; i < size; i++) {
            const curr = q.shift()!; 
            if (prev !== null) {
                prev.next = curr;
            }
            prev = curr;
            
            if (curr.left !== null) q.push(curr.left);
            if (curr.right !== null) q.push(curr.right);
        }
    }
    return root;
}
