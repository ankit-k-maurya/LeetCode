/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let l: number = 0, r: number = matrix.length - 1;

    while (l < r) {
        // Fix 1: Loop must run up to (r - l) to scale with the inner layers
        for (let i = 0; i < r - l; i++) { 
            // Fix 2: top must equal l (not 1) to match the current layer
            let top = l, bottom = r; 

            // Save the Top-Left element
            let topLeft = matrix[top][l + i];
            
            // Move Bottom-Left into Top-Left
            matrix[top][l + i] = matrix[bottom - i][l];
            
            // Move Bottom-Right into Bottom-Left
            matrix[bottom - i][l] = matrix[bottom][r - i];
            
            // Move Top-Right into Bottom-Right
            matrix[bottom][r - i] = matrix[top + i][r]; 
            
            // Move Top-Left into Top-Right
            matrix[top + i][r] = topLeft;
        }
        l++;
        r--;
    }
}
