/*
   Given an array of distinct integers and an integer representing a target sum, write a function 
   that returns an array of all triplets in the input array that sum to the target sum.
   Time Complexity: O(n^2), Space Complexity: O(n).
*/

// OPT1
function arrayThreeSum(arr, targetSum){
  arr.sort((a, b) => a-b);
  const solution = [];

  for (let i = 0; i < arr.length-2; i++){
    let element = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    //for each element in the array check to see if any two other integers in the array add to the target sum
    while (leftIndex < rightIndex){
      let currentSum = element + arr[left] + arr[right];

      if (currentSum === targetSum){
        solution.push([element, arr[left], arr[right]]);
        left++;
        right--;
      } else if(currentSum > targetSum){
        right--;
      } else if (currentSum < targetSum){
        left++;
      }
    }
  }
  return solution;
}

// OPT2
function arrayThreeSum(arr, targetSum){
  const solution = [];
  for (let i = 0; i < arr.length-1; i++){
    let currentSum = targetSum - arr[i];
    // a hash table to store all of the integers from arr[i] we have tried
    let memo = {};
    for (let j = i+1; j < arr.length; j++){
      if (memo[currentSum-arr[j]])
        solution.push([arr[i], currentSum-arr[j], arr[j]]);
      else 
        memo[arr[j]] = true;
    }
  }
  return solution;
}
