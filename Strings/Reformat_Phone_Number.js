/*
 You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
 You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. 
 Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. 
 The final digits are then grouped as follows:

 2 digits: A single block of length 2.
 3 digits: A single block of length 3.
 4 digits: Two blocks of length 2 each.
 The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks 
 of length 1 and produce at most two blocks of length 2.

 Return the phone number after formatting.
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
