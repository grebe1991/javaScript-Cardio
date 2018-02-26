/* CHALLENGE 4: CAPITALIZE LETTERS    
 * @return string
 * @params string
 * retruns a string with the first letter of every word capitalized
 * @ex ucwords('how are You') === 'How Are You'
*/

// With RegExp
// ucwords = (str) => str.replace(/\b[a-z]/gi, char => char.toUpperCase());

// ES6 way
ucwords = (str) => str
    .toLowerCase()
    .split(' ')
    .map( word => word[0].toUpperCase() + word.substr(1))
    .join(' ');

module.exports = ucwords;
