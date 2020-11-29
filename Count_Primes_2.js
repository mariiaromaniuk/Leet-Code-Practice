// Count the number of prime numbers less than a non-negative number, n.

// Two for loops to create map. O(n) for space
function countPrimes(n){
  const nonPrimeArr = [];
  let count = 0;
  for (let i = 2; i < n; i++){
    if (!nonPrimeArr[i]) count++;
    for (let j = 2; j * i < n; j++)
      nonPrimeArr[j*i] = true;
  }
  return count;
}
