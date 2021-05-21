var test = window.location.href;
var site_category = $(".sort-header .header-nav .nav-list .nav-category .site-category>ul");
var sort = $(".sort-header .header-nav .nav-list .nav-category .site-category .site-category-list .title");
var site = $(".sort-header .header-nav .nav-list .nav-category .site-category");
if (test.indexOf("ProductDetails.html") != -1){
    sort.css({"color": "#424242"});
    site_category.css({
        "border": "1px solid #ff6700",
        "background-color": "#fff"
    });
    site.css({
        "display": "none"})
    $(".sort-header .header-nav .nav-list .nav-category").on("mouseover", function () {
        site.css({
            "display": "block"
        });
    });
    $("#visibility-all").on("mouseout", function () {
        site.css({
            "display": "none"
        });

    });
}
//搜索栏变色/显示隐藏
search_text=$("#search-text");
search_text.on("focus",function(){
    $(this).addClass("search-border");
    $(".sort-header .header-search .search-form .search-btn").addClass("search-border");
    $(".sort-header .header-search .search-form .search-form-list").removeClass("hide");
});
$(".nav-list>li>a").on("mouseover",function(){
    search_text.blur();
    search_text.removeClass("search-border");
    $(".sort-header .header-search .search-form .search-btn").removeClass("search-border");
    $(".sort-header .header-search .search-form .search-form-list").addClass("hide");
});

