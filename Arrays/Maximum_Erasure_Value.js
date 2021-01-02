/*
 You are given an array of positive integers nums and want to erase a subarray containing unique elements. 
 The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score 
 you can get by erasing exactly one subarray.
 An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is 
 equal to a[l],a[l+1],...,a[r] for some (l,r).
 
 Example 1:
 Input: nums = [4,2,4,5,6]
 Output: 17 --> The optimal subarray here is [2,4,5,6].
 
 Example 2:
 Input: nums = [5,2,1,2,5,2,1,2,5]
 Output: 8 --> The optimal subarray here is [5,2,1] or [1,2,5].
 */

// OPTION 1
function maximumUniqueSubarray(nums) {
  let l = 0, r = 0, max = 0,hashSet=new Set(),sum = 0;
  while (r < nums.length) {
    if (!hashSet.has(nums[r])) {
      hashSet.add(nums[r]);
      sum += nums[r];
      max = Math.max(max, sum);
      r++;
    } else {
      hashSet.delete(nums[l]);
      sum -= nums[l];
      l++; 
    }                          
  }
  return max;    
}

// OPTION 2
function maximumUniqueSubarray(nums){
  let a = new Int8Array(10001), sum = max = 0, len = nums.length;
  for (let l = 0, r = 0; r < len; r++){
    a[nums[r]]++, sum += nums[r];
    while (a[nums[r]] > 1) a[nums[l]]--, sum -= nums[l++];
    max = sum > max ? sum : max;
  }
  return max;
}
