/*
 Find all the elements of [1, n] inclusive that do not appear in this array.
 without extra space and in O(n) runtime?
  
 Approach:
 Since we know that all the elements are in the range [1, N]. We will be treating numbers 
 in the array as indices and mark corresponding locations in the array as negative. 
 
 Example: if we encounter 4, we will negate the number at index 3 (because the array is zero-indexed).
 - For each element nums[i], mark the element at the corresponding location negative if it's not 
   already marked so i.e. nums[\; nums[i] \;- 1\;] \times -1nums[nums[i]−1]×−1 .
 - Now, loop over numbers from 1 \cdots N1⋯N and for each number check if nums[j] is negative. 
   If it is negative, that means we've seen this number somewhere in the array.
 - Add all the numbers to the resultant array which don't have their corresponding locations 
   marked as negative in the original array.
*/

// Time: O(n), Space: O(1)
function findDisappearedNumbers(nums){
  let res = [];
  // use value as index and mark it as negative
  for (let i = 0; i < nums.length; i++){
    // some along the way will be negative already, so we need to take abs
    let idx = Math.abs(nums[i]) - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) res.push(i+1);
  }
  return res;
}

// Test
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
