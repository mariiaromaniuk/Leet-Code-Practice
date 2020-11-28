/*
Given an integer N, the task is to group numbers such that each group is mutually co-prime together with the total grouping is minimum.
Approach: The key observation in this problem is two consecutive numbers are always co-prime. That is GCD(a, a+1) = 1. 
Another important observation is even numbers can’t be listed in one group. Because they will lead to the greatest common divisor of 2. 
Therefore, every consecutive even and odd numbers can be grouped into one group and 1 can be in any group because the greatest common 
divisor of numbers with 1 is always 1.
*/

// group mutually co-prime numbers into one group with min group possible 
function mutuallyCoprime(n){
  if (n <= 3){
    // Loop for the numbers less than the 4
    for (let j = 1; j < n + 1; j++)
      console.log(j + " "); 
  } else { 
    // Integers 1, 2 and 3 can be grouped into one group 
    console.log("1 2 3"); 
    for (let j = 4; j < n; j += 2){ 
      // Consecutive even and odd numbers 
      console.log(j + " " + (j + 1)); 
    } 
    if (n % 2 == 0) console.log(n); 
  } 
} 
  
// Test
console.log(mutuallyCoprime(5));
console.log(mutuallyCoprime(8));
