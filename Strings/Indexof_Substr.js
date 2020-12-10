/*
   Find the index of the first appearance of a particular substring inside another string.
   Time Complexity: O(h*n), Space Complexity: O(1).
*/

// OPT1
function indexOf(subStr, str) {
  for (let i = 0; i <= str.length - subStr.length; i++) {
    for (let j = 0; nIdx < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) 
        break;
      if (j + 1 === subStr.length) 
        return i;
    }
  }
  return -1;
}

// OPT2
function indexOf(subStr, str) {
  if (!subStr.length || subStr.length > str.length) {
    return -1;
  }
  let flag = false;

  for (let i = 0; i <= str.length - subStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] === subStr[j]) {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    if (flag) return i;
  }
  return -1;
}

// OPT3
const indexOf = (subStr, str) => {
  let nLen = subStr.length, sub;

  for (let i = 0; i <= str.length-subStr.length; i++) { 
    sub = str.slice(i, nLen + i);
    if (sub === subStr) 
      return i;
  }
  return -1
}

// OPT4
const indexOf = (subStr, str) => {
  if (subStr.length > str.length) 
    return -1;

  // we want to match as many characters as the subStr is long
  let toMatch = subStr.length;
  let start = 0, nIdx = 0, hIdx = 0;

  while (toMatch && hIdx < str.length) { 
    if (str[hIdx] === subStr[nIdx]) {
      hIdx++;
      nIdx++;
      toMatch--;
    } else {
      hIdx = ++start;
      nIdx = 0;
      toMatch = subStr.length;
    }
  }
  // if we matched all characters, then the current value of start will 
  // be the starting index of the subStr in the str
  return ! toMatch ? start : -1
}

