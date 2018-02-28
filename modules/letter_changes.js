/* CHALLENGE 11: LETTER CHANGES
 * @return str
 * @params str
 * returns changes every letter of the string to the next one that follows and capitalize the vowels
 * @ex 'hello therez' === 'Ifmmp UIfsfA'
 */

letter_changes = ( str ) => str.toLowerCase()
	.replace( /[a-z]/gi, char => {
		if ( char === 'z' || char === 'Z' )
			return 'A';
		return String.fromCharCode( char.charCodeAt() + 1 );
	} )
	.replace( /a|e|i|o|u/gi, vowel => vowel.toUpperCase() )

module.exports = letter_changes;
