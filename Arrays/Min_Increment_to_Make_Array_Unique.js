
/*
 Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.
 Return the least number of moves to make every value in A unique.
 Input: [3,2,1,2,1,7]
 Output: 6  -->  [3, 4, 1, 2, 5, 7]
 We can  evaluate our increments. If for example we have [1, 1, 1, 1, 3, 5], we don't need to process all 
 the increments of duplicated 1s. We could take three ones (taken = [1, 1, 1]) and continue processing. 
 When we find an empty place like 2, 4, or 6, we can then recover that our increment will be 2-1, 4-1, and 6-1.
 Count the values. For each possible value x:
 • If there are 2 or more values x in A, save the extra duplicated values to increment later.
 • If there are 0 values x in A, then a saved value v gets incremented to x.
*/

// OPTION 1 --> Time: O(n), Space: O(n)
function minIncrementForUnique(arr){
  let count = [], moves = 0;
  // count duplicate values
  for (let i = 0; i < arr.length; i++){
    // count[arr[i]] ? count[arr[i]] += 1 : count[arr[i]] = 1;
    // using value at the arr[i] as index for count
    if (count[arr[i]]) 
      // if exist - increment
      count[arr[i]] += 1; 
    else 
    // if not add: count = [undef, undef, undef, 1, ..];
      count[arr[i]] = 1;
  }
  for (let i = 0; i < count.length; i++){
    let freq = count[i];
    // work with not unique values only
    if (freq >= 2){
      // count[i] = 1;
      if (count[i+1]) // if its not unfefined
        // if el was 2 times in the initial arr (freq = 2)
        // we'd need to change it 1 time and the next not unique el 
        // we'd need to change 'its freq times' + 'prev el freq' times
        count[i+1] += freq-1;
      else 
        // we need to think about duplicates we created by incrementing
        count[i+1] = freq-1;
      moves += freq-1;
    }
  }
  return moves;
}
