// Given a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list.
// Return the linked list sorted as well.

// Time: O(N), Space: O(1)
var deleteDuplicates = function(head) {
  let newHead = new ListNode();
  // the last known distinct node
  let cur = newHead, duplicate = 0;
  while (head !== null) {
    // if it's a beginning of duplicates sublist 
    // skip all duplicates
    // move till the end of duplicates sublist
    if (head.next && head.val == head.next.val) {
      duplicate++;
    } else {
      // otherwise, move predecessor
      if (duplicate == 0) {
        cur.next = head;
        cur = cur.next;
      }
      duplicate = 0;
    }
    head = head.next;
  }
  cur.next = null;
  return newHead.next;
};
