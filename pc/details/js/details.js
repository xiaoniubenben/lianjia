
$(function () {
    // 弹出框显示隐藏
    $(".d-titlePrice .d-clickOrder").click(function () {
        $(".d-pop1").removeClass("d-allBlock");
    })
    $(".d-titlePrice .d-clickReport").click(function () {
        $(".d-pop2").removeClass("d-allBlock");
    })
    $(".d-orderClose").click(function () {
        $(".d-pop1").addClass("d-allBlock");
    })
    $(".d-reportClose").click(function () {
        $(".d-pop2").addClass("d-allBlock");
    })
    // 设置点击时小三角的位置及字体颜色
    $(".d-searchBar .d-find").click(function () {
        $(".d-searchCont span").css("left","15px");
        $(this).addClass("d-active").siblings("a").removeClass("d-active");
    })
    $(".d-searchBar .d-rent").click(function () {
        $(".d-searchCont span").css("left","90px");
        $(this).addClass("d-active").siblings("a").removeClass("d-active");
    })
    $(".d-searchBar .d-findPlot").click(function () {
        $(".d-searchCont span").css("left","180px");
        $(this).addClass("d-active").siblings("a").removeClass("d-active");
    })
})