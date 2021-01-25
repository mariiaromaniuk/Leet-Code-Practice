/*
 Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with 
 a value greater than X. Return the number of good nodes in the binary tree.

 Example:
 Input: root = [3,1,4,3,null,1,5]
 Output: 4
 Explanation: Nodes in blue are good.
 Root Node (3) is always a good node.
 Node 4 -> (3,4) is the maximum value in the path starting from the root.
 Node 5 -> (3,4,5) is the maximum value in the path
 Node 3 -> (3,1,3) is the maximum value in the path.
*/

function goodNodes(root){
  if (!root) return 0;
  let good = 0;
  function dfs(node, lmax){
    if (node.left) 
      dfs(node.left, Math.max(lmax, node.val));
    if (node.val >= lmax) 
      good++;
    if (node.right) 
      dfs(node.right, Math.max(lmax, node.val));
    return;
  }
  dfs(root, -Infinity);
  return good;
}

// Test
console.log(goodNodes([3,1,4,3,null,1,5])); // 4
console.log(goodNodes([3,3,null,4,2])); // 3
console.log(goodNodes([1])); // 1
