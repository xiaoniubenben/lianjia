$(function () {
    // 设置点击时小三角的位置及字体颜色
    $(".index .find").click(function () {
        $(".searchCont span").css("left","15px");
        $(this).addClass("active").siblings("a").removeClass("active");
    })
    $(".index .rent").click(function () {
        $(".searchCont span").css("left","90px");
        $(this).addClass("active").siblings("a").removeClass("active");
    })
    $(".index .findPlot").click(function () {
        $(".searchCont span").css("left","180px");
        $(this).addClass("active").siblings("a").removeClass("active");
    })
})