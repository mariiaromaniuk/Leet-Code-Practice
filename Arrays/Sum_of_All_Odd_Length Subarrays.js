/*
 Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
 A subarray is a contiguous subsequence of the array. Return the sum of all odd-length subarrays of arr.
 
 Example 1:
 Input: arr = [1,4,2,5,3]
 Output: 58
 Explanation: The odd-length subarrays of arr and their sums are:
 [1] = 1
 [4] = 4
 [2] = 2
 [5] = 5
 [3] = 3
 [1,4,2] = 7
 [4,2,5] = 11
 [2,5,3] = 10
 [1,4,2,5,3] = 15
 If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
 
 Example 2:
 Input: arr = [1,2]
 Output: 3
 Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
*/

// OPTION 1
// Time: O(n^3), Space: O(1)
function sumOddLengthSubarrays(arr){
  let count = 0;
  for (let i = 0; i < arr.length; i++){ // helping in selecting the starting point
    for (let j = i; j < arr.length; j++){  // helping in selecting the endpoint point
      if ((i - j)%2 == 0){  // so that it only count the subarrays which have odd length
        for (let k = i; k <= j; k++) // looping from start point to end point and adding them
          count += arr[k];
      }
    }
  }
  return count;
}

// OPTION 2
// Time: O(n^2), Space: O(1)
function sumOddLengthSubarrays(arr){
  let oddLength = 1;
  let sum = 0;
    
  while (arr.length >= oddLength){
    for (let i = 0; i < arr.length-oddLength+1; i++){
      for (let j = i; j < oddLength+i; j++)
        sum += arr[j];
    }
    oddLength += 2;
  }
  return sum;
}

// OPTION 3
// Using Sliding Window 
// time O(N^2) space O(N)
function sumOddLengthSubarrays(arr){
  let oddLength = 1;
  let sum = 0;
    
  while(oddLength <= arr.length){
    let currentSum = 0;
    for (let i = 0; i < oddLength; i++){
      currentSum += arr[i];
    }
    sum += currentSum;
   
    for (let i = oddLength; i < arr.length; i++) {
      currentSum = currentSum + arr[i] - arr[i-oddLength];
      sum += currentSum;
    }
    oddLength += 2;
  }
  return sum;
}

// Test
console.log(sumOddLengthSubarrays([1,4,2,5,3])); // 58
console.log(sumOddLengthSubarrays([1,2])); // 3
console.log(sumOddLengthSubarrays([10,11,12])); // 66
