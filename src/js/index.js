$(window).scroll(function (){
   var scroll = $(window).scrollTop();
    $('.left').css({
        width: (100 + scroll/5) + "%"
    })
    $('.right').css({
        width: (100 + scroll/5) + "%",
        left: scroll/50 + "%"
    })
    $('.text').css({
        top: scroll/20 + "%"
    })
});