exports.done = false;
const b = require( './b.js' );
console.log( 'commonJs是边执行边引用的' );
console.log( '我们看b返回的结果是' + b.done );
console.log( 'a.js执行完成' );