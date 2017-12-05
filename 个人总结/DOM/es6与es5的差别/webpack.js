module.exports = {
    entry:'./es6/index.js',// 设置 包的 进行文件 入口 执行 完成 语法 的转换
    output:{
        path: __dirname + '/es5',// 设置 放置的文件夹 使用的是 绝对路径  __dirname
        filename: 'build.js'// 生成 具体的文件
    }
}