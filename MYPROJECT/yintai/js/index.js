/**
 * Created by Administrator on 2016/9/11.
 */
$(function () {
    /*banner的轮播部分*/
    var iNow=0;
    var len=$(".pic-list li img").length;
    var timer=null;
    /*给每个按钮添加的事件*/
    $(".btn-list li").click(function () {
        iNow=$(this).index();
        /*改变图片和按钮事件*/
        $(".btn-list li").removeClass("active").eq($(this).index()).addClass("active");
        $(".pic-list li").css({display:"none"}).eq($(this).index()).fadeIn()
    })
    /*执行next功能*/
    toNext();
    function toNext() {
        /*给next添加点击事件*/
        $(".next").click(function () {
            iNow++;
            if (iNow>=len){
                iNow=0;
            }
            /*改变图片和按钮状态*/
            $(".btn-list li").removeClass("active").eq(iNow).addClass("active");
            $(".pic-list li").css({display:"none"}).eq(iNow).fadeIn()
        })
    }
    /*执行prev功能*/
    toPrev();

    /*给prev添加点击事件*/
    function toPrev() {
        $(".prev").click(function () {
            iNow--;
            if (iNow<0){
                iNow=len-1;
            }
            /*改变图片和按钮状态*/
            $(".btn-list li").removeClass("active").eq(iNow).addClass("active");
            $(".pic-list li").css({display:"none"}).eq(iNow).fadeIn()
        })
    }
    autoRun();
    function autoRun() {
        timer=setInterval(function () {
            iNow++;
            if (iNow>=len){
                iNow=0;
            }
            /*改变图片和按钮状态*/
            $(".btn-list li").removeClass("active").eq(iNow).addClass("active");
            $(".pic-list li").css({display:"none"}).eq(iNow).fadeIn()
        },1000)
    }
    $(".banner-wrap").hover(function () {
        clearInterval(timer)
    },function () {
        autoRun();
    })
    /*banner轮播结束*/


    /*楼层效果添加*/
    $(window).scroll(function () {
        testScroll();
    })
    /*点击返回顶部，运动回顶部*/
    $(".fh").click(function () {
        $("body,html").animate({scrollTop:0});
    })
    /*楼层导航栏事件*/
    var $floorNav=$(".floor-nav li")
    var $brand3=$(".brand3")
    var iH=$brand3.outerHeight();

    $floorNav.click(function () {
        var index=$(this).index();
        var iT=$brand3.eq(index).offset().top;
        $("body,html").animate({"scrollTop":iT})
    })

    /*判断滚动条距离，让导航栏显示或者隐藏*/
    function testScroll() {
        var iScrollT=$(window).scrollTop();
        if (iScrollT>300){
            $floorNav.fadeIn();
        }else {
            $floorNav.fadeOut();
        }

        /*判断每一个楼层*/
        $brand3.each(function () {
            var iT=$(this).offset().top
            if (iScrollT>iT-iH/2&&iScrollT>iT+iH){
                $floorNav.removeClass("active").eq($(this).index()).addClass("active")
            }
        });
    };
        /*楼层效果结束*/

    /*二级菜单事件功能添加*/
    var $productLi=$(".product-cate li");
    /*鼠标移入时候，激活active状态*/
    $productLi.mouseover(function () {
        index=$(this).index();
        $productLi.eq(index).addClass("active").siblings().removeClass("active")
    })
    /*鼠标移出时候移除active状态*/
    $productLi.mouseleave(function () {
        $productLi.removeClass("active")
    })
    /*二级菜单*/
    $productLi.hover(function () {
        $(".product-list2").show()
    },function () {
        $(".product-list2").hide()
    })


    /*品牌特区1选项卡*/
    var iIndex1=0;
    $(".brand-switch li").mouseover(function () {
        iIndex1=$(this).index();
        $(".content div").css({display:"none"}).eq(iIndex1).show();
    });

    /*品牌特区2选项卡*/
    var iIndex2=0;
    $(".card .card-ul li").mouseover(function () {
        iIndex2=$(this).index();
        $(".product-list1 ul").css({display:"none"}).eq(iIndex2).show();
    })

    /*鼠标划入图片区域让按钮出来*/
    $(".banner-wrap").hover(function () {
        $(".next").stop().fadeIn();
        $(".prev").stop().fadeIn();
    },function () {
        $(".next").stop().fadeOut();
        $(".prev").stop().fadeOut();
    })
    $(".next").hover(function () {
        $(".next").stop().fadeIn();
    },function () {
        $(".next").stop().fadeOut();
    })
    $(".prev").hover(function () {
        $(".prev").stop().fadeIn();
    },function () {
        $(".prev").stop().fadeOut();
    })

    /*鼠标划入右边竖立的图片事件*/
    $(".right-pic").hover(function () {
        $(".right-pic").stop().animate({right:"-5"})
    },function () {
        $(".right-pic").stop().animate({right:"0"})
    });








































})
