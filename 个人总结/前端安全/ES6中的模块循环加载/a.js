// 我们使用 ES6 的模块加载 将模块进行引入 进来 import
// a.js 进行 导出数
export var one = 'string';// 导出 原始数据
// 这个 是将 数据 挂载在导出对象上

// 我们在 1000毫秒还 再次 改变 one 看引用文件中的 模块值是否 会发生 改变呢
setTimeout( function() {
    one = "xiaoming";
} ,1000 )


// 将导出的对象 直接 进行 替换 改变啦
// 那么在 其他的文件 进行导入 这个文件的情况 得到就是 我们重新 执行的对象啦
// module.exports = {
//     toArr:function(arr) {
//         return [].slice.call( arr );
//     }
// }
