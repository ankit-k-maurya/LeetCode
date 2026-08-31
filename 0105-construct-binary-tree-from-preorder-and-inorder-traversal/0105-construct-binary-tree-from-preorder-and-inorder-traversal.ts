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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    
    const inMap = new Map<number, number>();
    
    for (let i = 0; i < inorder.length; i++) {
       
        inMap.set(inorder[i], i); 
    }

    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);

    function helper(
        preorder: number[], 
        preStart: number, 
        preEnd: number, 
        inorder: number[], 
        inStart: number, 
        inEnd: number, 
        inMap: Map<number, number>
    ): TreeNode | null { 
        if (preStart > preEnd || inStart > inEnd) return null;
        
       
        const root = new TreeNode(preorder[preStart]);
        
       
        const inRoot = inMap.get(root.val)!;
        const numsLeft = inRoot - inStart;
        
        root.left = helper(preorder, preStart + 1, preStart + numsLeft, inorder, inStart, inRoot - 1, inMap);
        root.right = helper(preorder, preStart + numsLeft + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);
        
        
        return root; 
    }
}
