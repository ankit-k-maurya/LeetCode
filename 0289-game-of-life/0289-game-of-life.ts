/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    let directions: number[][] = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]];
    let rows: number = board.length;
    let cols: number = board[0].length;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let live: number = 0;
            for(let dir of directions){
                let x = i + dir[0];
                let y = j + dir[1];
                if(x >= 0 && x < rows && y >= 0 && y < cols && Math.abs(board[x][y]) === 1){
                     live++;
                }
            }
            if(board[i][j] === 1 && (live < 2 || live > 3)) board[i][j] = -1;
            if(board[i][j] === 0 && live === 3) board[i][j] = 2;
            
        }
    }
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if (board[i][j] > 0) board[i][j] = 1;
            else board[i][j] = 0;
        }
    }
};
