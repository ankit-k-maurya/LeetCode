function spiralOrder(matrix: number[][]): number[] {
    let arr: number[] = []; 
    
    const m: number = matrix.length;
    // Edge case: Handle empty matrix
    if (m === 0) return arr; 
    const n: number = matrix[0].length;
    
    let left = 0, right = n - 1, top = 0, bottom = m - 1;

    while (top <= bottom && left <= right) {
        // Traverse Left to Right
        for (let i = left; i <= right; i++) {
            arr.push(matrix[top][i]);
        }
        top++;

        // Traverse Top to Bottom
        for (let i = top; i <= bottom; i++) {
            arr.push(matrix[i][right]);
        }
        right--;

        // Traverse Right to Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                arr.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse Bottom to Top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                arr.push(matrix[i][left]);
            }
            left++;
        }
    }
    return arr;
}
