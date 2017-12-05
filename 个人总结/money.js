/*
    转换 货币格式的 封装方法
*/
function money( argus ){
    if( typeof argus === 'number' ){
        // 我们 拿获取到 一个数 将其转换为 千分为位的格式
        var str = (argus+'').slice( 2 );
        var length = str.length / 3;
        var arr = str.split( '' );
        var st = '';
        var index = 3;
        for( var i = 1 ; i < length ; i++ ) {
            index = index * i;
            if( length - 1 < 1 ){
                st += arr[ index-3 ] + arr[ index-2 ] + arr[ index-1 ] + ',' ;
                console.log( st );
            }else {
                st = arr[index-3] + ( arr[index-2] && '' );
            }
        }
        return argus.slice(0,2) + st;
    }else {

    }
}