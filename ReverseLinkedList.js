/*
  Given the head of a non-empty singly linked list of nodes with a property val (the value of the node) and 
  a property next (a reference to the next node), reverse the order of the nodes. Assume that the list has 
  already been constructed for you. You may not create a new list, you must modify the original linked list 
  and return the head of the reversed list.
*/

// definition of a linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

// 1 --> 2 --> 3 --> null
node1.next = node2;
node2.next = node3;

reverseLinkedList(node1) // return value: node3

// After calling your function on the head of the original list (node1), 
// the return value should be the head of the reversed list (in this case, node3).
// the list should then look like this: 3 --> 2 --> 1 --> null


/*
  OPTION 1 - Recursive
  Recursion helps us to simulate traversing the linked list "backwards". We will recursively traverse the list forward, 
  "building up" the call stack as we go. On each recursively call, we will keep a reference to the previous node we visited. 
  When we reach the tail of our list, every node will have a reference to it's previous node. We can then simply start 
  reassigning each node's next pointer to it's previous node as the call stack "collapses."
  
  Time complexity: O(n) (where n is the number of nodes in the list)
  Space complexity: O(n) (where n is the depth of the call stack)
*/

const reverseLinkedList = (head, prev = null) => {
  // reference to the head of the reversed list
  let newHead;
  
  // if there is a next node, recurse on the next node
  if (head.next) 
     newHead = reverseLinkedList(head.next, head);
  else if (!head.next) 
     newHead = head;
  
  // reassign the `next` pointer of our current node to the previous node
  head.next = prev;
  return newHead;
}

/*
  OPTION 2 - Naive Iterative
  This problem can be easily solved if there was a way we could naturally traverse the linked list backwards. 
  A way to do this is to copy the linked list into an array. Then we can just traverse the array backwards, 
  reassigning each node's next pointer accordingly. Since all nodes are stored in the array, we never run 
  into the problem of losing a reference to a node when reassigning pointers.
  
  Time complexity: O(n) (where n is the number of nodes in the list)
  Space complexity: O(n) (where n is the length of the nodes array)
*/

const reverseLinkedList = head => {
    // array to store nodes as we traverse the list
    const nodes = [];
    let curr = head;
    
    // traverse while there are still nodes to visit
    while (curr) {
        // place the current node in the array
        // and continue to the next node
        nodes.unshift(curr);
        curr = curr.next;
    }

    // loop through the nodes array
    for (let i = 0; i < nodes.length; i++) {
      // reassign each node's `next` pointer to the next node in the array,
      // or null if there is no more nodes left
      nodes[i].next = nodes[i + 1] || null;
    }
    
    // return head of reversed linked list
    return nodes[0];
}

/*
  OPTION 3 - Optimized Iterative
  There is a way to reverse the list in one pass without using any extra space. If you notice, to reverse 
  a linked list, all we need is reference to 3 nodes at a time:
  - We need a reference to the previous node so we can assign the current node's next to the previous node.
  - We need a reference to the current node we are on.
  - We need a reference to the current node's next so we can keep traversing the list after reassignment. 
  With references to these 3 nodes, we can reverse the linked list in place with one loop.
  
  Time complexity: O(n) (where n is the number of nodes in the list)
  Space complexity: O(1) 
*/

const reverseLinkedList = head => {
    // the 3 pointers to manipulate the list in-place
    let prev = null;
    let curr = head;
    let next;
    
    // while the are still nodes to visit
    while (curr) {
        // save a reference to the current node's
        // `next` pointer before doing any reassigning
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    // when we reach the end of the list, our `prev` pointer will be pointing
    // to the tail of the original list (now the head of the reversed list)
    return prev;
}

/*
  Is this actually better than loops?
  In JS? Not necessarily. Sometimes recursion is cleaner or more natural looking, but it is rarely faster or smaller 
  than an imperative loop. In functional languages, you don't have the option of a loop, but a tail-recursive function 
  gets optimized into a loop by the compiler anyway. Also, better data structures exist than linked lists!

  So what's the point?
  Functional Programming isn't just "normal programming minus some conveniences" – by structuring code in terms of 
  functions, static typing, purity, etc. you actually also unlock and gain new tools for static analysis (dev tools 
  and enforced correctness), composability, ability to reason about code in terms of laws, etc. This REACTO doesn't 
  reveal any of that however, it's just a fun/challenging puzzle.
  
  How do I account for recursion in Big O?
  The space complexity due to recursion is a factor of the maximum height of the call stack (i.e. the deepest recursive 
  branch). The time complexity can be harder to analyze as it depends on whether you have multiple recursive calls – you 
  need a way to figure out how many recursive calls you will use in total.
  
  Additional resources:
  Video explanation of recursive & iterative solution: https://www.youtube.com/watch?v=O0By4Zq0OFc
  Leetcode "Reverse a Linked List" solution article: https://leetcode.com/problems/reverse-linked-list/solution/
  Repl.it with code above: https://repl.it/@ecanals07/Reverse-a-Linked-List#index.js
*/
