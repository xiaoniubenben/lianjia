// tab栏切换
$(function () {
    $('.ts-nav li').on("click",function () {
        $(this).addClass('ts-active').siblings('li').removeClass('ts-active');
        $('.ts-contents').children(".ts-content").eq($(this).index()).addClass('ts-contActive').siblings('.ts-content').removeClass('ts-contActive');
    })
})