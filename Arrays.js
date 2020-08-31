/* 
   Say you have an array for which the ith element is the price of a given stock on day i.
   If you were only permitted to complete at most one transaction (i.e., buy one and sell 
   one share of the stock), design an algorithm to find the maximum profit.
   Note that you cannot sell a stock before you buy one.
*/

const maxProfit = function(prices) {
    // intialize a variable to keep count of the current highest profit
    let maxProfit = 0;
    // we can also initialize min at prices[0] because the starting value 
    // of min will most likely be reassigned when we see a lower price-point
    let min = Infinity; 
    for (let i = 0; i < prices.length; i++){
        // if the current price is less than the lowest 
        // price point we've seen so far, reassign the min
        if (prices[i] < min){
            min = prices[i]
        }
        let profit = prices[i] - min
        if (profit > maxProfit){
                maxProfit = profit
        }
    }
    return maxProfit
};


// ---------------------------------------------------------------------------------------- //
/*
   Write a function that determines if a singly linked list is a palindrome (the same 
   backwards as forwards). Your function should not alter the linked list itself.
   Time Complexity: O(n), Space Complexity: O(n).
*/

function palindrome(head){
  let arr = [];
  let p = head;

  while (p !== null){
    arr.push(p.val);
    p = p.next;
  }

  for (let i = 0; i < Math.ceil(arr.length/2); i++){
    if (arr[i] !== arr[arr.length-1-i])
    return false;
  }
  return true;

}
console.log(palindrome({val: 1, next: {val: 2, next: {val: 1, next: null}}}));
console.log(palindrome({val: 6, next: {val: 3, next: {val: 3, next: {val: 6, next: null}}}}));
console.log(palindrome({val: 2, next: {val: 7, next: {val: 5, next: null}}}));

function isPalindrome(node) {
  let slow = node;
  let fast = node;
  let stack = [];

  while(fast && fast.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next.next;
  }

  // If fast is falsey, it points to null and the list is even. No action necessary.
  // If fast is truthy, it points to the last node and the list is odd so we can skip the middle slow node.
  if (fast) slow = slow.next;

  while(slow) {
    if (stack[stack.length-1] === slow.val) {
      stack.pop();
      slow = slow.next;
    } else 
      return false;
  }
  return true;
}


// ---------------------------------------------------------------------------------------- //
/*
   Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
   (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]). You are given a target value to search. 
   If found in the array return its index, otherwise return -1. You may assume no duplicate exists 
   in the array. Your algorithm's runtime complexity must be in the order of O(log n).
*/

// OPTION 1
var search = function(nums, target) {
  let mid, left = 0;
  let right = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i+1])
      mid = i;
  }
   
  // Using Binary search to find the 'array break':
  // while (left < right) {
  //   mid = Math.floor(nums.length / 2);
  //   if (nums[mid] > nums[mid + 1])
  //     break;
  //   else if (nums[mid] < nums[left])
  //     right = mid - 1;
  //   else if (nums[mid] > nums[left])
  //     left = mid + 1;
  // }
    
  if (target === nums[mid])
    return mid;

  if (target >= nums[left] && target < nums[mid])
    right = mid - 1;
  else if (target >= nums[mid + 1] && target <= nums[right])
    left = mid + 1;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (target === nums[mid])
      return mid;
    else if (target < nums[mid])
      right = mid - 1;
    else if (target > nums[mid])
      left = mid + 1;
  }
  return -1;
};

// OPTION 2
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    
    while (left <= right) {
        // beter than (right + left) / 2, because it can be a very large number, overflow
        const mid = Math.floor((right - left) / 2) + left; 
        if (nums[mid] === target)
            return mid;
        // if there is no array break in this half
        if (nums[left] < nums[mid]) {
            if (target >= nums[left] && target < nums[mid])
                right = mid - 1;
            else
                left = mid + 1;
        } 
        // if there is a break in this half
        else {
            if (target > nums[mid] && target <= nums[right])
                left = mid + 1;
            else
                right = mid - 1;
        }
    }
    return -1;
};


// ---------------------------------------------------------------------------------------- //
/*
   Given a sorted (in ascending order) integer array nums of n elements and a target value, 
   write a function to search target in nums. If target exists, then return its index, 
   otherwise return -1.
   Time Complexity: O(logn), Space Complexity: O(1).
*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid;
    
    while (left <= right) {
        mid = Math.ceil((right + left) / 2);
        if (target === nums[mid])
            return mid;
        else if (target < nums[mid])
            right = mid - 1;
        else if (target > nums[mid])
            left = mid + 1;
    }
    return -1;
};


// ---------------------------------------------------------------------------------------- //
/*
   Write a function that determines if a Sudoku solution is valid. Your input will be a 2-D array that represents a 9x9 matrix. Sudoku has three rules:
   - Every row must contain the numbers from 1-9 (no repeats)
   - Every column must also contain every number from 1-9
   - Every 3x3 subgroup/square must contain each number from 1-9
   Time Complexity: O(n^2), Space Complexity: O(1).
*/

// OPTION 1
function sudokuValidator (solution) {
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
function validSolution (solution){

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


// ---------------------------------------------------------------------------------------- //
/*
   Write a function to check if given integer is a palindrome without using integer.toString().
   Time Complexity: O(n), Space Complexity: O(1).
*/
function isPalindrome(num){
  let arr = [];

  while(num){
    arr.push(num % 10);
    num = Math.floor(num/10);
  }

  for (let i = 0; i < Math.floor(arr.length/2); i++){
    if (arr[i] !== arr[arr.length-1-i]) return false;
  }
  return true;
}
