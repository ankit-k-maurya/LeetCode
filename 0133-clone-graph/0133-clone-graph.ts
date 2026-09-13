/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(root: _Node | null): _Node | null {
    if (!root) {
        return null;
    }

    const nodes = new Map<number, _Node>();
    
    function dfs(originalNode: _Node): _Node {
        if (nodes.has(originalNode.val)) {
            return nodes.get(originalNode.val)!;
        }

        const node = new _Node(originalNode.val);
        nodes.set(originalNode.val, node);

        for (const neighbor of originalNode.neighbors) {
            node.neighbors.push(dfs(neighbor)); 
        }

        return node;
    }

    return dfs(root);
};