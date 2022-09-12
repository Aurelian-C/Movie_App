class HeaderView {
  _header = document.querySelector('.header');

  constructor() {
    window.addEventListener('wheel', e => {
      console.log(e.wheelDelta);
      if (e.wheelDelta < 0) {
        this._header.classList.add('header--scroll-down');
        this._header.classList.remove('header--scroll-up');
      }

      if (e.wheelDelta > 0) {
        this._header.classList.remove('header--scroll-down');
        this._header.classList.add('header--scroll-up');
      }
    });
  }
}

export default new HeaderView();
