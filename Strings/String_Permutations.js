// Given a string, return an array of all the permutations of that string. The permutations of the string should 
// be the same length as the original string (i.e. use each letter in the string exactly once) but do not need to 
// be actual words. As a reminder, a permutation of a string is another string containing all characters of the 
// original string arranged in a different order. The array that is returned should only contain unique values


// OPTION 1 - Recursive
function stringPerms(str){
  if (str.length <= 1) return [str];
  const results = [];

  let i = 0;
  while (i < str.length){
    const letter = str[i];
    const otherLetters = str.slice(0, i) + str.slice(i + 1);

    stringPerms(otherLetters).forEach(subPerm => results.push(letter + subPerm));
    while (str[i] === letter) i++;
  }
  return results.sort();
}


// OPTION 2 - Iterative
function stringPerms(str){
  const letters = str.split('');
  let results = [];
  // add first letter (as an array) to permutations
  results.push([letters.shift()]);

  while (letters.length){
    const currLetter = letters.shift();
    const tempResults = [];

    results.forEach(perm => {
      for (let i = 0; i <= perm.length; i++) {
        // make a copy so we can modify it
        const temp = perm.slice();
        // insert the letter at the current position
        temp.splice(i, 0, currLetter);
        tempResults.push(temp);
      }
    })
    // overwrite the previous results
    results = tempResults;
  }
  return results
    .map(letterArr => {
      // convert the letter arrays back to strings
      return letterArr.join('')
    })
    .filter(function(el, idx, self) {
      // filter out non-unique words
      return self.indexOf(el) === idx
    })
}


console.log(stringPerms('one')); // ['eno','eon','neo','noe','oen','one']
console.log(stringPerms('app')); // ['app','pap','ppa']
console.log(stringPerms('nn')); // ['nn']
