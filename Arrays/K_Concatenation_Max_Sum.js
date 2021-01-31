/*
 Given an integer array arr and an integer k, modify the array by repeating it k times.
 For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].
 Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.
 As the answer can be very large, return the answer modulo 109 + 7.

 Example 1:
 Input: arr = [1,2], k = 3
 Output: 9

 Example 2:
 Input: arr = [1,-2,1], k = 5
 Output: 2

 Example 3:
 Input: arr = [-1,-2], k = 7
 Output: 0
*/

// OPTION 1
var kConcatenationMaxSum = function(arr, k) {

    // values to calculate the maximum sum taking all values from the left and right
    let maxSumFromRight = 0;
    let maxSumFromLeft = 0;
    let rightSum = 0;
    let leftSum = 0;
	
	// values to calculate the max sub array sum
    let sum = 0;
    let maxSubArraySum = 0;
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
	
	    // calculate the maximum sum iterating from the left and the right
        leftSum += arr[i];
        maxSumFromLeft = Math.max(maxSumFromLeft, leftSum);
        rightSum += arr[arr.length - i - 1];
        maxSumFromRight = Math.max(maxSumFromRight, rightSum);
        

        // calculate the sum and max subarray sum
        sum += arr[i];
        maxSubArraySum = Math.max(maxSubArraySum, sum - min);
        min = Math.min(min, sum);
    }
	
	// if we only can use this one array then the best we can do is the max subArray Sum
    if (k === 1) return maxSubArraySum;

    // calculate the best joining only 2 arrays
    const bestWithTwoArrays = maxSumFromRight + maxSumFromLeft;
	
	// only for this challenge *see prompt
    const mod = 1000000007;        

    // we calculate the best by filling in the remaining unused arrays in the middle
	const bestWithTwoArrayscombinedWithRemainingArraySum = bestWithTwoArrays + (sum * (k - 2)) % mod
	
    return Math.max(maxSubArraySum, bestWithTwoArrays, bestWithTwoArrayscombinedWithRemainingArraySum)
};
