if (typeof doyoo == "undefined" || !doyoo) {
  var d_genId = function() {
    var id = "",
      ids = "0123456789abcdef";
    for (var i = 0; i < 34; i++) {
      id += ids.charAt(Math.floor(Math.random() * 16));
    }
    return id;
  };
  var doyoo = {
    env: {
      secure: false,
      mon: "http://m2135.looyu.com/monitor",
      chat: "http://ali193.looyu.com/chat",
      file: "http://static.doyoo.net/110402",
      compId: 17481,
      confId: 127997,
      vId: d_genId(),
      lang: "",
      fixFlash: 0,
      subComp: 879
    },
    monParam: {
      index: 1,
      title: "\u5728\u7ebf\u5ba2\u670d",
      text:
        "\u5c0a\u656c\u7684\u5ba2\u6237\u60a8\u597d\uff0c\u6b22\u8fce\u5149\u4e34\u672c\u516c\u53f8\u7f51\u7ad9\uff01\u6211\u662f\u4eca\u5929\u7684\u5728\u7ebf\u503c\u73ed\u5ba2\u670d\uff0c\u70b9\u51fb\u201c\u5f00\u59cb\u4ea4\u8c08\u201d\u5373\u53ef\u4e0e\u6211\u5bf9\u8bdd\u3002 ",
      auto: -1,
      group: "",
      start: "00:00",
      end: "24:00",
      mask: false,
      status: true,
      fx: 0,
      mini: 1,
      pos: 0,
      offShow: 0,
      loop: 0,
      autoHide: 0,
      hidePanel: 0,
      miniStyle: 1,
      monHideStatus: [0, 0, 0],
      monShowOnly: ""
    }
  };
  document.write("");
  document.write("");
  document.write("");
  document.write("");
}


<html>

<head>
    <script type="text/javascript" language="javascript">
        var exitUrl = 'http://m2135.looyu.com:80/monitor/s?c=l&i=17481&v=8b3d4e5ae44e6e0b09ae23b084a86a567e&p=undefined&_t=1503384997978'

        var xmlHttp = null;

        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else {
            if (window.ActiveXObject) {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }

        function viewer_leave() {
            xmlHttp.open("GET", exitUrl, false);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
            xmlHttp.send();
        }

    </script>
</head>
<body onunload="viewer_leave()">
</body>
</html>