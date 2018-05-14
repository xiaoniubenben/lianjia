$(function () {
    // 轮播图
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 分页器
        pagination: {
            el: '.swiper-pagination'
        },
        autoplay: {
            disableOnInteraction: false
        }
    })
    // pk、收藏点击变色
    $(".d-addPk").on("click",function () {
        $(this).toggleClass("d-addPkActive");
    })
    $(".d-addCollect").on("click",function () {
        $(".d-addCollect").toggleClass("d-addCollectActive");
        var $thisi = $(this).find("i");
        if($thisi.hasClass("icon-icon_collect")){
            $thisi.removeClass("icon-icon_collect").addClass("icon-icon3");
        }else{
            $thisi.addClass("icon-icon_collect").removeClass("icon-icon3");
        }
    })


    // 滚动变色
    // var $scrollTop, $opacity,startY , endY,diff,$opacityno;
    // var $imgHeight = $(".d-slider").height();
    // //
    // document.addEventListener("touchmove", function(e){
    //     e.preventDefault();
    // }, false);
    //
    // $('.details').on('touchstart',function(e){
    //     var touch = e.targetTouches[0];
    //     startY = touch.pageY;
    //     // console.log(startY);
    // });
    // $('.details').on('touchmove',function(e){
    //     var touch = e.targetTouches[0];
    //     endY = touch.pageY;
    //     diff = endY - startY;
    // });
    // $('.details').on('touchmove',function(e){
    //     $scrollTop = window.scrollY;
    //     // 向下滑动
    //     if(diff<0 & $scrollTop <= $imgHeight){
    //         $opacity = $scrollTop / $imgHeight + 0.3;
    //         $opacityno= 1- $opacity;
    //         $('.d-back').css("backgroundColor" , 'rgba(255, 255, 255, ' + $opacity + ')');
    //         $('.d-btnback').css("color" , 'rgba(103, 103, 103, ' + $opacity + ')');
    //         $('.d-return').css("color" , 'rgba(103, 103, 103, ' + $opacity + ')');
    //         $('.d-pkTop').css({"color" : 'rgba(103, 103, 103, ' + $opacity + ')',"border-color":'rgba(103, 103, 103, ' + $opacity + ')'});
    //         $('.icon-xiaoxi,.icon-7').css("color" , 'rgba(103, 103, 103, ' + $opacity + ')');
    //     }
    //     // 向上滑动
    //     else if(diff>0 & $scrollTop <= $imgHeight){
    //         if($opacity<=0.3){
    //             $opacity=0
    //         }
    //         $('.d-back').css("backgroundColor" , 'rgba(255, 255, 255, ' + $opacity-0.3 + ')');
    //         $('.d-btnback').css("color" , 'rgba(255, 255, 255, ' +  $opacityno + ')');
    //         $('.d-return').css("color" , 'rgba(255, 255, 255, ' +  $opacityno + ')');
    //         $('.d-pkTop').css({"color" : 'rgba(255, 255, 255, ' +  $opacityno + ')',"border-color":'rgba(255, 255, 255, ' + $opacityno + ')'});
    //         $('.icon-xiaoxi,.icon-7').css("color" , 'rgba(255, 255, 255, ' +  $opacityno + ')');
    //     }
    // });
})