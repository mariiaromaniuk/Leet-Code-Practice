// Reverse a linked list from position m to n. Do it in one-pass.
// Note: 1 ≤ m ≤ n ≤ length of list.

// Time: O(n), Space: O(1)
var reverseBetween = function(head, m, n) {
  let start = head, cur = head;
  let i = 1;
  while (i < m) {
    start = cur;
    cur = cur.next;
    i++;
  }
  let prev = null, tail = cur;
  while (i <= n) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }
  start.next = prev;
  tail.next = cur;
  // if m == 1, we have no need to connect start 
  // list with reversed list reversed list itself 
  // is the start (or the head)
  return m == 1 ? prev : head; 
};
