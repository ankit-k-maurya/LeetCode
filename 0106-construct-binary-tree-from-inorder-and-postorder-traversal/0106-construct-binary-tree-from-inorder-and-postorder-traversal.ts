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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (inorder === null || postorder === null || inorder.length !== postorder.length) {
        return null;
    }

    const hm = new Map<number, number>();
    for (let i = 0; i < inorder.length; ++i) {
        hm.set(inorder[i], i); 
    }

    return buildTreePostIn(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, hm);
}

function buildTreePostIn(
    inorder: number[], 
    is: number, 
    ie: number, 
    postorder: number[],
    ps: number, 
    pe: number, 
    hm: Map<number, number>
): TreeNode | null {
    if (ps > pe || is > ie) return null;

    const rootVal = postorder[pe];
    const root: TreeNode = new TreeNode(rootVal);
    const inRoot = hm.get(rootVal)!; 
    const numsLeft = inRoot - is;

    root.left = buildTreePostIn(inorder, is, inRoot - 1, postorder, ps, ps + numsLeft - 1, hm);
    root.right = buildTreePostIn(inorder, inRoot + 1, ie, postorder, ps + numsLeft, pe - 1, hm);

    return root;
}
