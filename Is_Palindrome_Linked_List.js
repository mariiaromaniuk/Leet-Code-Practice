// Write a function that determines if a singly linked list is a palindrome (the same 
// backwards as forwards). Your function should not alter the linked list itself.
// Time Complexity: O(n), Space Complexity: O(n).

// OPTION 1
function isPalindrome(head){
  let arr = [];
  let p = head;

  while (p){
    arr.push(p.val);
    p = p.next;
  }

  for (let i = 0; i < Math.ceil(arr.length/2); i++){
    if (arr[i] !== arr[arr.length-1-i])
    return false;
  }
  return true;

}

// OPTION 2
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

  while (slow) {
    if (stack[stack.length-1] === slow.val) {
      stack.pop();
      slow = slow.next;
    } else 
      return false;
  }
  return true;
}

// Test
console.log(isPalindrome({val: 1, next: {val: 2, next: {val: 1, next: null}}}));
console.log(isPalindrome({val: 6, next: {val: 3, next: {val: 3, next: {val: 6, next: null}}}}));
console.log(isPalindrome({val: 2, next: {val: 7, next: {val: 5, next: null}}}));
