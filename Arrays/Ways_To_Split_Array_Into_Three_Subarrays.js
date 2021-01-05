/*
 A split of an integer array is good if:
 - The array is split into three non-empty contiguous subarrays - named left, mid, right respectively from left to right.
 - The sum of the elements in left is less than or equal to the sum of the elements in mid, and the sum of the elements 
   in mid is less than or equal to the sum of the elements in right.
 Given nums, an array of non-negative integers, return the number of good ways to split nums. As the number may be too large, return it modulo 109 + 7.

 Example 1:
 Input: nums = [1,1,1]
 Output: 1 --> The only good way to split nums is [1] [1] [1].

 Example 2:
 Input: nums = [1,2,2,2,5,0]
 Output: 3 --> There are three good ways of splitting nums:
 [1] [2] [2,2,5,0]
 [1] [2,2] [2,5,0]
 [1,2] [2,2] [5,0]

 Example 3:
 Input: nums = [3,2,1]
 Output: 0 --> There is no good way to split nums.
*/

function waysToSplit(nums){
  const N = nums.length;
  const mod = 1e9 + 7;
  const pre = [...nums];
  for (let i = 1; i < N; i++) 
    pre[i] += pre[i - 1];
 
  let res = 0;
  // j is the smallest ending idx of mid arr j > i, j < N - 1
  // k is the largest ending idx of mid arr k >= j, k < N - 1
  for (let i = 0, j = 1, k = 1; i < N - 2; i++){
    j = Math.max(j, i + 1);
    k = Math.max(k, j);
    const left = pre[i];
    if (left > pre[N - 1] / 3) break;

    // while left > mid, we need to increase j
    while (left > pre[j] - pre[i] && j < N - 1) j++;
    if (j >= N - 1) break;

    /// while mid <= right, we still have room to increase k
    while (pre[k] - pre[i] <= pre[N - 1] - pre[k] && k < N - 1) k++;
    k--; // Shift back one position
    if (k < j || k >= N - 1) continue;

    res += (k - j + 1) % mod;
  }
  return res % mod;
}
