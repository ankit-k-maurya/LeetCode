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

function maxPathSum(root: TreeNode | null): number {
    let maxValue: number[] = [];
    maxValue[0] = -Infinity; 
    maxPathDown(root, maxValue);
    return maxValue[0]; 
    
    function maxPathDown(node: TreeNode | null, maxValue: number[]): number {
        if(node === null) return 0;
        let left: number = Math.max(0, maxPathDown(node.left, maxValue));
        let right: number = Math.max(0, maxPathDown(node.right, maxValue));
        maxValue[0] = Math.max(maxValue[0], left + right + node.val);
        return Math.max(left, right) + node.val;
    }  
}
