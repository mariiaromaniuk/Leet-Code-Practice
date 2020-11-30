/*
 Given two binary trees and imagine that when you put one of them to cover the other, some nodes of 
 the two trees are overlapped while the others are not. You need to merge them into a new binary tree. 
 The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
 Otherwise, the NOT null node will be used as the node of new tree.
*/

// OPTION 1 --> Recursive
// Time: O(n), Space: O(n) in the case of a skewed tree, O(log n) average
function mergeTrees(t1, t2){
  // traverse both trees in a preorder DFS
  // check if the current node exists for both the trees
  if(!t1 || !t2) return t1 || t2;
  // If so, we add the values in the current nodes of both trees 
  // and update the value in the current node of the first tree
  t1.val += t2.val;
  // recursively call for left and right children
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  // t1 is a resulted merged tree
  return t1;
}

// OPTION 2 --> Iterative
// Time: O(n), Space: O(n)
function mergeTrees(t1, t2){
  // traverse the two trees, use stack to do so instead of recursion. 
  // Each entry in the stackstack strores data in the form [node_tree1, node_tree2] 
  if (!t1 || !t2) return t1 || t2;
  const stack = Array();
  stack.push([t1, t2]);
  while (stack.length > 0){
    const pair = stack.pop();
    if (!pair[0] || !pair[1])
      continue;
    pair[0].val += pair[1].val;
    if (!pair[0].left)
      pair[0].left = pair[1].left;
    else
      stack.push([pair[0].left, pair[1].left]);
    if (!pair[0].right)
      pair[0].right = pair[1].right;
    else
      stack.push([pair[0].right, pair[1].right]);
  }
  return t1;
}
