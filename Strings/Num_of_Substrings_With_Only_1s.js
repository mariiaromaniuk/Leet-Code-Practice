/*
 Given a binary string s (a string consisting only of '0' and '1's). Return the number of substrings with all 
 characters 1's. Since the answer may be too large, return it modulo 10^9 + 7.

 Example 1:
 Input: s = "0110111"
 Output: 9
 Explanation: There are 9 substring in total with only 1's characters.
 "1" -> 5 times.
 "11" -> 3 times.
 "111" -> 1 time.

 Example 2:
 Input: s = "101"
 Output: 2
 Explanation: Substring "1" is shown 2 times in s.

 Example 3:
 Input: s = "111111"
 Output: 21
 Explanation: Each substring contains only 1's characters.
*/

// OPTION 1
function numSub(s){
  let ones = s.split('0').filter(x => x.length > 0),
      mod = 10**9 + 7;
  let count = 0;
  for (let one of ones){
    let n = one.length;
    count = count + Math.floor((n*(n+1))/2);
  }
  return count % mod;
}

// OPTION 2
function numSub(s){
  let res = 0, cur = 0;
  for (let i = 0; i < s.length; i++){
    if (s[i] == '0'){
      if (cur > 0) 
        res += (cur+1) * cur / 2;
      cur = 0;
     } else {
       cur++;
     }
   }
   if (cur > 0)
     res += (cur+1) * cur / 2;
   return res % (Math.pow(10, 9) + 7);
}

// Test
console.log(numSub("0110111")); // 9
console.log(numSub("101")); // 2
console.log(numSub("111111")); // 21
console.log(numSub("000")); // 0
