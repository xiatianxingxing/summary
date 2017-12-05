## HTML5中的语义化标签
    * <header></header>
        > 表示头部的语义化 缩进4个空格就是代码
    * <nav></nav>
        > 表示导航条的语义化
    + <main></main>
        > 表示内容区域
    - <aside></aside>
        > 内容区域 侧边栏
    1. <article></article>
        > 文章区域
    * 一个代码块
        <header>头部区域</header>
        <nav>导航条部分</nav>
## 代码区域
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
    body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
    </style>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=kNNNzgPeuMZNHARcwYNphhd1pHEus3Qe"></script>
    <title>地图展示</title>
* * *
## html代码在markdown中进行渲染
  - 百度的链接 [百度](http://www.baidu.com/ "百度")
    * -号的前是2个空格
## javascript
    (function(angular) {
        var app = angular.module("jsonpService",[]);
        app.service("myser",[function() {
            this.jsonp = function (url,argu,fn) {
                var scrip = document.createElement("script");
                var str = '';
                for(var k in argu) {
                    // 每个参数之间使用 & 进行隔开
                    str += k + "=" + argu[k] + "&";
                }
                // 进行产生随机的函数名  放置调用函数名冲突
                var fnname = "fn" + (Math.ceil(Math.random()*10000)) + (Math.ceil(Math.random()*10000)) + "123"
                
                window[fnname] = function(data) {
                    fn(data);
                }
                scrip.src = url + "?" + str + "callback=" + fnname;
                document.body.appendChild(scrip);
            }
        }]);
    })(angular)
## haha
  - <h3>haha</h3>

