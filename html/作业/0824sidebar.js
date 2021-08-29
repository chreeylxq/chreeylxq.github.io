$(document).ready(function () {
    $('li').mouseover(function (event) {
        $(this).children('span').css('display', 'inline-block');
        $(this).siblings().children('span').css('display', 'none');
    });
});

