// 点击出现弹出框
$(function () {
    $(".b-filtrate div").on("click",function () {
        $(this).find("a").toggleClass("b-active");
        $(this).siblings("div").find("a").removeClass("b-active");
       $(".b-filtrates").children("div").eq($(this).index()).toggleClass("b-block").siblings("div").removeClass("b-block");
    })
})