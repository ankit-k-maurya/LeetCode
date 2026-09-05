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

function sumNumbers(root: TreeNode | null): number {
  
    function dfs(node: TreeNode | null, currSum: number): number {
        if (!node) return 0;
             
        currSum = (currSum * 10) + node.val;
        if (!node.left && !node.right) {
            return currSum;
        }
        let leftSum = dfs(node.left, currSum);
        let rightSum = dfs(node.right, currSum);

        return leftSum + rightSum;
    }

    return dfs(root, 0);
}
