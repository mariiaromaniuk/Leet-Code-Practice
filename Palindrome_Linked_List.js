/*
Given a singly linked list, determine if it is a palindrome.
Follow up: Could you do it in O(n) time and O(1) space?
*/

OPTION 1 -- > Time: O(n), Space: O(1)
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

OPTION 2 -- > Using Array, Time: O(n), Space: O(n)
function isPalindrome(head){
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr.every((a,i) => a === arr[arr.length - i - 1]);
}
