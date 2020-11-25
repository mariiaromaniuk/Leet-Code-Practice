/*
 Reverse a singly linked list. A linked list can be reversed either iteratively or recursively. Could you implement both?
 Input: 1 -> 2 -> 3 -> 4 -> 5 -> Null
 Output: 5 -> 4 -> 3 -> 2 -> 1 -> Null
*/

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
    
class LinkedList {
  constructor(){
    this.head = null;
  }
}
  

// Iterative solution
// Time: O(n), Space: O(1)
function reverseList(head){
  if (!head) return null;
  let prev = null,
      curr = head,
      next = null;
  while (curr != null){
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head = prev;
  return head;
}

  
// Recursive solution
// Time: O(n), Space: O(n)
function reverseList(head){
  // base case
  if (!head || !head.next)
    return head;
  // go all the way to the end
  let p = reverseList(head.next);
  // add reverse myself
  head.next.next = head;
  head.next = null;
  // go up
  return p;
}


// Test
let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
console.log(list);
console.log(reverseList(list.head));
