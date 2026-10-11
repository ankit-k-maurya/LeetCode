/**
 * Definition for _Node.
 * class _Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: _Node | null
 * 	topRight: _Node | null
 * 	bottomLeft: _Node | null
 * 	bottomRight: _Node | null
 * 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *   }
 * }
 */


function construct(grid: number[][]): Node {
    const n = grid.length;

    function build(x: number, y: number, size: number): Node {
        let same = true;
        const firstVal = grid[x][y];

        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (grid[i][j] !== firstVal) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        if (same) {
            return new Node(firstVal === 1, true);
        }

        const half = size / 2;
        const topLeft = build(x, y, half);
        const topRight = build(x, y + half, half);
        const bottomLeft = build(x + half, y, half);
        const bottomRight = build(x + half, y + half, half);

        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
    }

    return build(0, 0, n);
}