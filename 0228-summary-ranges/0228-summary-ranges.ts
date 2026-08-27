function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    if (nums.length === 0) return result;

    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        // Check if the sequence breaks or we reached the end of the array
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                result.push(start.toString());
            } else {
                result.push(`${start}->${nums[i - 1]}`);
            }
            
            // Set the start for the next range
            if (i < nums.length) {
                start = nums[i];
            }
        }
    }

    return result;
}
