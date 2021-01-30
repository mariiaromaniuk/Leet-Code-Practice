/*
 Given two binary search trees root1 and root2.
 Return a list containing all the integers from both trees sorted in ascending order.
 
 Example 1:
 Input: root1 = [2,1,4], root2 = [1,0,3]
 Output: [0,1,1,2,3,4]
 
 Example 2:
 Input: root1 = [0,-10,10], root2 = [5,1,7,0,2]
 Output: [-10,0,0,1,2,5,7,10]

 Example 3:
 Input: root1 = [], root2 = [5,1,7,0,2]
 Output: [0,1,2,5,7]
 
 Example 4:
 Input: root1 = [0,-10,10], root2 = []
 Output: [-10,0,10]
*/

// To convert a binary search tree to an ordered array, we use inorder traversal.
// To merge 2 sorted queue, we pick the top of both, do the comparison, and refresh the top of the bigger one.
const getAllElements = (root1, root2) => {
  const arr1 = [];
  const arr2 = [];
  traversal(root1, arr1);
  traversal(root2, arr2);
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;

  function traversal(node, arr) {
    if (!node) return;
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
};

// Here's a more general version which is easier to read I think:
const traversal = (node, arr = []) => {
  if (node) {
    traversal(node.left, arr);
    arr.push(node.val);
    traversal(node.right, arr);
  }
  return arr;
};
const merge = (arr1, arr2) => {
  const ret = [];
  let idx1 = idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    arr1[idx1] < arr2[idx2] ? ret.push(arr1[idx1++]) : ret.push(arr2[idx2++]);
  }
  while (idx1 < arr1.length) ret.push(arr1[idx1++]);
  while (idx2 < arr2.length) ret.push(arr2[idx2++]);
  return ret;
};
const getAllElements = (root1, root2) => merge(traversal(root1), traversal(root2));

// Test
console.log(getAllElements([2,1,4], [1,0,3])); // [0,1,1,2,3,4]
console.log(getAllElements([0,-10,10], [5,1,7,0,2])); // [-10,0,0,1,2,5,7,10]
