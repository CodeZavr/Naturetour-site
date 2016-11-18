$(function() {

	// Footer down!

	var height_footer = $('footer').height();	
	$('.main').css({'padding-bottom':height_footer});

	// jQuery Form Styler

	$('.s-item__select').styler();

	// Owl Carousel

	$('.slider').owlCarousel({
    items:1,
    loop:true,
    nav: false,
    dots: true
  });

  // Owl Carousel Pagination

  $('.owl-dot span').each(function(index){
  	$(this).text(index+1);
  });

  // Tab changer
  $('.tabs li a').click(function(){
  	$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
  	$(this).parent().siblings().removeClass('active');
  	var id = $(this).attr('href');
  	$(id).removeClass('hide');
  	$(this).parent().addClass('active');
  	return false;
  });

  // Mob menu
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
  	var toggle = toggles[i];
  	toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
  	toggle.addEventListener( "click", function(e) {
  		e.preventDefault();
  		(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
  		$(".main-menu:eq(0)").slideToggle();
  	});
  }

});
