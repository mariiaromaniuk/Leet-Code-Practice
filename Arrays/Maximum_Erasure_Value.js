/*
 You are given an array of positive integers nums and want to erase a subarray containing unique elements. 
 The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score 
 you can get by erasing exactly one subarray.
 An array b is called to be a subarray of a if it forms a contiguous subsequence of a, that is, if it is 
 equal to a[l],a[l+1],...,a[r] for some (l,r).
 */

var maximumUniqueSubarray = function(nums) {
  let l = 0, r = 0, max = 0,hashSet=new Set(),sum = 0;
  while (r<nums.length) {
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
};
