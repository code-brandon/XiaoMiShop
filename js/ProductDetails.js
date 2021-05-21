var img_box_left = $(".img-left .img-box .img-box-left");
var img_box_right = $(".img-left .img-box .img-box-right");
var img_box_img = $(".img-left .img-box > img");
var navigationBar = $(".NavigationBar");
//获取轮播图的点/li标签
var img_box_Subscript = $(".img-left .img-box .img-box-Subscript li");

//单选按钮
var choice = $(".Select-service-margin .Single-choice > i");
//复选框
var check_box = $(".Select-service-margin .Single-choice .content .checkbox > input");

//div
var content_box = $(".content-box");

content_box.click(function () {
    var che = $(this).find("input");
    var choice = $(this).children("div").children("i")
    if (choice.attr("style")){
        choice.removeAttr("style").html("");
    }else {
        choice.css({"background-color":"coral",}).html("√");
    }

    // var byName = this.getElementsByName("input");
    // $(byName).prop("checked",true);
    if (che.prop("checked")){
        che.prop("checked",false);
    }else {
        che.prop("checked",true);
    }
    // $(this).find("input").prop("checked",true);
});



$(".product-con .product-con-box .Select-product-margin .Select li").click(function (){
    //移动切换div的显示隐藏
    //获取当前点击的元素是第几个
    var index = $(".product-con .product-con-box .Select-product-margin .Select li").index(this);

    //移动变色
    $(this).addClass("select-li");
    $(this).siblings().removeClass("select-li");
});

// 轮播图
var Carousel_imgs = ["./img/ProductDetails_01.jpg",
    "./img/ProductDetails_02.jpg",
    "./img/ProductDetails_03.jpg",
    "./img/ProductDetails_04.jpg",
    "./img/ProductDetails_05.jpg"];

var index = 0;//角标
img_box_Subscript .eq(index).css({"background": "#ccc"});

function Carousel(i) {
    index=i;
    img_box_Subscript.eq(index).siblings().css({"background-color": "#ccc"});
    //设置src属性
    img_box_img.prop("src",Carousel_imgs[index]);
    //transition-duration: 2000ms;
    img_box_Subscript.eq(index).css({"background-color": "#a3a3a3"});
}

img_box_left.click(function () {
    if(index < 1){
       index = 4;
    }else{
        index--;
    }
    Carousel(index);
});

img_box_right.click(function () {
    if(index > 3){
        index = 0;
    }else{
        index++;
    }
    Carousel(index);
});



setInterval(function(){
    index++;
    if (index>4){
        index=0;
    }
    Carousel(index);
},4000);



