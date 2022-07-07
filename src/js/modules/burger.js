import $ from 'jquery';

$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header, .header__logo, .header__content, .header__burger-cross').toggleClass('active');
		$('body').toggleClass('lock');
	});
})