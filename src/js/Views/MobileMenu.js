class MobileMenu {
  _buttonOpen = document.getElementById('btn-menu--open');
  _buttonClose = document.getElementById('btn-menu--close');
  _mobileMenu = document.querySelector('.mobile-menu');
  _mainMenu = document.querySelector('.mobile-menu__main');

  constructor() {
    [this._buttonOpen, this._buttonClose].forEach(btn =>
      btn.addEventListener('click', this._toggleMobileMenuVisibility.bind(this))
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
