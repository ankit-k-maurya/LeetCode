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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;

    // Use native JavaScript arrays as stacks
    let path: TreeNode[] = [root];
    let sumPath: number[] = [root.val];

    // Loop continues as long as there are nodes left to process
    while (path.length > 0) {
        let temp: TreeNode = path.pop()!;
        let tempVal: number = sumPath.pop()!;
        
        // Check if it's a leaf node and the path sum matches targetSum
        if (temp.left === null && temp.right === null && tempVal === targetSum) {
            return true;
        }
        
        // Push right child and updated running sum
        if (temp.right !== null) {
            path.push(temp.right);
            sumPath.push(temp.right.val + tempVal); 
        } 
        
        // Push left child and updated running sum
        if (temp.left !== null) {
            path.push(temp.left);
            sumPath.push(temp.left.val + tempVal);
        }
    }
    return false;
}
