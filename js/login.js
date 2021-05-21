$(".login-subject .subject-windos .Login-options>div>a").click(function (){
    //移动切换div的显示隐藏
    //获取当前点击的元素是第几个
    var login_box = $(".login-subject .subject-windos .login-box");
    var index = $(".login-subject .subject-windos .Login-options a").index(this);
    // alert(index);
    if (index==0){
        login_box.eq(index).removeClass("hide");
        //除了本身（自己）其他的都加hide
        login_box.eq(index+1).addClass("hide");
    } else{
        login_box.eq(index).removeClass("hide");
        //除了本身（自己）其他的都加hide
        login_box.eq(index-1).addClass("hide");
    }
    //移动变色
    $(this).addClass("tab-active");
    $(this).siblings().removeClass("tab-active");
});