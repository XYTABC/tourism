/*
* @Author: hp
* @Date:   2019-08-31 12:54:27
* @Last Modified by:   hp
* @Last Modified time: 2019-09-11 18:34:16
*/
$(function(){

	$('.dis').slideUp(0);
	$('.txt-box').mouseenter(function() {
		var m=$(this).parent().parent().index();
		$('.dis').eq(m).slideDown(200);
	});
	$('.txt-box').mouseleave(function() {
		$('.dis').slideUp(200);
	});

    $('.huag').mouseover(function(event) {
    	$(this).children('.zszi').css('width', '175px');
    	$(this).children('.zs').css('color', '#fff');
    });
	$('.huag').mouseleave(function(event) {
    	$(this).children('.zs').css('color', '');
    	$(this).children('.zszi').css('width', '0px');
    });
    $('.huag').click(function(event) {
    	$(this).children('.zs').addClass('hse')
    	.parent().siblings().children('.zs').removeClass('hse');
    });

    $('.img02').mouseover(function(event) {
        $(this).children('.zs-sli').css('height', '100%');
    });
    $('.img02').mouseleave(function(event) {
        $(this).children('.zs-sli').css('height', '0');
    });


    $(window).scroll(function(event) {
        var h=$(window).scrollTop();
        var w=$(window).height();
        var ttwo=$('.zhusu02').offset().top;
        if(h>ttwo-w){
            $('.zspre').addClass('prespective');
            $('.wqgk-up').addClass('fadeInUp');
        }
        if(h>10){
            $('.header').css('background-color', '#fff');
            $('.header a,span').css('color', '#606060');
            $('.wrap-left a').css('background-image', 'url("images/logo.png")');
            $('.san-1 i').css('background-color', '#ff9e19');
        }else{
            $('.header').css('background-color', '');
            $('.header a,span').css('color', '');
            $('.wrap-left a').css('background-image', '');
            $('.san-1 i').css('background-color', '');

        }
    });
})