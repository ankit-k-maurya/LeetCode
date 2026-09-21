function totalNQueens(n: number): number {
    const ld: boolean[] = new Array(2 * n - 1).fill(false);
    const rd: boolean[] = new Array(2 * n - 1).fill(false);
    const col: boolean[] = new Array(n).fill(false);

    let ans = 0;

    function placeQueen(row: number): void {
        if (row === n) {
            ans++;
            return;
        }

        for (let j = 0; j < n; j++) {
            const leftDiagonal = n - 1 + row - j;
            const rightDiagonal = row + j;

            if (col[j] || ld[leftDiagonal] || rd[rightDiagonal])
                continue;

            col[j] = true;
            ld[leftDiagonal] = true;
            rd[rightDiagonal] = true;

            placeQueen(row + 1);

            col[j] = false;
            ld[leftDiagonal] = false;
            rd[rightDiagonal] = false;
        }
    }

    placeQueen(0);

    return ans;
}