$(function () {

	/*SMOOTH SCROLL TO ANCHOR START*/
	$('.header__menu__item,.mmenu__menu__item').on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		let scrollSpeed = 1500;
		setTimeout(() => {$(this).blur();}, scrollSpeed);
		let scrollTo = $($.attr(this, 'href')).offset().top - $('.header').height()
		$('html, body').animate({
			scrollTop: scrollTo
		}, scrollSpeed);
	});

	/*SMOOTH SCROLL TO ANCHOR END*/

	/*MMENU HANDLER*/
	$('.burger').click(openMmenu);
	$('.mmenu__menu__item,.burger__close').click(closeMmenu)

	function openMmenu() {
		$('.header').fadeOut('slow')
		setTimeout(() => {
			$('.mmenu').slideDown(1000)
		}, 300);
		$('.burger__close').fadeIn('slow')
		setTimeout(() => {
			$('.legicash-page').on('click', closeMmenu)
		}, 10);

	}

	function closeMmenu() {
		$('.mmenu').slideUp('slow')
		$('.burger__close').fadeOut('slow')
		$('.legicash-page').off('click', closeMmenu)
		setTimeout(() => {
			$('.header').fadeIn(800)
		}, 700);

	}

	// /*HIGHLITING NAB ITEMS WHILE SCROLLING*/
	// $(window).scroll(function () {
	// 	let $window_top = $(window).scrollTop();
	// 	let $intro_top = $('#introduction').offset().top
	// 	let $solution_top = $('#solution').offset().top
	// 	let $approach_top = $('#approach').offset().top
	// 	let $team_top = $('#team').offset().top

	// 	let $solution_offset_top = $solution_top - ($solution_top - $intro_top) * 0.3
	// 	let $approach_offset_top = $approach_top - ($approach_top - $solution_top) * 0.3
	// 	let $team_offset_top = $team_top - ($team_top - $approach_top) * 0.3

	// 	if ($window_top >= $intro_top && $window_top < $solution_offset_top) {
	// 		$('.header__menu__item a').removeClass('active')
	// 		$('.header__menu__item a:first').addClass('active')
	// 		// } else if ($window_top >= $galery_offset_top && $window_top < $price_offset_top) {
	// 		// 	$('.header__nav__item a').removeClass('active')
	// 		// 	$('.header__nav__item a:eq( 1 )').addClass('active')
	// 		// } else if ($window_top >= $price_offset_top && $window_top < $reviews_offset_top) {
	// 		// 	$('.header__nav__item a').removeClass('active')
	// 		// 	$('.header__nav__item a:eq( 2 )').addClass('active')
	// 		// } else if ($window_top >= $reviews_offset_top && $window_top < $contacts_ofsset_top) {
	// 		// 	$('.header__nav__item a').removeClass('active')
	// 		// 	$('.header__nav__item a:eq( 3 )').addClass('active')
	// 		// } else if ($window_top >= $contacts_ofsset_top) {
	// 		// 	$('.header__nav__item a').removeClass('active')
	// 		// 	$('.header__nav__item a:eq( 4 )').addClass('active')
	// 	}
	// 	/*HIGHLIGHT NAV ITEMS WHEN SCROLLING END*/
	// });
});