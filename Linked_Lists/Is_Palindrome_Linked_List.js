// Write a function that determines if a singly linked list is a palindrome (the same 
// backwards as forwards). Your function should not alter the linked list itself.
// Time Complexity: O(n), Space Complexity: O(n).

// OPTION 1 -- > Time: O(n), Space: O(1)
function isPalindrome(head){
  let curr = head;
  const traverse = node => {
    if (!node) return true;
    // traverse to the end of the list first
    const prevIsSame = traverse(node.next);
    // when the call stack bounces back, compare the values 
    // from the head and from the bottom up
    const currIsSame = curr.val === node.val;
    curr = curr.next;
    return prevIsSame && currIsSame;
  }
  return traverse(head);
}

// OPTION 2 -- > Using Array, Time: O(n), Space: O(n)
function isPalindrome(head){
  let arr = [];
  while (head){
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((a,i) => a === arr[arr.length - i - 1]);
}

// OPTION 3 --> Using Stack
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
