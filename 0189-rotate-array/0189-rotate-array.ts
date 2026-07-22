/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    let start = 0;
    let end = nums.length - 1;
    nums = reverseArr(nums, start, end);
    start = 0;
    end = k-1;
    nums = reverseArr(nums, start, end);
    start = k;
    end = nums.length-1; 
    nums = reverseArr(nums, start, end) 
};

function reverseArr(nums: number[], start: number, end: number): number[]{
    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums;
}