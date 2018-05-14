$(function () {
    // 设置tab栏切换
    $(".p-leftTab li").click(function () {
        $(this).addClass("p-active").siblings("li").removeClass("p-active");
        $(".p-rightCont").children("div").eq($(this).index()).addClass("p-disBlock").siblings("div").removeClass("p-disBlock");
    })
    // 设置pk页 点击图片消失
    $(".p-pkHouse .p-close").click(function () {
        $(this).parent(".p-oneHouse").css("display","none");
    })
})