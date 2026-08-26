function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hm: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (hm.has(nums[i])) { 
            let pastIndex = hm.get(nums[i])!;
            if (Math.abs(pastIndex - i) <= k) {
                return true;
            }
        }
        hm.set(nums[i], i); 
    }
    return false;
}
