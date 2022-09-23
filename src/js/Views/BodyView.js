class BodyView {
  constructor() {
    document.body.addEventListener('click', e => {
      // Handle header search visibility
      const searchBtn = e.target.closest('.header__menu-search');
      const searchHeaderHints = document.querySelector('.header-search__hints');
      const searchHeaderContent = document.querySelector(
        '.header-search__content'
      );
      if (
        (!e.target.contains(searchHeaderHints) && !searchBtn) ||
        e.target === document.body
      ) {
        searchHeaderContent.classList.add('hidden');
      }

      // Handle card overlay visibility
      const cardsOverlay = document.querySelectorAll('.card__overlay');
      const btn = e.target.closest('.card__circle');
      if (!btn) {
        cardsOverlay.forEach(overlay => overlay.classList.add('hidden'));
      }
    });
  }
}

export default new BodyView();
