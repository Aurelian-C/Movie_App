class HeaderView {
  _header = document.querySelector('.header');

  constructor() {
    // Add a 'wheel' event for the mobile phones
    ['wheel'].forEach(event => {
      window.addEventListener(event, this._toggleHeaderVisibility.bind(this));
    });
  }

  _toggleHeaderVisibility(e) {
    if (e.wheelDelta < 0) {
      this._header.classList.add('header--scroll-down');
      this._header.classList.remove('header--scroll-up');
    }

    if (e.wheelDelta > 0) {
      this._header.classList.remove('header--scroll-down');
      this._header.classList.add('header--scroll-up');
    }
  }
}

export default new HeaderView();
