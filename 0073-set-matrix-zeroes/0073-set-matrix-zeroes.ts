/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let fr: boolean = false;
    let fc: boolean = false;

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                if(i === 0) fr = true;
                if(j === 0) fc = true;
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    } 
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++){
          if(matrix[i][0] === 0 || matrix[0][j] === 0){
            matrix[i][j] = 0;
          }  
        }
    }
    if(fr){
        for(let c = 0; c < matrix[0].length; c++){
            matrix[0][c] = 0;
        }
    }
    if(fc){
        for(let r = 0; r < matrix.length; r++){
            matrix[r][0] = 0;
        }
    }
};