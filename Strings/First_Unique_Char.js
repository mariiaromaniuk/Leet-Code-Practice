/*
 Given a string, find the first non-repeating character in it and return it's index.
 If it doesn't exist, return -1. You may assume the string contain only lowercase letters.
 Input: s = "loveleetcode",
 Output: 2.
*/

function firstUniqChar(s){
  let item = s.split('').find(a => s.indexOf(a) === s.lastIndexOf(a));
  return s.indexOf(item);
};
