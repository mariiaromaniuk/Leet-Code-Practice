/*
 Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.
 You can think of the left and right pointers as synonymous to the predecessor 
 and successor pointers in a doubly-linked list. For a circular doubly linked list, 
 the predecessor of the first element is the last element, and the successor of the 
 last element is the first element.
 We want to do the transformation in place. After the transformation, the left 
 pointer of the tree node should point to its predecessor, and the right pointer 
 should point to its successor. You should return the pointer to the smallest element 
 of the linked list.
*/

// Idea: we perform an in-order traversal and visit all nodes
// we keep track of previous node so that we can connect current node with previous node 
// Time: O(n), we visit all nodes exactly once
// Space: O(n), call stack can go as deep as N
function treeToDoublyList(root){
  if (!root) return;
  var head, previous;
  function inOrderTraverse(node){
    if (node.left) inOrderTraverse(node.left);
    if (!head) head = node;
    if (previous){
      previous.right = node;
      node.left = previous;
    }
    previous = node;
    if(node.right) inOrderTraverse(node.right);
  }
  inOrderTraverse(root);
  previous.right = head;
  head.left = previous;
  return head;
}
