$(function () {
    $(".a-leftTab li").on("click",function () {
        $(this).addClass("a-active").siblings("li").removeClass("a-active");
        $(".a-rightCont").children("div").eq($(this).index()).addClass("a-disBlock").siblings("div").removeClass("a-disBlock");
    })
})