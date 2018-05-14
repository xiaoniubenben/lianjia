// tab栏切换
$(function () {
    $(".sh-houseType li").on("click",function () {
        $(this).addClass("sh-houseTypeActive").siblings("li").removeClass("sh-houseTypeActive");
        $(".selfHelp .sh-main").eq($(this).index()).addClass('sh-mainActive').siblings('.sh-main').removeClass('sh-mainActive');
    })
    $('.sh-main .sh-tab li').on("click",function () {
        // console.log(2);
        $(this).addClass('sh-bgc').siblings('li').removeClass('sh-bgc');
        $('.sh-mainActive .sh-tabContent div').eq($(this).index()).addClass('sh-active').siblings('div').removeClass('sh-active');
    })
})