// /测试 module.exports 与 exports 的区别


// exports 是 在导出的对象 身上 进行增加成员的
// exports.tese = function() {
//     cosole.log( 'haha' );
// };

// 但是 module.exports 是设置 导出对象 为指定的  但是 exports 是 不行的 
module.exports = {
    name:'xiaoming',
    fn:function() {
        console.log(this.name);
    },
    toArr: function( arr ) {
        return [].slice.call( arr );
    }
};
// module.exports 设置导出对象为 另外一个对象




// 需要注意的是  module.exports 与 exports  不能同时在 一个文件 中书写2个