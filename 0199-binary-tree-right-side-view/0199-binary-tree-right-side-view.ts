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

function rightSideView(root: TreeNode | null): number[] {
    let result: number[] = [];
    rightView(root, result, 0);
    return result;

    function rightView(curr: TreeNode | null, result: number[], currDepth: number):void{
        if(!curr) return ;
        if(currDepth === result.length) result.push(curr.val);
        rightView(curr.right, result, currDepth+1);
        rightView(curr.left, result, currDepth+1); 
    }
};