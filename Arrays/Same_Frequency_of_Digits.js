// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have time complexity: O(n)

// OPTION 1
function sameFrequency(int1, int2){
  let int1Str = int1.toString()
  let int2Str = int2.toString();

  if (int1Str.length !== int2Str.length)
    return false;

  const frequencyOfInt1 = {};
  for (let char of int1Str)
    frequencyOfInt1[char] = (frequencyOfInt1[char] || 0) + 1;

  const frequencyOfInt2 = {};
  for (let char of int2Str)
    frequencyOfInt2[char] = (frequencyOfInt2[char] || 0) + 1;

  for (let keys in frequencyOfInt1){
    if (frequencyOfInt1[keys] === frequencyOfInt2[keys])
      return true;
    else 
      return false;
    }
}

