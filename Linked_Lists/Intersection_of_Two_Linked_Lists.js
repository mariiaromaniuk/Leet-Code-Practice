// Write a program to find the node at which the intersection of two singly linked lists begins.

// OPTION 1 --> Two pointers
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let curA = headA;
  let curB = headB;
  while (curA != curB){
    // if curB also reaches null next, we've ended up at the end without
    // any match found. break out of the loop and return null now.
    // switch tracks to even out uneven length
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }
  return curA;
}
 
// OPTION 2 --> Time: O(n + m), Space: O(n)
// Using Hash Set
function getIntersectionNode(headA, headB){
  const seen = new Set();
  // traverse List A and add nodes into the Hash Set
  while (headA){
    seen.add(headA);
    headA = headA.next;
  }
  // traverse List B abd check whether the node is in the Hash Set
  while (headB){
    // if it is in the hash set return that node immediately
    if (seen.has(headB))
      return headB;
    headB = headB.next;
  }
  return null;
}

// Test
consloe.log(intersectVal([4,1,8,4,5], [5,6,1,8,4,5])); // 8
