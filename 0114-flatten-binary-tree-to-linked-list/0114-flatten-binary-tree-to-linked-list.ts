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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (root === null) return; 
    let curr: TreeNode | null = root;

    while (curr !== null) {
        if (curr.left !== null) {
            // Find the rightmost node in the left subtree
            let prev: TreeNode = curr.left; 
            while (prev.right !== null) {
                prev = prev.right;
            }

            // Rewire the pointers
            prev.right = curr.right; // Connect the rightmost node of left subtree to current's right subtree
            curr.right = curr.left;  // Move the left subtree to the right side
            curr.left = null; 
        }
        curr = curr.right;
    }
}
