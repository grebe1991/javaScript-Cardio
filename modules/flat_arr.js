/* CHALLENGE 9: CHUNK ARRAY
 * @return array , int
 * @params array
 * returns and array from an array chunk
 * @ex chunk_arr([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]];
 */

flat_arr = ( arr ) =>
	// Solution 1
	// arr.reduce( ( a, b ) => a.concat( b ) );
	// Solution 2
	// [].concat.apply([], arr);
	// Solution 3
	[].concat(...arr);
module.exports = flat_arr;
