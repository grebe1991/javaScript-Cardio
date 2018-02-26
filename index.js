// Import functions from their own module
const rev_str = require('./modules/rev_str');
const rev_int = require('./modules/rev_int');
const is_palindrome = require('./modules/is_palindrome');
const ucwords = require('./modules/ucwords');
const max_char = require('./modules/max_char');
const fizzbuzz = require('./modules/fizzbuzz');


console.log("Testing if the rev_str function is working as expected");
console.log("test case: input -> rev_str('hello')");
console.log("test case: expected output -> olleh : actual output-> " + rev_str('hello'));

console.log("\n\nTesting if the is_palindrome function is working as expected");
console.log("test case 1: input -> is_palindrome('hello')");
console.log("test case 1: expected output -> false : actual output-> " + is_palindrome('hello'));
console.log("test case 2: input -> isPalindrome('racecar')");
console.log("test case 2: expected output -> true : actual output-> " + is_palindrome('racecar'));

console.log("\n\nTesting if the rev_int function is working as expected");
console.log("test case 1: input -> rev_int(1991)");
console.log("test case 1: expected output -> 1991 : actual output-> " + rev_int(1991));
console.log("test case 2: input -> rev_int(2018)");
console.log("test case 2: expected output -> 8102 : actual output-> " + rev_int(2018));
console.log("test case 3: input -> rev_int(-42)");
console.log("test case 3: expected output -> -24 : actual output-> " + rev_int(-42));

console.log("\n\nTesting if the ucwords function is working as expected");
console.log("test case: input -> ucwords('hello there, young padWan !')");
console.log("test case: expected output -> 'Hello There, Young Padwan !'  : actual output-> '" + ucwords('hello there, young padwan !' + "'"));

console.log("\n\nTesting if the max_char function is working as expected");
console.log("test case: input -> max_char('javascript')");
console.log("test case: expected output -> a  : actual output-> " + max_char('javascript'));

console.log("\n\nTesting if the fizzbuzz function is working as expected");
fizzbuzz();