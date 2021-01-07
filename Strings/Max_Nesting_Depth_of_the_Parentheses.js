/*
 A string is a valid parentheses string (denoted VPS) if it meets one of the following:

 It is an empty string "", or a single character not equal to "(" or ")",
 It can be written as AB (A concatenated with B), where A and B are VPS's, or
 It can be written as (A), where A is a VPS.
 We can similarly define the nesting depth depth(S) of any VPS S as follows:

 depth("") = 0
 depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
 depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
 depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
 For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

 Given a VPS represented as string s, return the nesting depth of s.

 Example:
 Input: str = "(1+(2*3)+((8)/4))+1"
 Output: 3 --> Digit 8 is inside of 3 nested parentheses in the string.
*/

// Time: O(n), Space: O(1)
function maxDepth(str){
  let maxCount = 0, count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') 
      maxCount = Math.max(maxCount, ++count);
    else if (str[i] === ')') 
       count--;
  }
  return maxCount;
}

// Test
console.log(maxDepth("(1+(2*3)+((8)/4))+1)")); // 3
console.log(maxDepth("(1)+((2))+(((3)))")); // 3
console.log(maxDepth("1+(2*3)/(2-1)")); // 1
console.log(maxDepth("1")); // 0

            
