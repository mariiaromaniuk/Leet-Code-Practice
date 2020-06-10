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
