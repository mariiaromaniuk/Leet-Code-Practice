/* 
  Given an string str, create a function that returns a boolean, 
  corresponding to whether that string is a palindrome (spelled the same 
  backwards and forwards). Our palindrome check should be case-insensitive.
*/
// Iterative solution
// Time Complexity: O(n), Space Complexity: O(1)
function isPalindrome(str) {
  if (str.length <= 1)
    return true;

  str = str.toLowerCase();
  let mid = Math.floor(str.length/2);
  let left = 0, right = str.length-1;

  while (left < right) {
    if (str[left] !== str[right])
       return false;
    else {
       left++;
       right--;
    }
  }
  return true;
}

// Recursive solution
// Time Complexity: O(n), Space Complexity: O(n)
function isPalindromeRec(str) {
    if (str.length <= 1)
        return true;
    else {
      if (str[0].toLowerCase() !== str[str.length-1].toLowerCase())
         return false;
      else
         return isPalindromeRec(str.slice(1, str.length-1));
    }
}
