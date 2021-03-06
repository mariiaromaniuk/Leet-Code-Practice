/*
 Given two positive integers n and k.
 A factor of an integer n is defined as an integer i where n % i == 0.
 Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

 Example 1:
 Input: n = 12, k = 3
 Output: 3
 Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.

 Example 2:
 Input: n = 7, k = 2
 Output: 7
 Explanation: Factors list is [1, 7], the 2nd factor is 7.
 
 Example 3:
 Input: n = 4, k = 4
 Output: -1
 Explanation: Factors list is [1, 2, 4], there is only 3 factors. We should return -1.
*/

// Time: O(n log n), Space: O(1)
function kthFactor(n, k){
  if (k === 1) return 1;
  let j = 0;
  for (let i = 1; i <= n/2; i++){
    if (i === (n-1)/2 && k === j+1) return n;
    if (n % i === 0){ 
      j++;
      if (i === n/2 && (k === j+1)) return n;
      if (k === j) return i
    }
  }
  return -1;
}

// Test
console.log(kthFactor(12, 3)); // 3
console.log(kthFactor(7, 2)); // 7
console.log(kthFactor(4, 4)); // -1
