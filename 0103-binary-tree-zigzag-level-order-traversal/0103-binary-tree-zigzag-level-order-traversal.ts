/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let nodesQueue: TreeNode[] = [root];
    let result: number[][] = [];
    let leftToRight = true;

    while (nodesQueue.length > 0) {
        let size: number = nodesQueue.length;
        // Pre-allocate the row array with a fixed size
        let row: number[] = new Array(size);
        
        for (let i = 0; i < size; i++) {
            // shift() extracts and removes the front element of the queue
            let node: TreeNode = nodesQueue.shift()!;
            
            // Calculate index based on the current direction
            let index: number = leftToRight ? i : (size - 1 - i);
            row[index] = node.val;
            
            // Push children to the queue for the next level
            if (node.left) nodesQueue.push(node.left);
            if (node.right) nodesQueue.push(node.right); 
        }
        leftToRight = !leftToRight;
        result.push(row);
    }
    
    return result;
}
