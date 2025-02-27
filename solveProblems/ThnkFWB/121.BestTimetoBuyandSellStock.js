// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
 
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
 
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// let prices = [7, 1, 5, 3, 6, 4];
// ///Profit
// var maxProfit = function (prices) {
//     //Keep track of profit
//     //Go throught the array and see if there is profit
//     //if there is no profit,continue
//     //if there is profit,
//     //track our profit

//     //return profit
// };
// //Space complexity   = 0(1)
// //TimeCOmplexiry = O(N)^2
// console.log(maxProfit(maxProfit(prices)));

/**
 * @param {number[]} prices
 * @return {number}
 */
let prices = [7, 1, 5, 3, 6, 4];
///Profit
var maxProfit = function (prices) {
  //Keep track of profit
  let buyPrice = prices[0]; // 1
  let profit = 0; // 4 
  for (let i = 0; i < prices.length - 1; i++) {
    //Go throught the array and see if there is profit
    let tempProfit = prices[i + 1] - prices[i]; // 4

    if (tempProfit > 0) {
      if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if (prices[i + 1] - buyPrice > profit) {
        profit = prices[i + 1] - buyPrice;
      }
    }
  }
  return profit;
  //if there is no profit,continue
  //if there is profit,
  // check if my cuurent purchase price is less than my old one
  // replace my starting price
  //track our profit
  //computed profit > profit
  //return profit
};
//Space complexity   = 0(1)
//TimeCOmplexiry = O(N)^2
console.log(maxProfit(prices));
