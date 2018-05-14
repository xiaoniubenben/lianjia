// 点击出现弹出框
$(function () {
    $(".hh-filtrate div").on("click",function () {
        $(this).find("a").toggleClass("hh-active");
        $(this).siblings("div").find("a").removeClass("hh-active");
       $(".hh-filtrates").children("div").eq($(this).index()).toggleClass("hh-block").siblings("div").removeClass("hh-block");
       // $(".hh-filtrates").css("backgroundColor","rgba(0,0,0,.4)");
    })
})