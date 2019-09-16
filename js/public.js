/*
* @Author: hp
* @Date:   2019-08-28 09:59:45
* @Last Modified by:   hp
* @Last Modified time: 2019-09-16 08:45:42
*/
$(function(){
    var num=0;
    var timer;
    function go(){
	    timer=setInterval(function(){
	    	num++;
	    	if(num>1){num=0}
	    	$('.banner ul li').eq(num).fadeIn().siblings('li').fadeOut();
	        $('.slide-nav i').eq(num).addClass('dian-bg').siblings('i').removeClass('dian-bg');
	    },5000);

    }
    go();
    $('.navi1').click(function(event) {
        num++;
            if(num>1){num=0}
            $('.banner ul li').eq(num).fadeIn().siblings('li').fadeOut();
            $(this).addClass('dian-bg').siblings('i').removeClass('dian-bg');
    });
    $('.navi2').click(function(event) {
        num--;
            if(num<0){num=1}
            $('.banner ul li').eq(num).fadeIn().siblings('li').fadeOut();
            $(this).addClass('dian-bg').siblings('i').removeClass('dian-bg');
    });
    



    $('.nav-ul2').slideUp(0);
    $('.nav-ul1 li').mouseover(function(event) {
    	$(this).children('ul').slideDown(200);
    });
    $('.nav-ul1 li').mouseleave(function(event) {
    	$(this).children('ul').slideUp(200);
    });



    $('.san-1').click(function(event) {
    	$('.hei').fadeIn(500);
    });
    $('.close_x').click(function(event) {
    	$('.hei').fadeOut(500);
    });



    
    $('.san-2').click(function(event) {
        $('.aside').css('left', '0px');
    });
    $('.san-2').click(function(event){
		event.stopPropagation();
    });
    $('body').click(function (e) {
        $(".aside").css('left', '-300px');
    });
    $('.aside').click(function(event){
		event.stopPropagation();
    });



    $('.parent').click(function(event) {
    	var n=$(this).parent().index();
    	// event.preventDefault();  阻值冒泡
    	console.log(n)
    	$('.tou').css('left', '-300px');
    	$('.child-ul').eq(n).css('left', '0px');
    });
    $('.child-ul li:nth-of-type(1)').click(function(event) {
    	/* Act on the event */
    	$('.tou').css('left', '0px');
    	$(this).parents('.child-ul').css('left', '300px');
    });
})