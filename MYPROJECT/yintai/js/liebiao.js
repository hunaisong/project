/**
 * Created by Administrator on 2016/9/17.
 */
$(function () {
    /*封装json数据，并将json数据添加到内容区*/
    var proData=[]
    $.get("json/liebiao.json",function (data) {
        proData=data;
        console.log(data)
        var str="";
        for (var i=0;i<proData.length;i++){
            str+='<div class="p-listInfo">'+
                '<div class="p-listImgBig">'+
                '<a href="###">'+
                '<img class="BigImg" data-id="'+proData[i].Id+'" src="'+proData[i].ImgBig+'">'+
                '</a>'+
                '</div>'+
                '<div class="p-listImgSmall">'+
                '<div class="listImgSmallP">'+
                '<span class="p-listPicLeftBtn p-listPicBtnDis">'+
                '<a href="###"></a>'+
                '</span>'+
                '</div>'+
                '<div class="listImgSmallN">'+
                '<span class="p-listPicRightBtn p-listPicBtnDis">'+
                '<a href="javascript:;"></a>'+
                '</span>'+
                '</div>'+
                '<div class="p-listScroller">'+
                '<ul class="cf listPicPanel">'+
                '<li>'+
                '<a href="###">'+
                '<img src="'+proData[i].ImgSmall+'" alt="">'+
                '</a>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '<div class="p-listPrice">'+
                '<strong class="y-p">￥'+proData[i].price+'</strong>'+
                '<s class="m-p">￥'+proData[i].oldPrice+'</s>'+
                '</div>'+
                '<div class="p-listTxt">'+
                '<p>'+
                '<a href="###">'+proData[i].title+'</a>'+
                '</p>'+
                '</div>'+
                '<div class="p-listAddInfo">'+
                    '<p class="p-preferentialInfo">'+
                    '<a href="###"></a>'+
                    '</p>'+
                    '<p class="p-storeEntrance">'+
                    '<a href="###">'+proData[i].shop+'</a>'+
                    '</p>'+
                    '</div>'+
                    '</div>'
        }
        $(".p-listMain").html(str)
    })

    /*json加载数据结束*/
    
    /*鼠标移入名品时候事件*/
    $(".J-Cousor").hover(function () {
        $(".postip").show();
        $(".J_xuanqu").css({backgroundColor:"#535353"})
        $(".J_xuanqu a").css({color:"#fff"})
        $(".J_xuanqu b").css({backgroundPosition:"0 -5px"})
    },function () {
        $(".postip").hide()
        $(".J_xuanqu").css({backgroundColor:"#eee"})
        $(".J_xuanqu a").css({color:"#666"})
        $(".J_xuanqu b").css({backgroundPosition:"0 0"})
    })

    /*鼠标移入每个商品时候样式的改变*/
    /*必须使用live委托，因为元素标签是写在js脚本中*/
    $(".p-listInfo").live("mouseover",function () {
        index=$(this).index();
        $(".p-listInfo").removeClass("p-listInfoOn").eq(index).addClass("p-listInfoOn");
    })
    /*鼠标移出时候商品样式改变*/
    $(".p-listInfo").live("mouseout",function () {
        var index1=$(this).index();
        $(".p-listInfo").removeClass("p-listInfoOn")
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

    /*点击商品会跳转到详情页*/
    $(".p-listMain").on("click",".BigImg",function () {
        window.location.href="detail.html"
        var Id=$(this).attr("data-id");
        setCookie("Id",Id,"/",7);
    })





















})