$(function(){
	$('.full-txt li a').mouseover(function(event) {
		$(this).children('i').addClass('ha');
		$(this).addClass('alist-box');
	});
	$('.full-txt li a').mouseout(function(event) {
		$(this).children('i').removeClass('ha');
		$(this).removeClass('alist-box');
	});
	$('.full-txt li a').click(function(event) {
		$(this).children('i').addClass('haa').parent().parent().siblings().children().children('i').removeClass('haa');
		$(this).addClass('wo').parent().siblings().children('a').removeClass('wo');
	});
})