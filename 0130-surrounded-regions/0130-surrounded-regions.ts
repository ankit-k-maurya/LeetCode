/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const ROWS = board.length;
    const COLS = board[0].length;

    function capture(r: number, c: number): void {
        if (r < 0 || c < 0 || r === ROWS || c === COLS || board[r][c] !== "O") {
            return;
        }
        board[r][c] = "T";
        capture(r + 1, c);
        capture(r - 1, c);
        capture(r, c + 1);
        capture(r, c - 1);
    }

    // Step 1: DFS from every border O → mark as T (safe)
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "O" && (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1)) {
                capture(r, c);
            }
        }
    }

    // Step 2: Remaining O are surrounded → flip to X
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "O") {
                board[r][c] = "X";
            }
        }
    }

    // Step 3: Restore T back to O
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === "T") {
                board[r][c] = "O";
            }
        }
    }
}