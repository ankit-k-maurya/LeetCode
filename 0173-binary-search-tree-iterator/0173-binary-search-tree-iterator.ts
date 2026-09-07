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

class BSTIterator {
    private stack: TreeNode[] = [];

    constructor(root: TreeNode | null) {
        this.pushAll(root);
    }

    next(): number {
        let tmpNode = this.stack.pop()!;
        this.pushAll(tmpNode.right);
        return tmpNode.val;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }
    
    private pushAll(node: TreeNode | null): void {
        while (node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }
}


/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */