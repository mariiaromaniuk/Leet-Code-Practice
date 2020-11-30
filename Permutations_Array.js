/*
 Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 
 Approach:
 Backtracking is an algorithm for finding all solutions by exploring all potential candidates. If the solution candidate 
 turns to be not a solution (or at least not the last one), backtracking algorithm discards it by making some changes on 
 the previous step, i.e. backtracks and then try again.
 The goal is break down the problem by finding permutations in subarrays. So we will maintain 
 a subarray of fixed elements and a subarray for exploring permutations.
  
                   [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
  [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
                   [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
                                  [2, 3], [1]    [2, 3, 1]
                                  [3, 1], [2]    [3, 1, 2]
                                  [3, 2], [1]    [3, 2, 1]                                 

*/

// Time: faster than O(N × N!) and a bit slower than O(N!).
// Space: O(N!) since one has to keep N! solutions.
function permute(nums) {
  const output = [];
  dfs([], nums);
  return output;

  function dfs(curr, rest){
    // base case, found a permutation because there's nothing else to explore
    if (rest.length === 0){
      output.push(curr);
      return;
    }
    // Loop through remaining elements
    for (let i = 0; i < rest.length; i++){
      // add rest[i] to curr,  remove rest[i],  new arr from rest[i+1]
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
}

// Test
console.log(permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
