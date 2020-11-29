/*
 The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 Example:
 Given a binary tree
          1
         / \
        2   3
       / \
      4   5
 Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 Note: The length of path between two nodes is represented by the number of edges between them.
*/

// Recursion
function diameterOfBinaryTree(root){
  if (!root) return 0;
  let res1 = maxDepth(root.left) + maxDepth(root.right),
      res2 = diameterOfBinaryTree(root.left),
      res3 = diameterOfBinaryTree(root.right);
  return Math.max(res1, res2, res3);
};

function maxDepth(node, max){
  if (!node) return 0;
  let left = maxDepth(node.left);
  let right = maxDepth(node.right);
  max = Math.max(left + right, max);
  return Math.max(left, right) + 1;
}
