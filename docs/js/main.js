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

//start slider init
$('.slider').slick({
  slidesToShow: 1,
  dots: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
})
//end slider intit

//start close modal
$('.close-modal').click(function(){
  $('.modal-window').fadeOut();
})
//end close modal

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".modal-content"); 
    var div2 = $(".modal-window");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.fadeOut();
    }
  });
});

$('.our-menu').click(function(){
  $('.modal-window').fadeIn();
})

$('.upcoming-ev').click(function(){
  $('.upcoming-event-content').slideToggle();
  $('.plus').toggleClass('active');
})
});