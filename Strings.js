/* 
  Given an string str, create a function that returns a boolean, 
  corresponding to whether that string is a palindrome (spelled the same 
  backwards and forwards). Our palindrome check should be case-insensitive.
*/
// Iterative solution
// Time Complexity: O(n), Space Complexity: O(1)
function isPalindrome(str) {
  if (str.length <= 1)
    return true;

  str = str.toLowerCase();
  let mid = Math.floor(str.length/2);
  let left = 0, right = str.length-1;

  while (left < right) {
    if (str[left] !== str[right])
       return false;
    else {
       left++;
       right--;
    }
  }
  return true;
}

// Recursive solution
// Time Complexity: O(n), Space Complexity: O(n)
function isPalindromeRec(str) {
    if (str.length <= 1)
        return true;
    else {
      if (str[0].toLowerCase() !== str[str.length-1].toLowerCase())
         return false;
      else
         return isPalindromeRec(str.slice(1, str.length-1));
    }
}


// ---------------------------------------------------------------------------------------- //
/*
   Find the index of the first appearance of a particular substring inside another string.
   Time Complexity: O(h*n), Space Complexity: O(1).
*/

// OPT1
function indexOf(subStr, str) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    for (let j = 0; nIdx < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) 
        break;
      if (j + 1 === subStr.length) 
        return i;
    }
  }
  return -1;
}

// OPT2
function indexOf(subStr, str) {
  if (!subStr.length || subStr.length > str.length) {
    return -1;
  }
  let flag = false;

  for (let i = 0; i <= str.length - subStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] === subStr[j]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;
}

// OPT3
const indexOf = (subStr, str) => {
  let nLen = subStr.length, sub;

  for (let i = 0; i <= str.length-subStr.length; i++) { 
    sub = str.slice(i, nLen + i);
    if (sub === subStr) 
      return i;
  }
  return -1
}

// OPT4
const indexOf = (subStr, str) => {
  if (subStr.length > str.length) 
    return -1;

  // we want to match as many characters as the subStr is long
  let toMatch = subStr.length;
  let start = 0, nIdx = 0, hIdx = 0;

  while (toMatch && hIdx < str.length) { 
    if (str[hIdx] === subStr[nIdx]) {
      hIdx++;
      nIdx++;
      toMatch--;
    } else {
      hIdx = ++start;
      nIdx = 0;
      toMatch = subStr.length;
    }
  }
  // if we matched all characters, then the current value of start will 
  // be the starting index of the subStr in the str
  return ! toMatch ? start : -1
}



// ---------------------------------------------------------------------------------------- //
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
