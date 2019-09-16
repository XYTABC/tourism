/*
* @Author: hp
* @Date:   2019-09-04 09:09:03
* @Last Modified by:   hp
* @Last Modified time: 2019-09-11 18:56:46
*/
$(function(){
	var tnum=0;
	var timer02;
	function lunbo(){
		timer02=setInterval(function(){
	        tnum++;
	        if(tnum==4){
	        	$('.lunbotu dl dd').eq(0).addClass('chang').siblings('dd').removeClass('chang');
	        }
	        if(tnum>4){
	        	tnum=1;
	        	$('.lunbo').css('left', '0px');
	        }
	        $('.lunbo').animate({left:-100*tnum+'%'},500);
	        $('.lunbotu dl dd').eq(tnum).addClass('chang').siblings('dd').removeClass('chang');
		},2000);
	}
	lunbo();
	$('.lunbotu').mouseover(function(event) {
		clearInterval(timer02);
	});
	$('.lunbotu').mouseleave(function(event) {
		lunbo();
	});
	$('.lunbotu dl dd').click(function(event) {
		// var xi=$(this).index();
		tnum=$(this).index();
		$('.lunbo').animate({left:-100*tnum+'%'},200);
		$(this).addClass('chang').siblings('dd').removeClass('chang');
	});
})
