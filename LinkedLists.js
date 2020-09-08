// Write a function that takes in the heads of two Singly Linked Lists that are in sorted order, respectively. 
// The function should merge the lists in place (i.e., it shouldn't create a brand new list) and return 
// the head of the merged list; the merged list should be in sorted order.

// Time: O(n), Space: O(1)
function mergeTwoLists(l1, l2){
  if (!l1.head && !l2.head)
    return 'Lists are empty.'
  
  let p1 = l1.head;
  let prev = null;
  let p2 = l2.head;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      prev = p1;
      p1 = p1.next;
    } else {
      if (prev) 
        prev.next = p2;
      prev = p2;
      p2 = p2.next;
      prev.next = p1;
    }
  }
  if (!p1) prev.next = p2;
  return l1.head.val < l2.head.val ? l1.head : l2.head;
}


// Time: O(n), Space: O(n)
function mergeTwoLists(l1, l2) {
  recursiveMerge(l1.head, l2.head, null);
  return l1.head.val < l2.head.val ? l1 : l2;
}

function recursiveMerge(p1, p2, prev) {
  if (p1 === null) {
    prev.next = p2;
    return;
  }
  if (p2 === null) 
    return;
  if (p1.val < p2.val){
    recursiveMerge(p1.next, p2, p1);
  } else {
    if (prev !== null) prev.next = p2;
    const newP2 = p2.next;
    p2.next = p1;
    recursiveMerge(p1, newP2, p2);
  }
}


// Test
let list1 = new LinkedList();
for (let elem of [1, 3, 4, 5, 9, 10]) 
  list1.addToTail(elem);

let list2 = new LinkedList();
for (let elem of [2, 6, 7, 8]) 
  list2.addToTail(elem);

mergeTwoLists(list1, list2);
console.log(list1.toArray());
