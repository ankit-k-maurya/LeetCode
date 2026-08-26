var longestConsecutive = function(nums: number[]): number {
    const numSet = new Set<number>(nums); // Added <number> type argument
    let longest = 0;

    for (let num of numSet) {
        // TypeScript now knows 'num' is safely a number
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
};
