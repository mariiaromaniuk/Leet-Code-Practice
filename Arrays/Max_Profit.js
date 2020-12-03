/* 
   Say you have an array for which the ith element is the price of a given stock on day i.
   If you were only permitted to complete at most one transaction (i.e., buy one and sell 
   one share of the stock), design an algorithm to find the maximum profit.
   Note that you cannot sell a stock before you buy one.
*/

const maxProfit = function(prices) {
    // intialize a variable to keep count of the current highest profit
    let maxProfit = 0;
    // we can also initialize min at prices[0] because the starting value 
    // of min will most likely be reassigned when we see a lower price-point
    let min = Infinity; 
    for (let i = 0; i < prices.length; i++){
        // if the current price is less than the lowest 
        // price point we've seen so far, reassign the min
        if (prices[i] < min){
            min = prices[i]
        }
        let profit = prices[i] - min
        if (profit > maxProfit){
                maxProfit = profit
        }
    }
    return maxProfit
};
