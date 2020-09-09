// Given a string with both numbers and letters (ex: “dc42a31b”), sort the letters and the numbers. 
// Letters need to stay in letter positions and numbers need to stay in number positions (ex: “ab12c34d”).

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
      nums.splice(0, 1);
    } else {
      result += chars[0];
      chars.splice(0, 1);
    }
  }
  return result;
}

// Test
console.log(stringManipulation('dc42a31b')); // ab12c34d
