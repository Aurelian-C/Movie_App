class HeaderView {
  _header = document.querySelector('.header');
  _btnSearchOpenBS = document.querySelector('.search-big-screen__open');
  _btnSearchOpenSS = document.querySelector('.search-small-screen__open');
  _btnSearchCloseBS = document.querySelector('.search-big-screen__close');
  _btnSearchCloseSS = document.querySelector('.search-small-screen__close');
  _searchBtns = document.querySelectorAll('.header__menu-search');
  _searchHeader = document.querySelector('.header-search');

  constructor() {
    // Add a 'wheel' event for the mobile phones
    ['wheel'].forEach(event => {
      window.addEventListener(event, this._toggleHeaderVisibility.bind(this));
    });

    [...this._searchBtns].forEach(btn =>
      btn.addEventListener('click', this._toggleSearchBtnVisibility.bind(this))
    );
  }

  _toggleSearchBtnVisibility() {
    this._btnSearchOpenBS.classList.toggle('hidden');
    this._btnSearchOpenSS.classList.toggle('hidden');
    this._btnSearchCloseBS.classList.toggle('hidden');
    this._btnSearchCloseSS.classList.toggle('hidden');

    if (!this._btnSearchCloseBS.classList.contains('hidden')) {
      this._searchHeader.classList.remove('hidden');
    }

    if (this._btnSearchCloseBS.classList.contains('hidden')) {
      this._searchHeader.classList.add('hidden');
    }
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
