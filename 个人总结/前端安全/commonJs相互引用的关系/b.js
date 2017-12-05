// 我们在 b.js 中 引用 a.js文件 看会发生什么
exports.done = true;
var a = require( './a.js' );
console.log( '看a.js返回的是什么呢' + a.done );
console.log( 'b.js执行完成' );
