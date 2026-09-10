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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
   
    let queue: TreeNode[] = [root];
    let wrapList: number[][] = [];
    
    while (queue.length > 0) {
        let levelSize: number = queue.length;
        let subList: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()!;
            subList.push(node.val);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        wrapList.push(subList);
    }
    
    return wrapList; 
}
