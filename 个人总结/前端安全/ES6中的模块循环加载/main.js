// 我们 使用 ES6 的模块 导入 和 导出  export import
// import a from './a'; // 我们这个 是错误的 因为我们使用的是 export 挂载在导出对象上的 所以我们需要使用 { a }进行包含 那么代码才不会出错 {
import { a } from './a.js'
console.log( a );// 将 导入的模块 结果 进行打印 看获取到结果是什么
// 输出 结果是 string
// 我们在 1000 毫秒后 再次进行获取到 看值是否是 会改变的呢

setTimeout( function() {
    console.log( a ); // xiaoming
} ,1000 )