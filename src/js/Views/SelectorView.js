class SelectorView {
  _data;

  addHandlerSelect(root, handler) {
    const element = root.querySelector('.selector__container');
    element.addEventListener('click', e => {
      // Make container visible
      const itemsContainer = e.target.closest('.selector__items');
      itemsContainer.classList.add('active');

      // Select clicked item that NOT have .selected class
      const item = e.target.closest('.selector__item:not(.selected)');
      if (!item) return;

      // Remove 'selected' class
      const parentEl = item.closest('.selector__container');
      const childrensEl = parentEl.querySelectorAll('.selector__item');

      childrensEl.forEach(childEl => {
        childEl.classList.remove('selected');
      });

      // Add 'selected' class to clicked item
      item.classList.add('selected');

      // Close the container by hidding
      itemsContainer.classList.remove('active');

      // Get item's mediaType and pass to handler function
      const { mediaType } = item.dataset;
      handler(mediaType);
    });
  }

  render(root, data) {
    this._data = data;
    const markup = this._generateMarkup(this._data);
    root.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup(data) {
    return `
      <div class="selector">
        <div class="selector__container">
          <h3 class="selector__description">${data.title}</h3>
            <div class="selector__wrapper">
              <ul class="selector__items">
                ${data.items
                  .map((item, i) => {
                    const data = { item, firstItem: i ? '' : true };
                    return this._generateMarkupItems(data);
                  })
                  .join('')}
              </ul>
          </div>
        </div>
      </div>
    `;
  }

  _generateMarkupItems({ item, firstItem }) {
    const mediaType = item.toLowerCase();
    const selected = firstItem ? 'selected' : '';

    return `
      <li class="selector__item ${selected}" data-media-type="${mediaType}">
        <div class="selector__bg"></div>
        <h4 class="selector__title">${item}</h4>
      </li>
    `;
  }
}

export default new SelectorView();
