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

function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    
    let levelQueue: TreeNode[] = [root];
    let avgList: number[] = [];
    
    while (levelQueue.length > 0) {
        let levelSize: number = levelQueue.length;
        let sum: number = 0;
        
        for (let i = 0; i < levelSize; i++) {
            // shift() removes from the front of the queue
            let node = levelQueue.shift()!; 
            
            sum += node.val;
            
            if (node.left !== null) levelQueue.push(node.left);
            if (node.right !== null) levelQueue.push(node.right);
        }
        
        avgList.push(sum / levelSize);
    }
    
    return avgList;
}
