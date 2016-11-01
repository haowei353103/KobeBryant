$(function(){
    /*
    //广告图片轮播
    //运动函数
    function funMove(pos){
        var move = function(){
            var curPos = parseInt($(".ad").style.top,10);
            var speed = 60;
            if(Math.abs(curPos-pos)>speed){
                //判断移动方向
                curPos-=((curPos-pos)/Math.abs(curPos-pos))*speed;
                $(".ad").style.top = curPos+"px";
                setTimeout(move,30);
            }else{
                $(".ad").style.top = pos + "px";
            }
        };
        setTimeout(move,10);
    };
    var oClick=$(".ad div");
    for(var i=0; i<oClick.length; i+=1){
        var flag = 0;
        var timeout;
        if(i === 0){
            var step = function(){
                oClick[flag].className = "";
                flag = flag>=oClick.length-1?0:flag+1;
                oClick[flag].className = "on";
                funMove(-390*flag);
                timeout = setTimeout(step,4000);
            };
            setTimeout(step,4000);
        }
    }

    $(".ad_left").on("click",function () {
        console.log($(this))
    });
    $(".ad_right").on("click",function () {
        console.log($(this))
    });*/

    //新闻点击跳转页面
    $(".history span a").eq(0).on("click",function () {
        window.open("tpl/revenge.html");
    });
    $(".history span a").eq(1).on("click",function () {
        window.open("tpl/revenge2.html");
    });
    $(".history span a").eq(2).on("click",function () {
        window.open("tpl/revenge3.html");
    });

    //梦幻对阵选项卡
    $(".bulls").on("click","a",function () {
        if(!$(this).hasClass("finalgame")){
            $(".bulls a").removeClass("finalgame");
            $(this).addClass("finalgame");
        };
        if($(this).index()==0){
            $(".teamicon").load("tpl/teamicon/96bulls.html");
        }else if($(this).index()==1){
            $(".teamicon").load("tpl/teamicon/08kai.html");
        }else if($(this).index()==2){
            $(".teamicon").load("tpl/teamicon/09rockets.html");
        }else{
            $(".teamicon").load("tpl/teamicon/16heats.html");
        };
    });
});