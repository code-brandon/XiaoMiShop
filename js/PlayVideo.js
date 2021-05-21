// 视频对象
var video = $("#video-video");
// 转换成js对象
vid=video[0];
// 视频控制栏对象
Control_menu = $(".Vide-div .Vide-window .Vide-body .Control-menu");
//关闭视频窗口对象
Close_video=$(".Vide-div .Vide-window .Vide-top i");
//视频窗口对象
Vide_div=$(".Vide-div");
//视频a标签对象
video_alabel = $("div.home-main > div > div.Home-video.Home-array.home-brick-box > div.box-bd > div > div > div > ul > li > a");

var video_src = ["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4",
    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4"];

/*var video_src = ["./vide/void_1.mp4",
    "./vide/void_2.mp4",
    "./vide/void_3.mp4",
    "./vide/void_4.mp4"];*/

//点击视频a标签替换视频播放地址
video_alabel.click(function () {
    let index = video_alabel.index(this);
    vid.src=video_src[index];
    Vide_div.removeClass("hide");
    /*vid.load(function () {
        $("#video-video-url").attr("src", video_src[index]);

    })*/


});

//关闭视频窗口
Close_video.click(function () {
    // alert("123")
    vid.pause();
    Vide_div.addClass("hide");
});
//显示隐藏音频控制
video.on("click",function (){
    playPause();
}).on("mouseover",function () {
    Control_menu.removeClass("hide");
    setTimeout(function () {
        Control_menu.addClass("hide");
    },3000);
})/*.on("mouseout",function () {
    Control_menu.addClass("hide");
})*/
Control_menu.on("mouseover",function () {
    Control_menu.removeClass("hide");

}).on("mouseout",function () {
    Control_menu.addClass("hide");
})
//播放
function playPause() {
    if (vid.paused)
        vid.play();
    else
        vid.pause();
}

$(".Vide-div .Vide-window .Vide-body .Control-menu .Played-Button").click(function () {
    playPause();
    //切换暂停播放图标
    $(this).toggleClass("icon-play icon-zantingtingzhi");
});
// 当视频播放位置已经改变(事件监听)
vid.addEventListener('timeupdate', function () {
    var currentTime = vid.currentTime;
    var duration = vid.duration;
    var percent = (currentTime/duration*100)+'%';
    $(".Vide-div .Vide-window .Vide-body .Control-menu .Played-ing").css("width", percent);
    console.log(percent)
    $(".Vide-div .Vide-window .Vide-body .Control-menu .Played-time>span:first-child").html(dateFmt(currentTime));
    $(".Vide-div .Vide-window .Vide-body .Control-menu .Played-time>span:last-child").html(dateFmt(duration));
});

//时间格式化
function dateFmt(s) {
    var minute = parseInt(s / 60);
    var second = parseInt(s % 60);
    minute = fix(minute, 2);
    second = fix(second, 2);
    return minute + ':' + second;
}

//音量控制
$(".Vide-div .Vide-window .Vide-body .Control-menu .Played-volume .volume-strip>span:first-child")[0].addEventListener('click', function (event) {
    //鼠标点击坐标
    var offsetX = event.offsetX;//鼠标点击的X坐标点
    var width = this.offsetWidth;//标签的总宽度
    console.log(offsetX, width);
    vid.volume=(offsetX/100).toFixed(1);//设置音量
    $(".Vide-div .Vide-window .Vide-body .Control-menu .Played-volume .volume-strip>span:last-child").css("width", offsetX);

});
$(".Vide-div .Vide-window .Vide-body .Control-menu .Played-volume .volume-strip>span:last-child")[0].addEventListener('click', function (event) {
    //鼠标点击坐标
    var offsetX = event.offsetX;//鼠标点击的X坐标点
    var width = this.offsetWidth;//标签的总宽度
    console.log(offsetX, width);
    vid.volume=(offsetX/100).toFixed(1);//设置音量
    $(this).css("width", offsetX);
});