$(function() {
$('.header__menu__item').on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	let scrollSpeed = 1500;
	// setTimeout(() => {$(this).blur();}, scrollSpeed);
	let scrollTo = $($.attr(this, 'href')).offset().top - $('.header').height()
	$('html, body').animate({
		scrollTop: scrollTo
	}, scrollSpeed);
});

});
