/*
 Given an integer k, return the minimum number of Fibonacci numbers whose sum is equal to k. 
 The same Fibonacci number can be used multiple times. The Fibonacci numbers are defined as:
 F1 = 1
 F2 = 1
 Fn = Fn-1 + Fn-2 for n > 2.
 It is guaranteed that for the given constraints we can always find such Fibonacci numbers that sum up to k.
 
 Example 1:
 Input: k = 7
 Output: 2 
 Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... 
 For k = 7 we can use 2 + 5 = 7.

 Example 2:
 Input: k = 10
 Output: 2 
 Explanation: For k = 10 we can use 2 + 8 = 10.

 Example 3:
 Input: k = 19
 Output: 3 
 Explanation: For k = 19 we can use 1 + 5 + 13 = 19.
*/

// Time: O(n), Space: O(n)
function findMinFibonacciNumbers(k){
  let sequence = [1, 1], sum = sequence[0] + sequence[1];
  let i = 2;
  while (sum <= k){
    sequence.push(sum);
    i++;
    sum = sequence[i-1]+sequence[i-2];
  }
  let j = sequence.length-1, res = 0;
  while (k){
    if (k >= sequence[j]) 
      k -= sequence[j], res++;
    j--;
  }
  return res;
}

// Test
console.log(findMinFibonacciNumbers(7)); // 2
console.log(findMinFibonacciNumbers(10)); // 2
console.log(findMinFibonacciNumbers(19)); // 3
