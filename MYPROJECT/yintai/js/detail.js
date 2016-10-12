/**
 * Created by Administrator on 2016/9/18.
 */

$(function () {


    var data=getCookie("Id");
    console.log(data);
    $.ajax(
        {
            type:"get",
            url:"json/liebiao.json",
            async:true,
            datatype:"json",
            success:function (mag) {
                var shuju=mag;
                var str1="";
                for (var i=0;i<shuju.length;i++){
                    if (data==shuju[i].Id){
                            $(".p-tit").html(shuju[i].title);
                            $(".qd-num").html('￥'+shuju[i].price+'.<em>00</em>')
                            $(".marketPriceNum").html('银泰价：<span class="yt-num">￥'+shuju[i].price+'.<em>00</em></span>参考价：<span class="yt-num">'+shuju[i].oldPrice+'.<em>00</em></span>')
                        $("#J_Magnifier").html('<img src="'+shuju[i].ImgSmall+'" alt="">')
                        $(".magnifier-big").html('<img src="'+shuju[i].ImgBig+'" alt="">')
                        $(".ew-c-list li").html('<a href="###"><img src="'+shuju[i].ImgSmall+'" alt=""></a>')
                        $("#addCart").html('<button class="incart" data-id="'+shuju[i].Id+'"></button>')
                    }
                }
            }

        }
    )

    $("body").on("click",".incart",function () {
    	window.location.href="cart.html";
    	var dataid=$(this).attr("data-id");
    	setCookie(dataid,dataid,'/');
    })






   /*移动到盒子内镜头出现，右边的大图部分出现*/
    $(".magnifier-wrap").on('mouseover mouseout',function (event) {
        if (event.type=='mouseover'){
            $(".magnifier-lens").show();
            $(".magnifier-bag").show();
        }
        if (event.type=='mouseout'){
            $(".magnifier-lens").hide();
            $(".magnifier-bag").hide();
        }
    })

    $(".magnifier-wrap").mousemove(function (event) {
        /*获取当前鼠标在浏览器中的位置信息*/
        var mX=event.pageX;
        var mY=event.pageY;
        console.log(mX)
        /*获取小图盒子距离浏览器左边的距离*/
        var iL=$(".magnifier-wrap").offset().left;
        var iT=$(".magnifier-wrap").offset().top;
        console.log(iL)
        /*获取镜头盒子的宽度和高度*/
        var iW=$(".magnifier-lens").outerWidth();
        var iH=$(".magnifier-lens").outerHeight();
        console.log(iW)
        /*计算镜头移动时候的left和top值*/
        var left=mX-iL-iW/2;
        var top=mY-iT-iH/2;
        if (left<0){
            left=0;
        }else if(left>300-iW) {
            left=300-iW;
        }
        if (top<0){
            top=0;
        }else if (top>400-iH){
            top=400-iH;
        }
        console.log(left)
        $(".magnifier-lens").css({left:left,top:top})
        $(".magnifier-big").css({left:-1.92*left,top:-2.56*top})
    })

        /*微信和分享功能*/
        $(".WeChat").hover(function () {
            $(".WeChatBox").show();
            $(".WeChat").css({border:"2px solid #f0f0f0"})
        },function () {
            $(".WeChatBox").hide();
            $(".WeChat").css({border:"none"})
        })
        $(".snsShare").hover(function () {
            $(".snsBox").show();
            $(".snsShare").css({border:"2px solid #f0f0f0"})
        },function () {
            $(".snsBox").hide();
            $(".snsShare").css({border:"none"})
        })

    /*返回顶部滚动时候出现*/
    $(window).scroll(function () {
        var Top=$(window).scrollTop();
        //console.log(Top)
        if (Top>300){
            $("#p-goTop").fadeIn()
        }else{
            $("#p-goTop").fadeOut()
        }
    })

})
