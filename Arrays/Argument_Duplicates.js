// Write a function which accepts a variable number of arguments, and checks whether there 
// are any duplicates among the arguments passed in.

function areThereDuplicates(...args) {
  let map = {};
  for (let values in args)
    map[args[values]] = (map[args[values]] || 0) + 1;
  
  for (let key in map){
    if (map[key] > 1)
      return true;
  }
    return false;
}

