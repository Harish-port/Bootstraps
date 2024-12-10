var maxProfit = function (prices) {
  let minPrice = Infinity; // Initialize with a very high value
  let maxProfit = 0; // Initialize maximum profit as 0

  for (let i = 0; i < prices.length; i++) {
    // Manually find the minimum price so far
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      // Calculate profit if sold at the current price
      const profit = prices[i] - minPrice;
      // Manually update the maximum profit
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
};

// Example usage:
console.log(maxProfit([10, 1, 5, 6, 7, 1])); // Output: 6
console.log(maxProfit([10, 8, 7, 5, 2])); // Output: 0
