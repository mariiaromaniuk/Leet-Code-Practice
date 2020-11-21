
/*
 A gene string can be represented by an 8-character long string, with choices from "A", "C", "G", "T". 
 Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is 
 defined as ONE single character changed in the gene string. For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation. 
 Also, there is a given gene "bank", which records all the valid gene mutations. 
 A gene must be in the bank to make it a valid gene string. Now, given 3 things - start, end, bank, your task is 
 to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.

 Note:
 • Starting point is assumed to be valid, so it might not be included in the bank.
 • If multiple mutations are needed, all mutations during in the sequence must be valid.
 • You may assume start and end string is not the same.
*/


// BFS Solution
function minMutation(start, end, bank) {
  let set = new Set(bank);
  if (!set.has(end))   
    return -1;
  let visited = new Set();
  visited.add(start);
    
  let q = [];
  q.push(start);
  let count = 1;

  while (q.length !== 0){
    let size = q.length;
    for (let i = 0; i < size; i++){
      let a = q.shift();
      if (oneM(a,end)) 
        return count;
      set.forEach((b) => {
        if (!visited.has(b) && oneM(a,b)){
          q.push(b);
          visited.add(b);
        }
      });
    }
    count++;
  }
  return -1;
}


// DFS Solution
function minMutation(start, end, bank){
  let set = new Set(bank);
  let visited = new Set();
  visited.add(start);
  if (!set.has(end))   
    return -1;
  let count = dfs(start);
    
  if (count === Number.MAX_VALUE)  
    return -1;
  return count;
    
  // Return min_path helper function
  function dfs(a){
    if (oneM(a,end)) 
      return 1;
    let min = Number.MAX_VALUE;
        
    set.forEach((b) => {
      if (oneM(a,b) && !visited.has(b)){
        visited.add(b);
        let c = dfs(b);
        if (c !== Number.MAX_VALUE){
          min = Math.min(min,c+1);
        }
        visited.delete(b);
      }
    });
    return min;
  }
}

function oneM(a,b){
  let count = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] !== b[i])
      count++;
  }
  return count === 1;
}

// Test
console.log("AACCGGTT", "AACCGGTA", ["AACCGGTA"]); // 1
console.log("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"]); // 2
