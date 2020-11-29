/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same 
structure and node values with a subtree of s.
A subtree of s is a tree consists of a node in s and all of this node's descendants.
The tree s could also be considered as a subtree of itself.
Example 1:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/

// OPTION 1 --> Time: O(n), Space: O(1)
// DFS Recursive
function isSubtree(s, t) {
  if (s) 
    return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
  return false;
}

function isSame(s, t) {
  if (!s && !t) return true;
  if (!s || !t) return false;
  return s.val === t.val && isSame(s.left, t.left) && isSame(s.right, t.right)
}

// OPTION 2 --> Time: O(n), Space: O(n)
// Makes sense as the values need to be compared.
// If exact nodes, to be compare its different case though.
function isSubtree(s, t) {
  return JSON.stringify(s).indexOf(JSON.stringify(t)) !== -1
}
