/* 
   Given two binary trees, write a function to check if they are the same or not.
   Two binary trees are considered the same if they are structurally identical 
   and the nodes have the same value.
*/

var isSameTree = function(p, q) {
    if (p == null && q == null) 
        return true;
    if (q == null || p == null) 
        return false;
    if (p.val != q.val) 
        return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};


// ---------------------------------------------------------------------------------------- //
/* 
   Write a function that takes a binary tree and returns an array of its branch sums ordered 
   from leftmost branch sum to rightmost branch sum. A branch sum is the sum of all the 
   values in a Binary Tree branch, extending from the root node to a leaf node.
   Time Complexity: O(n), Space Complexity: O(n).
*/
function branchSums(node, sums = [], runningTotal = 0) {
   // Process the node: add its value to our running total for this branch
	runningTotal = runningTotal + node.value;

	// Base Case: we are at a leaf node (both children are null)
   // Our branch sum is complete so we can add it to our return array
	if (!node.right && !node.left) 
      sums.push(runningTotal);
   // Call the function on the child nodes with the new runningTotal
	else {
		if (node.left) 
         branchSums(node.left, sums, runningTotal);
		if (node.right) 
         branchSums(node.right, sums, runningTotal);
	}
	return sums;
}


// ---------------------------------------------------------------------------------------- //
