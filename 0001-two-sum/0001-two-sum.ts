function twoSum(nums: number[], target: number): number[] {
    const complements = new Map<number, number>();

    for(let i = 0 ; i < nums.length; i++){
        const complement = target - nums[i];
        if(complements.has(complement))
        return [complements.get(complement),i]
        
        complements.set(nums[i], i);
    }
    return [];
};