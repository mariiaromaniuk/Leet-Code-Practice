/*
   Nth Fibonacci Number
   Write a function that takes a positive integer n and returns the nth number in the Fibonacci sequence.
   The Fibonacci sequence starts with the numbers 0 and 1. Every subsequent number is the sum of the two 
   numbers that preceed it. For example, the first 10 Fibonacci numbers are:
   Number:      1   2   3   4   5   6   7   8   9   10  etc.
   Fib Number:  0,  1,  1,  2,  3,  5,  8,  13, 21, 34, etc.
/*

// Time Complexity: O(2^n), Space Complexity: O(n).
function fib(num) {
  if (num < 2) 
     return num - 1;
  else 
     return fib(num - 1) + fib(num - 2);
}


// Time Complexity: O(n), Space Complexity: O(n).
const initialHash = {
  1: 0,
  2: 1
}
function fib(num, hash = initialHash) {
  // If the hash table doesn't contain this num yet, calculate it
  if (hash[num] === undefined) 
    hash[num] = fib(num - 1, hash) + fib(num - 2, hash);
  return hash[num];
}


// Time Complexity: O(n), Space Complexity: O(1).
function fib(num) {
  if (num < 2) return num - 1;

  // Inialize an array to hold the last two numbers in the fib sequence
  let lastTwoNums = [0, 1];
  // Counter represents the nth fib number that is currently the sum of the lastTwoNums array
  let counter = 3

  while (counter < num) {
    // Reassign the last two numbers in the array
    lastTwoNums = [lastTwoNums[1], lastTwoNums[0]+lastTwonums[1]]
    counter++;
  }
  return lastTwoNums[0] + lastTwoNums[1];
}
