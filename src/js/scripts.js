$(document).ready(function() {
	$('.js-header-menu-link-list').on("click", openList);
    $('.js-header-menu-sublist-link').on("click", changeCurrency);
    $('.js-header-menu-sublist-lang').on("click", changeLang);

	$('#closeMenu').on("click", closeMobileMenu);
	$('#openMenu').on("click", openMobileMenu);
	$('.video-block:nth-child(-n+3)').css('display', 'flex');
	$('.playlist__button').on("click", getAllList);
});

function openList() {
	event.preventDefault();
	$(this).next('.header__menu-sublist').slideToggle();
}

function changeCurrency() {
    $('.js-header-menu-link-currency').html($(this).data('currency'));
}

function changeLang() {
    $('.js-header-menu-link-lang').html($(this).data('lang'));
}

function closeSearch() {
	$(".js-header-menu-sublist-link").addClass('screen_none');
}

function openMobileMenu() {
	$('#headerMobileMenu').removeClass('mobile-list_hiden');
	$("#headerMobileMenu").css('animation', 'blick 0.8s  ease-in-out');
}
function closeMobileMenu() {
	$('#headerMobileMenu').addClass('mobile-list_hiden');
}
function getAllList() {
	console.log($(this.closest('.playlist')).children('.video-wrapper').children('.video-block'));
	$(this.closest('.playlist')).children('.video-wrapper').children('.video-block').css({'display': 'flex', 'animation': 'blick 1s  ease-in-out'});
	$(this).prop( "disabled", true ).css('opacity','0.5');
}
