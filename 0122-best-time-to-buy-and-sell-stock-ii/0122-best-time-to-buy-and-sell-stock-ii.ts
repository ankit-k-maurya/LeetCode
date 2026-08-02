function maxProfit(prices: number[]): number {
         let n = prices.length;
         let buy = prices[0];
         let profit = 0;

         for (let i = 1; i < n; i++){
            if(prices[i] > prices[i-1]){
                profit += prices[i] - prices[i-1];
            }
         }
         return profit ;
};