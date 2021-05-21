
// 轮播图
var Carousel_imgs = ["./img/index_lbt_1.jpg",
    "./img/index_lbt_2.jpg",
    "./img/index_lbt_3.jpg",
    "./img/index_lbt_4.jpg"];
var index = 0;//角标
PointUl = $("#CarouselPointUl>li");//获取轮播图的点/li标签
PointUl.eq(index).css({"background": "hsla(0,0%,100%,.4)",
    "border-color": "rgba(0,0,0,.4)"});

function Carousel(i) {
    index=i;
    PointUl.eq(index).siblings().css({"background": "rgba(0,0,0,.4)",
        "border-color": "hsla(0, 0%, 100%, .3)"});
    //设置src属性
    $("#Carousel-img").prop("src",Carousel_imgs[index]);
    //transition-duration: 2000ms;
    PointUl.eq(index).css({"background": "hsla(0,0%,100%,.4)",
        "border-color": "rgba(0,0,0,.4)"});


}

//小米闪购
var right_flash = $("#right-Flash");
//小米闪购li个数
var right_flash_li = right_flash.children("li").length;
var number =  Math.floor(right_flash_li / 4);
var right_flash_px=0;
function Flash(){
    if (number==0){
        right_flash_px=0;
        right_flash.css("transform","translate3d("+right_flash_px+"px, 0px, 0px)");
        number=Math.floor(right_flash_li / 4);
        return ;
    }
    // console.log(number,right_flash_li,right_flash_px);
    number--;

    if (number >0){
        right_flash_px-=4*248;
        right_flash.css("transform","translate3d("+right_flash_px+"px, 0px, 0px)");
    }else{
        right_flash_px-=right_flash_li % 4*248;
        right_flash.css("transform", "translate3d(" + right_flash_px + "px, 0px, 0px)");
    }
    // console.log(number,right_flash_li,right_flash_px);

}
// 定时器
setInterval(function(){
    index++;
    if (index>3){
        index=0;
    }
    Carousel(index);
},4000);
// 翻滚定时器
var tim = setInterval(function(){
    Flash()
},5000);

//返回顶部获取滚动条位置定时器
setInterval(function () {
    ScollPostion();
}, 100);

//翻滚
//左
$(".home-main .Flash-sale .box-hd .swiper-controls .swiper-flashsale-prev").click(function (){
    clearInterval(tim)
    number++;
    if(right_flash_li % 4 == 0){
        right_flash_px+=4*248;
        right_flash.css("transform","translate3d("+right_flash_px+"px, 0px, 0px)");
    }else {
        if (number >=Math.floor(right_flash_li / 4)){
            right_flash_px=0;
            right_flash.css("transform","translate3d("+right_flash_px+"px, 0px, 0px)");
        }else{
            right_flash_px+=4*248;
            right_flash.css("transform", "translate3d(" + right_flash_px + "px, 0px, 0px)");
        }
    }

    // console.log(number,right_flash_li,right_flash_px);
});
//右
$(".home-main .Flash-sale .box-hd .swiper-controls .swiper-flashsale-next").click(function (){
    clearInterval(tim)

    if (number >1){
        right_flash_px-=4*248;
        right_flash.css("transform","translate3d("+right_flash_px+"px, 0px, 0px)");
    }else{
        right_flash_px=-right_flash_li*248+4*248;
        right_flash.css("transform", "translate3d(" + right_flash_px + "px, 0px, 0px)");
    }
    number--;
    // console.log(number,right_flash_li,right_flash_px);
});

//秒购倒计时
var d = new Date();
var year = d.getFullYear();//年
var month = d.getMonth();//月
var day = d.getDate();//日
var hour = d.getHours()+1;//时
var minute = 0;//分
var second = 0;//秒
var strFlash = fix(hour, 2)+":"+fix(minute, 2)+"";
$(".home-main .Flash-sale .box-bd .left .round>span").html(strFlash);
var timer = null;
miaosha();
// 递归调用 注意：比当前时间大！
/*timer = setInterval(function (){
    miaosha(year,month,day,hour,minute,second);
}, 1000);*/ //// 设置开始的时间

// 秒杀函数
function miaosha(year, month, day, hour, minute, second) {
    // 剩余时间：设定的-当前的
    let leftTime = (new Date(year, month, day, hour, minute, second)) - (new Date());
    // parseInt()返回一个整数。得出剩余的时分秒
    let shi;
    shi = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);
    let fen;
    fen = parseInt(leftTime / 1000 / 60 % 60, 10);
    let miao;
    miao = parseInt(leftTime / 1000 % 60, 10);
    // 格式的转化
        shi = fix(shi, 2);
        fen = fix(fen, 2);
        miao = fix(miao, 2);
        // 递归调用 注意：比当前时间大！
        timer = setTimeout("miaosha(year,month,day,hour,minute,second)", 1000); //// 设置开始的时间
        // 设置时分秒
        $("#Flash_H").html(shi);
        $("#Flash_M").html(fen);
        $("#Flash_S").html(miao);
}
//fix函数：数字加0
function fix(num, length) {
    // console.log(num);
    // 数字转化为字符串 进行拼接
    return num.toString().length<length?'0'+num:num;
}


//切换

/*$(".home-main .Home-appliances .home-box-hd .more>ul>li").click(function () {



});*/
$(".home-main .Home-appliances .home-box-hd .more>ul>li").mouseover(function (){
    //移动切换div的显示隐藏
    //获取当前点击的元素是第几个
    var index = $(".home-main .Home-appliances .home-box-hd .more>ul>li").index(this);
    // alert(index);
    $(".home-main .Home-appliances .box-bd .row .right>div").eq(index).removeClass("hide");
    //除了本身（自己）其他的都加hide
    $(".home-main .Home-appliances .box-bd .row .right>div").eq(index).siblings().addClass("hide");
    //移动变色
    $(this).addClass("tab-active");
    $(this).siblings().removeClass("tab-active");
});

$(document).ready(function() {
    $("#btn").click(function() {
        $("#choiceWindow").slideDown(300);
        $("#backGround").show();

    });

    $("#x").click(function() {
        $("#choiceWindow").slideUp(300);
        $("#backGround").hide();
    })

});

//显示隐藏返回顶部
function  ScollPostion() {//滚动条位置
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    if(t>870){
        $(".home-tool-bar ul > li:last-child").css("visibility","visible");
    }else{
        $(".home-tool-bar ul > li:last-child").css("visibility","hidden");
    }
    // console.log("top:" + t + ", left:" + l + ", width:" + w + ", height:" + h + ")");

    $(".home-tool-bar ul > li:last-child").click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }
    );
    if (test.indexOf("ProductDetails.html") != -1){
        if (t>142){
            navigationBar.css({
                "position":"fixed",
                "top":"0px"
            });
        }else{
            navigationBar.css({
                "position":"absolute",
                "top":""
            });
        }
        //console.log("top:" + t + ", left:" + l + ", width:" + w + ", height:" + h + ")");
    }
}



