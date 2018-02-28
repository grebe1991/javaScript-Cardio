/* CHALLENGE 10: CHUNK ARRAY
 * @return bool
 * @params str , str
 * returns true if is anagram or false otherwise
 * @ex 'elbow' === 'below'
 */

is_anagram = ( str1, str2 ) => formatString(str1) === formatString(str2)

// Helper function
function formatString(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
module.exports = is_anagram;
