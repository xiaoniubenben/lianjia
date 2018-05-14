
$(function () {
        // 动态设置li的高度
        $('.p-contentInfo li').each(function (i,e) {
            var $trHeight = $('.p-pkContent tr').eq(i).height();
            // console.log($trHeight);
            $(this).css("height",$trHeight);
        })

})