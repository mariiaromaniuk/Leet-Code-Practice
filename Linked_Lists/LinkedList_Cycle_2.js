// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// OPTION 2 --> Two Pointers
// Time: O(n), Space: O(1)
function detectCycle(head){
  if (!head || !head.next) return null;
  let fast = head, slow = head;
    
  while (fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  if (!fast || !fast.next) return null;
  slow = head;

  while (slow != fast){
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

// OPTION 2 --> Hash Set
// Time: O(n), Space: O(n)
// Traverse over the given nodes and add each node to Hash Set.
// If you encounter a node that is already in the Hash Set - return that node.
// If the traversal is completed - there are no cycle, so returns null.
function detectCycle(head){
  const hashSet = new Set();
  while (head){
    hashSet.add(head);
    if (hashSet.has(head.next)) 
      return head.next;
    head = head.next;
    }
  return null;
}
