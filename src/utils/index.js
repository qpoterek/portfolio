function zip(...arrays) {
	return Array.apply(null,Array(arrays[0].length)).map(function(_,i){
			return arrays.map(function(array){return array[i]})
	})
}

function transpose(array) {
	return array[0].map((_, colIndex) => array.map(row => row[colIndex]))
}

export {
	transpose,
	zip,
}