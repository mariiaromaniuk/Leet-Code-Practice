/*
 You are given row x col grid representing a map where 1 represents land and 0 represents water.
 Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded 
 by water, and there is exactly one island (i.e., one or more connected land cells).
 The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
 One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
 Determine the perimeter of the island.
 
 Example:
 [[0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]]
 Answer: 16
*/

// OPTION 1 --> Time: O(mn), Space: O(1)
// Go through every cell on the grid and if you are at cell 1, 
// look for surrounding (up, right, down, left) cells. 
function islandPerimeter(grid){
  const rows = grid.length;
  const cols = grid[0].length;
  var perimeter = 0;
    
  for (var row = 0; row < rows; row++){
    for (var col = 0; col < cols; col++){
      if (!grid[row][col]) // if it's O skip
        continue;
      // A land cell without any surrounding 
      // land cell will have a perimeter of 4
      perimeter += 4;
      // Subtract 1 for each surrounding land cell
      if (row > 0 && grid[row - 1][col]) perimeter--;
      if (col > 0 && grid[row][col - 1]) perimeter--;
      if (row < rows - 1 && grid[row + 1][col]) perimeter--;
      if (col < cols - 1 && grid[row][col + 1]) perimeter--;
    }
  }
  return perimeter;
}

// OPTION 2 --> Time: O(mn), Space: O(1)
function islandPerimeter(grid){
  let rows = grid.length;
  let cols = grid[0].length;
  let up, down, left, right;
  let result = 0;
        
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      if (grid[r][c] === 1){
        if (r === 0) up = 0; 
        else up = grid[r-1][c]; 
                     
        if (c === 0) left = 0; 
        else left = grid[r][c-1]; 
                        
        if (r === rows-1) down = 0; 
        else down = grid[r+1][c]; 
                        
        if (c === cols-1) right = 0; 
        else right = grid[r][c+1]; }
                        
        result += 4 - (up + left + right + down);
    }
  }
  return result;
}

// OPTION 3 --> Time: O(mn), Space: O(1)
// Since we are traversing the grid from left to right, 
// and from top to bottom, for each land cell we are currently at, 
// we only need to check whether the LEFT and UP cells are 
// land cells with a slight modification on previous approach.
function islandPerimeter(grid){
  let rows = grid.length;
  let cols = grid[0].length;
  let result = 0;
  
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      if (grid[r][c] === 1){
        result += 4;
        if (r > 0 && grid[r-1][c] === 1) 
          result -= 2;
         if (c > 0 && grid[r][c-1] === 1) 
          result -= 2;
      }
    }
  }
  return result;
}

// OPTION 4 --> Time: O(mn), Space: O(1)
function islandPerimeter(grid){
  let [island, neighbour] = grid.reduce((res, arr, index) => {
    arr.forEach((num, i) => {
      if (num) {
        res[0]++;
        if (arr[i+1]) res[1]++;
        if ((grid[index+1] && grid[index+1][i])) res[1]++;
      }
    })
    return res;
  }, [0, 0]);
  return island * 4 - neighbour * 2;
};

// Test
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
