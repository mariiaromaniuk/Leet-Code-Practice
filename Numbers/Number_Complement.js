// Given a positive integer num, output its complement number. 
// The complement strategy is to flip the bits of its binary representation.

// The bit version:
function findComplement(num){
    let mask = 1;
    while (mask < num) mask = (mask << 1) | 1;
    return num ^ mask;
}

// The string version:
function findComplement(num){
    return parseInt(num.toString(2).split('').map(d => +!+d).join(''), 2);
}

// A combination of bits and strings that is fast:
function findComplement(num){
    return parseInt((~num ^ 1 << 31).toString(2).substr(-num.toString(2).length), 2);
}
// In the last solution we negate the bits, including leading zeros, 
// and get rid of the sign bit. Then we take the right side that 
// we need which has the same number of digits as num.
