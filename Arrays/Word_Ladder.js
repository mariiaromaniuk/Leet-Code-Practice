/*
  Given two words (beginWord and endWord), and a dictionary's word list, find 
  the length of shortest transformation sequence from beginWord to endWord, such that:
  • Only one letter can be changed at a time.
  • Each transformed word must exist in the word list.
  • Return 0 if there is no such transformation sequence.
  • All words have the same length.
  • All words contain only lowercase alphabetic characters.
  • You may assume no duplicates in the word list.
  • You may assume beginWord and endWord are non-empty and are not the same.
 
  Input: "hit", "cog", ["hot","dot","dog","lot","log","cog"]
  Output:  5   →   "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.
*/

// OPTION 1 --> Time: O(N * M * 26) where N = number of words, M = length of each word
function ladderLength(beginWord, endWord, wordList){
  const wordSet = new Set(wordList)
  let queue = [beginWord];
  let steps = 1;
    
  while(queue.length){
    const next = [];
    // loop over each word in the queue
    for (let word of queue){
      if (word === endWord) return steps;
      // loop over each char of the word 
      for (let i = 0; i < word.length; i++){
        // and replace the char with letters from [a - z]
        for (let j = 0; j < 26; j++){
          const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i+1);
          // if the new word exist in the word list add it to the queue
          if (wordSet.has(newWord)){
            next.push(newWord);
            wordSet.delete(newWord);
          }
        }
      }
    }
    queue = next;
    steps++;
  }
  return 0;    
}

//OPTION 2 --> 	Time O(WordLength^2 * numWords), Space: O(WordLength^2 * numWords)
function ladderLength(beginWord, endWord, wordList) {
  /*
   Concept:
   -- The problem can be thought of as looking for neighbors of a word, wherein each neighbor
   differs by one character at each position of the word. This is similar to BFS.
        
   Approach:
    1. Push the beginWord to a queue
    2. For each element removed from queue, check if it's equivalent to endWord and exit if true
    3. If not, try replacing each character of the word with one of the possible characters derived from all words
       -- Push all unseen valid characters onto queue for consideration at next level
       -- Increment number of transitions
     
    Steps 2 and 3 can be very exhaustive and repetitive for invalid words.
    As on optimization, we can create a map of word roots for each word with 1 substitution and
    group all words that can lead up to that state. For example, the 3 states for word 'hot' are:
      ['*ot', 'h*t', 'ho*'] and valid words that map to those combinations are:
        '*ot' -> [hot, dot, lot]
        'h*t' -> [hot]
        'ho*' -> [hot]
    */
	
  const combinations = {};
  // Mapping wordRoot to word. For example, '*ot' -> [hot, dot, lot]
  wordList.forEach(word => {
    for (let i = 0; i < word.length; i++){
      let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
      if (combinations[wordRoot] === undefined) 
        combinations[wordRoot] = [];
      combinations[wordRoot].push(word);
    }
  });
  let queue = [beginWord];
  let steps = 0;
  const visitedWords = new Set();
    
  while (queue.length > 0){
    const neighbors = [];
    while (queue.length > 0){
      let word = queue.pop();
      if (word === endWord) 
        return steps + 1;
      // Consider all roots possible from this word
      for (let i = 0; i < word.length; i++){
        let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
        // Consider all words that have the same root
        for (const neighbor of (combinations[wordRoot] || [])){
          // If this word has been visited before, continue, else consider it
          if (!visitedWords.has(neighbor)){
            visitedWords.add(neighbor);
            neighbors.push(neighbor);
          }
        }
      }
    }
    queue = neighbors;
    steps++;
  }
  return 0;// If endWord was found, transitions would've been returned before
}

// Test
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
