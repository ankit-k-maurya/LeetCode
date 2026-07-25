function jump(nums: number[]): number {
    let n = nums.length;
    let ans = 0;
    let end = 0; //for counting the jumps(for each window one jump)
    let farthest = 0;
    
    for(let i = 0; i < n-1; i++){
        farthest = Math.max(farthest, nums[i]+i);
        
        if(farthest >= n-1){
            ans++;
            return ans;
        }

        if(i == end){
            ans++;
            end = farthest;
        }
    }
    return ans;
};