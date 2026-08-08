function twoSum(numbers: number[], target: number): number[] {
    let n: number = numbers.length;
    let res: number[] = new Array(2);
    let i: number = 0;
    let j: number = n-1;

    while(i < j){
        let front: number = numbers[i];
        let back: number = numbers[j];
        if(front + back == target){
            res[0] = i + 1;
            res[1] = j + 1;
            break;
        }
        else if(front + back > target) j--;
        else i++;
    }
    return res;
};