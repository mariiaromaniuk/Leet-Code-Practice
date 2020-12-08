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
  // Iterate through the matrix. For a 0, move on. For a 1, stop to investigate.
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        // Investigate the river and add its size to our sizes array
        sizes.push(visitRiver(matrix, i, j));
      }
    }
  }
  return sizes;
}

function visitRiver(matrix, i, j) {
  // Base Case:
  // Validate the i and j inputs first, then check if the node value is 0
  if (i >= matrix.length || j >= matrix[0].length || i < 0 || j < 0 || !matrix[i][j]) return 0;

  // Recursive Case:
  // Mutate the current matrix element to a 0 to indicate it has been visisted
  matrix[i][j] = 0;
  // Recurse to the 4 directions around you & return the final size
  return 1 + visitRiver(matrix,i+1,j) + visitRiver(matrix,i-1,j) + visitRiver(matrix,i,j+1) + visitRiver(matrix,i,j-1);
}

// Test
 riverSizes(matrix)  // [1, 2, 2, 2, 5]
