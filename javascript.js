jQuery('.drawer__icon').on('click', function(e) {
  e.preventDefault ();
  jQuery('.drawer__icon').toggleClass('is-active');
  jQuery('.header__menu').toggleClass('is-active');
  jQuery('.header__background').toggleClass('is-active');

  return false
}
);

new WOW().init();
