class HeaderView {
  _header = document.querySelector('.header');
  _btnSearchOpenBS = document.querySelector('.search-big-screen__open');
  _btnSearchOpenSS = document.querySelector('.search-small-screen__open');
  _btnSearchCloseBS = document.querySelector('.search-big-screen__close');
  _btnSearchCloseSS = document.querySelector('.search-small-screen__close');
  _searchBtns = document.querySelectorAll('.header__menu-search');
  _searchHeader = document.querySelector('.header-search');
  _searchHeaderContent = document.querySelector('.header-search__content');
  _searchHeaderHints = document.querySelector('.header-search__hints');

  _scrollNumber = 0;

  constructor() {
    // ['wheel'].forEach(event => {
    //   window.addEventListener(event, this._toggleHeaderVisibility.bind(this));
    // });

    window.addEventListener('scroll', () => {
      const scrollYnumber = window.scrollY;
      if (scrollYnumber > this._scrollNumber) {
        this._scrollNumber = scrollYnumber;
        this._header.classList.add('header--scroll-down');
        this._header.classList.remove('header--scroll-up');
      }

      if (scrollYnumber < this._scrollNumber) {
        this._scrollNumber = scrollYnumber;
        this._header.classList.remove('header--scroll-down');
        this._header.classList.add('header--scroll-up');
      }
    });
  }

  addHandlerHints(handler) {
    [...this._searchBtns].forEach(btn =>
      btn.addEventListener('click', () => {
        this._toggleSearchBtnVisibility();
        handler();
      })
    );
  }

  _toggleSearchBtnVisibility() {
    this._btnSearchOpenBS.classList.toggle('hidden');
    this._btnSearchOpenSS.classList.toggle('hidden');
    this._btnSearchCloseBS.classList.toggle('hidden');
    this._btnSearchCloseSS.classList.toggle('hidden');

    if (!this._btnSearchCloseBS.classList.contains('hidden')) {
      this._searchHeader.classList.remove('hidden');
      this._searchHeaderContent.classList.remove('hidden');
    }

    if (this._btnSearchCloseBS.classList.contains('hidden')) {
      this._searchHeader.classList.add('hidden');
    }
  }

  renderHints(hintsArray) {
    const markup = this._generateMarkupHints(hintsArray);
    this._searchHeaderHints.textContent = '';
    this._searchHeaderHints.insertAdjacentHTML('beforeend', markup);
  }

  _generateMarkupHints(hints) {
    const markup = hints
      .map(hint => {
        return `
          <li class="header-search__hint">
            <div class="header-search__hint-container">
              <i
                class="fa-solid fa-magnifying-glass header-search__icon--hint"
              ></i>
              <span class="header-search__hint-name">${hint}</span>
            </div>
          </li>
    `;
      })
      .join('');

    return markup;
  }
}

export default new HeaderView();
