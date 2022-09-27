class HeaderView {
  _header = document.querySelector('.header');
  _headerContainer = document.querySelector('.header__container');
  _btnSearchOpen = document.querySelector('.icon-search--open');
  _btnSearchClose = document.querySelector('.icon-search--close');
  _searchBtns = document.querySelectorAll('.header__menu-search');
  _searchHeader = document.querySelector('.header-search');
  _searchHeaderContent = document.querySelector('.header-search__content');
  _searchHeaderHints = document.querySelector('.header-search__hints');
  _scrollNumber = 0;

  constructor() {
    window.addEventListener('scroll', () => {
      // Hide card widget on scroll
      const widget = document.querySelector('.widget');
      widget.classList.add('hidden');
      const cardsOverlay = document.querySelectorAll('.card__overlay');
      [...cardsOverlay].forEach(cardOverlay =>
        cardOverlay.classList.add('hidden')
      );

      const scrollYnumber = window.scrollY;
      const headerContainer = this._headerContainer.getBoundingClientRect();

      // Scroll down
      if (scrollYnumber > this._scrollNumber) {
        this._scrollNumber = scrollYnumber;
        this._header.style.top = `-${headerContainer.height}px`;
      }

      // Scroll Up
      if (scrollYnumber < this._scrollNumber) {
        this._scrollNumber = scrollYnumber;
        this._header.style.top = `0px`;
      }

      this._searchHeaderContent.classList.add('hidden');
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
    this._btnSearchOpen.classList.toggle('hidden');
    this._btnSearchClose.classList.toggle('hidden');

    if (!this._btnSearchClose.classList.contains('hidden')) {
      this._searchHeader.classList.remove('hidden');
      this._searchHeaderContent.classList.remove('hidden');
    }

    if (this._btnSearchClose.classList.contains('hidden')) {
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
