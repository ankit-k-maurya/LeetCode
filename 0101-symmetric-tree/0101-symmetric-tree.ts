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

    const leftTree: (TreeNode | null)[] = [];
    const rightTree: (TreeNode | null)[] = [];
    
    leftTree.push(root.left);
    rightTree.push(root.right);
    
    while (leftTree.length > 0 && rightTree.length > 0) {
        // TypeScript needs to know pop() might return undefined if empty, 
        // so we use the non-null assertion operator (!) since we know it's not empty
        const leftNode = leftTree.pop()!;
        const rightNode = rightTree.pop()!;

        if (leftNode === null && rightNode === null) continue;

        if (leftNode === null || rightNode === null) return false;

        if (leftNode.val !== rightNode.val) return false;

        // Order matters: push outer children, then inner children
        leftTree.push(leftNode.left);
        leftTree.push(leftNode.right);
        
        rightTree.push(rightNode.right);
        rightTree.push(rightNode.left);
    }
    return true;
}

