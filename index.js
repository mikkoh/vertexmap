module.exports = function( vertexData, vertDescription ) {

	var rVal = {},
		totalVertSize = 0;

	for( var i = 0, len = vertDescription.length; i < len; i++ ) {

		rVal[ vertDescription[ i ].name ] = [];
		totalVertSize += vertDescription[ i ].size;
	}

	while( vertexData.length >= totalVertSize ) {

		for( var i = 0, len = vertDescription.length; i < len; i++ ) {

			rVal[ vertDescription[ i ].name ].push( vertexData.splice( 0, vertDescription[ i ].size ) );
		}
	}

	return rVal;
};