/*
 Reverse the order of characters in each word while 
 still preserving whitespace and initial word order.
 Input: "Let's take LeetCode contest"
 Output: "s'teL ekat edoCteeL tsetnoc"
 Note: In the string, each word is separated by single space.
*/

// OPTION 1
function reverseWords(s){
  return s.split(' ')
    .map(str => str.split('').reverse().join(''))
    .join(' ');
}

// OPTION 2
function reverseWords(s) {
  let res = '';
  let word = '';
  for (let c of s){
    if (c === ' ') {
      res += word + c;
      word = '';
    } else {
      word = c + word;
    }
  }
  return res + word;
}
