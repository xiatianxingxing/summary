// 我们在 main.js文件 进行执行 看他们分别的效果是
var a = require('./a.js');
var b = require('./b.js');
console.log('在 main.js 之中, a.done=%j, b.done=%j', a.done, b.done);
console.log( 'main.js文件执行完成' );
// 我们在 node中进行执行 看结果是什么 