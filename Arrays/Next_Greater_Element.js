/*
 You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. 
 Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
 The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. 
 If it does not exist, output -1 for this number.

 Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
 Output: [-1,3,-1]
 - For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
 - For number 1 in the first array, the next greater number for it in the second array is 3.
 - For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
*/
    

// Time: O(n), Space: O(1)
function nextGreaterElement(nums1, nums2){
  return nums1.map(n => {
    let found = nums2.indexOf(n);
    if (found !== -1){
      // find the next greater element's index
      while (nums2[++found] < n);
      // -1 if not found
      if (found >= nums2.length) 
        found = -1;
      else 
        found = nums2[found];
    }
    return found;
  });
}


// Time: O(m * n), m = nums1.length and n = nums2.length
// Space: O(1)
function nextGreaterElement(nums1, nums2){
  for (let i = 0; i < nums1.length; i++){
    for (let j = nums2.indexOf(nums1[i]); j < nums2.length; j++){
      if (nums2[j] > nums1[i]){
        nums1[i] = nums2[j];
        break;
      }
      if (j == nums2.length-1){
        // No number to its right in nums2 is greater than nums[i]
        nums1[i] = -1;
      }
    }
  }   
  return nums1;
}


// Time: O(n), Space: O(n)
function nextGreaterElement(nums1, nums2){
  let m = new Map(), stack = [];
  // (x,y) in m is 
  // (num, first num greater than num in the right)
  for (let i = 0; i < nums2.length; i++){
    while (stack.length > 0 && stack[stack.length-1] < nums2[i]) {
      m.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
    // stack contains numbers who are looking for greater number in its right
    // numbers that found the greater number leave the stack
  }
  return nums1.map(num => {
    if (m.has(num)) return m.get(num);
    else return -1;
  });
}

// Test
console.log(nextGreaterElement([4,1,2], [1,3,4,2]));  // [-1,3,-1] 
console.log(nextGreaterElement([2,4], 1,2,3,4]));  // [3,-1] 
