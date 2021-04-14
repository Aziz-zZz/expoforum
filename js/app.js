$(function(){

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	scrolPos = $(window).scrollTop();

	$(window).on("scroll load resize", function(){
		scrolPos = $(this).scrollTop();

		if(scrolPos > introH){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	});


	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		elementId = $(this).data('scroll');
		elementOffset = $(elementId).offset().top;

	menu.removeClass("show");

		$("body , html").animate({
			scrollTop:elementOffset
		},1000);
	});

	let menu = $ ("#menu");
	let navToggle = $ ("#navToggle");

	navToggle.on("click", function(event){
		event.preventDefault();

		menu.toggleClass("show");
	});
});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation

});