/* CHALLENGE 8: CHUNK ARRAY
 * @return array , int
 * @params array
 * returns and array of arrays of length int - 1
 * @ex chunk_arr([1,2,3,4,5,6,7],3) === [[1,2,3],[4,5,6],[7]];
 */

// Old school version
// chunk_arr = ( arr, size ) => {
// 	let ret = [];
// 	let chunk = [];
// 	for (var i = 1; i <= arr.length; i++) {
// 		chunk.push(arr[i - 1]);
// 		if (i % size === 0){
// 			ret.push(chunk);
// 			chunk = [];
// 		}
// 	}
// 	if (size > 1)
// 		ret.push(chunk);
// 	return ret;
// }

// With js functions v1
// chunk_arr = ( arr, size ) => {
// 	const chunkedArr = [];
// 	let i = 0;
//
// 	while (i < arr.length) {
// 		chunkedArr.push(arr.slice(i, i + size));
// 		i += size;
// 	}
//
// 	return chunkedArr;
// }

// With js functions v2
chunk_arr = ( arr, size ) => {
	const chunkedArr = [];

	arr.forEach( val => {
		const last = chunkedArr[ chunkedArr.length - 1 ];

		if ( !last || last.length === size ) {
			chunkedArr.push( [ val ] )
		} else {
			last.push( val );
		}
	} )

	return chunkedArr;
}

module.exports = chunk_arr;
