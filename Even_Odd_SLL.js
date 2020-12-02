// Given a singly linked list, group all odd nodes together followed by the even nodes. 
// Please note here we are talking about the node number and not the value in the nodes.
// Do it in place. The program should run in O(1) space complexity and O(nodes) time.

// Time: O(N), Space: O(1)
function oddEvenList(head) {
  if (!head) return null;
  // make 2 chains (odds/evens)
  // No need to keep track of a counter or extra pointers
  let odd = head, 
      even = head.next, 
      evenHead = even;
  // "even.next" means more to go since even pointer is rightmost
  // "even &&" is there to avoid null reference error, but also for even positions
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  // Connect the two chains: (tail of odds to head of evens)
  odd.next = evenHead;
  return head;
}
