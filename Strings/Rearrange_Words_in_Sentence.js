/*
 Given a sentence text (A sentence is a string of space-separated words) in the following format:
 - First letter is in upper case.
 - Each word in text are separated by a single space.
 Your task is to rearrange the words in text such that all words are rearranged in an increasing 
 order of their lengths. If two words have the same length, arrange them in their original order.
 Return the new text following the format shown above.

 Example 1:
 Input: text = "Leetcode is cool"
 Output: "Is cool leetcode"
 Explanation: There are 3 words, "Leetcode" of length 8, "is" of length 2 and "cool" of length 4.
 Output is ordered by length and the new first word starts with capital letter.

 Example 2:
 Input: text = "Keep calm and code on"
 Output: "On and keep calm code"
 Explanation: Output is ordered as follows:
 "On" 2 letters.
 "and" 3 letters.
 "keep" 4 letters in case of tie order by position in original text.
 "calm" 4 letters.
 "code" 4 letters.
 
 The algorithm for this problem is pretty straight forward. But the Array.prototype.sort in JS is not always stable which can't fit this requirement:
 If two words have the same length, arrange them in their original order.
 So we need to implement a stable sort instead of it. I choose a bucket sort since the range is not too large.
*/

const arrangeWords = text => {
  const buckets = [];
  const words = text.split(' ');
  let ret = '';
  words[0] = words[0].toLowerCase();
  for (const word of words) {
    buckets[word.length] ? buckets[word.length].push(word) : (buckets[word.length] = [word]);
  }
  for (const list of buckets) {
    list && list.forEach(word => ret += word + ' ');
  }
  return ret[0].toUpperCase() + ret.slice(1, -1);
};

// Test
console.log(arrangeWords("To be or not to be")); // "To be or to be not"
