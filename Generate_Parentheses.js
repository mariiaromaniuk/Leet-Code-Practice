/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Approach:
 • Backtracking and keep track of number of opening and closing brackets have been used 
   either by incrementing or decrementing.
 • You know you can only start with an opening: (
 • At this point, you have 2 options: add more ( or now you can add ) to close it.
 • When can you add more (? Whenever you haven't used up all the n openings. 
   n pairs = n openings and n closings.
 • When can you add more )? Whenever you have more openings than closings.
 • When can you add the combination to the list? When the string you've generated hits 2*n 
   length or there's no more opening or closing left.
 • If you just do it by hands, you'll have something like this:

Remember: you can either add more closing or opening if you're still within the constraints:
'('->'()'->'()('->'()()'->'()()('=>'()()()'
                ->'()(('->'()(()'=>'()(())'
   ->'(('->'(()'->'(()('->'(()()'=>'(())())'
                ->'(())'->'(())('=>'(())()'
         ->'((('=>'((()))'
*/

// Backtracking  -->  Time and Space is complicated. Catalan number: 4^n/(n*sqrt(n))
// Time = O(n*Catalan) because we generat combinations through n steps, each step 
// takes a Catalan number to backtrack.
// Space = O(4^n/(sqrt(n))) because we need n space to store the sequence.
function generateParenthesis(n){
  const combinations = [];
  // Here we know we can only start with an opening bracket => use 1 open:
  // but we can also start with an empty string and 0 like so:
  // buildCombinationFrom('', 0, 0, n, combinations);
  buildCombinationFrom('(', 1, 0, n, combinations);
  return combinations;
}

// Helper method generates combinations uses backtracking.
function buildCombinationFrom(string, openUsed, closeUsed, n, combinations) {
  // Base case: when we reach 2n length
  if (string.length === 2*n){
    // Add the string to the list of combination:
    combinations.push(string);
    // Exit from this recursive call.
    return;
  }
  // Case: when we can add more opening bracket:
  // If we haven't used all opening bracket (n pairs = n opens)
  if (openUsed < n){
    // Add 1 opening, update opening used:
    buildCombinationFrom(string + '(', openUsed + 1, closeUsed, n, combinations);
  }
  // Case: when we can add more closing bracket:
  // If we have more opening than closing:
  if (openUsed > closeUsed){
    // Add 1 closing, update closing used:
    buildCombinationFrom(string + ')', openUsed, closeUsed + 1, n, combinations);
  }
}

// Test
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
