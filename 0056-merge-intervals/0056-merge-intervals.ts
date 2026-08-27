function merge(intervals: number[][]): number[][] {
    if (intervals.length === 0) return [];

    // 1. Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const ans: number[][] = [];
    
    for (let i = 0; i < intervals.length; i++) {
        // 2. If ans is empty OR current interval does not overlap with the last one
        if (ans.length === 0 || intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i]);
        } 
        // 3. If there is an overlap, merge by updating the end time
        else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
        }
    }
    
    return ans;
}
