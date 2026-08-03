function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0;
    let totalCost = 0;

    for(let i = 0; i < gas.length; i++){
        totalGas += gas[i];
        totalCost += cost[i];
    }
    if(totalCost > totalGas) return -1;

    let pos = 0;
    let sum = 0;

    for(let i = 0; i < gas.length; i++){
        sum += gas[i] - cost[i];
        if(sum < 0){
            sum = 0;
            pos = i+1;
        }
    }
    return pos;
};