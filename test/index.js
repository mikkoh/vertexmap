var vertexmap = require( '../index' );

console.log( vertexmap( [ 1, 0, 1, 1, 0, 1, 1, -1, 0, 0, 0.5, 0, 1, 1 ], [ { name: 'position', size: 3 }, { name: 'colour', size: 4 } ] ) );