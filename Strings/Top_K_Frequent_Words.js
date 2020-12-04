// Given a string, return the k most frequent words in the string.
// Input: "one two two two three three four", 2
// Output: [two, three]

function topKFrequent(str, k){
  let wordMap = {};
  let words = str.split(" ");
  words.forEach((word) => {
    wordMap[word] = wordMap[word] !== undefined ? wordMap[word] + 1 : 1;
  });
    
  let result = Object.keys(wordMap)
    .sort((a, b) => {
      let n = wordMap[b] - wordMap[a];
      if (n !== 0) 
        return n;
      return a > b ? 1 : -1;
    });
    return result.slice(0, k);  
};

// Test
topKFrequent("one two two two three three four ", 2);
