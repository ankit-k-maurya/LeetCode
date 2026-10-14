function findPeakElement(nums: number[]): number {
     let n = nums.length;
        if(n == 1)
            return 0;
        else if(nums[0] > nums[1])
            return 0;
        else if(nums[n-1] > nums[n-2])
            return n-1;
        let low = 1, high = n-2;
        while(low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1])
                return mid;
            else if(nums[mid] < nums[mid-1])
                high = mid-1;
            else
                low = mid+1;
        }
        return -1;
    };