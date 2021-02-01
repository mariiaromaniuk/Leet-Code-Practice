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

// OPTION 2
var kConcatenationMaxSum = function(arr, k) {
    let totalSum = 0;
    let maxTotalSum = 0;
    let longest = 0;
    let maxLongest = 0;
    
    // calculate sum of all items - totalSum, max iterative sum = maxTotalSum,
    // max longest Sequence - maxLongest, 
    // in the end - longest - will be the longest sum for the last item ( we will use it that in concatenation ) 
    
    for (let i=0; i<arr.length; i++) {
        totalSum += arr[i];
        if (totalSum > maxTotalSum) {
            maxTotalSum = totalSum;
        }
        longest += arr[i];
        if (longest < 0) {
            longest = 0;
        } else if(maxLongest < longest) {
            maxLongest = longest;   
        }
    }
   
    // if k is 1 - no need to concat, maxLongest is the result
    if (k === 1){
        return maxLongest;
    } else  {
        
         // if at the end we have positive sum that we can try to concat with the start of array,
		 // and potentionally to get bigger maxLongest  ( e.g. [1, -2, 1])
        if (longest > 0) {
            let previousLongest = longest;
            // iterate again from the start of array, but having longest value from the last item of previous iteration
            for (let i=0; i<arr.length; i++) {
                longest += arr[i];
                if (longest <= 0) { // if it will be less then 0 - it means that sequence is over
                    break;
                } else if (maxLongest < longest) {
                    maxLongest = longest;   
                }
            }
            
            // if at the end of second iteration we have bigger last sequence comparing to previous iteration - we found increasing pattern.
            // So longest - is already result after second iteration, and for last iteration we must use maxTotalSum. So calculate for the rest k-3
            if (longest > previousLongest) { 
                let diff = longest - previousLongest;
                maxLongest = longest+((k-3)*diff)+maxTotalSum;
            }
        } 
    }
    return maxLongest % (10**9+7);
};

// Test
console.log(kConcatenationMaxSum([1,2], 3)); // 9
console.log(kConcatenationMaxSum([1,-2,1], 5)); // 2
console.log(kConcatenationMaxSum([-1,-2], 7)); // 0
