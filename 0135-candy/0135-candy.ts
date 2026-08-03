function candy(ratings: number[]): number {
    let n = ratings.length;
    let candi: number[] = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        if(ratings[i] > ratings[i-1]){
            candi[i] = candi[i-1] + 1;
        }
    }
        for(let i = n-2; i >= 0; i--){
           if(ratings[i+1] < ratings[i] && candi[i+1] >= candi[i]){
            candi[i] = candi[i+1] + 1;
        }
        }
        let result = 0;
        for(let i = 0; i < n; i++){
            result += candi[i];
        }
        return result;
    
};