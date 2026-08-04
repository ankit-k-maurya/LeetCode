function trap(height: number[]): number {
    const n: number = height.length;
    if (n === 0) return 0;

    const left: number[] = new Array(n);
    const right: number[] = new Array(n);

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i < n; i++){
        if(height[i] > left[i-1]){
            left[i] = height[i];
        }
        else{
            left[i] = left[i-1];
        }
    }
    for(let i = n-2; i >= 0; i--){
        if(height[i] > right[i+1]){
            right[i] = height[i];
        }
        else{
            right[i] = right[i+1];
        }
    }
    let water: number = 0;
    for(let i = 0; i < n; i++){
        let x = Math.min(left[i], right[i]);
        water += x - height[i];
    }
    return water;
};