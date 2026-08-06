function convert(s: string, numRows: number): string {
    // 1. Handle edge cases
    if (numRows === 1 || numRows >= s.length) return s;

    // 2. Initialize an array of strings for each row
    const rows: string[] = new Array(numRows).fill("");
    
    let currentRow = 0;
    let goingDown = false;

    // 3. Loop through characters using valid TypeScript syntax
    for (const c of s) {
        rows[currentRow] += c;
        
        // Change direction at the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }
        
        // Move up or down
        currentRow += goingDown ? 1 : -1;
    }

    // 4. Combine all rows into a single string
    return rows.join("");
}
