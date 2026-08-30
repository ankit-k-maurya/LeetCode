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

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    
    // Define the helper function with correct TypeScript types
    function isSymmetricHelp(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null || right === null) return left === right;

        if (left.val !== right.val) return false;
        
        return isSymmetricHelp(left.left, right.right) &&
               isSymmetricHelp(left.right, right.left);
    }

    // Call the helper function
    return isSymmetricHelp(root.left, root.right);
};
