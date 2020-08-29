/*
   Nth Fibonacci Number
   Write a function that takes a positive integer n and returns the nth number in the Fibonacci sequence.
   The Fibonacci sequence starts with the numbers 0 and 1. Every subsequent number is the sum of the two 
   numbers that preceed it. For example, the first 10 Fibonacci numbers are:
   Number:      1   2   3   4   5   6   7   8   9   10  etc.
   Fib Number:  0,  1,  1,  2,  3,  5,  8,  13, 21, 34, etc.
*/

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


// ---------------------------------------------------------------------------------------- //
/*
   You are given a two-dimensional array (a matrix) of potentially unequal height and width that contains only values of 0 and 1. 
   Each 0 represents land, and each 1 represents part of a river. A river consists of any number of 1s that are either horizontally 
   or vertically adjacent, but not diagonally adjacent. The number of adjacent 1s forming a river determine it's size.
   Write a function that returns an array of the sizes of all rivers represented in the input matrix. 
   The sizes do not need to be in any particular order.

Examples:
const matrix = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1]
]
riverSizes(matrix) //should return [1, 1, 5]

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0]
]
riverSizes(matrix)  //should return [1, 2, 2, 2, 5]
*/

function riverSizes(matrix) {
	const sizes = [];

	//Iterate through the matrix. For a 0, move on. For a 1, stop to investigate.
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 1) {
				//Investigate the river and add its size to our sizes array
				sizes.push(visitRiver(matrix, i, j));
			}
		}
	}
	return sizes;
}

function visitRiver(matrix, i, j) {
	//Base Case:
	//Validate the i and j inputs first, then check if the node value is 0
	if (i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0 || !matrix[i][j]) return 0;

	//Recursive Case:
	//Mutate the current matrix element to a 0 to indicate it has been visisted
	matrix[i][j] = 0;
	//Recurse to the 4 directions around you & return the final size
	return 1 + visitRiver(matrix,i+1,j) + visitRiver(matrix,i-1,j) + visitRiver(matrix,i,j+1) + visitRiver(matrix,i,j-1);
}
