/* CHALLENGE 2: VALIDATE A PALINDROME
 * @return string
 * @params string
 * returns true if the input is palindrome
 * @ex is_palindrome('1234321') === true
 * @ex is_palindrome('hello') === false
*/
const rev_str = require('../modules/rev_str');

is_palindrome = (str) => str === rev_str(str);

module.exports = is_palindrome;
