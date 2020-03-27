export default {
  init() {
    $('.header__burger').on(
      "click",
      () => {
        $('.header__burger, .header__menu-wrapper').toggleClass('active');
        $('body').toggleClass('lock');
      }
    );
  }
}