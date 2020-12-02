/*
 If the current node is null, we will return and stop here.
 If the current node has a left child node
 Then we call ourself and pass the right node in.
*/

// Time: O(n), Space: O(n)
function flatten(root){
  if (root === null) return;
  if (root.left){
	 // find the most right leaf of current left node
    var last = root.left;
    while (last.right !== null) last = last.right;
    // keep current right node in a tmp var
    var tmp = root.right;
		// we move the left child to our right.
    root.right = root.left;
		// connect previous right node(tmp) to the right of the most right leaf we found
    last.right = tmp;
		// make current left null
    root.left = null;
  }
  flatten(root.right);
}
