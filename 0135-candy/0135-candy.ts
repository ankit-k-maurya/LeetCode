function candy(ratings: number[]): number {
    if(ratings.length ==0){
        return 0;
    }
    let res = 1 , up = 0, down = 0, peak = 0;

    for(let i = 1; i < ratings.length; i++){
        let prev = ratings[i-1];
        let curr = ratings[i];

        if(prev < curr){
            up++;
            down = 0;
            peak = up;
            res += 1 + up;
        }
        else if(prev == curr){
            up = 0;
            down = 0;
            peak = 0;
            res += 1;
        }
        else{
            up = 0;
            down++;
            res += 1 + down;
            if(peak >= down){
                res--;
            }
        }
    }
    return res;
};