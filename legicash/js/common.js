$(function() {
$('.header__menu__item').on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();
	let scrollSpeed = 1500;
	setTimeout(() => {$(this).blur();}, scrollSpeed);

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, scrollSpeed);
});

});
