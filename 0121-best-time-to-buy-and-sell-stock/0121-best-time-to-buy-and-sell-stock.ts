function maxProfit(prices: number[]): number {
         let n = prices.length;
         let buy = prices[0];
         let profit = 0;

         for(let i = 0; i < n; i++){
            if(prices[i] < buy){
               buy = prices[i];
            }
            else if(prices[i] - buy > profit){
                profit = prices[i]-buy;
            }
         }
         return profit;
};