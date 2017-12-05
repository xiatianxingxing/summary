 public static RulesOption("Cache Always &Fresh", "Per&formance")
 RulesString("Override &Allow-Origin", true)         //一级菜单名称  

RulesStringValue(1,"*.qq.com", "*.qq.com")          //指定几个默认的的选项  

RulesStringValue(2,"*.tenpay.com","*.tenpay.com")  

RulesStringValue(3,"*.paipai.com","*.paipai.com")   //自己可以随时补充  

RulesStringValue(4,"&Custom...", "%CUSTOM%")        //允许用户自已定义,点击时弹出输入  

//如果加第4个参数为true的话,会把当前规则当作默认规则,每次启动都会生效,如:  

//RulesStringValue(5,"菜单项显示内容","菜单项选中对应值",true)//将会默认选中此项  

public static var sAllowOrigin: String = null;      //定义变量名称  

//   b.在CustomRules.js时找到static function OnBeforeResponse,在函数体内再加上如下代码:

//  注意：如果需要跨域读写cookie，要同时设置Access-Control-Allow-Credentials：ture