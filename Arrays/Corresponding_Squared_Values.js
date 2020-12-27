// Write a function that accepts 2 arrays. The function should return true if every value in first array 
// has its corresponding squared value in the second array. The frequency of value must remain the same.

// OPTION 1 --> O(n^2)
function same(arr1, arr2){
    if (arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; i++){
      let correctIdx = arr2.indexOf(arr1[i]**2);
      if (correctIdx === -1)
        return false;
      arr1.splice(correctIdx, 1);
    }
    return true;
}

// OPTION 2 --> O(n)
function same(arr1, arr2){
  if (arr1.length !== arr2.length)
    return false;

  let arr1Map = {};
  let arr2Map = {};

  // We count frequency of each number in each array first:
  for (let values of arr1)
    arr1Map[values] = (arr1Map[values] || 0) + 1;  // {2:2, 3:1, 4:1}
  for (let values of arr2)
    arr2Map[values] = (arr2Map[values] || 0) + 1;  // {4:2, 9:1, 16:1}

  for (let key in arr1Map){
    if (!(key**2 in arr2Map))
      return false;
  }
  return true;
}

