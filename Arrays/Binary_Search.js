/*
 Given a sorted (in ascending order) integer array nums of n elements and a target value, 
 write a function to search target in nums. If target exists, then return its index, 
 otherwise return -1.
 Time Complexity: O(logn), Space Complexity: O(1).
*/

function search(nums, target){
  let left = 0;
  let right = nums.length-1;
  let mid;
    
  while (left <= right){
    mid = Math.ceil((right + left) / 2);
    if (target === nums[mid])
      return mid;
    else if (target < nums[mid])
      right = mid - 1;
    else if (target > nums[mid])
      left = mid + 1;
  }
  return -1;
}

// Test
console.log(search([1,2,3,4,5,6,7,8], 5)); // 4
