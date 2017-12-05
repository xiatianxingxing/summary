<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
        // 在PHP 找中使用 $ 开头 进行声明变量的
        // 连接 字符使用的点号的语法
        // 双引号与单引号的区别
        // 变量在双引号中会别识别 但是在单引号中无法识别的
        $pos = $POST;
        $srt = "hehe";
        // 不过使用双引号 之间拼合即可 不要点号也行的
        $strin = "12.$srt";
        // 单引号的情况
        $str2 = '123'.$srt;
        // php中语法标准  每句代码完成都需要加 分号
        header("Content-Type:text/html;charset=utf-8");
        $arr = array();
        $arr[1] = array("书籍"=>"天行九歌","作者"=>"不知道","销量"=>"180万册","描述"=>"玄幻武侠世界",);
        $arr[2] = array("书籍"=>"秦时明月","作者"=>"夜进天明","销量"=>"280万册","描述"=>"百家争霸",);
        $arr[3] = array("书籍"=>"散文诗歌","作者"=>"多人","销量"=>"120万册","描述"=>"诗歌",);
        $arr[4] = array("书籍"=>"遮天","作者"=>"辰东","销量"=>"380万册","描述"=>"星迹诸天",);
        echo $pos;
    ?>
</body>
</html>