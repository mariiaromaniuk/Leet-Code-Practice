/*
   In an alien language, surprisingly they also use english lowercase letters, 
   but possibly in a different order. The order of the alphabet is some permutation 
   of lowercase letters. Given a sequence of words written in the alien language, 
   and the order of the alphabet, return true if the given words are sorted 
   lexicographicaly in this alien language.
*/

function isAlienSorted(words, order){
  let index = [];
  for (let i = 0; i < order.length; ++i)
    index[order[i] - 'a'] = i;

  search: for (let i = 0; i < words.length - 1; ++i){
    let word1 = words[i];
    let word2 = words[i + 1];
    // Find the 1st difference word1[k] != word2[k].
    for (let k = 0; k < Math.min(word1.length, word2.length); ++k){
      if (word1[k] != word2[k]){
        // If they compare badly, it's not sorted.
        if (index[word1[k] - 'a'] > index[word2[k] - 'a'])
          return false;
        continue search;
      }
    }
    // If we didn't find a 1st difference, words like ("app", "apple").
    if (word1.length > word2.length)
      return false;
  }
  return true;
}

// Test
let words = ["apple", "app"];
let order = "abcdefghijklmnopqrstuvwxyz";

console.log(isAlienSorted(words, order));
