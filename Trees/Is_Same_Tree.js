/* 
   Given two binary trees, write a function to check if they are the same or not.
   Two binary trees are considered the same if they are structurally identical 
   and the nodes have the same value.
*/

function isSameTree(p, q) {
  if (p == null && q == null) 
    return true;
  if (q == null || p == null) 
    return false;
  if (p.val != q.val) 
    return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
}
