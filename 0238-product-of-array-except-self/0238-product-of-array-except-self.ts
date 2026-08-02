function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const ans: number[] = new Array(n).fill(1);
    let curr = 1;
    for(let i = 1; i < n; i++){
        curr *= nums[i-1];
        ans[i] *= curr;
    }
    curr = 1;
    for(let i = n-2; i >=0; i--){
        curr *= nums[i+1];
        ans[i] *= curr;
    }
    return ans;
};