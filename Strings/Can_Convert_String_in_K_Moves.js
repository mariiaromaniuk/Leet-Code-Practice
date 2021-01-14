/*
 Given two strings s and t, your goal is to convert s into t in k moves or less. During the ith (1 <= i <= k) move you can:
 - Choose any index j (1-indexed) from s, such that 1 <= j <= s.length and j has not been chosen in any previous move, and 
   shift the character at that index i times.
 - Do nothing.
 - Shifting a character means replacing it by the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). 
   Shifting a character by i means applying the shift operations i times.
 Remember that any index j can be picked at most once. Return true if it's possible to convert s into t in no more than 
 k moves, otherwise return false.

 Example 1:
 Input: s = "input", t = "ouput", k = 9
 Output: true
 Explanation: In the 6th move, we shift 'i' 6 times to get 'o'. And in the 7th move we shift 'n' to get 'u'.

 Example 2:
 Input: s = "abc", t = "bcd", k = 10
 Output: false
 Explanation: We need to shift each character in s one time to convert it into t. We can shift 'a' to 'b' during the 1st move. 
 However, there is no way to shift the other characters in the remaining moves to obtain t from s.
*/

function canConvertString(s, t, k){
  if (s === t) return true;
  if (s.length !== t.length) return false;
    
  if (k > 26*s.length) return true;
  if (k < s.length) return false;
    
  const usedSteps = new Array(27).fill(0);
  let steps;
    
  for (let i = 0; i < s.length; i++){
    steps = t.charCodeAt(i) - s.charCodeAt(i); 
    if (steps == 0) continue;
        
		  // steps should be strictly positive
    if (steps < 0) steps = 26 + steps;

    // if 26*i + j > k, it means the min available steps from s[i] to t[i] is bigger than k
		  // therefore, no possible answer so return false
    if (26*usedSteps[steps] + steps > k) return false;
        
		  // update the future min steps
    usedSteps[steps]++;
  }
  return true;
}
