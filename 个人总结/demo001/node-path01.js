
// 在 windows下 路径的 连接符是 \ 但是 在 苹果电脑上的连接符 不是 \ 时/  
// 那么在 代码 在系统中不能进行 共有
console.log( __dirname + '\\node-path01.js' );
// 我们将 node 提供的 内置 对象 进行导入
var path = require( 'path' );
// 使用 path 模块 进行路径的 拼接  那么就可以进行 跨系统的运行代码 不会进行  出错误啦
console.log( path.join( __dirname , 'node-path01.js' ) );