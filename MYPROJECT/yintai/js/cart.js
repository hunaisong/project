/**
 * Created by Administrator on 2016/9/20.
 */
$(function () {
	//alert(1)
    var cookies = document.cookie;//获取到之前储存的cookie
    var arr=[];//用来存放id值
    var cook = cookies.split("; ");
    //console.log(cook);
    for(var i = 0; i <cook.length;i++){
        var daid = cook[i].split("=");
        var nameid = daid[0]*1;
        if(!isNaN(nameid)&&daid[1]!=null){
            arr.push(daid[1]) ;
        }
    }
    //alert(arr)
    $.ajax({
        url:"json/liebiao.json",
        success:function (data) {
        	//alert(data)
            var str="";
            for(var i=0; i <arr.length;i++){
                for (var j=0;j<data.length;j++){
                    //var count = getCookie("count"+data[j].Id);
                    if(arr[i]==data[j].Id){
                    	//alert(1);
                    	str='<div class="CommodityList">'+
                        '<div class="AProduct areacolor cf">'+
                        '<div class="category th-chk">'+
                        '<input type="checkbox" checked="checked" class="checkItem">'+
                        '</div>'+
                        '<div class="category th-item">'+
                        '<div class="property cf">'+
                        '<div class="pro-img">'+
                        '<a href="###"><img src="'+data[j].ImgSmall+'" alt=""></a>'+
                        '</div>'+
                        '<p class="pro-title">'+
                        '<a href="###">'+data[j].title+'</a>'+
                    '</p>'+
                    '<div class="pro-pro">'+
                        '+<p class="pro-check">'+
                        '<span>'+
                        '颜色：'+
                '<b>玫瑰红</b>'+
                    '</span>'+
                    '<span>'+
                    '尺码：'+
                '<b>L</b>'+
                    '</span>'+
                    '</p>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="category th-price">'+
                        '<div class="pro-price">'+
                        '<strong>￥<em>'+data[j].price+'</em></strong>'+
                        '</div>'+
                        '</div>'+
                        '<div class="category th-amount">'+
                        '<div class="pro-number">'+
                        '<a href="javascript:;" class="nums-red disable">-</a>'+
                        '<input type="text" class="pro-nums" value="1" lastvalue="1">'+
                        '<a href="javascript:;" class="nums-add">+</a>'+
                        '</div>'+
                        '</div>'+
                        '<div class="category th-sum">'+data[j].price+'</div>'+
                        '<div class="category th-op">'+
                        '<div class="decidetime">'+
                        '<a href="javascript:;" class="pro-collect">移入收藏</a>'+
                        '</div>'+
                        '<div class="decidetime">'+
                        '<a href="javascript:;" class="pro-remove" id="'+data[j].Id+'">删除商品</a>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'	
                    }
                       
                }
                $(".CommodityBox").append(str);



            }
            /*购物车功能实现区域*/
            var $checkAll=$(".checkAll");
            var $checkItem=$(".checkItem")
            $checkAll.on("click",function () {
                /*判断当前是否选中*/
                /*  $checkItem.each(function(index,item){
                 this.checked = ! this.checked;
                 })*/
                if ($(this).prop("checked")){
                    $checkAll.prop("checked",true);
                    $checkItem.prop("checked",true);
                }else {
                    $checkAll.prop("checked",false);
                    $checkItem.prop("checked",false);
                }
            })


            $(document).on("click",".checkItem",function () {
                if(!$(this).prop("checked")){
                    //如果当前没有选中，就干掉全选
                    $checkAll.prop("checked",false)
                }else {
                    var allCh=true;//假设被全选中
                    $(".checkItem").each(function () {
                        if (!$(this).prop("checked")){
                            allCh=false
                        }
                    });
                    if (allCh){
                        $checkAll.prop("checked",true)
                    }
                }
            })

            /*使用一下获取总价的方法*/
            getSum();

            /*滚动功能区*/
            /*当滚动时候，如果高度把结算金额的栏淹没，就让结算金额栏固定*/
            var iT=$(".PayofFou").offset().top;
            $(window).on("scroll load",function () {
                var iH=$(this).scrollTop()+$(this).height();
                if (iH<iT){
                    $(".payoffou").addClass("fix")

                }else {
                    $(".payoffou").removeClass("fix")
                }
            })

            /*加减功能区*/
            /*减*/
            $(document).on("click",".nums-red",function () {
                var oP=$(this).parents(".CommodityList");//找到当前的父级
                var num=oP.find(".pro-nums");//找到父级元素下的input
                //console.log(num)
                var price=oP.find("em");//找到单价
                var jifen=oP.find(".th-sum");
                var value=num.val();
                if (value<=1){
                    value=2;
                }
                num.val(--value)

                //积分
                jifen.html(value*price.html())
                //console.log(value);
                getSum();
            })

            /*加*/
            $(document).on("click",".nums-add",function () {
                var oP=$(this).parents(".CommodityList");
                var num=oP.find(".pro-nums");
                var price=oP.find("em");
                var jifen=oP.find(".th-sum");
                var value=num.val();
                num.val(++value);
                jifen.html(value*price.html());
                getSum();

            })
            
            /*计算总价,总的积分就是总价*/
            function getSum() {
                var allNum=0;
                var allSum=0;
                $(".checkItem:checked").each(function () {


                    var oP=$(this).parents(".CommodityList");
                    var num=oP.find(".pro-nums");
                    var sum=oP.find(".th-sum");
                    allNum+=parseFloat(num.val());
                    allSum+=parseFloat(sum.html());

                });

                $(".pay").html("￥"+allSum);
            }

            /*删除当前的商品,同时删除当前的cookie*/
            $(window).on("click",".pro-remove",function () {
                //console.log($(this).attr("id"))
                $(this).parents(".CommodityList").remove();
                removeCookie(this.id,'/');//删除当前商品的cookie
                removeCookie("Id",'/');
                getSum();
            });


        }
    })


































})