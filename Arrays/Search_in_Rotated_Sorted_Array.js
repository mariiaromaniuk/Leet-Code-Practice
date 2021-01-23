/*
 Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). You are given a target value to search. 
 If found in the array return its index, otherwise return -1. You may assume no duplicate exists 
 in the array. Your algorithm's runtime complexity must be in the order of O(log n).
*/

// OPTION 1
var search = function(nums, target) {
  let mid, left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1])
      mid = i;
  }
   
  // Using Binary search to find the 'array break':
  // while (left < right) {
  //   mid = Math.floor(nums.length / 2);
  //   if (nums[mid] > nums[mid + 1])
  //     break;
  //   else if (nums[mid] < nums[left])
  //     right = mid - 1;
  //   else if (nums[mid] > nums[left])
  //     left = mid + 1;
  // }
    
  if (target === nums[mid])
    return mid;

  if (target >= nums[left] && target < nums[mid])
    right = mid - 1;
  else if (target >= nums[mid + 1] && target <= nums[right])
    left = mid + 1;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (target === nums[mid])
      return mid;
    else if (target < nums[mid])
      right = mid - 1;
    else if (target > nums[mid])
      left = mid + 1;
  }
  return -1;
};

// OPTION 2
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right) {
        // beter than (right + left) / 2, because it can be a very large number, overflow
        const mid = Math.floor((right - left) / 2) + left; 
        if (nums[mid] === target)
            return mid;
        // if there is no array break in this half
        if (nums[left] < nums[mid]) {
            if (target >= nums[left] && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        } 
        // if there is a break in this half
        else {
            if (target > nums[mid] && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
};
