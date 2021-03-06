/*
 You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).
 We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. 
 pickIndex() should return the integer proportional to its weight in the w array. For example, for w = [1, 3], 
 the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking 
 the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).
 More formally, the probability of picking index i is w[i] / sum(w).
 
 Input: ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"], [[[1,3]],[],[],[],[],[]]
 Output: [null,1,1,1,1,0]

 Solution solution = new Solution([1, 3]);
 solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has probability of 3/4.
 solution.pickIndex(); // return 1
 solution.pickIndex(); // return 1
 solution.pickIndex(); // return 1
 solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has probability of 1/4.

 Since this is a randomization problem, multiple answers are allowed so the following outputs can be considered correct:
 [null,1,1,1,1,0]
 [null,1,1,1,1,1]
 [null,1,1,1,0,0]
 [null,1,1,1,0,1]
 [null,1,0,1,0,0]
 ...... and so on.
*/

// OPTION 1 --> Prefix Sums with Linear Search
// Time: O(n), Space: O(n)
var Solution = function(w) { // Time: O(n), Space: O(n)
  this.weights = new Map();
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

Solution.prototype.pickIndex = function() {// Time: O(n), Space: O(1)
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index<key) return this.weights.get(key)
};

// OPTION 2 --> Prefix Sums with Binary Search
// Time: O(n), Space: O(n)
class Solution {
  constructor(prefixSums, totalSum) {
    this.prefixSums = prefixSums;
    this.totalSum = totalSum;
  }

  Solution(w) { // Time: O(n), Space: O(n)
    this.prefixSums = new Array[w.length];
    let prefixSum = 0;
    for (let i = 0; i < w.length; ++i){
      prefixSum += w[i];
      this.prefixSums[i] = prefixSum;
    }
    this.totalSum = prefixSum;
  }

  pickIndex() { // // Time: O(log n), Space: O(1)
    let target = this.totalSum * Math.random();
    // run a binary search to find the target zone
    let low = 0, high = this.prefixSums.length;
    while (low < high) {
      // better to avoid the overflow
      let mid = low + (high - low) / 2;
      if (target > this.prefixSums[mid])
        low = mid + 1;
      else
        high = mid;
    }
    return low;
  }
}
