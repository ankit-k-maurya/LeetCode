function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
    
    const n = matrix.length;
    const m = matrix[0].length;
    let low = 0, high = n * m - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;
        
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) low = mid + 1;
        else high = mid - 1;  
    }
    return false;
};