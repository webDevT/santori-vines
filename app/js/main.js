$(function(){

//start mobil menu open-close
$('.menu__btn').click(function(){
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
})
//end mobil-menu open-close

//start sub-menu open-clos
$('.menu__item').click(function(){
	$(this).find('.sub-menu').toggleClass('active');
})
//end sub-menu open-close
});