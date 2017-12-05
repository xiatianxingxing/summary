// 在 node 中 新增 一些 函数的特性
// ES6 中新增的特性

// 1. 函数的形参的 默认值 设置 

// ES5 的方式 进行设置 
function es5Func( argu ) {
    // 在 没有传入 实参的 情况下 我们的 argu 会取默认的值  这个是 es5 中设置 默认值的方式
    argu = argu || '默认值ES5';
    console.log( argu );
}

// ES6 中设置 默认值的 情况
// 在ES6 中设置 默认值 直接在 函数的() 中 进行设置 即可 不需要 进行 || 操作符的判断啦
function es6Func( argu = '默认值ES6' ) {
    console.log( argu );
}



// 2.函数的形参的 对象 解构赋值 操作
// 使用的不多 在 函数中传入一个 对象 并且设置 默认值
function ES5Funobj( obj ) {
    // 在 ES5 中 也是 进行 || 操作 当前 ||左边为false的时候取 右边的 值
    // 完成 对象的 设置默认值的操作
    obj = obj || {};
    console.log( obj );
}
setTimeout(function() {
    
}, timeout);



// 在 ES6 中进行设置 对象 解构的赋值 操作
function ES6Funobj( {test='haha',age='num'} ) {
    // 在（）中 进行设置 对象的 解构 操作
    console.log( arguments[0] );
}

// 我们在