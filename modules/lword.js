/* CHALLENGE 7: LONGEST WORD
 * @return string
 * @params string
 * returns the longest word in sentence or and array if there are multiple ones
 * @ex lword('hello there!') === ['hello' , 'there']
 */

lword = ( str ) => {
	// Create filtered array
	const wordArr = str.toLowerCase()
		.match( /[a-z0-9]+/g );

	//Sort by length
	const sorted = wordArr.sort( ( a, b ) => b.length - a.length );
  const ret = sorted.filter( ( word ) => sorted[ 0 ].length === word.length );
	return (ret.length > 1 ? ret : ret[0]);
}

module.exports = lword;
