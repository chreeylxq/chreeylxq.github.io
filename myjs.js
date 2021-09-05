$(function () {
    var numb = 0;

    $('div').eq(0).removeClass('desc')

    $('ol li').click(function (event) {
        // 获取当前li的索引值，该索引值和对应的div一样
        var index = $(this).index();

        // 把点击和滚动联系起来
        numb = $(this).index();

        // section移动
        $('section').animate({ 'top': -index * 100 + '%' });

        // 当前点击的圆圈变色
        $(this).addClass('current');
        $(this).siblings().removeClass('current')

        // 点击时文字转动
        $('section div').eq($(this).index()).removeClass('desc');
        $('section div').eq($(this).index()).siblings().addClass('desc');
    });


    $(document).bind('mousewheel DOMMouseScroll', function (event) { //on也可以 bind监听
        //Chorme
        var wheel = event.originalEvent.wheelDelta;
        var detal = event.originalEvent.detail;


        if (event.originalEvent.wheelDelta) { //判断浏览器IE,谷歌滚轮事件               

            console.log('wheel:' + wheel)
            if (wheel < 0)//当滚轮向下滑时
                numb++;
            else numb--;//当滚轮向上滑时

            if (numb < 0) {
                numb = 0;
            }
            if (numb > 5) {
                numb = 5;
            }

            $('section').stop(true);
            $('section').animate({ 'top': -numb * 100 + '%' });

            // 对应圆圈变色
            $('li').eq(numb).addClass('current');
            $('li').eq(numb).siblings().removeClass('current')

            // 
            $('section div').eq(numb).removeClass('desc');
            $('section div').eq(numb).siblings().addClass('desc');



        } else if (event.originalEvent.detail) {  //Firefox滚轮事件  
            if (detal > 0)  //当滑轮向下滚动时  
                numb++;
            else numb--;//当滚轮向上滑时

            if (numb < 0) {
                numb = 0;
            }
            if (numb > 5) {
                numb = 5;
            }
            console.log('numb:' + numb);
            $('section').animate({ 'top': -numb * 100 + '%' });


            $('li').eq(numb).addClass('current');
            $('li').eq(numb).siblings().removeClass('current')

        }
    });

    //     var scrollFunc = function (e) {
    //         e = e || window.event;
    //         if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
    //             if (e.wheelDelta > 0) { //当滑轮向上滚动时  
    //                 alert('上滚')
    //             }
    //             if (e.wheelDelta < 0) { //当滑轮向下滚动时  
    //                 alert('下滚')
    //             }
    //         } else if (e.detail) {  //Firefox滑轮事件  
    //             if (e.detail > 0) { //当滑轮向下滚动时  
    //                 alert('下滚')
    //             }
    //             if (e.detail < 0) { //当滑轮向上滚动时  
    //                 alert('上滚')
    //             }
    //         }
    //     }
    //     /*IE、Opera注册事件*/
    //     if (document.attachEvent) {
    //         document.attachEvent('onmousewheel', scrollFunc);

    //     }
    //     //Firefox使用addEventListener添加滚轮事件  
    //     if (document.addEventListener) {//firefox  
    //         document.addEventListener('DOMMouseScroll', scrollFunc, false);
    //     }
    //     //Safari与Chrome属于同一类型
    //     window.onmousewheel = document.onmousewheel = scrollFunc;
    //     /*
    //    event.wheelDelta 滚动方向
    //    上：120
    //    下：-120
    //    Firefox：event.detail 滚动方向
    //    上：-3
    //    下:3
    //    */



});