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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // If either node is null, they must both be null to be identical
    if (p === null || q === null) return (p === q);
    
    // Compare current values, then recursively check left and right subtrees
    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}