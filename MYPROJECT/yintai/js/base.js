/**
 * Created by Administrator on 2016/9/13.
 */
$(function () {
    /*头部微信*/
    $(".yt-wechat").hover(function () {
        $(".wechat-pic").show();
    },function () {
        $(".wechat-pic").hide();
    })
    /*头部手机*/
    $(".yt-phone").hover(function () {
        $(".phone-pic").show();
    },function () {
        $(".phone-pic").hide();
    })

    /*头部我的银泰*/
    $(".my-yt").hover(function () {
        $(".my-list").show();
    },function () {
        $(".my-list").hide();
    })



})