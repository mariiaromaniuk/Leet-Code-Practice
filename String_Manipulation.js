// Sort an alphanumeric string such that the positions of alphabets 
// and numbers remain unchanged (ex: “dc42a31b” -> “ab12c34d”).

// Time: O(n), Space: O(n)
function stringManipulation(str){
  if (str.length <= 1) return str;
  let arr = str.split('').sort();
  let nums = [], chars = [];
  let result = '';

  for (let char of arr){
    if (char >= '0' && char <= '9')
      nums.push(char);
    else
      chars.push(char);
  }
  
  for (let char of str){
    if (char >= '0' && char <= '9'){
      result += nums[0];
      nums.shift();
    } else {
      result += chars[0];
      chars.shift();
    }
  }
  return result;
}

// Test
console.log(stringManipulation('dc42a31b')); // ab12c34d
