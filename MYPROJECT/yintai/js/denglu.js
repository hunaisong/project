/**
 * Created by Administrator on 2016/9/15.
 */
$(function () {
    /*设置页面加载时候初始状态，让app扫描登录那部分隐藏*/
    $(".select-item").eq(1).css({display:"none"})
    /*设置登录界面选项卡事件*/
    var index=0;
    $(".card li").click(function () {
        index=$(this).index();
        console.log(index)
        $(".card li").removeClass("active").eq(index).addClass("active")
        $(".select-item").css({display:"none"}).eq(index).css({display:"block"})
    })

    /*设置当鼠标移入二维码时候，让帮助菜单显示出来*/
    $(".code-img").hover(function () {
        $(".code-img").stop().animate({left:0});
        $(".qrcode-help").stop().animate({opacity:1})
    },function () {
        $(".code-img").stop().animate({left:70})
        $(".qrcode-help").stop().animate({opacity:0})
    })


    /*设置登录时候，手机号、密码、验证码特效*/

    /*设置初始状态*/
    $(".yt-denglu-list .tishi").css({visibility:"hidden"})

    /*设置手机号输入框的效果*/
    var emailReg=/^([a-zA-Z0-9]\.)?\w+@\w+.[a-z]{2,5}$/
    var mobileReg=/^[1]{1}[3|5|7|8]{1}\d{9}$/

    /*获得焦点时候*/
    $(".phone .name").focus(function () {
        if ($(".name").val()==""){
            $(".phone .tishi").css({visibility:"visible",color:"#000"}).html("请输入E-mail或者手机号码");
        }
        if ($(".name").val()!=""){
            return
        }
    })
    /*失去焦点时候*/
    $(".phone .name").blur(function () {
        /*如果字符串是空的*/
        if ($(".name").val()==""){
            $(".phone .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的E-mail或已验证手机号码");
            $(".phone .name").css({borderColor:"red"})
        }
        /*如果字符串不是空的*/
        if ($(".name").val()!=""){
            /*如果匹配不正确*/
            if (emailReg.test($(".name").val())==false||mobileReg.test($(".name").val())==false){
                $(".phone .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的E-mail或已验证手机号码");
                $(".phone .name").css({borderColor:"red"});
            }
            /*如果匹配正确*/
            if (emailReg.test($(".name").val())||mobileReg.test($(".name").val())){
                $(".phone .tishi").css({visibility:"hidden"})
                $(".phone .name").css({borderColor:"#000"})
            }
        }
    })

    /*密码框效果*/
    var pwdReg=/^[a-z0-9_-]{6,18}$/;

    /*设置密码框获得焦点时候*/
    $(".password").focus(function () {
        if ($(".password").val()==""){
            $(".pwd .tishi").css({visibility:"visible",color:"#000"}).html("请输入登录密码")
        }
        if ($(".password").val()!=""){
            return
        }
    })

    /*设置密码框失去焦点时候*/
    $(".password").blur(function () {
        /*当密码框内容为空的时候*/
        if ($(".password").val()==""){
            $(".pwd .tishi").css({visibility:"visible",color:"red"}).html("6-16个字符，可使用字母、数字、符号任意组合！")
            $(".password").css({borderColor:"red"})
        }
        /*当密码框内容不为空的时候*/
        if ($(".password").val()!=""){
            if (pwdReg.test($(".password").val())){
                $(".pwd .tishi").css({visibility:"hidden"})
                $(".password").css({borderColor:"#000"})
            }
            if (!pwdReg.test($(".password").val())){
                $(".pwd .tishi").css({visibility:"visible",color:"red"}).html("6-16个字符，可使用字母、数字、符号任意组合！")
                $(".password").css({borderColor:"red"})
            }
        }
    })

    /*设置验证码框的效果*/

    /*当获得焦点的时候*/
    $(".yanzheng input").focus(function () {
        if ($(".yanzheng input").val()==""){
            $(".yanzheng .tishi").css({visibility:"visible"}).html("请输入右侧图中的验证码")
        }
    })

    /*当失去焦点的时候*/
    $(".yanzheng input").blur(function () {
        if ($(".yanzheng input").val()==""){
            $(".yanzheng .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的验证码");
            $(".yanzheng input").css({borderColor:"red"})
        }
    })















})