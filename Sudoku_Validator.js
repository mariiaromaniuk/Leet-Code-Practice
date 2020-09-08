/*
   Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:
   - Every row must contain the numbers from 1-9 (no repeats)
   - Every column must also contain every number from 1-9
   - Every 3x3 subgroup/square must contain each number from 1-9
   Time Complexity: O(n^2), Space Complexity: O(1).
*/

// OPTION 1
function sudokuValidator(solution) {
  // check rows
  for (let i = 0; i < 9; i++) {
    let curRow = [];
    for (let j = 0; j < 9; j++) {
      // validation check if the number is already in the array
      if (curRow.indexOf(solution[i][j]) > -1) return false;
      curRow.push(solution[i][j]);
    }
  }
    
  // check columns
  for (let k = 0; k < 9; k++) {
    let curCol = [];
    for (let m = 0; m < 9; m++) {
      // validation check!
      if (curCol.indexOf(solution[m][k]) > -1) return false;
      curCol.push(solution[m][k]);
    }
  }
  
  // check the squares - going through the whole mini-grid and adding each number to our array
  for (let p = 0; p < 9; p += 3) {
    for (let q = 0; q < 9; q += 3) {
      let curSquare = [];
      for (let l = p; l < p + 3; l++) {
        for (let n = q; n < q + 3; n++) {
          // validation check!
          if (curSquare.indexOf(solution[l][n]) > -1) return false;
          curSquare.push(solution[l][n]);
        } 
      }
    }
  }
  return true;
}

// OPTION 2
function sudokuValidator(solution){

  // helper function - checks validity
  function check(arr){
    // default sort is ascending - converts elements to strings, then compares via UTF-16 values
    // luckily, it will work for sorting from 1-9 without any issue
    return arr.sort()
    // filter is checking that we have unique elements from 1-9, otherwise it will return false
    // val = current element, index = index of current element
    .filter((val, index) => {
      return val === index + 1;
    })
    // finally, checking length
    .length === 9; // will return false if it fails validation at any point
  }

  for (let i = 0; i < 9 ; i++){
    let col = [];
    let row = [];
    let square = [];
    
    for (let j = 0; j < 9; j++){
      // push in our column (switching j + i will get the column)
      col.push(solution[j][i]);
      
      // same goes here, except pushing in the row
      row.push(solution[i][j]);
      
      // get the square! (it needs to have one unique number per square too!)
      // there are 9 total squares in the grid
      square.push(solution[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]);
    }
    
    // using our helper function to check if each part of the puzzle is valid
    if(!check(col) || !check(row) || !check(square)) return false;
  }
  return true;
}
