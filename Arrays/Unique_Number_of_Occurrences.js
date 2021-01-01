// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
// Example: [1,2,2,1,1,3] --> true
// The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// OPTION 1
function uniqueOccurrences(arr){
  // Let's make a map to keep track of how many times each number occurs in our array
  let myMap = new Map()

  // For every number in our array using the for-of loop
  for (let num of arr){
    if (myMap.has(num))
      // If we have the key already, we know the value is a number, so increment it by one
      myMap.set(num, (myMap.get(num) + 1))
    else 
      // If we dont have the key in our map...
      myMap.set(num, 1)
    //Make a new set and add the value of each key. If at any point we already saw the value we know the occurrences are NOT unique
    let mySet = new Set()
    //Grab the key and value of each myMap entry
    for (const val of myMap.values()) {
        //If the set already has it, return false
        if (mySet.has(val)) return false
        //Otherwise add it
        mySet.add(val)
    }
    //If we got though the code above, return true, since the occurrences are all unique
    return true
};

// OPTION 2
function uniqueOccurrences(arr){
    const obj = {};
//     Creating hashmap to store count of each number
    arr.forEach(val => obj[val] = (obj[val] || 0) + 1);
//     Creating an array of the count times
    const val = Object.values(obj).sort((a, b) => a-b);
//     Now, just finding the duplicates
    for(let i = 0; i<val.length-1; i++){
        if(val[i]===val[i+1]) return false;
    }
    return true;
}
