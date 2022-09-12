class MobileMenu {
  _button = document.getElementById('btn-mobile-menu');
  _mobileMenu = document.querySelector('.mobile-menu');

  constructor() {
    this._button.addEventListener(
      'click',
      this._toggleMobileMenuVisibility.bind(this)
    );
  }

  _toggleMobileMenuVisibility() {
    this._mobileMenu.classList.toggle('mobile-active');
  }
}

export default new MobileMenu();
