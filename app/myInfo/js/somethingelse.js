// tab栏切换
$(function () {
    $('.t-nav li').on("click",function () {
        $(this).addClass('t-active').siblings('li').removeClass('t-active');
        $('.t-contents .t-content').eq($(this).index()).addClass('t-contActive').siblings('.t-content').removeClass('t-contActive');
    })
})