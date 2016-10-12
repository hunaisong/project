/**
 * Created by Administrator on 2016/9/19.
 */
$(function () {
    /*/!*设置登录时候，手机号、密码、验证码特效*!/

    /!*设置初始状态*!/
    $(".yt-denglu-list .tishi").css({visibility:"hidden"})

    /!*设置手机号输入框的效果*!/
    var emailReg=/^([a-zA-Z0-9]\.)?\w+@\w+.[a-z]{2,5}$/
    var mobileReg=/^[1]{1}[3|5|7|8]{1}\d{9}$/

    /!*获得焦点时候*!/
    $(".phone .name").focus(function () {
        if ($(".name").val()==""){
            $(".phone .tishi").css({visibility:"visible",color:"#000"}).html("请输入E-mail或者手机号码");
        }
        if ($(".name").val()!=""){
            return
        }
    })
    /!*失去焦点时候*!/
    $(".phone .name").blur(function () {
        /!*如果字符串是空的*!/
        if ($(".name").val()==""){
            $(".phone .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的E-mail或已验证手机号码");
            $(".phone .name").css({borderColor:"red"})
        }
        /!*如果字符串不是空的*!/
        if ($(".name").val()!=""){
            /!*如果匹配不正确*!/
            if (emailReg.test($(".name").val())==false||mobileReg.test($(".name").val())==false){
                $(".phone .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的E-mail或已验证手机号码");
                $(".phone .name").css({borderColor:"red"});
            }
            /!*如果匹配正确*!/
            if (emailReg.test($(".name").val())||mobileReg.test($(".name").val())){
                $(".phone .tishi").css({visibility:"hidden"})
                $(".phone .name").css({borderColor:"#000"})
            }
        }
    })

    /!*密码框效果*!/
    var pwdReg=/^[a-z0-9_-]{6,18}$/;

    /!*设置密码框获得焦点时候*!/
    $(".password").focus(function () {
        if ($(".password").val()==""){
            $(".pwd .tishi").css({visibility:"visible",color:"#000"}).html("请输入登录密码")
        }
        if ($(".password").val()!=""){
            return
        }
    })

    /!*设置密码框失去焦点时候*!/
    $(".password").blur(function () {
        /!*当密码框内容为空的时候*!/
        if ($(".password").val()==""){
            $(".pwd .tishi").css({visibility:"visible",color:"red"}).html("6-16个字符，可使用字母、数字、符号任意组合！")
            $(".password").css({borderColor:"red"})
        }
        /!*当密码框内容不为空的时候*!/
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

    /!*设置验证码框的效果*!/

    /!*当获得焦点的时候*!/
    $(".yanzheng input").focus(function () {
        if ($(".yanzheng input").val()==""){
            $(".yanzheng .tishi").css({visibility:"visible"}).html("请输入右侧图中的验证码")
        }
    })

    /!*当失去焦点的时候*!/
    $(".yanzheng input").blur(function () {
        if ($(".yanzheng input").val()==""){
            $(".yanzheng .tishi").css({visibility:"visible",color:"red"}).html("请输入正确的验证码");
            $(".yanzheng input").css({borderColor:"red"})
        }
    })*/



    var emailReg=/^([a-zA-Z0-9]\.)?\w+@\w+.[a-z]{2,5}$/
    var mobileReg=/^[1]{1}[3|5|7|8]{1}\d{9}$/
    var pwdReg=/^[a-z0-9_-]{6,18}$/
    /*设置手机号、E-mail输入框的效果*/


    /*获取焦点时候*/
    $(".client-phone input").focus(function () {

        /*如果输入框内容为空*/
        if ($(".client-phone input").val()==""){
            $(".client-phone .tishi").css({visibility:"visible",color:"red"})
            $(".client-phone p").html("请输入您的手机号/E-mail！")
            $(".client-phone input").css({borderColor:"red"})
        }


        /*如果内容不为空，进行判断*/

        if ($(".client-phone input").val()!=""){


            /*如果输入的是邮箱*/
            if (emailReg.test($(".client-phone input").val())){
                $(".client-phone p").html("手机号和E-mail用于登录和找回密码，请认真填写")
                $(".client-phone .tishi").css({color:"#000"})
                $(".client-phone input").css({borderColor:"#000"})

            }
            if (!emailReg.test($(".client-phone input").val())){
                $(".client-phone p").html("E-mail格式不正确")
                $(".client-phone .tishi").css({color:"red"})
                $(".client-phone input").css({borderColor:"#red"})

            }

            /*如若输入的是手机号*/
            if (mobileReg.test($(".client-phone input").val())){
                $(".client-phone p").html("手机号和E-mail用于登录和找回密码，请认真填写")
                $(".client-phone .tishi").css({color:"#000"})
                $(".client-phone input").css({borderColor:"#000"})
            }

            if (!mobileReg.test($(".client-phone input").val())){
                $(".client-phone p").html("请输入正确的手机号")
                $(".client-phone .tishi").css({color:"red"})
                $(".client-phone input").css({borderColor:"#red"})
            }
        }
    })

    /*密码框效果*/

    /*密码框获取焦点时候*/
    $(".client-password input").focus(function () {
        if ($(".client-password input").val()==""){
            $(".client-password .tishi").css({visibility:"visible"})
            $(".client-password p").html("6-16个字符，可使用字母、数字、符号任意组合").css("color","#000")
        }
        if ($(".client-password input").val()!=""){
            if (pwdReg.test($(".client-password input").val())){
                return
            }else {
                $(".client-password p").html("6-16个字符，可使用字母、数字、符号任意组合").css("color","#000")
            }
        }
    })
    /*密码框失去焦点时候*/
    $(".client-password input").blur(function () {
        if ($(".client-password input").val()==""){
            $(".client-password input").css({borderColor:"red"})
            $(".client-password p").css({color:"red"}).html("密码不能为空")

        }
        if ($(".client-password input").val()!=""){

            if (pwdReg.test($(".client-password input").val())){
                return;
            }
            if (!pwdReg.test($(".client-password input").val())){
                $(".client-password p").html("长度为6-16个字符,请确认!").css("color","red")
                $(".client-password input").css({borderColor:"red"})
            }
        }
    })

    /*再次确认密码*/
    $(".client-queren input").focus(function () {
        if ($(".client-queren input").val()==""){
            $(".client-queren .tishi").css({visibility:"visible"})
            /*$(".client-queren input").css({borderColor:"red"})*/
            $(".client-queren p").html("请再输入您设置的密码").css({color:"#000"})
        }
        /*if ($(".client-queren input").val()!=""){
            if ($(".client-queren input").val()==$(".client-password input").val()){
                $(".client-queren .tishi").css({visibility:"hidden"})
            }
        }
        if (){

        }*/
    })

    $(".client-queren input").blur(function () {
        if ($(".client-queren input").val()==""){
            $(".client-queren p").html("重复密码不能为空").css({color:"red"})
            $(".client-queren input").css({borderColor:"red"})
        }
        if ($(".client-queren input").val()!=""){

            if ($(".client-queren input").val()==$(".client-password input").val()) {
                $(".client-queren .tishi").css({visibility: "hidden"})
            }
            if ($(".client-queren input").val()!=$(".client-password input").val()){
                $(".client-queren .tishi").css({visibility:"visible"})
                $(".client-queren p").html("两次密码不一致").css({color:"red"})
            }
        }
    })


    /*验证码部分*/
    $(".client-yanzheng input").focus(function () {
        if ($(".client-yanzheng input").val()==""){
            $(".client-yanzheng .tishi").css({visibility:"visible"})
            $(".client-yanzheng .tishi p").html("请输入右侧的验证码")
        }
    })




})