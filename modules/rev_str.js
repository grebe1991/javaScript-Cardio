/* CHALLENGE 1: REVERSE A STRING
 * @return string
 * @params string
 * returns a string in reverse
 * @ex rev_str('hello') === 'olleh'
*/

// I'll define multiple variants

// With reverse method
// rev_str = (str) => str.split('').reverse().join('');

// Old way v1
// rev_str = (str) => {
//     let rev = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }
//     return rev;
// }

// Old way v2
// rev_str = (str) => {
//     let rev = '';
//     for (let i = 0; i < str.length; i++) {
//         rev = str[i] + rev;
//     }
//     return rev;
// }

// ES6 way
// rev_str = (str) => {
//     let rev = '';
//     for (const char of str) {
//         rev = char + rev;
//     }
//     return rev;
// }

// With higher order functions v1
// rev_str = (str) => {
//     let rev = '';
//     str.split('').forEach(char => rev = char + rev);
//     return rev;
// }

// With higher order functions v2
rev_str = (str) => str.split('').reduce((rev, char) => char + rev)

module.exports = rev_str;
