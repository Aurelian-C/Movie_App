class DropdownMenu {
  _buttonOpen = document.getElementById('btn-dropdown--open');
  _buttonClose = document.getElementById('btn-dropdown--close');
  _dropdownMenu = document.querySelector('.dropdown-menu');
  _dropdownMain = document.querySelector('.dropdown-menu__main');

  constructor() {
    [this._buttonOpen, this._buttonClose].forEach(btn =>
      btn.addEventListener('click', this._toggleMobileMenuVisibility.bind(this))
    );

    this._dropdownMain.addEventListener('click', function (e) {
      const title = e.target.closest('.dropdown-menu__title');
      if (!title) return;
      const extrasContainer = title
        .closest('.dropdown-menu__item')
        .querySelector('.dropdown-menu__container-extras');
      extrasContainer.classList.toggle('hidden');
    });
  }

  _toggleMobileMenuVisibility() {
    this._dropdownMenu.classList.toggle('mobile-active');
  }
}

export default new DropdownMenu();
