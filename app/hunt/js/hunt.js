// 设置点击时小三角的位置
$(function () {
    // $(".h-type .h-olderHouse").on("click",function () {
    //     alert(1)
    //     // $(".h-triangle").css("left","0.3125rem");
    // });
    $(".h-type .h-buyHouse").on("click",function () {
        $(".h-triangle").css("left","0.234375rem");
    })
    $(".h-type .h-huntHouse").on("click",function () {
        $(".h-triangle").css("left","1.7rem");
    })
})