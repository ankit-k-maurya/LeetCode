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

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    
    let left = getLeftHeight(root);
    let right = getRightHeight(root);

    if (left === right) return (1 << left) - 1; 
    
    return countNodes(root.left) + countNodes(root.right) + 1;
    
    function getLeftHeight(node: TreeNode | null): number {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    }

    function getRightHeight(node: TreeNode | null): number {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    }
}
