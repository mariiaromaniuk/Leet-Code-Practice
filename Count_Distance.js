/*
 Given a positive integer n, find and return the longest distance between any two adjacent 1's 
 in the binary representation of n. If there are no two adjacent 1's, return 0. Two 1's are adjacent 
 if there are only 0's separating them (possibly no 0's). The distance between two 1's is the 
 absolute difference between their bit positions. For example, 1's in "1001" have a distance of 3.
*/ 

function binaryGap(N) {
  let currCount = 0; 
  let max = 0;
  N = N.toString(2);
  
  for (let i = 0; i < N.length; i++) {
    currCount++;
    if (currCount > max && N[i + 1] === '1') max = currCount;
    if (N[i + 1] === '1') currCount = 0;
  }
  
  return max;
}

// Test
console.log(binaryGap(22)); // 2
console.log(binaryGap(6)); // 1
