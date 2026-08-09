function minSubArrayLen(target: number, nums: number[]): number {
    let left: number = 0;
    let currSum = 0;
    let minLen = Infinity;

    for(let right = 0; right < nums.length; right++){
        currSum += nums[right];
        while(currSum >= target){
            minLen = Math.min(minLen, right-left+1);
            currSum -= nums[left];
            left++;
        }
    }
    if(minLen == Infinity ) return 0;
    return minLen;
};