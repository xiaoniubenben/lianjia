$(function () {
    // 设置点击时小三角的位置及字体颜色
    $(".f-searchBar .f-find").click(function () {
        $(".f-searchCont span").css("left","15px");
        $(this).addClass("f-active").siblings("a").removeClass("f-active");
    })
    $(".f-searchBar .f-rent").click(function () {
        $(".f-searchCont span").css("left","90px");
        $(this).addClass("f-active").siblings("a").removeClass("f-active");
    })
    $(".f-searchBar .f-findPlot").click(function () {
        $(".f-searchCont span").css("left","180px");
        $(this).addClass("f-active").siblings("a").removeClass("f-active");
    })
    // 设置点击时字体颜色
    $(".f-limit .f-area a").click(function () {
        $(this).addClass("f-active").siblings("a").removeClass("f-active");
    })
    $(".f-limit input").click(function () {
        // console.log($(this).index());
        if($(this).attr("type") === "radio"){
            $(this).parent("label").addClass("f-active").siblings("label").removeClass("f-active");
        }else if($(this).attr("type") === "checkbox"){
            // console.log($(this).index())
            $(this).parent("label").toggleClass("f-active");
        }

    })
    // 设置“更多及自定义”的显示隐藏
    $('.f-limit .f-clickMore').click(function () {
        var $div = $(this).siblings(".f-moreCont");
        if($div.hasClass('f-display')){
            $div.removeClass('f-display')
            $(this).html('隐藏');
        }else{
            $div.addClass('f-display')
            $(this).html('更多及自定义');
        }
    })
    // tab栏切换
    $(".f-condition li").click(function () {
        $(this).addClass("f-chooseActive").siblings("li").removeClass("f-chooseActive");
        $(".f-house").children("div").eq($(this).index()).addClass("f-disBlock").siblings("div").removeClass("f-disBlock");
    })
})