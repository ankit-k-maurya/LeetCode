function isValidSudoku(board: string[][]): boolean {
    let check = new Set<string>();
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let x: string = board[i][j];
            
            if (x !== '.') {
                let rowKey = `${x} in row ${i}`;
                let colKey = `${x} in col ${j}`;
                let boxKey = `${x} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;
                
                // Check if the value already exists in the row, column, or 3x3 box
                if (check.has(rowKey) || check.has(colKey) || check.has(boxKey)) {
                    return false;
                }
                
                // Add the keys to the set
                check.add(rowKey);
                check.add(colKey);
                check.add(boxKey);
            }
        }
    }
    return true;
}
