/*
 Given an array of integers nums and an integer target, return indices of the two numbers 
 such that they add up to target. Each input would have exactly one solution, and you may 
 not use the same element twice.
*/

// OPTION 1 -> Time: O(n), Space: O(1).
function twoSum(nums, target){
  let left = 0,
      right = nums.length-1,
      sum = 0;
  while (left < right){
    sum = nums[left] + nums[right];
    if (sum === target) 
      return [left, right];
    if (target > sum) 
      left++; // we need a pair with a bigger sum
    else 
      right--; // we need a pair with a smaller sum
  }
  return [-1, -1];
}

// OPTION 2 -> Time: O(n), Space: O(n).
// One-pass Hash Table (JS object)
function twoSum(nums, target){
  const idxMap = {}; // to store numbers and their indices
  for (let i = 0; i < nums.length; i++){
    if (target-nums[i] in idxMap)
      return [idxMap[target-nums[i]], i];
    idxMap[nums[i]] = i;
  }
  return [-1, -1];
}

// OPTION 3 -> Time: O(n), Space: O(n).
// One-pass using Set
function sumOfTwo(nums, target){
  if (!nums.length) return -1;
  
  let dic = new Set();
  for (let i = 0; i < nums.length; i++){
    if (nums[i] <= target) 
      dic.add(arr[i]);
  }
  for (let i = 0; i < nums.length; i++){
    let curr = target - nums[i];
    if (dic.has(curr)) {
      return curr;
    }
  }
  return -1;
}

// Test
console.log(twoSum([1, 2, 3, 4, 6], 6));
console.log(twoSum([2, 5, 9, 11], 11));
console.log(sumOfTwo([1010, 5, 28, 178, 299, 366, 675, 979, 1456, 1721, 2021, 2050, 3000], 2020));
