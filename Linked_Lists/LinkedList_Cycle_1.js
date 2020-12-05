// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// OPTION 1 --> Two Pointers
function hasCycle(head){
  let fast = head, slow = head;
  while (fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow)
      return true;
  }
  return false;
}

// OPTION 2 --> Two Pointers Recursive
function hasCycle(head){
  function run(fast, slow){
    if (!fast || !fast.next) return false;
    if (fast.next === slow) return true;
    return run(fast.next.next, slow.next);
  }
  return run(head, head);    
}

// OPTION 3 --> Hash Map Recursive
function hasCycle(head){
  const seen = new Set();
  function traverse(node){
    if (seen.has(node)) return true;
    if (!node) return false;
    seen.add(node);
    return traverse(node.next);
  }
  return traverse(head);
}
