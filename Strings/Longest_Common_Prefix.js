/*
 Write a function to find the longest common prefix string amongst an array of strings.
 If there is no common prefix, return an empty string "".
*/

// OPTION 1 --> Time: O(n + m), Space: O(1)
function longestCommonPrefix(strs){
  if (!strs.length) return '';
  // traverse first string in array
  for (let i = 0; i < strs[0].length; i++){
    // traverse every string in array
    for (let s of strs){
      // since we know that prefix will be in the beginning of the word
      // we can return if we found first mismatch
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }
  return strs[0];
}
 
// OPTION 2 --> Time: O(n + m), Space: O(n)
// Using Hash Set
function longestCommonPrefix(strs){
  if (!strs.length) return '';
  let prefix = '';
  // find the shortest string in the array
  // the length of this string is the maximum length of our prefix
  let maxPrefixLength = Math.min(...strs.map(str => str.length));

  for (let i = 0; i < maxPrefixLength; i++){
    let char = strs[0][i];
    // check the corresponding character of each string together and compare them
    if (strs.every(str => str[i] === char)) prefix += char;
    // if we hit one mismatch, that's the end of the common prefix
    // we break out of our loop
    else break;
  }
  // return prefix at the end, which may be empty
  return prefix;
}

// Test
console.log(longestCommonPrefix(["flower","flow","flight"])); // fl
