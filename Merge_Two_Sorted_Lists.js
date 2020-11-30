// Merge two sorted linked lists and return it as a new sorted list. 
// The new list should be made by splicing together the nodes of the first two lists.

// OPTION 1 --> Recursive
// Time: O(min(N,M)), Space: O(1)
function mergeTwoLists(l1, l2){
  if(!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  // Given that both lists are null-terminated, 
  // the recursion will eventually terminate
}
 
// OPTION 2 --> Iterative
// Time: O(min(N,M)), Space: O(min(N,M))
function mergeTwoLists(l1, l2){
  // set up the head of the merged lists
  const head = new Node(null);
  let curr = head;
  // change the next pointers in both lists
  // and line them up according to node values
  while (l1 && l2){
    if (l1.val < l2.val){
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return head.next;
}
