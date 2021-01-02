/*
 You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
 You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. 
 Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. 
 The final digits are then grouped as follows:
 2 digits: A single block of length 2.
 3 digits: A single block of length 3.
 4 digits: Two blocks of length 2 each.
 
 The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks 
 of length 1 and produce at most two blocks of length 2. Return the phone number after formatting.
 
 Example 1:
 Input: number = "1-23-45 6"
 Output: "123-456"
 Explanation: The digits are "123456".
 Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
 Step 2: There are 3 digits remaining, so put them in a single block of length 3. The 2nd block is "456".
 Joining the blocks gives "123-456".
 
 Example 2:
 Input: number = "123 4-567"
 Output: "123-45-67"
 Explanation: The digits are "1234567".
 Step 1: There are more than 4 digits, so group the next 3 digits. The 1st block is "123".
 Step 2: There are 4 digits left, so split them into two blocks of length 2. The blocks are "45" and "67".
 Joining the blocks gives "123-45-67".

 Example 3:
 Input: number = "123 4-5678"
 Output: "123-456-78"
 Explanation: The digits are "12345678".
 Step 1: The 1st block is "123".
 Step 2: The 2nd block is "456".
 Step 3: There are 2 digits left, so put them in a single block of length 2. The 3rd block is "78".
 Joining the blocks gives "123-456-78".

 Example 4:
 Input: number = "12"
 Output: "12"

 Example 5:
 Input: number = "--17-5 229 35-39475 "
 Output: "175-229-353-94-75"
*/

// OPTION 1
function reformatNumber(number){
  // recursive function to add dashes, needs a string without dashes as input
  function recursiveReformatNumber(number){
    if (number.length <= 3)
      return number;
    // if length of the string is 4, splt it in two, separated by a dash
    if (number.length == 4){
      return number.substring(0,2) + "-" + number.substring(2,4);
    } else {
      // take the first three digits add a dash then start the function over with the rest
      return number.substring(0,3) + "-" + recursiveReformatNumber(number.substring(3, number.length));
    }
  }
  // remove all non-numbers (dashes, and spaces)
  return recursiveReformatNumber(number.replace(/\D/g, ""));
}

// OPTION 2
function reformatNumber(number){
  number = number.split('-').join('').split(' ').join("");
  let res = '';
  
  for (let i = 0; i < number.length; i+=3){
    if (number.slice(i, number.length).length > 4){
      res += number.slice(i, i+3);
      res += i+3 !== number.length ? '-' : '';  
    } else {
      const remainingNumbers =number.slice(i, number.length).length;
      switch(remainingNumbers){
        case 4:
          res += number.slice(i, i+2) + "-" +  number.slice(i+2, i+4);
          return res;
        default: 
          res += number.slice(i, i+remainingNumbers);
          return res;
      }
    }
  }
  return res;
}

// Test
console.log(reformatNumber("1-23-45 6")); //"123-456"
console.log(reformatNumber("123 4-567")); //"123-45-67"
console.log(reformatNumber("123 4-5678")); //"123-456-78"
