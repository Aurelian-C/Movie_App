class MobileMenu {
  _button = document.getElementById('btn-mobile-menu');
  _mobileMenu = document.querySelector('.mobile-menu');
  _mainMenu = document.querySelector('.mobile-menu__main');

  constructor() {
    this._button.addEventListener(
      'click',
      this._toggleMobileMenuVisibility.bind(this)
    );

    this._mainMenu.addEventListener('click', function (e) {
      const title = e.target.closest('.mobile-menu__title');
      if (!title) return;
      const extrasContainer = title
        .closest('.mobile-menu__item')
        .querySelector('.mobile-menu__container-extras');
      extrasContainer.classList.toggle('hidden');
    });
  }

  _toggleMobileMenuVisibility() {
    this._mobileMenu.classList.toggle('mobile-active');
  }
}

export default new MobileMenu();
