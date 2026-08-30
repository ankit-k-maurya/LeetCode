function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return null;
   
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        // shift() removes and returns the first element 
        const node = queue.shift()!;

        // Swap the left and right children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        // Push non-null children into the queue
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    
    return root;
}
