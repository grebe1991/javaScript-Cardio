/* CHALLENGE 3: REVERSE AN INTEGER    
 * @return int
 * @params int
 * returns an integer in reverse
 * @ex rev_int(1234) === 4321
*/

rev_int = (int) => parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);

module.exports = rev_int;
