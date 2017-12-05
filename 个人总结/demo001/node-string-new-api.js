// 在node 中 新增的 string的 api 呢 
// includes() 参数为一个 字符串  检测字符串中是否含有指定参数的 字符串   返回值为 boolean 类型的
"haha nide".includes( "ni" ); // true 判断 是否 含有 ni 字符串

// startsWith() 判断字符串 是否 以 指定参数 开始的 返回值也时 boolean
'hello world'.startsWith( 'hel' ); //true
// endsWith() 判断 是否 以指定的 字符串结尾的 
'./hello.js'.endsWith( '.js' );// true

let obj = {
    name:'xiaoyu',
    age:10,
    aihao:'kaiwanqiao'
}

// 字符串 拼接的 另一种方式
var strHtml = `
    <div>${obj.name}</div>
    <div>${obj.age}</div>
    <div>${obj.aihao}</div>
`;
// 这样继续拼接 字符串 的方式 便于 后期的管理操作
// 并且 结构 非常 清晰的
// 执行以上的代码 需要 node 的版本在 6.x 的版本 现在我的是 5.2.0 是无法进行执行的
console.log( strHtml );


