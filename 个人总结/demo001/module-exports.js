var da = 20;
// 将 模块中的数据 进行导出操作 使用 exports  将数据挂载在 exports上
// exports.da = da;
// 使用 module.exports 将指向 进行导出 可以直接的调用模块中的函数

function fn() {
    console.log( this );
};
// 让 module.exports 指向要导出的 具体方法成员
// 在在 导出接收变量 可以直接 进行使用 对应的导出 方法
module.exports = fn;

// 在一个模块 中只能 进行导出一个  所以 不能同时出现 exports 和 module.exports